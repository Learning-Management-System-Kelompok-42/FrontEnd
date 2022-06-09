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
          <div class="my-6">
            <h1>Informasi Perusahaan</h1>
            <p class="caption">
              Lengkapi form dibawah ini dengan data perusahaan anda
            </p>
          </div>
          <v-text-field
            label="Nama Perusahaan"
            :rules="nameValidation"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Alamat Perusahaan"
            :rules="nameValidation"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Bidang Perusahaan"
            :rules="nameValidation"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Website Perusahaan"
            :rules="emailValidation"
            outlined
            dense
          ></v-text-field>
          <v-toolbar flat outlined dense rounded>
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
          <!-- <v-file-input outlined dense></v-file-input> -->

          <v-checkbox
            class="my-0 mx-0"
            label="Saya setuju dengan syarat dan ketentuan yang berlaku"
          >
          </v-checkbox>
          <div class="btnDiv d-flex">
            <v-spacer></v-spacer>
            <v-btn
              to="/admin"
              class="text-capitalize white--text mt-5"
              color="#484848"
              depressed
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
  data() {
    return {
      selectedFile: null,
      defaultText: "",
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
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultText;
    },
  },
  methods: {
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
.cont {
  width: 500px !important;
}
.body {
  margin: 0;
}
</style>
