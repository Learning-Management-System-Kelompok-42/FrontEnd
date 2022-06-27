<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <v-form v-model="valid" ref="form" @submit.prevent="btnRegister">
            <div class="form" v-if="!form">
              <h4 class="my-3 pointer" @click="goHome"><logo /></h4>
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
                v-model="user.name_company"
                dense
              ></v-text-field>
              <v-text-field
                label="Alamat Perusahaan"
                :rules="nameValidation"
                v-model="user.address_company"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Bidang Perusahaan"
                v-model="user.sector"
                :rules="nameValidation"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Website Perusahaan"
                outlined
                v-model="user.website"
                dense
              ></v-text-field>
              <v-toolbar
                class="inputPicture"
                flat
                outlined
                dense
                rounded
                color="#f3f8f6"
              >
                <v-btn
                  small
                  color="#484848"
                  class="text-capitalize 286F6C--text"
                  depressed
                  outlined
                  @click="onButtonClick"
                >
                  Pilih File
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
                  color="#286F6C"
                  depressed
                  large
                  @click="validate"
                >
                  <v-icon class="me-3">mdi-chevron-right</v-icon>
                  Selanjutnya
                </v-btn>
              </div>
            </div>
            <div class="form2" v-else>
              <v-btn
                small
                dense
                plain
                outlined
                class="text-capitalize mb-4"
                color="#286F6C"
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
                v-model="user.name_admin"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Nomor Handphone"
                :rules="nameValidation"
                outlined
                v-model="user.phone_number"
                dense
                type="number"
              ></v-text-field>
              <v-text-field
                label="Alamat Lengkap"
                :rules="nameValidation"
                v-model="user.address_admin"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Email Perusahaan"
                :rules="emailValidation"
                v-model="user.email_admin"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Kata Sandi"
                outlined
                dense
                v-model="user.password_admin"
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
                color="#286F6C"
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
                  color="#286F6C"
                  depressed
                  large
                  type="submit"
                  @click="btnRegister"
                >
                  <v-icon class="me-3" small>
                    mdi-checkbox-marked-outline
                  </v-icon>
                  Daftar sekarang
                </v-btn>
              </div>
            </div>
          </v-form>
        </v-container>
      </v-col>
      <v-col cols="5" class="pa-0">
        <v-img
          class="imgfull"
          :src="regisimage"
          height="100%"
          width="100%"
          :aspect-ratio="0.8"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
export default {
  components: { Logo },
  setup() {},
  data() {
    return {
      regisimage: require("@/assets/imageregis.png"),
      user: {
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
      },
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
          cpassword === this.user.password_admin ||
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
  created() {
    document.title = "Edemia | Register";
  },
  computed: {
    buttonText() {
      return this.user.logo ? this.user.logo.name : "";
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.form = !this.form;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.form = !this.form;
      }
    },
    btnRegister() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("user/fetchRegister", this.user);
      }
    },
    onButtonClick() {
      window.addEventListener("focus", () => {});
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      console.log(e.target.files[0]);
      this.user.logo = e.target.files[0];
    },
  },
};
</script>
<style>
.pointer {
  cursor: pointer;
}
.imgfull {
  background-size: 100% 100%;
}
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
