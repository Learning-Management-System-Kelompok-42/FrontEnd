<template>
  <v-app>
    <v-main class="ma-5 ml-10">
      <v-container>
        <!-- HEAD -->
        <h3 class="primary--text"><b>Kursus Saya</b></h3>
        <p>Lihat daftar kursus yang dapat kamu pelajari</p>
        <!-- SEARCH -->
        <v-col cols="12" class="px-0">
          <v-card flat>
            <v-container fluid class="d-flex my-auto">
              <v-text-field
                class="ma-3"
                hide-details=""
                label="Cari Spesialisasi"
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
        <!-- CHIPS -->
        <div class="chips">
          <v-chip class="ml-0 ma-2" color="secondary" text-color="white">
            Semua Kursus
          </v-chip>
          <v-chip class="ma-2" color="accentSec" text-color="secondary">
            Sedang Dikerjakan
          </v-chip>
          <v-chip class="ma-2" color="accentSec" text-color="secondary">
            Sudah Selesai
          </v-chip>
        </div>
        <!-- COURSE'S LIST -->
        <v-row>
          <v-col v-for="course in getCourseEmployee" :key="course.id">
            <v-card class="ml-0 mr-2 my-3" width="100%" outlined>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-avatar
                    class="mt-3"
                    rounded
                    height="80"
                    color="grey6"
                    size="100%"
                  >
                    <img :src="course.thumbnail" />
                  </v-list-item-avatar>
                  <v-row class="ma-auto mt-2">
                    <v-rating
                      v-model="rating"
                      background-color="orange lighten-3"
                      color="orange"
                      half-increments
                      dense
                      size="15"
                    ></v-rating>
                    <span class="grey--text text-caption">{{ rating }}</span>
                  </v-row>
                  <v-list-item-title class="text-h8 mb-1 pt-3">
                    <b>{{ course.title }}</b>
                  </v-list-item-title>
                  <p class="text-h18 my-auto gray--text">
                    {{ course.description }}
                  </p>
                </v-list-item-content>
              </v-list-item>
              <div class="px-4 d-flex my-auto">
                <v-progress-linear
                  v-model="value"
                  class="my-auto"
                  height="5"
                  rounded
                  color="secondary"
                ></v-progress-linear>
                <b
                  class="text-h15 my-auto pl-2 secondary--text"
                  color="secondary"
                  >{{ value }}%</b
                >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-avatar
                      class="mt-3"
                      rounded
                      height="80"
                      color="grey6"
                      size="100%"
                    >
                      <img src="@/assets/avajjm.png" />
                    </v-list-item-avatar>
                    <v-row class="ma-auto mt-2">
                      <v-rating
                        v-model="rating"
                        background-color="orange lighten-3"
                        color="orange"
                        half-increments
                        dense
                        size="15"
                      ></v-rating>
                      <span class="grey--text text-caption">{{ rating }}</span>
                    </v-row>
                    <v-list-item-title class="text-h8 mb-1 pt-3">
                      <b>Junior Javascript Mastery</b>
                    </v-list-item-title>
                    <p class="text-h18 my-auto gray--text">
                      Kalian akan mempelajari mengenai bahasa Javascript yang
                      paling dasar.
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <div class="px-4 d-flex my-auto">
                  <v-progress-linear
                    v-model="value"
                    class="my-auto"
                    height="5"
                    rounded
                    color="secondary"
                  ></v-progress-linear>
                  <b
                    class="text-h15 my-auto pl-2 secondary--text"
                    color="secondary"
                    >{{ value }}%</b
                  >
                </div>
                <v-card-actions>
                  <v-btn
                    class="text-capitalize"
                    to="urcourse/detail"
                    text
                    color="primary"
                  >
                    Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
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
      value: 100,
      rating: 4.6,
      dialog: false,
      items: ["Backend Engineer", "Frontend Engineer", "UI/UX Designer"],
    };
  },
  computed: {
    getCourseEmployee() {
      return this.$store.state.course.course;
    },
  },
  mounted() {
    this.$store.dispatch("course/getAllCourseEmployee");
  },
};
</script>
<style>
h3 {
  color: #286f6c;
}
</style>
