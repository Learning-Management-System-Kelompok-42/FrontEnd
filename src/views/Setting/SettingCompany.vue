<template>
  <v-app>
    <v-main class="ma-5 ml-10">
      <v-container>
        <!-- HEAD -->
        <router-link
          :to="'/setting'"
          style="text-decoration: none; color: black"
        >
          <v-btn class="text-capitalize pl-2 pr-3" depressed>
            <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
            Kembali
          </v-btn>
        </router-link>
        <p class="text-h6 mt-6 mb-2 primary--text"><b>Perusahaan Saya</b></p>
        <p>Masukkan informasi valid mengenai perusahaanmu</p>
        <!-- EDIT -->
        <v-col class="px-0" cols="12">
          <v-card class="px-4 py-3">
            <p>Nama Perusahaan</p>
            <v-text-field
              outlined
              dense
              depressed
              v-model="getDataCompany.name"
            ></v-text-field>
            <p>Bidang Perusahaan</p>
            <v-text-field
              outlined
              dense
              v-model="getDataCompany.sector"
            ></v-text-field>
            <p>Website Perusahaan</p>
            <v-text-field
              outlined
              dense
              v-model="getDataCompany.website"
            ></v-text-field>
            <p>Alamat Perusahaan</p>
            <v-textarea
              auto-grow
              outlined
              dense
              rows="4"
              v-model="getDataCompany.address"
              row-height="30"
            ></v-textarea>
            <p class="mb-1">Logo Perusahaan</p>
            <div class="d-flex">
              <v-img
                :src="getDataCompany.logo"
                height="70"
                max-width="100"
                :aspect-ratio="1"
                class="me-3 mt-3"
              >
                <template v-slot:placeholder>
                  <v-card height="70" outlined>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-icon large>mdi-image-outline</v-icon>
                    </v-row>
                  </v-card>
                </template>
              </v-img>
              <v-col class="my-auto">
                <v-toolbar class="inputPicture" flat outlined dense rounded>
                  <v-btn
                    small
                    color="primary"
                    class="text-capitalize"
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
                <p class="text-caption pt-1">
                  Format file jpg, jpeg, png dengan ukuran maksimal 500 kb
                </p></v-col
              >
            </div>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" class="text-capitalize my-auto mb-4">
                <v-icon class="me-2 my-auto" small rounded
                  >mdi-checkbox-outline</v-icon
                >
                Simpan Perubahan
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      logo: null,
      url: " ",
      // namecompany: this.getDataCompany.name,
      // sectorcompany: this.getDataCompany.sector,
      // websitecompany: this.getDataCompany.website,
      // addresscompany: this.getDataCompany.address,
      // logocompany: this.getDataCompany
    };
  },
  watch: {},
  computed: {
    getDataCompany() {
      return this.$store.state.company.dataProfileCompany;
    },
    buttonText() {
      return this.logo ? this.logo.name : "";
    },
    getDataUser() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    onButtonClick() {
      window.addEventListener("focus", () => {});
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.logo = file;
      this.url = URL.createObjectURL(file);
    },
  },
  mounted() {
    this.$store.dispatch("company/getDataProfileCompany");
  },
};
</script>

<style></style>
