import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);
    const [loading, setLoading] = useState(true); // Loading state


    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         const { latitude, longitude } = position.coords;
    //         setCurrentPosition({
    //             lat: latitude,
    //             lng: longitude
    //         });
    //     });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
                setLoading(false); // Location fetched
            },
            (error) => {
                console.error('Error fetching location:', error);
                setLoading(false); // Stop loading even if there's an error
            }
        );

        // const watchId = navigator.geolocation.watchPosition((position) => {
        //     const { latitude, longitude } = position.coords;
        //     setCurrentPosition({
        //         lat: latitude,
        //         lng: longitude
        //     });
        // });

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            },
            (error) => {
                console.error('Error watching location:', error);
            }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    return (

        <div style={{ width: '100%', height: '100%' }}>
        {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <p>Loading your location...</p>
            </div>
        ) : (
             <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
             <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
             >
                <Marker position={currentPosition} />
            </GoogleMap>
        </LoadScript>
    )}
    </div>
    )
}

export default LiveTracking