<template>
	<div id="container">
		<div id="mapContainer" ref="map"></div>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
	name: "BaseMap",
	setup() {
		// const center = ref([37, 7749, -122, 4194]);
		const map = ref(null);

    onMounted(() => {
      // get location name cordinate and replace [46.05, 11.05]
			map.value = L.map("mapContainer").setView([46.05, 11.05], 5);
			L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map.value);

      // get location name cordinate and replace [46.05, 11.05]
			L.marker([46.05, 11.05]).addTo(map.value);
		});
		onBeforeUnmount(() => {
			if (map.value) {
				map.value.remove();
			}
		});

		return {
			map,
		};
	},
};
</script>

<style scoped>
#mapContainer {
	padding-top: 23em;
}
</style>
