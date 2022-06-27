<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="d-flex mx-auto my-auto header">
          <div>
            <h2>Kursus</h2>
            <p class="text-caption">Lihat daftar kursus yang di perusahaanmu</p>
          </div>
          <v-spacer></v-spacer>
          <v-btn
            class="text-capitalize"
            color="primary"
            depressed
            to="/course/add"
          >
            <v-icon small class="me-2">mdi-plus</v-icon>
            tambah kursus
          </v-btn>
        </div>
        <div class="cari mt-6">
          <v-row>
            <v-col cols="6">
              <v-card class="">
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
              <v-card class="border-lg">
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
        <div class="listkursus mt-6">
          <v-row>
            <v-col
              md="4"
              lg="4"
              sm="6"
              v-for="list in listkursus"
              :key="list.id"
            >
              <v-card>
                <v-img :src="list.img" height="100"></v-img>
                <v-card-subtitle class="font-weight-bold black--text">
                  {{ list.judul }}
                </v-card-subtitle>
                <v-card-text>
                  {{ list.deskripsi | truncate(63, "...") }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    plain
                    class="text-capitalize"
                    width="100%"
                    small
                    to="/course/detail"
                  >
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
export default {
  name: "CourseView",
  setup() {},
  data() {
    return {
      listkursus: [
        {
          id: 1,
          img: "http://placehold.jp/50x50.png",
          judul: "Basic HTML",
          deskripsi:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ratione culpa ipsum perferendis impedit possimus facilis dolores temporibus molestias? Veritatis.",
        },
        {
          id: 2,
          img: "http://placehold.jp/50x50.png",
          judul: "Basic CSS",
          deskripsi:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ratione culpa ipsum perferendis impedit possimus facilis dolores temporibus molestias? Veritatis.",
        },
        {
          id: 3,
          img: "http://placehold.jp/50x50.png",
          judul: "Junior Javascript Mastery",
          deskripsi:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ratione culpa ipsum perferendis impedit possimus facilis dolores temporibus molestias? Veritatis.",
        },
        {
          id: 4,
          img: "http://placehold.jp/50x50.png",
          judul: "Intermedite Javascript Mastery",
          deskripsi:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ratione culpa ipsum perferendis impedit possimus facilis dolores temporibus molestias? Veritatis.",
        },
        {
          id: 5,
          img: "http://placehold.jp/50x50.png",
          judul: "Senior Javascript Mastery",
          deskripsi:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ratione culpa ipsum perferendis impedit possimus facilis dolores temporibus molestias? Veritatis.",
        },
        {
          id: 6,
          img: "http://placehold.jp/50x50.png",
          judul: "Dasar ReactJS",
          deskripsi:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ratione culpa ipsum perferendis impedit possimus facilis dolores temporibus molestias? Veritatis.",
        },
      ],
    };
  },
  methods: {},
  created() {
    document.title = "Course";
  },
  filters: {
    truncate: (text, length, suffix) => {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
};
</script>
