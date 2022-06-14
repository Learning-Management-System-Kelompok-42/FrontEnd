<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="contain">
          <h4 class="mb-5">LMS</h4>
          <h1>Masuk</h1>
          <p>
            Lengkapi form dibawah ini dengan menggunakan data Anda yang valid
          </p>
          <v-form v-model="valid" ref="form" @submit.prevent="btnLogin">
            <v-text-field
              label="Email Perusahaan"
              :rules="emailValidation"
              outlined
              dense
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="Kata Sandi"
              outlined
              dense
              v-model="dataPassword"
              :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="password = !password"
              :type="password ? 'text' : 'password'"
            >
            </v-text-field>
            <span class="d-flex">
              <v-checkbox class="my-0 mx-0" label="Ingat Saya"> </v-checkbox>
            </span>
            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-btn
                class="text-capitalize white--text mt-2"
                color="#484848"
                depressed
                type="submit"
              >
                Masuk
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-col>
      <v-col cols="5">
        <v-img
          src="http://placehold.jp/20x20.png"
          width="100%"
          height="560"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      valid: true,
      email: "",
      dataPassword: "",
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
  methods: {
    btnLogin() {
      this.$store.dispatch("user/fetchLogin", {
        email: this.email,
        password: this.dataPassword,
      });
    },
  },
};
</script>
<style>
.contain {
  margin-top: 50px !important;
  width: 400px !important;
}
.body {
  margin: 0;
}
</style>
