<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <v-form v-model="valid" ref="form" @submit.prevent="btnRegister">
            <h4 class="my-3 pointer" @click="goHome"><logo /></h4>
            <h1>Informasi Dirimu</h1>
            <p class="caption">Lengkapi form dibawah ini dengan data kamu</p>
            <label for="" class="text-body-2 font-weight-bold">
              Nama Lengkap
            </label>
            <v-text-field
              placeholder="Masukan Nama Lengkap"
              :rules="nameValidation"
              v-model="user.full_name"
              outlined
              dense
              ref="name_admin"
            ></v-text-field>
            <label for="" class="text-body-2 font-weight-bold">
              Nomor Handphone
            </label>
            <v-text-field
              :rules="nameValidation"
              outlined
              v-model="user.phone_number"
              dense
              prefix="+62"
              ref="phone_number"
              type="number"
            ></v-text-field>
            <label for="" class="text-body-2 font-weight-bold">
              Alamat Lengkap
            </label>
            <v-text-field
              placeholder="Masukan Alamat Lengkap"
              :rules="nameValidation"
              v-model="user.address"
              outlined
              ref="address_admin"
              :type="alamat ? 'text' : 'text'"
              dense
            ></v-text-field>
            <label for="" class="text-body-2 font-weight-bold">
              Alamat Email
            </label>
            <v-text-field
              placeholder="Masukan Email"
              :rules="emailValidation"
              v-model="user.email"
              outlined
              ref="email_admin"
              dense
              :type="email ? 'text' : 'text'"
            ></v-text-field>
            <label for="" class="text-body-2 font-weight-bold">
              Kata Sandi
            </label>
            <v-text-field
              placeholder="Masukan Kata Sandi"
              outlined
              dense
              v-model="user.password"
              :rules="passwordValidation"
              :append-icon="password ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="password = !password"
              :type="password ? 'text' : 'password'"
            >
            </v-text-field>
            <label for="" class="text-body-2 font-weight-bold">
              Konfirmasi Sandi
            </label>
            <v-text-field
              placeholder="Masukan Konfirmasi Sandi"
              outlined
              dense
              v-model="dataConfirmPassword"
              :rules="confirmPasswordValidation"
              :append-icon="passwordConfirm ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="passwordConfirm = !passwordConfirm"
              :type="passwordConfirm ? 'text' : 'password'"
            >
            </v-text-field>
            <v-checkbox
              color="#286F6C"
              v-model="checkbox"
              class="my-0 mx-0"
              :rules="[(v) => !!v || 'Anda harus menyetujui untuk melanjutkan']"
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
          </v-form>
          <v-overlay :value="isLoading">
            <loader />
          </v-overlay>
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
// import VuePhoneNumberInput from "vue-phone-country-code";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Logo from "@/components/Logo.vue";
import loader from "@/components/Loader.vue";
import axios from "axios";
export default {
  name: "InvitationUserView",
  components: { Logo, loader },
  setup() {},
  data() {
    return {
      regisimage: require("@/assets/imageregis.png"),
      user: {
        company_id: "",
        full_name: "",
        specialization_id: "",
        role: "",
        phone_number: "",
        email: "",
        password: "",
        address: "",
      },
      dataConfirmPassword: "",
      formvalid: false,
      checkbox: false,
      valid: true,
      nama: false,
      email: false,
      nomorhp: false,
      alamat: false,
      password: false,
      passwordConfirm: false,

      nameValidation: [(name) => !!name || "Tidak boleh kosong"],
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
          cpassword === this.user.password ||
          "Password tidak cocok, silahkan periksa kembali",
      ],
      emailValidation: [
        (email) => !!email || "Tidak boleh kosong",
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
    isLoading() {
      return this.$store.state.employee.loading;
    },
    form() {
      return {
        name_company: this.user.name_company,
        address_company: this.user.address_company,
        sector: this.user.sector,
        website: this.user.website,
        name_admin: this.user.name_admin,
        phone_number: this.user.phone_number,
        address_admin: this.user.address_admin,
        email_admin: this.user.email_admin,
      };
    },
  },
  mounted() {
    this.fetchRegisterUser();
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.formvalid = !this.formvalid;
    },
    validate() {
      this.formvalid = !this.formvalid;
      this.$refs.form.resetValidation();
    },
    btnRegister() {
      this.$store.dispatch("employee/fetchRegisterEmployee", this.user);
    },
    onButtonClick() {
      window.addEventListener("focus", () => {});
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      console.log(e.target.files[0]);
      this.user.logo = e.target.files[0];
    },
    async fetchRegisterUser() {
      const response = await axios.get(
        `https://api.rubick.tech/v1/invitation?link=${this.$route.query.link}`
      );
      if (response.status >= 200 || response.status < 400) {
        console.log(response.data.data);
        this.user.company_id = response.data.data.company_id;
        this.user.specialization_id = response.data.data.id;
      } else console.log(response);
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
