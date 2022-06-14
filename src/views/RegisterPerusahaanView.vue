<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <v-form v-model="valid" ref="form" @submit.prevent="btnRegister">
            <div class="form" v-if="!form">
              <h4 class="my-3">LMS</h4>
              <div class="my-6">
                <h1>Informasi Perusahaan</h1>
                <p class="caption">
                  Lengkapi form dibawah ini dengan data perusahaan anda
                </p>
              </div>
              <v-text-field
                label="Nama Perusahaan"
                :rules="nameCompanyValidation"
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
              <div class="btnDiv d-flex">
                <v-spacer></v-spacer>
                <v-btn
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
            </div>
            <div class="form2" v-else>
              <v-btn
                dense
                plain
                outlined
                class="text-capitalize"
                color="#484848"
                @click="goBack"
              >
                <v-icon>mdi-chevron-left</v-icon>
                Kembali
              </v-btn>
              <h1>Informasi Penanggung Jawab</h1>
              <p class="caption">
                Lengkapi form dibawah ini dengan data penanggung jawab
                perusahaan
              </p>
              <v-text-field
                label="Nama Lengkap"
                :rules="nameValidation"
                v-model="name_admin"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Nomor Handphone"
                :rules="nameValidation"
                outlined
                v-model="phone_number"
                dense
                type="number"
              ></v-text-field>
              <v-text-field
                label="Alamat Lengkap"
                :rules="nameValidation"
                v-model="address_admin"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Email Perusahaan"
                :rules="emailValidation"
                v-model="email_admin"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Kata Sandi"
                outlined
                dense
                v-model="password_admin"
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
                :rules="[
                  (v) => !!v || 'Anda harus menyetujui untuk melanjutkan',
                ]"
                label="Saya setuju dengan syarat dan ketentuan yang berlaku"
              >
              </v-checkbox>
              <div class="btnDiv d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!valid"
                  class="text-capitalize white--text mt-5"
                  color="#484848"
                  depressed
                  type="submit"
                  @click="btnRegister"
                >
                  Daftar sekarang
                </v-btn>
              </div>
            </div>
          </v-form>
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
  data() {
    return {
      name_company: "",
      address_company: "",
      sector: "",
      website: "",
      logo: null,
      name_admin: "",
      phone_number: "",
      address_admin: "",
      email_admin: "",
      password_admin: "",
      dataConfirmPassword: "",
      form: false,
      checkbox: false,
      valid: true,
      password: false,
      passwordConfirm: false,

      nameValidation: [(name) => !!name || "Silahkan Masukkan Nama Anda"],
      nameCompanyValidation: [
        (name) => !!name || "Silahkan Masukkan Nama Perushaan Anda",
      ],
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
          cpassword === this.password_admin ||
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
    buttonText() {
      return this.logo ? this.logo.name : "";
    },
  },
  methods: {
    goBack() {
      this.form = !this.form;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.form = !this.form;
      }
    },
    // async register() {
    //   const axios = require(axios).default;
    //   const response = await axios.post(
    //     "https://api-lms-42.herokuapp.com/v1/company/register",
    //     {
    //       data: {
    // name_company: this.name_company,
    // address_company: this.address_company,
    // sector: this.sector,
    // website: this.website,
    // logo: this.logo,
    // name_admin: this.name_admin,
    // phone_number: this.phone_number,
    // address_admin: this.address_admin,
    // email_admin: this.email_admin,
    // password_admin: this.password_admin,
    //       },
    //     },
    //     {
    //       headers: {
    //         Accept: "apllication/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   return response;
    // },
    btnRegister() {
      // let formData = new FormData();
      // formData.append("logo", this.logo);
      if (this.$refs.form.validate()) {
        const axios = require("axios").default;
        axios
          .post(
            "https://api-lms-42.herokuapp.com/v1/company/register",
            {
              name_company: this.name_company,
              address_company: this.address_company,
              sector: this.sector,
              website: this.website,
              logo: this.logo,
              name_admin: this.name_admin,
              phone_number: this.phone_number,
              address_admin: this.address_admin,
              email_admin: this.email_admin,
              password_admin: this.password_admin,
            },
            {
              headers: {
                Accept: "multipart/form-data",
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            this.$store.dispatch("user/fetchLogin", {
              email: this.email_admin,
              password: this.password_admin,
            });
          })
          .catch((error) => {
            console.error(error);
          });
        //   const options = {
        //     methods: "POST",
        //     URL: "",
        //     Headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
        //     },
        //     data: {},
        //   };
        //   axios
        //     .request(options)
        //     .then(function (response) {
        //       console.log(response.data);
        // this.$store.dispatch("user/fetchLogin", {
        //   email: this.email_admin,
        //   password: this.password_admin,
        // });
        //     })
        //     .catch(function (error) {
        //       console.error(error);
        //     });
      }
    },
    onButtonClick() {
      window.addEventListener("focus", () => {});
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      console.log(e.target.files[0]);
      this.logo = e.target.files[0];
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
