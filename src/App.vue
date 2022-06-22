<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: "Inter";
  background-color: #f3f8f6;
}
</style>
