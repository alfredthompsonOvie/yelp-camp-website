<template>
	<section id="container">
		<section 
		id="mapContainer" 
		ref="map"
		v-if="!error"
		></section>
		<section v-else class="errorContainer"> 
			<p class="error">{{ error }}</p>
		</section>
	</section>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
	name: "BaseMap",
	// name: "LeafletMap",
	props: ["query"],
	setup(props) {
		const map = ref(null);
		const error = ref(null);

		const setupLeafletMap = async () => {
			try {
				const { lat, lon } = await getCoords();
				
				map.value = L.map("mapContainer").setView([lat.value, lon.value], 16);
				L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
					attribution:
						'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				}).addTo(map.value);
				L.marker([lat.value, lon.value]).addTo(map.value);
			} catch (err) {
				console.log(err);
			}
		}

		onMounted(() => {
			setupLeafletMap()
		});
		onBeforeUnmount(() => {
			if (map.value) {
				map.value.remove();
			}
		});
		const getCoords = async () => {
			try {
				error.value = null;

				const res = await fetch(
					`https://eu1.locationiq.com/v1/search?key=pk.e215fb2c3c6c6b6de944e8ded7d8949d&q=${props.query}&format=json`
				);
				const data = await res.json();
				if (!res.ok) {
					throw new Error(`No location or places were found for ${props.query}`)
				}
				const lat =  ref(data[0].lat);
				const lon = ref(data[0].lon);
				return { lat, lon };
				
			} catch (err) {
				error.value = err.message
			}
		};
		return {
			map,
			error,
		};
	},
};
</script>

<style scoped>
 #container {
	width: 100%;
	height: 17.3em;
}
#mapContainer {
	width: 100%;
	height: 23em;
}
.errorContainer {
	height: inherit;
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
}
.error {
	font-style: italic;
	color: red;
	font-size: 1.2rem;
}
</style>
