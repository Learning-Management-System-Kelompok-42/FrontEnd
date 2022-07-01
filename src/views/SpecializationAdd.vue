<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn
          class="text-capitalize pl-2 pr-3"
          depressed
          to="/specialization"
          outlined
          color="primary"
          plain
          small
        >
          <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
          Kembali
        </v-btn>

        <div class="d-flex justify-start mt-2">
          <h3 class="primary--text">Tambah Spesialisasi</h3>
          <v-spacer />
        </div>
        <div>
          <p class="text-body-2 gray6--text">
            Masukkan data dari spesialisasi baru
          </p>
        </div>

        <!-- FILTER -->
        <div class="body">
          <v-card class="pa-3">
            <v-text-field label="Nama Spesialisasi" outlined dense>
            </v-text-field>
            <div class="d-flex">
              <v-text-field
                label="Link"
                outlined
                dense
                persistent-hint
                hint="Gunakan link diatas untuk mengundang employee ke spesialisasi ini"
              >
              </v-text-field>
              <v-btn color="primary" outlined class="text-capitalize ms-4">
                salin tautan
              </v-btn>
            </div>
            <div class="button d-flex mt-6">
              <v-spacer></v-spacer>
              <v-btn
                class="text-capitalize text-body-2"
                color="primary"
                depressed
              >
                <v-icon small class="me-2">mdi-plus-thick</v-icon>
                tambah spesialisasi
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-container>
      <!-- HEAD -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "start",
          value: "index",
        },
        { text: "Specialization Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Total Courses", value: "totalCourses" },
        { text: "Total Users", value: "totalUsers" },
        { text: "Action", value: "action" },
      ],
      specialization: [
        {
          index: "1.",
          name: "Backend Engineer",
          description: "Course yang dibuat untuk para backend",
          totalCourses: "12",
          totalUsers: "12",
          action: "detail",
        },
        {
          index: "2.",
          name: "Backend Engineer",
          description: "Course yang dibuat untuk para backend",
          totalCourses: "12",
          totalUsers: "12",
          action: "detail",
        },
        {
          index: "3.",
          name: "Backend Engineer",
          description: "Course yang dibuat untuk para backend",
          totalCourses: "12",
          totalUsers: "12",
          action: "detail",
        },
      ],
      dialogDetail: false,
      detailItem: {},
    };
  },
  methods: {
    showDetail(item) {
      (this.dialogDetail = true), (this.detailItem = item);
    },
  },
};
</script>

<style></style>
