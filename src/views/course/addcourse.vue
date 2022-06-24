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
          <div class="modulquiz pa-5 my-3">
            <div class="header-quiz">
              <div class="d-flex my-3">
                <h4>Quiz</h4>
                <v-spacer></v-spacer>
                <v-btn plain small class="text-capitalize" color="danger">
                  <v-icon class="me-2" small> mdi-plus-thick </v-icon>
                  tambah soal quiz
                </v-btn>
              </div>
              <div class="soal">
                <div class="d-flex">
                  <v-card
                    color="#D8F7EB"
                    height="55"
                    width="50"
                    class="mx-3"
                    flat
                  >
                    <v-row align="center" justify="center" class="ma-auto">
                      <v-card-title class="text-body-1 font-weight-bold">
                        1
                      </v-card-title>
                    </v-row>
                  </v-card>
                  <v-textarea
                    auto-grow
                    outlined
                    placeholder="Tuliskan Pertanyaan Disini"
                  ></v-textarea>
                </div>
                <div class="answer ms-6">
                  <v-container class="mx-6 px-6">
                    <div class="d-flex">
                      <v-card
                        color="#FEEBD8"
                        height="55"
                        width="50"
                        class="mx-3"
                        flat
                      >
                        <v-row align="center" justify="center" class="ma-auto">
                          <v-card-title
                            class="text-body-1 font-weight-bold danger--text"
                          >
                            A
                          </v-card-title>
                        </v-row>
                      </v-card>
                      <v-text-field
                        hide-details=""
                        placeholder="Masukan Opsi A"
                        outlined
                      ></v-text-field>
                    </div>
                  </v-container>
                  <v-container class="mx-6 px-6">
                    <div class="d-flex">
                      <v-card
                        color="#FEEBD8"
                        height="55"
                        width="50"
                        class="mx-3"
                        flat
                      >
                        <v-row align="center" justify="center" class="ma-auto">
                          <v-card-title
                            class="text-body-1 font-weight-bold danger--text"
                          >
                            B
                          </v-card-title>
                        </v-row>
                      </v-card>
                      <v-text-field
                        hide-details=""
                        placeholder="Masukan Opsi B"
                        outlined
                      ></v-text-field>
                    </div>
                  </v-container>
                  <v-container class="mx-6 px-6">
                    <div class="d-flex">
                      <v-card
                        color="#FEEBD8"
                        height="55"
                        width="50"
                        class="mx-3"
                        flat
                      >
                        <v-row align="center" justify="center" class="ma-auto">
                          <v-card-title
                            class="text-body-1 font-weight-bold danger--text"
                          >
                            C
                          </v-card-title>
                        </v-row>
                      </v-card>
                      <v-text-field
                        hide-details=""
                        placeholder="Masukan Opsi C"
                        outlined
                      ></v-text-field>
                    </div>
                  </v-container>
                  <v-container class="mx-6 px-6">
                    <div class="d-flex">
                      <v-card
                        color="#FEEBD8"
                        height="55"
                        width="50"
                        class="mx-3"
                        flat
                      >
                        <v-row align="center" justify="center" class="ma-auto">
                          <v-card-title
                            class="text-body-1 font-weight-bold danger--text"
                          >
                            D
                          </v-card-title>
                        </v-row>
                      </v-card>
                      <v-text-field
                        hide-details=""
                        placeholder="Masukan Opsi D"
                        outlined
                      ></v-text-field>
                    </div>
                  </v-container>
                  <v-container class="mx-6 px-6">
                    <v-select
                      class="ms-3"
                      outlined
                      label="Opsi Jawaban Benar"
                      append-icon="mdi-chevron-down"
                    ></v-select>
                  </v-container>
                </div>
              </div>
            </div>
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
