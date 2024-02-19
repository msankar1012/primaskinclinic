import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './style.css'
export const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
    const center = useMemo(() => ({ lat: 12.9830445, lng: 80.1920726 }), []);

    return (
        <div className="map-container">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={17}
                />
            )}
        </div>
    )
}
