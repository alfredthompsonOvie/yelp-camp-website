<template>
	<div id="container">
		<div id="mapContainer" ref="map">
			<div v-if="error"> {{ error }}</div>

		</div>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
	name: "BaseMap",
	props: ["query"],
	setup(props) {
		// const center = ref([37, 7749, -122, 4194]);
		const map = ref(null);
		// GET https://eu1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
		const error = ref(null)


		onMounted(() => {
			// get location name cordinate and replace [46.05, 11.05]
			map.value = L.map("mapContainer").setView([lat.value, lon.value], 16);
			L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map.value);
			// get location name cordinate and replace [46.05, 11.05]
			L.marker([lat.value, lon.value]).addTo(map.value);
		});
		onBeforeUnmount(() => {
			if (map.value) {
				map.value.remove();
			}
		});
		const getCoords = async () => {
			try {
				const lat = ref(null);
				const lon = ref(null);
				const display_name = ref(null);
				const res = await fetch(
					`https://eu1.locationiq.com/v1/search?key=pk.e215fb2c3c6c6b6de944e8ded7d8949d&q=${props.query}&format=json`
				);
				const data = await res.json();
				if (!res.ok) {
					throw new Error(`No location or places were found for ${props.query}`)
				}
				console.log(res);
				console.log(data);
				lat.value = data[0].lat;
				lon.value = data[0].lon;
				display_name.value = data[0].display_name;
				return { lat, lon, display_name };
				
			} catch (err) {
				console.log(err.message);
				console.log(err);
				error.value = err.message
			}
		};
		const { lat, lon, display_name } = getCoords();
		console.log("lat", lat.value);
		console.log("long", lon.value);
		console.log("displayName", display_name.value);
		return {
			map,
			error,
		};
	},
};
</script>

<style scoped>
#mapContainer {
	padding-top: 23em;
	height: 100%;
}
</style>
