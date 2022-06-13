<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <v-btn
            dense
            plain
            outlined
            class="text-capitalize"
            color="#484848"
            @click="
              () => {
                this.$router.go(-1);
              }
            "
          >
            <v-icon>mdi-chevron-left</v-icon>
            Kembali
          </v-btn>
          <h1>Informasi Penanggung Jawab</h1>
          <p class="caption">
            Lengkapi form dibawah ini dengan data penanggung jawab perusahaan
          </p>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Nama Lengkap"
              :rules="nameValidation"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Nomor Handphone"
              :rules="nameValidation"
              outlined
              dense
              type="number"
            ></v-text-field>
            <v-text-field
              label="Alamat Lengkap"
              :rules="nameValidation"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Email Perusahaan"
              :rules="emailValidation"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Kata Sandi"
              outlined
              dense
              v-model="dataPassword"
              :rules="passwordValidation"
              :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="password = !password"
              :type="password ? 'text' : 'password'"
            >
            </v-text-field>
            <v-text-field
              label="Konfirmasi Kata Sandi"
              outlined
              dense
              v-model="dataConfirmPassword"
              :rules="confirmPasswordValidation"
              :append-icon="passwordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="passwordConfirm = !passwordConfirm"
              :type="passwordConfirm ? 'text' : 'password'"
            >
            </v-text-field>
            <v-checkbox
              v-model="checkbox"
              class="my-0 mx-0"
              :rules="[(v) => !!v || 'Anda harus menyetujui untuk melanjutkan']"
              label="Saya setuju dengan syarat dan ketentuan yang berlaku"
            >
            </v-checkbox>
          </v-form>

          <div class="btnDiv d-flex">
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="text-capitalize white--text mt-5"
              color="#484848"
              depressed
              @click="validate"
            >
              Daftar sekarang
            </v-btn>
          </div>
        </v-container>
      </v-col>
      <v-col cols="5">
        <v-img
          class="imgfull"
          src="http://placehold.jp/1280x2850.png"
          max-height="720"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  setup() {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
  data() {
    return {
      checkbox: false,
      valid: true,
      dataPassword: "",
      dataConfirmPassword: "",
      password: false,
      passwordConfirm: false,
      nameValidation: [(name) => !!name || "Silahkan Masukkan Nama Anda"],
      passwordValidation: [
        (password) => !!password || "Silahkan masukkan password anda",
        (password) =>
          /(?=.*\d)(?=.*[a-z]).{8,}/.test(password) ||
          "Password minimal 8 karakter dan Memiliki nomor",
      ],
      confirmPasswordValidation: [
        (cpassword) => !!cpassword || "Konfirmasi password anda",
        (cpassword) =>
          /(?=.*\d)(?=.*[a-z]).{8,}/.test(cpassword) ||
          "Password minimal 8 karakter",
        (cpassword) =>
          cpassword === this.dataPassword ||
          "Password tidak cocok, silahkan periksa kembali",
      ],
      emailValidation: [
        (email) => !!email || "Masukkan email anda",
        (email) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ) || "Pastikan E-mail Anda Benar",
      ],
    };
  },
};
</script>
<style>
.cont {
  width: 500px !important;
}
.body {
  margin: 0;
}
</style>
