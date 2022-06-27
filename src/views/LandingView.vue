<template>
  <div>
    <v-container>
      <v-app-bar flat elevate-on-scroll class="mt-0" fixed>
        <v-container class="d-flex">
          <v-toolbar-title>
            <logo />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-list class="cb me-3 pa-0" flat dense nav tile color="#f3f8f6">
            <v-list-item-group mandatory class="d-flex">
              <!-- <v-item v-slot="{ active }"> -->
              <v-list-item
                color="primary"
                class="pa-0 ma-0"
                v-for="(list, index) in navlist"
                :key="index"
              >
                <v-list-item-title
                  class="mx-2 my-2 link"
                  v-text="list.text"
                  @click="goto(list.to)"
                >
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="">
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
              color="primary"
              class="text-capitalize"
              to="/masuk"
            >
              Masuk
            </v-btn>
          </div>
        </v-container>
      </v-app-bar>
      <div class="hero" ref="hero">
        <v-row class="mt-6">
          <v-col class="mt-6">
            <div class="textLeft mt-6">
              <h1 class="text-capitalize primary--text">
                tingkatkan kemampuan para pekerjamu
              </h1>
              <p class="mt-6 text-caption pe-6">
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
            <div class="mt-12">
              <v-img
                :src="image"
                alt="Image"
                width="300"
                height="360"
                class="image rounded-lg"
              ></v-img>
              <v-card class="free d-flex rounded-lg" width="266" height="107">
                <v-avatar size="62" color="#B3F0DD" class="mx-3 my-auto">
                  <v-img :src="wallet" width="70" height="70"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="mb-0 pb-0">100% Gratis</v-card-title>
                  <div>
                    <v-card-subtitle class="text-caption ps-4 pt-0">
                      Semua layanan dapat digunakan dengan gratis
                    </v-card-subtitle>
                  </div>
                </div>
              </v-card>
              <v-card class="rating rounded-lg" width="158" height="91">
                <div>
                  <v-card-title class="mb-0 pb-0 text-body-1 font-weight-bold"
                    >Penilaian</v-card-title
                  >
                  <div class="d-flex">
                    <v-rating
                      class="mx-3"
                      dense
                      readonly
                      color="#FDB63F"
                      :value="4.6"
                      half-increments
                      size="12"
                    ></v-rating>
                    <span class="gray7--text">4.6</span>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="companyCourse py-6 my-6" ref="fitur">
        <p class="caption font-weight-bold my-0 py-0 warning--text">
          Kenapa Harus Edemia
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
              <v-avatar size="62" color="#B3F0DD" class="ms-4 mt-2">
                <v-img
                  class="imgcard"
                  :src="course.img"
                  alt="Image"
                  width="70"
                  height="70"
                >
                </v-img>
              </v-avatar>
              <v-card-title
                class="text-body-1 font-weight-bold text-capitalize"
              >
                {{ course.title }}
              </v-card-title>
              <v-card-subtitle class="#8C8C8C--text text-caption">{{
                course.description
              }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="partner my-6 pt-6" ref="company">
        <p class="caption text-capitalize my Logo-0 py-0 warning--text">
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
      <div class="frequentlyAsk mt-6 mb-6" ref="faq">
        <p
          class="caption bold warning--text text-center text-capitalize mt-6 mb-0 pt-6"
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
            <v-expansion-panel-content color="#D8F7EB" class="caption">
              {{ question.desc }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="joinNow mt-6 pt-6 text-center">
        <v-card class="pa-6" flat color="#D8F7EB">
          <v-container>
            <h1 class="text-capitalize">
              tunggu apalagi? mulai<br />
              <span class="wrap-text">gabung sekarang</span>
            </h1>
            <p class="text-caption py-4">
              Bantu pekerejamu untuk berkembang dengan memberikan tempat belajar
              yang sesuai dengan<br />
              bidang mereka
            </p>
          </v-container>
          <v-btn
            depressed
            class="text-capitalize text-caption"
            color="warning"
            to="daftar"
          >
            bergabung disini
          </v-btn>
        </v-card>
      </div>
      <v-footer class="mt-6" color="#F3F8F6">
        <v-row>
          <v-col cols="4">
            <div class="logo">
              <logo />
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
import logo from "@/components/Logo.vue";
export default {
  components: { logo },
  data() {
    return {
      border: require("@/assets/borderluar.png"),
      image: require("@/assets/contentborder.png"),
      wallet: require("@/assets/Wallet.png"),
      show: true,
      selectIndex: null,
      showText: false,
      navlist: [
        {
          to: "hero",
          text: "Beranda",
        },
        {
          to: "fitur",
          text: "Fitur",
        },
        {
          to: "company",
          text: "Perusahaan",
        },
        {
          to: "faq",
          text: "FAQ",
        },
      ],
      listCourse: [
        {
          img: require("@/assets/MultipleDevices.png"),
          title: "Akses Mudah",
          description:
            "Kami menyediakan layanan yang poewrful yang dapat diakses melalui platform mobil ataupun website",
        },
        {
          img: require("@/assets/Certification.png"),
          title: "Sertifikat",
          description:
            "Buat kursus untuk dipelajari oleh pekerjamu, kemudian berikan mereka sertifikat sebagai apresiasi",
        },
        {
          img: require("@/assets/Wallet.png"),
          title: "100% gratis",
          description:
            "Semua layanan yang kami sediakan dapat digunakan dengan gratis dan tanpa biaya sepeserpun",
        },
        {
          img: require("@/assets/Indonesia.png"),
          title: "produk lokal",
          description:
            "Produk ini dibuat dan dikelola sepenuhnya oleh sumber daya manusia dari negara lokal Indonesia",
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
  created() {
    document.title = "Edemia";
  },
  methods: {
    goto(refName) {
      let element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo({ left: 0, top: top, behavior: "smooth" });
    },
    goHome() {
      this.$router.push("/");
    },
  },
  setup() {},
};
</script>
<style>
.rating {
  margin-top: -300px;
  margin-left: 100px;
  margin-bottom: 250px;
}
.free {
  margin-top: -130px !important;
  margin-left: 200px !important;
}
.image {
  margin-left: 150px;
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
<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #858585 !important;
}
</style>
