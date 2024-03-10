import './style.css'
import { useState } from "react";
import {
    APIProvider,
    InfoWindow,
    Map,
    AdvancedMarker,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

const MapView = () => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infowindowShown, setInfowindowShown] = useState(false);

    const toggleInfoWindow = () =>
        setInfowindowShown(previousState => !previousState);

    const closeInfoWindow = () => setInfowindowShown(false);

    return (
        <APIProvider apiKey={'AIzaSyC_dT6yg1hbjr80oAxTphcIVbv_X5xe2BE'}>
            <div id={'mapContainerStyle'}>
            <Map zoom={16} center={{lat: 12.9829292, lng: 80.1919409}} mapId={'sd'} disableDefaultUI={true}>
                <AdvancedMarker
                    ref={markerRef}
                    position={{lat: 12.9829292, lng: 80.1919409}}
                    onClick={toggleInfoWindow}
                />

                {infowindowShown && (
                    <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
                        <h6 className={'pb-0'}>Prima Skin and Aesthetics Clinic</h6>
                        <p className={'pb-0'}>2nd floor, Main Rd, Nanganallur, Chennai, Tamil Nadu 600061</p>
                    </InfoWindow>
                )}
            </Map>
            </div>
        </APIProvider>
    );
};

export default MapView;