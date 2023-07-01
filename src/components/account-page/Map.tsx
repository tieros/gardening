import React from 'react';
import {
    GoogleMap,
    LoadScript,
    Marker,
    useLoadScript,
} from '@react-google-maps/api';
import LocationTagIcon from '../Icons/LocationTagIcon';

const MapContainer = () => {
    const gardenerLocations = [
        { id: 1, name: 'Gardener 1', latitude: 51.5283, longitude: -0.0648 },
        { id: 2, name: 'Gardener 2', latitude: 51.5145, longitude: -0.1416 },
        { id: 3, name: 'Gardener 3', latitude: 51.5077, longitude: -0.1226 },
        { id: 4, name: 'Gardener 4', latitude: 51.5007, longitude: -0.1246 },
    ];

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
            {gardenerLocations.map((gardener) => (
                <Marker
                    key={gardener.id}
                    position={{
                        lat: gardener.latitude,
                        lng: gardener.longitude,
                    }}
                    label={gardener.name}
                    icon={{
                        url: require('../Icons/LocationTagIcon').default,
                    }}
                />
            ))}
        </GoogleMap>
    );
};

const Map = () => {
    return (
        <div>
            <h1>My Google Maps App</h1>

            <MapContainer />
        </div>
    );
};

export default Map;
