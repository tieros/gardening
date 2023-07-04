import { useEffect, useState } from 'react';
import Input from '../UI/Input';
import { gql } from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';
import { GardenerProfile } from './GardenerProfileCard';

type Props = {
    setFilteredGardeners: (gardeners: GardenerProfile[]) => void;
    setIsLoading: (value: boolean) => void;
};

const GardenerSearchBox = ({ setFilteredGardeners, setIsLoading }: Props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const GET_GARDENERS = gql`
        query SearchGardeners($searchQuery: String) {
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

    useEffect(() => {
        getGardeners({ variables: { searchQuery: searchPhrase } });
        setIsLoading(loading);
        if (!loading && data) {
            setFilteredGardeners(data.searchGardeners);
        }
        setIsLoading(loading);
    }, [
        data,
        getGardeners,
        loading,
        searchPhrase,
        setFilteredGardeners,
        setIsLoading,
    ]);

    const capitalizeWords = (input: string) => {
        const words = input.split(' ');
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');
    };

    return (
        <Input
            value={searchPhrase}
            onChange={(event) =>
                setSearchPhrase(capitalizeWords(event.target.value))
            }
        />
    );
};

export default GardenerSearchBox;
