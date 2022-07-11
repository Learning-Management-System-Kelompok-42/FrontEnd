<template>
    <v-main class="ma-5 ml-10">
      <v-container>
<!-- HEAD -->
      <back/>
      <p class="text-h6 mt-2 mb-2 primary--text"><b>Profil Saya</b></p>
      <p>Masukkan informasi valid mengenai dirimu</p>
<!-- EDIT -->
      <v-col class="px-0" cols="12">
        <v-card class="px-4 py-3">
            <p class="mb-1">Foto Profil</p>
          <div class="d-flex">
          <v-img
                :src="url"
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
                <p class="text-caption pt-1">Format file jpg, jpeg, png dengan ukuran maksimal 500 kb</p>
              </v-col>
            </div>
          <p>Nama Lengkap</p>
          <v-text-field
           outlined
           dense
           depressed
          ></v-text-field>
          <p>Alamat Email</p>
          <v-text-field
           outlined
           dense
          ></v-text-field>
          <p>Nomor Telepon</p>
          <v-text-field
           outlined
           dense
          ></v-text-field>
          <p>Alamat Lengkap</p>
          <v-textarea
           auto-grow
           outlined
           dense
           rows="4"
           row-height="30"
          ></v-textarea>
          <v-card-actions>
                <v-spacer/>
                <v-btn
                color="primary"
                @click="dialog= false"
                class="text-capitalize my-auto mb-4"
                >
                <v-icon class="me-2 my-auto" small rounded>mdi-checkbox-outline</v-icon>
                Simpan Perubahan
                </v-btn>
            </v-card-actions>
        </v-card> 
      </v-col>
      </v-container>
    </v-main>
</template>
<script>
import back from "@/components/BackButton.vue"
export default {
    data(){
    return{
      logo : null,
      url : " ",
    }
  },
  computed: {
    buttonText() {
      return this.logo ? this.logo.name : "";
    },
  },
  methods:{
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
  components : {back}

}
</script>