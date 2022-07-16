<template>
  <v-app>
    <v-main class="ma-5 ml-10">
      <!-- HEAD -->
      <v-container>
        <v-btn
          class="text-capitalize pl-2 pr-3"
          depressed
          to="/specialization"
          outlined
          plain
          color="primary"
          small
        >
          <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
          Kembali
        </v-btn>
        <div class="d-flex justify-start mt-2">
          <p class="text-h6 mt-2 mb-2 text-capitalize">
            <b>{{ getSpecialization.name }}</b>
          </p>
          <v-btn
            plain
            color="warning"
            class="text-capitalize mt-2 ms-4"
            @click="dialogChangeName = true"
          >
            <v-icon>mdi-pencil-box-outline</v-icon> Ganti Nama</v-btn
          >
          <v-dialog v-model="dialogChangeName" width="900">
            <v-card>
              <div class="d-flex">
                <v-card-title class="text-capitalize primary--text">
                  ganti nama spesialisasi
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialogChangeName = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-text-field
                  outlined
                  dense
                  label="Nama Spesialisasi Baru"
                  v-model="newNameSpecialization"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  class="text-capitalize"
                  @click="btnChangeName"
                >
                  Simpan Perubahan
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer />
          <v-text-field
            v-model="getSpecialization.invitation"
            v-show="false"
            ref="mylink"
          ></v-text-field>
          <v-btn
            class="text-capitalize"
            dark
            depressed
            color="primary"
            @click="copyLink(getSpecialization.invitation)"
          >
            Tautan Undangan
          </v-btn>
          <v-snackbar v-model="snackbar" :timeout="2000">
            Tautan berhasil di salin
          </v-snackbar>
        </div>
        <div>
          <p class="gray6--text">
            Detail dari spesialisasi {{ getSpecialization.name }}
          </p>
        </div>
        <!-- ADDRESS -->
        <div class="total d-flex">
          <v-card class="pa-2" flat height="100" outlined>
            <div class="d-flex pa-1">
              <v-card class="ma-auto pa-3" flat color="warning">
                <v-icon color="white">mdi-file</v-icon>
              </v-card>
              <div class="px-5 mt-2">
                <p class="text-capitalize my-0 gray6--text">total kursus</p>
                <p class="font-weight-bold">
                  {{
                    getSpecialization.courses
                      ? getSpecialization.courses.length
                      : 0
                  }}
                </p>
              </div>
            </div>
          </v-card>
          <v-card class="pa-2 mx-3" flat height="100" outlined>
            <div class="d-flex pa-1">
              <v-card class="ma-auto pa-3" flat color="warning">
                <v-icon color="white">mdi-account-group-outline</v-icon>
              </v-card>
              <v-spacer></v-spacer>
              <div class="mt-2 px-5">
                <p class="text-capitalize my-0 gray6--text">total karyawan</p>
                <p class="font-weight-bold">
                  {{
                    getSpecialization.users ? getSpecialization.users.length : 0
                  }}
                </p>
              </div>
            </div>
          </v-card>
        </div>
        <!-- COURSE'S LIST -->
        <div class="d-flex mt-6 pt-5">
          <p class="text-h6"><b> Daftar Kursus</b></p>
          <v-spacer></v-spacer>
          <v-btn
            class="text-capitalize text-body-2"
            color="primary"
            depressed
            @click="dialogAddCourse = true"
          >
            <v-icon class="me-2" small>mdi-plus-thick</v-icon>
            tambahkan kursus
          </v-btn>
          <v-dialog v-model="dialogAddCourse" width="900">
            <v-card>
              <div class="d-flex">
                <v-card-title class="text-capitalize primary--text">
                  tambahkan kursus
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialogAddCourse = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-select
                  outlined
                  dense
                  :items="getCourse"
                  item-value="id"
                  item-text="title"
                  v-model="course_id"
                  label="Pilih Kursus"
                ></v-select>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  class="text-capitalize"
                  @click="btnAddCourse"
                >
                  Simpan Perubahan
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
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
        <v-row class="mt-2">
          <v-col
            cols="4"
            v-for="course in getSpecialization.courses"
            :key="course.id"
          >
            <v-card class="" outlined>
              <v-list-item>
                <v-list-item-content>
                  <v-img :src="course.thumbnail" height="100"></v-img>
                  <v-list-item-title class="text-h8 mb-1 pt-3">
                    <b>{{ course.title }}</b>
                  </v-list-item-title>
                  <v-list-item-subtitle style="display: block">
                    {{ course.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn class="text-capitalize" plain color="#DD2E4B" small>
                  <v-icon class="me-2" small>mdi-delete-outline</v-icon> hapus
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="text-capitalize" @click="reveal = false" plain>
                  Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- EMPLOYEE'S LIST -->
        <p class="text-h6 mt-6"><b> Daftar Karyawan</b></p>
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
        <v-row class="mt-2">
          <v-col
            v-for="users in getSpecialization.users"
            :key="users.id"
            cols="3"
          >
            <v-card width="100%" outlined>
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
                      <b class="text-capitalize">{{ users.full_name }}</b>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ users.email }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="mt-0 mb-1 pt-0" style="display: flex">
                    <v-list-item-avatar
                      class="mt-2 mr-3"
                      tile
                      size="15"
                      color="grey"
                    ></v-list-item-avatar>
                  </div>
                </v-list-item>
                <v-card-actions class="px-1">
                  <v-btn
                    class="text-capitalize pl-2 pr-3"
                    @click="reveal = false"
                    text
                  >
                    Lihat Detail
                    <v-icon class="pt-1 pr-0"> mdi-chevron-right </v-icon>
                  </v-btn>
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
  data() {
    return {
      value: 55,
      snackbar: false,
      dialogAddCourse: false,
      dialogChangeName: false,
      course_id: "",
    };
  },
  methods: {
    changeName() {},
    btnAddCourse() {
      this.$store.dispatch("specialization/addCourseToSpecialization", {
        course_id: this.course_id,
      });
      this.dialogAddCourse = false;
    },
    copyLink(link) {
      try {
        navigator.clipboard.writeText(
          "https://radiant-kataifi-b63e51.netlify.app/invitation?link=" + link
        );
        this.snackbar = !this.snackbar;
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    getSpecialization() {
      return this.$store.state.specialization.specialization;
    },
    getCourse() {
      return this.$store.state.course.course;
    },
  },
  mounted() {
    this.$store.dispatch("specialization/getSpecializationById");
    this.$store.dispatch("course/fetchCourse");
  },
};
</script>

<style></style>
