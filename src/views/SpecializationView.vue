<template>
  <v-app>
    <v-main class="ml-10 ma-5">
      <!-- HEADER -->
      <v-container>
        <div style="display: flex">
          <div class="header">
            <h3 class="primary--text">Spesialisasi</h3>
            <p class="gray6--text">
              Lihat daftar spesialisasi yang di perusahaanmu
            </p>
          </div>
          <v-spacer />
          <v-btn
            class="text-capitalize text-body-2"
            color="primary"
            depressed
            to="/specialization/add"
          >
            <v-icon small class="me-2">mdi-plus-thick</v-icon>
            Tambah Spesialisasi
          </v-btn>
        </div>
        <!-- FILTER -->
        <v-card class="pa-4" outlined>
          <div class="d-flex">
            <v-text-field
              hide-details=""
              label="Cari Spesialisasi"
              outlined
              dense
            ></v-text-field>
            <v-btn class="text-capitalize mx-2" color="primary" depressed>
              <v-icon small class="me-3">mdi-magnify</v-icon>
              Cari
            </v-btn>
          </div>
        </v-card>
        <!-- ITEMS -->
        <div class="items mt-3">
          <v-row>
            <v-col cols="3" v-for="data in items" :key="data">
              <v-card flat>
                <v-card-title class="text-body-1">
                  {{ data.title }}
                </v-card-title>
                <v-card-subtitle class="d-flex align-center mt-1">
                  <v-card color="#FEEBD8" class="pa-1 me-2" flat>
                    <v-icon color="#F26440">mdi-file</v-icon>
                  </v-card>
                  {{ data.kursus }} Kursus
                </v-card-subtitle>
                <v-card-subtitle class="d-flex py-0">
                  <v-card color="#FEEBD8" class="pa-1 me-2" flat>
                    <v-icon color="#F26440">mdi-account-group-outline</v-icon>
                  </v-card>
                  {{ data.karyawan }} Karyawan
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <v-row v-for="n in 2" :key="n" class="my-2">
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
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Backend Engineer",
        kursus: 8,
        karyawan: 8,
      },
      {
        title: "UI Designer",
        kursus: 8,
        karyawan: 8,
      },
      {
        title: "UX Writer",
        kursus: 8,
        karyawan: 8,
      },
      {
        title: "Frontend Endgineer",
        kursus: 8,
        karyawan: 8,
      },
      {
        title: "Content Writer",
        kursus: 8,
        karyawan: 8,
      },
      {
        title: "UX Designer",
        kursus: 8,
        karyawan: 8,
      },
      {
        title: "Android Developer",
        kursus: 8,
        karyawan: 8,
      },
    ],
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
