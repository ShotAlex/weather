import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMap = (props) => {

    const mapStyles = {
        width: "600px",
        height: "400px"
    };

    return (
        <Map
            google={props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
            lat: 53.944635229524536,
            lng: 27.68470231591900
        }}>
            <Marker
                title={'Main office of freelancers :)'}
                name={'Shot Alex'}
                position={{
                lat: 53.94404509,
                lng: 27.68743515
            }}/>
        </Map>
    );
}

export default GoogleApiWrapper({apiKey: ('AIzaSyDc68RX_ZLGx7R2W2rFO9QMYo1V5bavgXQ')})(GoogleMap)