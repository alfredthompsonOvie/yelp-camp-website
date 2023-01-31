<template>
	<div id="map" ref="mapRef"></div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";
// import tt  from "@tomtom-international/web-sdk-services"
import {
	geocode,
	reverseGeocode,
} from "@tomtom-international/web-sdk-services/esm";
import { onMounted, ref } from "vue";

export default {
	name: "TomTomMap",
	setup() {
		let mapRef = ref(null);

		onMounted(() => {
			const map = tt.map({
				key: "U6CQy1n0OaKcbdAAaQf2QAtAJuh95lqn",
				container: mapRef.value,
				// style: 'tomtom://vector/1/basic-main',
			});
			map.addControl(new tt.FullscreenControl());
			map.addControl(new tt.NavigationControl());
			addMarker(map);
			// geocoding()
		});
		function addMarker(map) {
			// const tt = window.tt;
			var location = [-121.91595, 37.36729];
			var popupOffset = 25;

			var marker = new tt.Marker().setLngLat(location).addTo(map);
			// var popup = new tt.Popup({ offset: popupOffset });
			var popup = new tt.Popup({ offset: popupOffset }).setHTML(
				"Your address!"
			);
			// reverseGeocoding(marker, popup);
			// geocoding(marker, popup)
			// geocoding();
			marker.setPopup(popup).togglePopup();
		}

		// function reverseGeocoding(marker, popup) {
		// 	// const tt = window.tt;
		// 	reverseGeocode({
		// 		key: "U6CQy1n0OaKcbdAAaQf2QAtAJuh95lqn",
		// 		position: marker.getLngLat(),
		// 	})
		// 		// .go()
		// 		.then(function (result) {
		// 			console.log(result.addresses[0].address.freeformAddress);
		// 			popup.setHTML(result.addresses[0].address.freeformAddress);
		// 		});
		// }

		// function geocoding() {
		// 	geocode({
		// 		batchMode: "sync",
		// 		key: "U6CQy1n0OaKcbdAAaQf2QAtAJuh95lqn",
		// 		query: "Amsterdam, The Netherlands",
		// 		language: "en-GB",
		// 		limit: 5,
		// 		baseURL: "api.tomtom.com",
		// 		versionNumber: "2",
		// 		ext: "json"
		// 	})
		// 		.then(function (result) {
		// 			console.log(result);
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		// }

		return {
			mapRef,
		};
	},
};
</script>

<style scoped>
#map {
	/* padding-top: 23em; */
	/* height: inherit; */
	/* max-height: 25em; */
	width: 100%;
	height: 16.5em;
	height: 23em;
	/* height: 100%; */
}
</style>
