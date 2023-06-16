<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
	import system from '$lib/assets/images/system-temp.png';

    let mapElement;
    let map;

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map('map', {
				crs: leaflet.CRS.Simple,
			}).setView([51.505, -0.09], 13);
			let bounds = [[0,0], [1000,1000]];
			let image = leaflet.imageOverlay(system, bounds).addTo(map);
			map.fitBounds(bounds);

            // leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // }).addTo(map);
            //
            // leaflet.marker([51.5, -0.09]).addTo(map)
            //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            //     .openPopup();
        }
    });

    onDestroy(async () => {
        if(map) {
            map.remove();
        }
    });
</script>


<main>
    <div id="map" class="z-0" bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
	#map {
		background-color: black;
	}
</style>
