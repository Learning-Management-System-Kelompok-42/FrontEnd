<template>
  <v-app>
    <v-main>
      <v-container>
        <btnback />
        <div class="header d-flex">
          <div class="judul">
            <h2 class="primary--text text-capitalize">
              junior javascript mastery
            </h2>
            <p class="text-caption">
              Detail dari Kursus Junior Javascript Mastery
            </p>
          </div>
          <v-spacer></v-spacer>
          <v-btn class="text-capitalize mx-2" color="primary" depressed>
            <v-icon class="me-3">mdi-pencil-box-outline</v-icon>
            ubah kursus
          </v-btn>
          <v-btn
            class="text-capitalize white--text mx-2"
            color="warning"
            depressed
          >
            <v-icon class="me-3">mdi-delete-outline</v-icon>
            hapus
          </v-btn>
        </div>
        <div class="total d-flex">
          <v-card class="pa-2" flat>
            <div class="d-flex pa-4">
              <v-card class="ma-auto pa-3" flat color="danger">
                <v-icon color="white">mdi-file</v-icon>
              </v-card>
              <div class="mx-2 px-5">
                <p class="text-capitalize my-0">total modul</p>
                <p class="font-weight-bold">20</p>
              </div>
            </div>
          </v-card>
          <v-card class="pa-2 mx-6" flat>
            <div class="d-flex pa-4">
              <v-card class="ma-auto pa-3" flat color="danger">
                <v-icon color="white">mdi-account-group-outline</v-icon>
              </v-card>
              <v-spacer></v-spacer>
              <div class="mx-2 px-5">
                <p class="text-capitalize my-0">total modul</p>
                <p class="font-weight-bold">17</p>
              </div>
            </div>
          </v-card>
        </div>
        <h2 class="text-capitalize my-6 primary--text">daftar karyawan</h2>
        <div class="filtering">
          <v-row>
            <v-col cols="6">
              <v-card flat>
                <v-container fluid class="d-flex my-auto">
                  <p class="my-auto">Filter :</p>
                  <v-select
                    hide-details=""
                    class="align-center ma-3"
                    label="Pilih Spesialisasi"
                    outlined
                    dense
                    append-icon="mdi-chevron-down"
                  >
                  </v-select>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card flat>
                <v-container fluid class="d-flex my-auto">
                  <v-text-field
                    class="ma-3"
                    hide-details=""
                    label="Cari Spesialisasi"
                    dense
                    outlined
                    clearable
                  ></v-text-field>
                  <v-btn
                    class="my-auto text-capitalize"
                    color="primary"
                    depressed
                  >
                    <v-icon small class="me-2">mdi-magnify</v-icon>
                    Telusuri
                  </v-btn>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="karyawan">
          <v-row>
            <v-col cols="3" v-for="userlist in user" :key="userlist.id">
              <v-card flat>
                <v-avatar size="56" class="ms-3 mt-3" tile>
                  <v-img :src="userlist.img"></v-img>
                </v-avatar>
                <v-card-title class="text-body-2">
                  {{ userlist.name }}
                </v-card-title>
                <v-card-subtitle class="text-caption">
                  {{ userlist.email }}
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn class="text-capitalize" plain small width="100%">
                    Lihat detail
                    <v-spacer></v-spacer>
                    <v-icon> mdi-chevron-right </v-icon>
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
import btnback from "@/components/BackButton.vue";
export default {
  name: "DetailCourseView",
  setup() {},
  components: { btnback },
  data() {
    return {
      user: [
        {
          id: 1,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 2,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 3,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 4,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 5,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 6,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 7,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
        {
          id: 8,
          img: "http://placehold.jp/50x50.png",
          name: "Abdi Decindy Putri",
          email: "abdidecindyputri@intanabadi.com",
        },
      ],
    };
  },
};
</script>
