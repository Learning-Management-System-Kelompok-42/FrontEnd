<template>
  <v-app>
    <v-row>
      <!-- SIDE-BAR -->
      <v-col class="ma-4 bar">
        <goDash />
      </v-col>
      <!-- MAIN -->
      <v-main class="ma-5">
        <v-container class="pt-7">
          <v-row>
            <h1 class="primary--text"><b>Junior Javascript Mastery</b></h1>
            <v-spacer />
            <v-btn :elevation="0" class="text-capitalize ma-2" color="secondary"
              ><v-icon class="pr-2" color="white"
                >mdi-checkbox-marked-outline</v-icon
              >
              Tandai Selesai</v-btn
            >
          </v-row>
          <p class="text-caption gray6--text pl-0 mt-2">
            Javascript Array <v-icon>mdi-circle-small</v-icon>Slide Presentasi
          </p>
          <v-card height="540px"></v-card>
        </v-container>
      </v-main>
    </v-row>
  </v-app>
</template>

<script>
import goDash from "@/components/toDashboard.vue";
export default {
  components: { goDash },
};
</script>
<style scoped>
.bar {
  max-width: 394px;
}
</style>
