import { useCallback, useEffect, useState } from 'react';
import Input from '../UI/Input';
import { gql } from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';
import { GardenerProfile } from './GardenerProfileCard';
import FilterIcon from '../Icons/FilterIcon';
import Checkbox from '../UI/Checkbox';
import styled from 'styled-components';

type Props = {
    setFilteredGardeners: (gardeners: GardenerProfile[]) => void;
    setIsLoading: (value: boolean) => void;
};

enum ServiceName {
    MOWING = 'MOWING',
    WEEDCONTROL = 'WEEDCONTROL',
    DESIGN = 'DESIGN',
    PESTCONTROL = 'PESTCONTROL',
    MULCHING = 'MULCHING',
    TRIMMING = 'TRIMMING',
    FERTILIZING = 'FERTILIZING',
    LEAFREMOVAL = 'LEAFREMOVAL',
    MAINTENANCE = 'MAINTENANCE',
    LANDSCAPING = 'LANDSCAPING',
    PLANTING = 'PLANTING',
    PRUNING = 'PRUNING',
}

const availableServices: string[] = Object.values(ServiceName);

const StyledSearchBoxContainer = styled.div`
    input {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: ${({ theme }) => theme.colors.background};

        &::placeholder {
            color: ${({ theme }) => theme.colors.dark};
        }
    }

    .filter-icon-wrapper {
        cursor: pointer;
        border: 2px solid ${({ theme }) => theme.colors.background};
        border-radius: 50%;
        padding: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
`;

const GardenerSearchBox = ({ setFilteredGardeners, setIsLoading }: Props) => {
    const [searchPhrase, setSearchPhrase] = useState<string>('');
    const [filterIsOpen, setFilterIsOpen] = useState(false);

    const GET_GARDENERS = gql`
        query SearchGardeners($searchQuery: [String!]) {
            searchGardeners(searchQuery: $searchQuery) {
                id
                location {
                    address
                    latitude
                    longitude
                }
                name
                surname
                profilePic
                points
                services {
                    name
                }
            }
        }
    `;

    const [getGardeners, { data, loading }] = useLazyQuery(GET_GARDENERS);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        if (
            (searchPhrase && searchPhrase.trim() !== '') ||
            selectedServices.length > 0
        ) {
            setIsLoading(true);
            const searchQuery =
                selectedServices.length > 0 ? selectedServices : [searchPhrase];
            getGardeners({ variables: { searchQuery } });
            if (data) {
                setFilteredGardeners(data.searchGardeners);
                // close filtering box
                setTimeout(() => setFilterIsOpen(false), 500);
                setIsLoading(false);
                setNoResults(false);

                if (data.searchGardeners.length <= 0) {
                    setNoResults(true);
                }
            }
        } else {
            // If searchPhrase is empty, clear the filtered gardeners
            setFilteredGardeners([]);
            setIsLoading(false);
        }
    }, [
        loading,
        searchPhrase,
        setIsLoading,
        getGardeners,
        data,
        setFilteredGardeners,
        JSON.stringify(selectedServices),
    ]);

    const capitalizeWords = (input: string) => {
        const words = input.split(' ');
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');
    };

    const handleCheckboxChange = (option: string) => {
        const isSelected = selectedServices.includes(option);

        if (isSelected) {
            setSelectedServices((prevSelectedServices) =>
                prevSelectedServices.filter((service) => service !== option),
            );
        } else {
            setSelectedServices((prevSelectedServices) => [
                ...prevSelectedServices,
                option,
            ]);
        }
        setSearchPhrase('');
    };

    return (
        <StyledSearchBoxContainer>
            <div className='relative flex items-center gap-3 justify-center'>
                <Input
                    value={searchPhrase}
                    onChange={(event) => {
                        setSelectedServices([]);
                        setSearchPhrase(capitalizeWords(event.target.value));
                    }}
                    type='text'
                    placeholder='search by name or address'
                />
                <span
                    className='filter-icon-wrapper'
                    onClick={() => setFilterIsOpen((prev) => !prev)}
                    title='Filter by service'
                >
                    <FilterIcon width={22} height={22} />
                </span>
            </div>
            {filterIsOpen && (
                <div className='p-5'>
                    <span>Filter by service</span>
                    {availableServices.map((option, index) => (
                        <Checkbox
                            key={index}
                            name='selectedServices'
                            value={option}
                            checked={selectedServices?.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            label={option.toLocaleLowerCase()}
                        />
                    ))}
                </div>
            )}
            {noResults ? (
                <span className='w-[250px] flex justify-center pt-2'>
                    No results found
                </span>
            ) : null}
        </StyledSearchBoxContainer>
    );
};

export default GardenerSearchBox;
