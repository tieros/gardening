import React, { useState } from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from '@react-google-maps/api';
import Image from 'next/image';
import StarRating from '../UI/StarRating';
import styled from 'styled-components';
import { GardenerProfile } from './GardenerProfileCard';
import LocationTagIcon from '../Icons/LocationTagIcon';

type Props = {
    gardeners: GardenerProfile[];
};

const StyledImage = styled(Image)`
    border-radius: 50%;
`;

const Map = ({ gardeners }: Props) => {
    const [selectedGardener, setSelectedGardener] = useState<GardenerProfile>();

    const mapContainerStyle = {
        height: '550px',
        width: '100%',
        borderRadius: '15px',
    };

    const center = {
        lat: 51.5283,
        lng: -0.0648,
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    if (loadError) {
        return <div>Error loading Google Maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading Google Maps...</div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
        >
            {gardeners?.map((gardener) => (
                <Marker
                    key={gardener.id}
                    position={{
                        lat: Number(gardener.location.latitude),
                        lng: Number(gardener.location.longitude),
                    }}
                    label={gardener.name}
                    onClick={() => setSelectedGardener(gardener)}
                />
            ))}
            {selectedGardener && (
                <InfoWindow
                    position={{
                        lat: Number(selectedGardener.location.latitude),
                        lng: Number(selectedGardener.location.longitude),
                    }}
                    onCloseClick={() => setSelectedGardener(undefined)}
                >
                    <div className='flex gap-4 items-center w-full p-5'>
                        <StyledImage
                            src={selectedGardener.profilePic}
                            alt='gardener-profile-picture'
                            width={30}
                            height={30}
                        />

                        <div className='flex justify-between min-w-[226px] items-baseline w-full'>
                            <div className='flex flex-col'>
                                <h6 className='text-dark font-semibold'>
                                    {selectedGardener.name}
                                </h6>
                                <StarRating
                                    rating={selectedGardener.points}
                                    readOnly={true}
                                />
                            </div>
                            <div className='inline-flex gap-[5px]'>
                                <LocationTagIcon width={16} height={23} />{' '}
                                {selectedGardener.location.address}
                            </div>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

export default Map;
