<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <h4 class="my-3">LMS</h4>
          <div class="my-6">
            <h1>Informasi Perusahaan</h1>
            <p class="caption">
              Lengkapi form dibawah ini dengan data perusahaan anda
            </p>
          </div>
          <v-form v-model="valid" ref="form">
            <div class="form">
              <v-text-field
                label="Nama Perusahaan"
                :rules="nameValidation"
                outlined
                v-model="name_company"
                dense
              ></v-text-field>
              <v-text-field
                label="Alamat Perusahaan"
                :rules="nameValidation"
                v-model="address_company"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Bidang Perusahaan"
                v-model="sector"
                :rules="nameValidation"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Website Perusahaan"
                outlined
                v-model="website"
                dense
              ></v-text-field>
              <v-toolbar class="inputPicture" flat outlined dense rounded>
                <v-btn
                  small
                  color="#484848"
                  class="text-capitalize white--text"
                  depressed
                  @click="onButtonClick"
                >
                  Upload File
                </v-btn>
                <input
                  type="file"
                  class="d-none"
                  accept="image/*"
                  ref="uploader"
                  @change="onFileChanged"
                />
                <p class="pt-3 ps-4">{{ buttonText }}</p>
              </v-toolbar>
            </div>
          </v-form>
          <div class="btnDiv d-flex">
            <v-spacer></v-spacer>
            <v-btn
              to="/daftar/admin"
              :disabled="!valid"
              class="text-capitalize white--text mt-5"
              color="#484848"
              depressed
              @click="validate"
            >
              Selanjutnya
              <v-icon class="ms-3">mdi-chevron-right</v-icon>
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
import { mapFields } from "vuex-map-fields";
export default {
  setup() {
    // const selectedFile = "";
    // return selectedFile;
  },
  data() {
    return {
      checkbox: false,
      valid: true,
      selectedFile: null,
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
  computed: {
    ...mapFields("perusahaan", [
      "dataCompany.name_company",
      "dataCompany.address_company",
      "dataCompany.sector",
      "dataCompany.website",
      "dataCompany.logo",
    ]),
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : "";
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    onButtonClick() {
      window.addEventListener("focus", () => {});
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      console.log(e.target.files[0]);
      this.selectedFile = e.target.files[0];
    },
  },
};
</script>
<style>
.inputPicture {
  border: 0.5px solid gray !important;
}
.cont {
  width: 500px !important;
}
.body {
  margin: 0;
}
</style>
