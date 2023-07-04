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

type Props = {
    gardeners: GardenerProfile[];
};

const StyledImage = styled(Image)`
    border-radius: 50%;
`;

const Map = ({ gardeners }: Props) => {
    const [selectedMarker, setSelectedGardener] = useState<GardenerProfile>();

    const mapContainerStyle = {
        height: '400px',
        width: '100%',
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
            {gardeners.map((gardener) => (
                <Marker
                    key={gardener.id}
                    position={{
                        lat: gardener.latitude,
                        lng: gardener.longitude,
                    }}
                    label={gardener.name}
                    onClick={() => setSelectedGardener(gardener)}
                />
            ))}
            {selectedMarker && (
                <InfoWindow
                    position={{
                        lat: selectedMarker.latitude,
                        lng: selectedMarker.longitude,
                    }}
                    onCloseClick={() => setSelectedGardener(undefined)}
                >
                    <div className='flex p-5'>
                        <div className='w-[30px] h-[30px]'>
                            <StyledImage
                                src={selectedMarker.profilePic}
                                alt='gardener-profile-picture'
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h5>{selectedMarker.name}</h5>
                            <StarRating rating={selectedMarker.points} />
                        </div>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

export default Map;
