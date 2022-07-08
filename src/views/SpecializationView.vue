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
            @click="addSpecialization"
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
            <v-col
              cols="3"
              v-for="specialization in getSpecialization"
              :key="specialization.SpecializationID"
            >
              <v-card flat>
                <v-card-title class="text-body-1 font-weight-bold">
                  {{ specialization.SpecializationName }}
                </v-card-title>
                <v-card-subtitle class="d-flex align-center mt-1">
                  <v-card color="#FEEBD8" class="pa-1 me-2" flat>
                    <v-icon color="#F26440">mdi-file</v-icon>
                  </v-card>
                  {{ specialization.AmountCourse }} Kursus
                </v-card-subtitle>
                <v-card-subtitle class="d-flex py-0 align-center">
                  <v-card color="#FEEBD8" class="pa-1 me-2" flat>
                    <v-icon color="#F26440">mdi-account-group-outline</v-icon>
                  </v-card>
                  {{ specialization.AmountEmployee }} Karyawan
                </v-card-subtitle>
                <v-card-actions class="mx-2">
                  <v-btn
                    class="text-capitalize my-3"
                    plain
                    small
                    @click="toDetail(specialization.SpecializationID)"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
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
    reveal: false,
  }),
  computed: {
    getSpecialization() {
      return this.$store.state.specialization.specialization;
    },
  },
  methods: {
    addSpecialization() {
      this.$router.push("/specialization/add");
    },
    toDetail(id) {
      this.$store.dispatch("specialization/actionSetSpecializationId", id);
      this.$router.push("/specialization/detail");
    },
  },
  mounted() {
    this.$store.dispatch("specialization/fetchSpecialization");
    console.log(this.getSpecialization);
  },
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
