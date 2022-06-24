<template>
  <v-app>
    <v-main class="ml-10 ma-5">
      <!-- HEADER -->
      <v-container style="display: flex">
        <div class="header">
          <h3><b>Spesialisasi</b></h3>
          <p>Lihat daftar spesialisasi yang di perusahaanmu</p>
        </div>
        <v-spacer />
        <v-btn class="text-capitalize" dark depressed>Tambah Spesialisasi</v-btn>
      </v-container>
      <!-- FILTER -->
      <v-container class="d-inline-flex">
        <v-spacer />
        <v-col cols="9">
          <v-text-field
            class="pt-0"
            label="Cari Spesialisasi"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-btn class="mt-3 text-capitalize" dark depressed>Telusuri</v-btn>      </v-container>
      <!-- ITEMS -->

      <v-row v-for="n in 2" :key="n">
        <v-col v-for="n in 4" :key="n" cols="3">
          <v-card width="100%" outlined>
            <div class="pl-3 pr-0">
              <v-list-item style="display: block">
                

                <v-list-item-content style="display: ">
                  <v-list-item-title class="text-h8 mb-1 pt-0">
                    <b>Backend Engineer</b>
                  </v-list-item-title>
                  
                </v-list-item-content>
                <div class="mt-0 mb-1 pt-0" style="display: flex">
                  <v-list-item-avatar
                    class="mt-2 mr-3"
                    tile
                    size="15"
                    color="grey"
                  ></v-list-item-avatar>
                  
                  <v-col cols=""> 
                  <v-list-item-content>
                    <v-list-item-title>8 Kursus</v-list-item-title>
                    <v-list-item-title>6 Karyawan</v-list-item-title>
                  </v-list-item-content>
                  </v-col>
                </div>
              </v-list-item>
              
              <v-card-actions class="px-1">
                <router-link
                  :to="{ name: 'employeeDetail' }"
                  style="text-decoration: none; color: black"
                >
                  <v-btn
                    class="text-capitalize pl-2 pr-3"
                    @click="reveal = false"
                    text
                  >
                    Lihat Detail<v-icon class="pt-1 pr-0"
                      >mdi-chevron-right</v-icon
                    >
                  </v-btn>
                </router-link>
              </v-card-actions>
            </div>
          </v-card>
          
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: ["Backend Engineer", "UI Designer", "UX Writer", "Frontend Engineer", "Content Writer",
     "UX Designer", "Android Developer"],
    reveal: false,
  }),
};
</script>

<style scoped>
/* .v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
} */
</style>
