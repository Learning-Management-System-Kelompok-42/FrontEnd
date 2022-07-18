<template>
  <v-main class="ma-5 ml-10">
    <v-container>
      <Back />
      <v-img :src="getDetailCourse.thumbnail" height="200"></v-img>
      <v-row class="mt-1">
        <v-col class="desc">
          <v-chip class="ma-2" color="accentSec" text-color="secondary">
            <v-icon class="me-2" color="secondary" small
              >mdi-account-group-outline</v-icon
            >
            {{ getDetailCourse.count_employee + " Peserta" }}
          </v-chip>
          <v-chip class="ma-2" color="accentSec" text-color="secondary">
            <v-icon class="me-2" color="secondary" small
              >mdi-file-document-outline</v-icon
            >
            {{ getDetailCourse.count_modules + " Modul" }}
          </v-chip>
          <!-- DESC -->
          <h1>
            <b>{{ getDetailCourse.title }}</b>
          </h1>
          <v-row class="ma-auto">
            <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              half-increments
              dense
              size="15"
              class="my-auto pt-0"
            ></v-rating>
            <span class="black--text text-caption ml-1 my-auto pt-1">
              {{ rating }}
            </span>
            <span class="grey--text text-caption ml-2 my-auto pt-1"
              >(15 Penilaian)</span
            >
          </v-row>
          <br />
          <v-btn
            class="text-capitalize"
            depressed
            color="primary"
            dense
            @click="() => this.$router.push(`detail/${getDetailCourse.id}`)"
          >
            <v-icon class="me-2" color="white" small
              >mdi-play-circle-outline</v-icon
            >
            Pelajari Kursus
          </v-btn>
          <v-btn class="ml-3 text-capitalize" depressed color="secondary" dense>
            <v-icon class="me-2" color="white" small
              >mdi-file-document-outline</v-icon
            >
            Unduh Sertifikat
          </v-btn>
          <h3 class="black--text mt-6"><b>Deskripsi Khusus</b></h3>
          <p class="gray--text">
            {{ getDetailCourse.description }}
          </p>
          <!-- REVIEW -->
          <h3 class="black--text mt-4"><b>Apa yang mereka katakan?</b></h3>
          <v-col
            class="px-0"
            v-for="rating in getDetailCourse.rating_reviews"
            :key="rating.id"
          >
            <v-card class="ml-0" width="100%" flat>
              <v-card-text class="pr-0">
                <v-row class="ma-auto mb-2">
                  <v-rating
                    v-model="rating.rating"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    dense
                    size="15"
                    class="my-auto pt-0"
                  ></v-rating>
                  <span class="black--text text-caption ml-1 my-auto pt-1">{{
                    rating.rating
                  }}</span>
                </v-row>
                <div class="pr-4">
                  {{ `“${rating.reviews}”` }}
                </div>
                <v-card-actions class="pa-0 pt-4">
                  <v-list-item two-line class="mr-0 pr-0">
                    <v-spacer></v-spacer>
                    <v-img
                      rounded
                      max-width="41"
                      color="secondary"
                      src="@/assets/bagas.png"
                    >
                    </v-img>
                    <v-list-item-content class="ml-3">
                      <v-list-item-title class="text-subtitle-1"
                        ><b>{{ rating.name }}</b></v-list-item-title
                      >
                      <v-list-item-subtitle class="text-caption">{{
                        rating.email
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
          <div class="text-center">
            <v-btn color="primary" class="text-capitalize my-auto mt-6"
              >Tampilkan Lainnya</v-btn
            >
          </div>
        </v-col>
        <!-- BAR -->
        <v-col class="bar">
          <h3><b class="black--text">Modul Kursus</b></h3>
          <ModulBar />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ModulBar from "@/components/ModulBar.vue";
import Back from "@/components/BackButton.vue";
export default {
  data() {
    return {
      rating: 4.7,
    };
  },
  components: { ModulBar, Back },
  computed: {
    getDetailCourse() {
      return this.$store.state.course.detailCourse;
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch("course/getDetailCourse");
  },
};
</script>

<style scoped>
.desc {
  max-width: 640px;
}
.bar {
  max-width: 394px;
}
</style>
