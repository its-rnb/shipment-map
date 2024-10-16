  // Coordinates for the shipment journey
  const start = { lat: 12.9715987, lng: 77.594566 }; // Benngaluru, Karnataka, India
  const current = { lat: -25.274398, lng: 133.775136 }; // Finke, Australia
  const end = { lat: 40.712776, lng: -74.005974 }; // NY, USA

  // Initialize and add map
  function initMap() {
    // Center the map on the current location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: current,
    });

    // Add markers for start, current, and end points
    // "google.maps.marker.AdvancedMarkerElement" can be used since "google.maps.Marker" is depricated
    const startMarker = new google.maps.Marker({
      position: start,
      map: map,
      label: "Start",
    });

    const currentMarker = new google.maps.Marker({
      position: current,
      map: map,
      label: "Current",
    });

    const endMarker = new google.maps.Marker({
      position: end,
      map: map,
      label: "End",
    });

    // Create polyline to connect points
    const path = [
      { lat: start.lat, lng: start.lng },
      { lat: current.lat, lng: current.lng },
      { lat: end.lat, lng: end.lng },
    ];

    // Define dashed line pattern
    const lineSymbol = {
        path: 'M 0,-1 0,1', // Define simple line
        strokeOpacity: 1,
        scale: 4, // Dash size
      };
    
    const routePath = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: "#FF5500",
      strokeOpacity: 0.0,
      strokeWeight: 2,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px' // Space between dashes
      }]
    });

    // Display polyline on map
    routePath.setMap(map);
  }