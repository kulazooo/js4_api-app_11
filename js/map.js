var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    /* No need to set credentials if already passed in URL */
    center: new Microsoft.Maps.Location(35.6393671, 139.6833661),
    zoom: 12
});
Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
    var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
    directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
    directionsManager.showInputPanel('directionsInputContainer');
});
