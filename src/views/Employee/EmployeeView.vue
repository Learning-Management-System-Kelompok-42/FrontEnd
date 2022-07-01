<template>
<v-app> 
    <v-main class="ml-10 ma-5">
      <v-container>
      <!-- HEADER -->
      <v-container style="display: flex">
        <div class="header">
          <h3><b>Karyawan</b></h3>
          <p>Lihat daftar karyawan yang terdaftar di perusahaanmu</p>
        </div>
        <v-spacer />
        <v-btn class="text-capitalize" dark depressed color="primary">
          <v-icon class="me-2">mdi-tray-arrow-down</v-icon>
          Unduh Laporan
        </v-btn>
      </v-container>
      <!-- FILTER -->
      <v-row>
        <v-col cols="6">
          <v-card flat>
            <v-container fluid class="d-flex my-auto">
              <p class="my-auto">Filter :</p>
              <v-select
                :items="items"
                hide-details=""
                class="align-center ma-3"
                placeholder="Pilih Spesialisasi"
                outlined
                dense
              ></v-select>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card flat>
            <v-container fluid class="d-flex my-auto">
              <v-text-field
                class="ma-3"
                hide-details=""
                label="Cari Karyawan (Nama atau Email)"
                outlined
                dense
                clearable
              ></v-text-field>
              <v-btn class="my-auto text-capitalize" depressed color="primary">
                <v-icon class="me-2">mdi-magnify</v-icon>
                Telusuri
              </v-btn>
            </v-container>
          </v-card>
        </v-col>     
      </v-row>
      <!-- ITEMS -->
      <v-row v-for="n in 5" :key="n">
        <v-col v-for="n in 4" :key="n" cols="3">
          <v-card flat width="100%" >
            <div class="pl-3 pr-0">
              <v-list-item style="display: block">
                <v-list-item-avatar
                  class="mt-6"
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-h8 mb-1 pt-0">
                    <b>Fajar Eka Pambudi</b>
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >fajareka@intanabadi.com</v-list-item-subtitle
                  >
                </v-list-item-content>
                <div class="mt-0 mb-1 pt-0" style="display: flex">
                  <v-list-item-avatar
                    class="mt-2 mr-3"
                    tile
                    size="15"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Frontend Engineer</v-list-item-title>
                  </v-list-item-content>
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
                    color="primary"
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
      </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
  data: () => ({
    items: ["Backend Engineer", "Frontend Engineer", "UI/UX Designer"],
    reveal: false,
  }),
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
h3{
  color : #286F6C
}
</style>

