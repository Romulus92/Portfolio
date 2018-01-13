/* const map = require('./common/map.js');
const $ = require('jquery');

map(); */

function initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 54.755494, lng: 55.993119 },
        zoom: 14,
        disableDefaultUI: true,
        styles: [{
                'featureType': 'administrative',
                'elementType': 'labels.text.fill',
                'stylers': [{ 'color': '#444444' }],
            },
            {
                'featureType': 'landscape',
                'elementType': 'all',
                'stylers': [{ 'color': '#f2f2f2' }],
            },
            {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': [{ 'visibility': 'off' }],
            },
            {
                'featureType': 'road',
                'elementType': 'all',
                'stylers': [{ 'saturation': -100 }, { 'lightness': 45 }],
            },
            {
                'featureType': 'road.highway',
                'elementType': 'all',
                'stylers': [{ 'visibility': 'simplified' }],
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry.fill',
                'stylers': [{ 'color': '#d6d6d6' }],
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'labels.icon',
                'stylers': [{ 'visibility': 'off' }],
            },
            {
                'featureType': 'road.local',
                'elementType': 'geometry.fill',
                'stylers': [{ 'color': '#e6e6e6' }],
            },
            {
                'featureType': 'transit',
                'elementType': 'all',
                'stylers': [{ 'visibility': 'off' }],
            },
            {
                'featureType': 'water',
                'elementType': 'all',
                'stylers': [{ 'color': '#61dac9' }, { 'visibility': 'on' }],
            },
        ],
    });
};