<template>
  <v-app id="app">
    <landing />
  </v-app>
</template>

<script>
import landing from "@/views/LandingView.vue";
export default {
  name: "App",
  components: {
    landing,
  },

  data: () => ({
    //
  }),
};
</script>
