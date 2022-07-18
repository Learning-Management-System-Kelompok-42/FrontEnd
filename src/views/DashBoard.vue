<template>
  <v-app>
    <v-main class="ma-5 ml-10">
      <v-container>
        <!-- HEAD-->
        <h3 class="primary--text"><b>Dashboard</b></h3>
        <p>Lihat informasi statistik milikmu</p>
        <!-- TOTAL -->
        <v-row class="mt-1">
          <v-col class="pl-0 pr-6" cols="4">
            <v-card class="ml-3 mx-auto" width="100%" outlined>
              <v-list-item two-line>
                <v-list-item-avatar
                  class="my-1"
                  rounded
                  size="50"
                  color="secondary"
                >
                  <v-icon class="my-auto" color="white"
                    >mdi-briefcase-variant-outline</v-icon
                  >
                </v-list-item-avatar>
                <v-list-item-content class="my-3">
                  <v-list-item-subtitle class="text-h7 pb-2"
                    >Total Spesialisasi</v-list-item-subtitle
                  >
                  <v-list-item-title class="text-h9">
                    <b>{{ getDataCompany.AmountSpecialization }}</b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col class="pl-0 pr-6" cols="4">
            <v-card class="ml-3 mx-auto" width="100%" outlined>
              <v-list-item two-line>
                <v-list-item-avatar
                  class="my-1"
                  rounded
                  size="50"
                  color="secondary"
                >
                  <v-icon class="my-auto" color="white">
                    mdi-file-document-outline
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="my-3">
                  <v-list-item-subtitle class="text-h7 pb-2">
                    Total Kursus
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-h9">
                    <b>{{ getDataCompany.AmountCourse }}</b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col class="pl-0 pr-6" cols="4">
            <v-card class="ml-3 mx-auto" width="100%" outlined>
              <v-list-item two-line>
                <v-list-item-avatar
                  class="my-1"
                  rounded
                  size="50"
                  color="secondary"
                >
                  <v-icon class="my-auto" color="white">
                    mdi-account-group-outline
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="my-3">
                  <v-list-item-subtitle class="text-h7 pb-2">
                    Total Karyawan
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-h9">
                    <b>{{ getDataCompany.AmountEmployee }}</b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <!-- CONTENT-->
        <v-row>
          <!-- ANGGOTA TERBANYAK -->
          <v-col class="pl-0 pr-6" cols="8">
            <v-card class="ml-3 mx-auto" width="100%" outlined>
              <v-row class="ml-4 ma-auto">
                <v-list-item-icon class="mr-4">
                  <v-avatar :elevation="0" color="accentSec" size="30">
                    <v-icon class="pa-auto" color="secondary" small
                      >mdi-briefcase-variant-outline</v-icon
                    >
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Spesialisasi dengan Anggota Terbanyak</v-list-item-title
                  >
                </v-list-item-content>
              </v-row>

              <v-data-table
                :headers="headers"
                :items="getDataCompany.Specialization"
                :items-per-page="data"
                hide-default-footer
                class="my-auto mx-4"
              >
                <template v-slot:[`item.name`]="{ item }">
                  <span class="gray6--text">
                    {{ item.Name }}
                  </span>
                </template>
                <template v-slot:[`item.amount`]="{ item }">
                  <span class="gray6--text">
                    {{ item.AmountEmployee }}
                  </span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn
                    small
                    plain
                    class="text-capitalize ps-0"
                    color="warning"
                    @click="() => this.$router.push(detail(item))"
                  >
                    Lihat detail
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-card>
            <br />
            <v-card class="ml-3 mx-auto" width="100%" outlined>
              <v-row class="ml-4 ma-auto">
                <v-list-item-icon class="mr-4">
                  <v-avatar :elevation="0" color="accentSec" size="30">
                    <v-icon class="pa-auto" color="secondary" small
                      >mdi-file-document-outline</v-icon
                    >
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Kursus dengan Anggota Terbanyak</v-list-item-title
                  >
                </v-list-item-content>
              </v-row>

              <v-data-table
                :headers="headercourse"
                :items="getDataCompany.Course"
                hide-default-footer
                class="my-auto mx-4"
                :items-per-page="data"
              >
                <template v-slot:[`item.name`]="{ item }">
                  <span class="gray6--text">
                    {{ item.Title }}
                  </span>
                </template>
                <template v-slot:[`item.amount`]="{ item }">
                  <span class="gray6--text">
                    {{ item.AmountEmployee }}
                  </span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn
                    small
                    plain
                    class="text-capitalize ps-0"
                    color="warning"
                    @click="() => this.$router.push(detail(item))"
                  >
                    Lihat detail
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
              <template v-slot:no-data>
                <p>There is no data</p>
              </template>
            </v-card>
          </v-col>
          <!-- TERBARU -->
          <v-col cols="4">
            <v-card>
              <v-row class="ml-4 ma-auto">
                <v-list-item-icon class="mr-4">
                  <v-avatar :elevation="0" color="accentSec" size="30">
                    <v-icon class="pa-auto" color="secondary" small
                      >mdi-bookmark-minus-outline</v-icon
                    >
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Permintaan Terbaru</v-list-item-title
                  >
                </v-list-item-content>
              </v-row>
              <div class="mx-4 mt-1">
                <p class="text-subtitle-2 my-auto mt-2">
                  Permintaan Kursus baru oleh
                  <span class="primary--text font-weight-bold"
                    >Fajar Eka Pambudi</span
                  >
                </p>
                <p class="text-caption gray--text pt-0">2 jam yang lalu</p>
                <v-divider />
                <p class="text-subtitle-2 my-auto mt-2">
                  Permintaan Konseling baru oleh
                  <span class="primary--text font-weight-bold"
                    >Decindy Amanda Diah</span
                  >
                </p>
                <p class="text-caption gray--text pt-0">3 jam yang lalu</p>
                <v-divider />
                <p class="text-subtitle-2 my-auto mt-2">
                  Permintaan Kursus baru oleh
                  <span class="primary--text font-weight-bold"
                    >Fajri Nur Syifa</span
                  >
                </p>
                <p class="text-caption gray--text pt-0">6 jam yang lalu</p>
                <v-divider />
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
  setup() {},
  data() {
    return {
      data: 4,
      sortDesc: "amount",
      headers: [
        {
          text: "Nama Spesialisasi",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Jumlah Anggota", sortable: false, value: "amount" },
        { text: "Aksi", sortable: false, value: "actions" },
      ],
      headercourse: [
        {
          text: "Nama Kursus",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Jumlah Anggota", value: "amount" },
        { text: "Aksi", sortable: false, value: "actions" },
      ],
    };
  },
  computed: {
    getDataCompany() {
      return this.$store.state.company.dataCompany;
    },
    getAllSpecialization() {
      return this.$store.state.specialization.specialization;
    },
    getAllCourse() {
      return this.$store.state.course.course;
    },
  },
  methods: {
    gettoken() {
      const cookie = require("tiny-cookie");
      return cookie.get("token");
    },
  },
  mounted() {
    this.$store.dispatch("specialization/fetchSpecialization");
    this.$store.dispatch("course/fetchCourse");
  },
  created() {
    document.title = "Dashboard";
  },
};
</script>
