import styled from 'styled-components';
import Button from '../UI/Button';
import Image from 'next/image';
import StarRating from '../UI/StarRating';
import Tag from '../UI/Tag';
import LocationTagIcon from '../Icons/LocationTagIcon';
import { useState } from 'react';
import BookingModal from './BookingModal';

export type GardenerProfile = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    profilePic: string;
    points: number;
    address: string;
    services: string[];
    info?: string;
};

type Props = {
    gardener: GardenerProfile;
};

const StyledImage = styled(Image)`
    border-radius: 50%;
`;

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 30px;
    gap: 20px;
    border-radius: 15px;
    background: #fffffc;
    box-shadow: ${({ theme }) => theme.boxShadows.profileCard};
`;

const GardenerProfileCard = ({ gardener }: Props) => {
    const [bookingIsOpen, setBookingIsOpen] = useState(false);
    return (
        <StyledCardContainer>
            <div className='flex gap-4 items-center w-full'>
                <StyledImage
                    src={gardener.profilePic}
                    alt='gardener-profile-picture'
                    width={30}
                    height={30}
                />

                <div className='flex justify-between min-w-[226px] items-baseline w-full'>
                    <div className='flex flex-col'>
                        <h6 className='text-dark font-semibold'>
                            {gardener.name}
                        </h6>
                        <StarRating rating={4.4} readOnly={true} />
                    </div>
                    <div className='inline-flex gap-[5px]'>
                        <LocationTagIcon width={16} height={23} />
                        {gardener.address}
                    </div>
                </div>
            </div>

            <div className='text-lightText'>{gardener.info}</div>

            <div>
                {gardener.services.map((service, index) => (
                    <Tag
                        label={`#${service.toLowerCase()}`}
                        key={index}
                        size='small'
                    />
                ))}
            </div>
            <Button mode='secondary' onClick={() => setBookingIsOpen(true)}>
                Book Appointment
            </Button>
            {bookingIsOpen && (
                <BookingModal
                    onClose={setBookingIsOpen}
                    availableServices={gardener.services}
                />
            )}
        </StyledCardContainer>
    );
};
export default GardenerProfileCard;
