<template>
	<div id="map" ref="mapRef"></div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";
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
		});
		function addMarker(map) {
			// const tt = window.tt;
			var location = [-121.91595, 37.36729];
			var popupOffset = 25;

			var marker = new tt.Marker().setLngLat(location).addTo(map);
			var popup = new tt.Popup({ offset: popupOffset });
			// var popup = new tt.Popup({ offset: popupOffset }).setHTML(
			// 	"Your address!"
			// );
			reverseGeocoding(marker, popup);
			marker.setPopup(popup).togglePopup();
		}

		function reverseGeocoding(marker, popup) {
			// const tt = window.tt;
			tt.services
				.reverseGeocode({
					// key: 'iTF86GRA2V5iGjM6LMMV54lrK8v6zC1w',
					key: "U6CQy1n0OaKcbdAAaQf2QAtAJuh95lqn",
					position: marker.getLngLat(),
				})
				.go()
				.then(function (result) {
					console.log(result.addresses[0].address.freeformAddress);
					popup.setHTML(result.addresses[0].address.freeformAddress);
				});
		}
		function geocoding(marker, popup) {
			tt.services
				.geocode({
					key: "U6CQy1n0OaKcbdAAaQf2QAtAJuh95lqn",
					query: "Amsterdam, The Netherlands",
				})
				.then(function (result) {
					console.log(result);
				});
		}

		// reverseGeocode
		//     function callbackFn(response) {
		//   console.log(response);
		// }
		// tt.services.reverseGeocode({
		//   key: <Your API key>,
		//   position: '19.449: 51.759'
		// }).then(callbackFn);

		// Geocode
		// function callbackFn(result) {
		//   console.log(result);
		// };
		// tt.services.geocode({
		//   key: <Your API Key>,
		//   query: 'Amsterdam, The Netherlands'
		// }).then(callbackFn);

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
