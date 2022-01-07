var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    /* No need to set credentials if already passed in URL */
    center: new Microsoft.Maps.Location(39.393486, -98.100769),
    zoom: 3
});
//Load the GeoJSON and HeatMap modules
Microsoft.Maps.loadModule(['Microsoft.Maps.GeoJson', 'Microsoft.Maps.HeatMap'], function () {
    // earthquake data in the past 30 days from usgs.gov
    Microsoft.Maps.GeoJson.readFromUrl('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function (shapes) {
        var heatMap = new Microsoft.Maps.HeatMapLayer(shapes, { radius: 5, propertyAsWeight: 'mag' });
        map.layers.insert(heatMap);
    });
});
