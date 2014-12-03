$(document).ready(function(){
	

	    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';
			mbUrl2 = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

	    var podstawa = L.tileLayer(mbUrl2, {attribution: mbAttr}),
	    	odcienie = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr}),
		    ulice = L.tileLayer(mbUrl, {id: 'examples.map-i875mjb7',   attribution: mbAttr});
		    
		var liniaaa = new L.geoJson(linia);
	
		var miejsca = new L.LayerGroup();

			L.marker([51.518460, 18.22537]).bindPopup('Młyn').addTo(miejsca),
			L.marker([51.517340, 18.22203]).bindPopup('Rynek').addTo(miejsca),
			L.marker([51.514930, 18.21134]).bindPopup('Mostek którego nie widać').addTo(miejsca),
			L.marker([51.501090, 18.25378]).bindPopup('Fajny las').addTo(miejsca);


		var map = L.map('map', {
			center: [51.516072, 18.21799],
			zoom: 13,
			layers: [podstawa, miejsca]
		});

		var baseLayers = {
			"Podstawa": podstawa,
			"Odcienie": odcienie,
			"Ulice": ulice
		};

		var overlays = {
			"Miejsca": miejsca,
			"Linia":liniaaa
		};

		L.control.layers(baseLayers, overlays).addTo(map);
		
		
		L.marker([51.51600, 18.2177]).addTo(map)
			.bindPopup("<b>Kraszewice</b><br />ul J.Słowackiego 22").openPopup();

		L.circle([51.51600, 18.2177], 500, {
			color: 'green',
			fillColor: 'yellow',
			fillOpacity: 0.5
		}).addTo(map).bindPopup("I am a circle.");

		L.polygon([
			[51.527722, 18.20700],
			[51.527722, 18.23700],
			[51.507072, 18.23700],
			[51.507072, 18.20700],
		]).addTo(map).bindPopup("To są KRASZEWICE");

		    	
    	
		$('#wsp').click(function() {
		
    		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("Wspolrzedne " + e.latlng.toString())
				.openOn(map);
		}

		map.on('click', onMapClick);

    	});
    	
    	$('#mar').click(function() {
		
    		var marker = new L.marker();

		function onMapClick(ee) {
			marker
				new L.marker(ee.latlng).addTo(map);
		}

		map.on('click', onMapClick);

    	});
    	
    	$('#okr').click(function() {
    		var circle = new L.circle();
		function onMapClick(e) {
			circle
				new L.circle(e.latlng, 500, {
					color: 'yellow',
					fillColor: 'green',
					fillOpacity: 0.5
		}).addTo(map);
		}
		map.on('click', onMapClick);
    	});
});
