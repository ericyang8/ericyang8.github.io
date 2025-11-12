// Create map and center on Singapore
var map = L.map('map').setView([1.3521, 103.8198], 11);

// Add the OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a simple marker (from your original code)
var marker1 = L.marker([1.3521, 103.8198]).addTo(map);
marker1.bindPopup("<b>Hello Singapore!</b><br>I am a popup.");


// Include the GeoJson file -> include districts on the map
fetch('region_map.geojson')
    .then(function(response) {
        return response.json(); // Convert the response to JSON
    })
    .then(function(data) {
        // 'data' now contains your GeoJSON object
        // Add the GeoJSON layer to the map
        L.geoJson(data).addTo(map);
    })
    .catch(function(error) {
        // Log any errors to the console
        console.error('Error loading the GeoJSON file:', error);
    });