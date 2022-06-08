<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <h4 class="my-3">LMS</h4>
          <h1>Daftarkan Perusahaanmu</h1>
          <p class="caption">
            Lengkapi form dibawah ini dengan menggunakan data Anda yang valid
          </p>
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
            class="my-0 mx-0"
            label="Saya setuju dengan syarat dan ketentuan yang berlaku"
          >
          </v-checkbox>
          <div class="btnDiv d-flex">
            <v-spacer></v-spacer>
            <v-btn
              class="text-capitalize white--text mt-5"
              color="#484848"
              depressed
            >
              Selanjutnya
              <v-icon class="ms-3">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-col>
      <v-col cols="5">
        <v-img
          src="http://placehold.jp/20x20.png"
          width="100%"
          height="100%"
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
