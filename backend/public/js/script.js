const socket = io();

// Initialize the map and set the default view
const map = L.map("map").setView([0, 0], 10);

// Add the OpenStreetMap tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "OpenStreetMap"
}).addTo(map);

// Check if the browser supports geolocation
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            // Emit the location to the server
            socket.emit("send-location", { latitude, longitude });

            // Smoothly move map view to user's current location
            map.panTo([latitude, longitude]);
        },
        (error) => {
            console.error("Geolocation error:", error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

// Object to store markers for users
const markers = {};

// Receive location updates from server and update markers on the map
socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    // Check if the marker for this user already exists
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Remove marker when a user disconnects
socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
