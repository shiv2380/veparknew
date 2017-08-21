import { Component } from '@angular/core';

import { GoogleMapDirective } from '../../../src/app/directives/google-map.directive';
import { GoogleMapMarkerDirective } from '../../../src/app/directives/google-map-marker.directive';

import { MapsService } from '../../../src/app/services/maps.service';
import { GeolocationService } from '../../../src/app/services/geolocation.service';
import { GeocodingService } from '../../../src/app/services/geocoding.service';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    
    public address1: Object;


    center: google.maps.LatLng;

    // MapOptions object specification.

    // The initial map zoom level. Required.
    zoom: number;

    disableDefaultUI: boolean;
    disableDoubleClickZoom: boolean;
    mapTypeId: google.maps.MapTypeId;
    maxZoom: number;
    minZoom: number;
    styles: Array<google.maps.MapTypeStyle>;

    // Marker position. Required.
    position: google.maps.LatLng;

    // Marker title.
    title: string;

    // Info window.
    content: string;

    // Address to be searched.
    address: string;

    // Warning flag & message.
    warning: boolean;
    message: string;

    constructor(public maps: MapsService, private geolocation: GeolocationService, private geocoding: GeocodingService){
        this.center = new google.maps.LatLng(41.910943, 12.476358);
        this.zoom = 4;

        // Other options.
        
        

        this.disableDefaultUI = false;
        this.disableDoubleClickZoom = false;
        this.mapTypeId = google.maps.MapTypeId.ROADMAP;
        this.maxZoom = 20;
        this.minZoom = 4;
        // Styled Maps: https://developers.google.com/maps/documentation/javascript/styling
        // You can use the Styled Maps Wizard: http://googlemaps.github.io/js-samples/styledmaps/wizard/index.html 
        this.styles = [
            {
                featureType: 'landscape',
                "elementType": "labels",
                stylers: [
                    { color: '#ffffff' }
                ]
            }
        ];

        // Initially the marker isn't set.

        this.address = "";


        this.warning = false;
        this.message = "";

        this.getCurrentPosition()
    }

    getAddress(place: Object) {
        this.address1 = place['formatted_address'];
        var location = place['geometry']['location'];
        var lat = location.lat();
        var lng = location.lng();
        console.log("Address Object", place);
    }

    getCurrentPosition() {
        this.warning = false;
        this.message = "";

        if (navigator.geolocation) {
            this.geolocation.getCurrentPosition().forEach(
                (position: Position) => {
                    if (this.center.lat() != position.coords.latitude && this.center.lng() != position.coords.longitude) {
                        // New center object: triggers OnChanges.
                        this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        this.zoom = 11;
                        // Translates the location into address.
                        this.geocoding.geocode(this.center).forEach(
                            (results: google.maps.GeocoderResult[]) => {
                                this.setMarker(this.center, "your locality", results[0].formatted_address);
                            }
                        ).then(() => console.log('Geocoding service: completed.'));
                    }
                }
            ).then(() => console.log('Geolocation service: completed.')).catch(
                (error: PositionError) => {
                    if (error.code > 0) {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                this.message = 'permission denied';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                this.message = 'position unavailable';
                                break;
                            case error.TIMEOUT:
                                this.message = 'position timeout';
                                break;
                        }
                        this.warning = true;
                    }
                });
        } else {
            this.message = "browser doesn't support geolocation";
            this.warning = true;
        }
    }

    search(address: string) {
        if (address != "") {
            this.warning = false;
            this.message = "";
            // Converts the address into geographic coordinates.
            this.geocoding.codeAddress(address).forEach(
                (results: google.maps.GeocoderResult[]) => {
                    if (!this.center.equals(results[0].geometry.location)) {
                        // New center object: triggers OnChanges.                       
                        this.center = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                        this.zoom = 11;

                        this.setMarker(this.center, "search result", results[0].formatted_address);
                    }
                }
            ).then(
                () => {
                    this.address = "";
                    console.log('Geocoding service: completed.');
                }).catch(
                (status: google.maps.GeocoderStatus) => {
                    if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                        this.message = "zero results";
                        this.warning = true;
                    }
                });
        }
    }

    // Sets the marker & the info window.
    setMarker(latLng: google.maps.LatLng, title: string, content: string) {
        this.maps.deleteMarkers();
        // Sets the marker.
        this.position = latLng;
        this.title = title;
        // Sets the info window.
        this.content = content;
    }
}
