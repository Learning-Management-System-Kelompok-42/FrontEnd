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
                <v-card-title class="text-body-1 font-weight-bold">
                  {{ data.title }}
                </v-card-title>
                <v-card-subtitle class="d-flex align-center mt-1">
                  <v-card color="#FEEBD8" class="pa-1 me-2" flat>
                    <v-icon color="#F26440">mdi-file</v-icon>
                  </v-card>
                  {{ data.kursus }} Kursus
                </v-card-subtitle>
                <v-card-subtitle class="d-flex py-0 align-center">
                  <v-card color="#FEEBD8" class="pa-1 me-2" flat>
                    <v-icon color="#F26440">mdi-account-group-outline</v-icon>
                  </v-card>
                  {{ data.karyawan }} Karyawan
                </v-card-subtitle>
                <v-card-action class="mx-2">
                  <v-btn
                    class="text-capitalize my-3"
                    plain
                    small
                    to="/specialization/detail"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-action>
              </v-card>
            </v-col>
          </v-row>
        </div>
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
