<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="contain">
          <h4 class="mb-5 pointer" @click="goHome"><logo /></h4>
          <h1>Selamat Datang</h1>
          <p>
            Lengkapi form dibawah ini dengan menggunakan data Anda yang valid
          </p>
          <v-form v-model="valid" ref="form" @submit.prevent="btnLogin">
            <v-text-field
              label="Email Perusahaan"
              :rules="emailValidation"
              outlined
              dense
              v-model="userlogin.email"
            ></v-text-field>
            <v-text-field
              label="Kata Sandi"
              outlined
              dense
              v-model="userlogin.password"
              :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="password = !password"
              :type="password ? 'text' : 'password'"
            >
            </v-text-field>
            <span class="d-flex">
              <v-checkbox class="my-0 mx-0" label="Ingat Saya" v-model="check">
              </v-checkbox>
            </span>
            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!valid"
                class="text-capitalize white--text mt-2"
                color="primary"
                depressed
                type="submit"
              >
                <v-icon small class="me-2"> mdi-login </v-icon>
                Masuk
              </v-btn>
              <v-overlay :value="isLoading">
                <loader />
              </v-overlay>
              <v-dialog v-model="error" width="500">
                <v-card>
                  <v-card-title> Terjadi Kesalahan </v-card-title>
                  <v-card-text> {{ messageeerror }} </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="text-capitalize"
                      color="primary"
                      text
                      @click="error = false"
                    >
                      Tutup
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-form>
        </v-container>
      </v-col>
      <v-col cols="5" class="pa-0">
        <v-img
          :src="loginimage"
          class="side"
          width="100%"
          max-height="100%"
          :aspect-ratio="15 / 18"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import logo from "@/components/Logo.vue";
// import axios from "axios";
import loader from "@/components/Loader.vue";
// import { mapState } from "vuex";
export default {
  setup() {},
  components: {
    loader,
    logo,
  },
  data() {
    return {
      error: false,
      messageeerror: "",
      loginimage: require("@/assets/imagelogin.png"),
      valid: true,
      check: false,
      userlogin: {
        email: "",
        password: "",
      },
      password: false,
      emailValidation: [
        (email) => !!email || "Masukkan email anda",
        (email) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Pastikan E-mail Anda Benar",
      ],
    };
  },
  created() {
    document.title = "Edemia | Login";
  },
  mounted() {
    console.log(this.isLoading);
    console.log(this.status);
  },
  computed: {
    isLoading() {
      return this.$store.state.user.isLoading;
    },
    status() {
      return this.$store.state.user.status;
    },
    getUserLogin() {
      return this.$store.state.user.userlogin;
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    // tutup(){
    //   this.error = false,
    //   this.$store.commit("user/setLoading", false)
    // },
    btnLogin() {
      if (!this.check) {
        this.$store.dispatch("user/setUserLogin", "");
        this.$store.dispatch("user/fetchLogin", this.userlogin);
      } else {
        this.$store.dispatch("user/setUserLogin", this.userlogin);
        this.$store.dispatch("user/fetchLogin", this.userlogin);
      }
      // if (this.status === "ERR_NETWORK") {
      //   this.error = true;
      //   this.messageeerror = "Internal Server Error";
      // } else if (this.status === "ERR_BAD_REQUEST") {
      //   this.error = true;
      //   this.messageeerror =
      //     "Email atau Sandi anda salah, pastikan anda memasukan data yang benar";
      // } else {

      // }
    },
  },
};
</script>
<style>
.pointer {
  cursor: pointer;
}
.side {
  background-size: 100% 100%;
}
.contain {
  padding: 0 !important;
  margin-top: 50px !important;
  width: 400px !important;
}
.body {
  margin: 0;
}
</style>
