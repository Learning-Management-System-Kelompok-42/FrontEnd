<template>
  <div>
    <v-container>
      <goback />
      <div class="header">
        <h2 class="text-capitalize">tambah kursus</h2>
        <p>Masukan data kursus baru yang ingin kamu buat</p>
      </div>
      <div class="detailkursus">
        <v-card class="pa-6">
          <h2 class="text-capitalize my-3">detail kursus</h2>
          <label class="text-capitalize font-weight-bold">judul kursus</label>
          <v-text-field
            placeholder="Masukan Judul Kursus"
            dense
            outlined
            clearable
          ></v-text-field>
          <label class="text-capitalize font-weight-bold">
            deskripsi kursus
          </label>
          <v-textarea
            outlined
            auto-grow
            placeholder="Tuliskan deskripsi singkat mengenai kursus ini"
          ></v-textarea>
          <div class="gambar d-flex">
            <v-img
              :src="url"
              height="70"
              max-width="100"
              :aspect-ratio="1"
              class="me-3 my-auto"
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
            <v-toolbar class="inputPicture" flat outlined dense rounded>
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
          </div>
        </v-card>
      </div>
      <div class="modulkursus my-5">
        <v-card class="pa-5">
          <div class="headermodul d-flex">
            <h2 class="text-capitalize">modul kursus</h2>
            <v-spacer></v-spacer>
            <v-btn plain class="text-capitalize danger--text" small>
              <v-icon small class="me-2">mdi-plus-thick</v-icon>
              tambah modul
            </v-btn>
          </div>
          <p class="text-capitalize font-weight-bold my-6">modul 1</p>
          <label class="text-capitalize font-weight-bold">nama modul</label>
          <v-text-field
            clearable
            placeholder="Masukan Nama Modul"
            outlined
            dense
          ></v-text-field>
          <div>
            <label class="text-capitalize font-weight-bold mt-4"
              >link slides materi</label
            >
            <v-text-field
              outlined
              clearable
              placeholder="Masukan Link Slides Materi"
              hint="Kosongkan bila tidak diperlukan"
              persistent-hint
              dense
            ></v-text-field>
          </div>
          <div class="mt-3">
            <label class="text-capitalize font-weight-bold">
              Link Video Materi
            </label>
            <v-text-field
              clearable
              dense
              outlined
              placeholder="Masukan Link Video Presentasi"
              hint="Kosongkan bila tidak diperlukan"
              persistent-hint
            ></v-text-field>
          </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<script>
import goback from "@/components/BackButton.vue";
export default {
  name: "AddCourseView",
  components: { goback },
  data() {
    return {
      gambarmodul: null,
      url: null,
    };
  },
  computed: {
    buttonText() {
      return this.gambarmodul ? this.gambarmodul.name : "";
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
      this.gambarmodul = file;
      this.url = URL.createObjectURL(file);
    },
  },
  setup() {},
};
</script>
