<template>
  <v-app>
    <side-bar />
    <router-view />
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>
