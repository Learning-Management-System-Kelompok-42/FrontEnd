<template>
  <div>
    <v-container>
      <div class="nav d-flex">
        <v-toolbar-title>LMS</v-toolbar-title>
        <v-spacer></v-spacer>
        <p class="mx-2 my-2 link" @click="goHome()">Home</p>
        <p class="mx-2 my-2 link">Features</p>
        <v-btn
          depressed
          color="primary"
          class="white--text mx-2 text-capitalize"
          to="/daftar"
        >
          Daftar
        </v-btn>
        <v-btn
          depressed
          outlined
          class="priamry--text text-capitalize"
          to="/masuk"
        >
          Masuk
        </v-btn>
      </div>
      <div class="hero">
        <v-row class="mt-6">
          <v-col class="mt-6">
            <div class="textLeft mt-6">
              <h1 class="text-capitalize">
                tingkatkan kemampuan para pekerjamu
              </h1>
              <p class="mt-6">
                Bantu mereka untuk berkembang dengan memberikan tempat belajar
                yang sesuai dengan bidang mereka
              </p>
              <v-btn
                depressed
                color="primary"
                class="white--text mt-6"
                to="/daftar"
              >
                <span class="text-capitalize"> Daftarkan Perusahaan </span>
              </v-btn>
            </div>
          </v-col>
          <v-col>
            <div class="imageRight">
              <v-img src="http://placehold.jp/50x50.png"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="companyCourse py-6 my-6">
        <p class="caption font-weight-bold my-0 py-0 danger--text">
          Kenapa Harus LMS
        </p>
        <v-row>
          <v-col cols="7">
            <h1 class="text-capitalize">
              kelola e-learning perusahaan dengan mudah
            </h1>
          </v-col>
          <v-col cols="5"></v-col>
        </v-row>
      </div>
      <div class="companyCourseList mb-6">
        <v-row>
          <v-col cols="3" v-for="(course, index) in listCourse" :key="index">
            <v-card hover outlined>
              <v-img
                class="ms-4 mt-2 imgcard"
                :src="course.img"
                width="50"
                height="50"
              >
              </v-img>
              <v-card-title>{{ course.title }}</v-card-title>
              <v-card-subtitle class="#8C8C8C--text">{{
                course.description
              }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="partner my-6 pt-6">
        <p class="caption text-capitalize my-0 py-0 danger--text">
          bagian dari kami
        </p>
        <v-row>
          <v-col cols="7">
            <h1 class="text-capitalize">perusahaan yang percaya dengan kami</h1>
          </v-col>
          <v-col cols="5"></v-col>
        </v-row>
        <div class="listPartner">
          <v-row>
            <v-col
              cols="2"
              v-for="(partner, index) in listPartner"
              :key="index"
            >
              <v-img :src="partner.img" width="120" height="50"></v-img>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="frequentlyAsk mt-6 mb-6">
        <p
          class="caption bold danger--text text-center text-capitalize mt-6 mb-0 pt-6"
        >
          kamu kebingungan?
        </p>
        <h1 class="text-capitalize text-center mb-5">
          pertanyaan yang sering ditanyakan
        </h1>

        <v-expansion-panels multiple hover flat>
          <v-expansion-panel
            v-for="(question, index) in listQuestion"
            :key="index"
            class="my-1 rounded-lg"
          >
            <v-expansion-panel-header class="font-weight-bold primary--text">
              {{ question.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content color="#EEEEEE" class="caption">
              {{ question.desc }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="joinNow mt-6 pt-6 text-center">
        <v-card class="pa-6" flat color="#E3F3F3">
          <v-container>
            <h1 class="text-capitalize">
              tunggu apalagi? mulai<br />
              <span class="danger--text wrap-text">gabung sekarang</span>
            </h1>
            <p class="text-caption py-4">
              Bantu pekerejamu untuk berkembang dengan memberikan tempat belajar
              yang sesuai dengan<br />
              bidang mereka
            </p>
          </v-container>
          <v-btn depressed class="text-capitalize" color="primary" to="daftar">
            gabung disini
          </v-btn>
        </v-card>
      </div>
      <v-footer class="mt-6" color="#F3F8F6">
        <v-row>
          <v-col cols="4">
            <div class="logo">
              <v-img
                src="http://placehold.jp/20x20.png"
                width="40"
                height="30"
                class="mb-3"
              >
              </v-img>
              <p class="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                tempore!
              </p>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="divider"></div>
          </v-col>
          <v-col cols="2">
            <div class="socmed">
              <h5 class="mb-3">Media Social</h5>
              <p class="caption mb-0">Facebook</p>
              <p class="caption mb-0">Instagram</p>
              <p class="caption mb-0">Telegram</p>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="help">
              <h5 class="mb-3">Bantuan</h5>
              <p class="caption mb-0">FAQ</p>
              <p class="caption mb-0">Email Support</p>
              <p class="caption mb-0">Term Of Service</p>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="develop">
              <h5 class="mb-3">Pengembang</h5>
              <p class="caption mb-0">Developer</p>
              <p class="caption mb-0">Kirim Masukan</p>
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      selectIndex: null,
      showText: false,
      listCourse: [
        {
          img: "http://placehold.jp/20x20.png",
          title: "Title Card 0",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sedullam, molestiae non quae cumque beatae.",
        },
        {
          img: "http://placehold.jp/20x20.png",
          title: "Title Card 1",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sedullam, molestiae non quae cumque beatae.",
        },
        {
          img: "http://placehold.jp/20x20.png",
          title: "Title Card 2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sedullam, molestiae non quae cumque beatae.",
        },
        {
          img: "http://placehold.jp/20x20.png",
          title: "Title Card 3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sedullam, molestiae non quae cumque beatae.",
        },
      ],
      listPartner: [
        {
          img: "http://placehold.jp/20x20.png",
        },
        {
          img: "http://placehold.jp/20x20.png",
        },
        {
          img: "http://placehold.jp/20x20.png",
        },
        {
          img: "http://placehold.jp/20x20.png",
        },
        {
          img: "http://placehold.jp/20x20.png",
        },
        {
          img: "http://placehold.jp/20x20.png",
        },
      ],
      listQuestion: [
        {
          id: 1,
          question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, velit?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eaque autem nisi eligendi incidunt voluptatem voluptas! Minus perspiciatis voluptatem qui pariatur odit animi, libero at enim reprehenderit error officia.",
        },
        {
          id: 2,
          question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, velit?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eaque autem nisi eligendi incidunt voluptatem voluptas! Minus perspiciatis voluptatem qui pariatur odit animi, libero at enim reprehenderit error officia.",
        },
        {
          id: 3,
          question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, velit?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eaque autem nisi eligendi incidunt voluptatem voluptas! Minus perspiciatis voluptatem qui pariatur odit animi, libero at enim reprehenderit error officia.",
        },
        {
          id: 4,
          question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, velit?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eaque autem nisi eligendi incidunt voluptatem voluptas! Minus perspiciatis voluptatem qui pariatur odit animi, libero at enim reprehenderit error officia.",
        },
        {
          id: 5,
          question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, velit?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eaque autem nisi eligendi incidunt voluptatem voluptas! Minus perspiciatis voluptatem qui pariatur odit animi, libero at enim reprehenderit error officia.",
        },
        {
          id: 6,
          question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, velit?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe eaque autem nisi eligendi incidunt voluptatem voluptas! Minus perspiciatis voluptatem qui pariatur odit animi, libero at enim reprehenderit error officia.",
        },
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  setup() {},
};
</script>
<style>
.imgcard {
  padding-top: 20px !important;
}
.link,
.detailAsk,
.socmed > p,
.develop > p,
.help > p {
  cursor: pointer;
}
.link:hover,
.socmed > p:hover,
.develop > p:hover,
.help > p:hover {
  color: rgb(136, 132, 132);
}
</style>
