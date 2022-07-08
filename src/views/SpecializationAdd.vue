<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn
          class="text-capitalize pl-2 pr-3"
          depressed
          to="/specialization"
          outlined
          color="primary"
          plain
          small
        >
          <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
          Kembali
        </v-btn>

        <div class="d-flex justify-start mt-2">
          <h3 class="primary--text">Tambah Spesialisasi</h3>
          <v-spacer />
        </div>
        <div>
          <p class="text-body-2 gray6--text">
            Masukkan data dari spesialisasi baru
          </p>
        </div>

        <!-- FILTER -->
        <div class="body">
          <v-card class="pa-3">
            <v-text-field
              label="Nama Spesialisasi"
              outlined
              dense
              v-model="nameSpecialization"
            >
            </v-text-field>
            <div class="d-flex" hidden>
              <v-text-field
                v-on:focus="$event.target.select()"
                ref="linkGenerate"
                label="Link"
                outlined
                dense
                v-model="getLink.link"
                readonly
                persistent-hint
                hint="Gunakan link diatas untuk mengundang employee ke spesialisasi ini"
              >
              </v-text-field>
              <v-btn
                color="primary"
                outlined
                class="text-capitalize ms-4"
                @click="salinTautan"
              >
                salin tautan
              </v-btn>
              <v-snackbar v-model="snackbar" :timeout="timeout" color="primary">
                Tautan berhasil di salin
              </v-snackbar>
              <v-snackbar
                v-model="snackbarSuccess"
                :timeout="timeout"
                color="primary"
              >
                Berhasil Membuat Spesialisasi </v-snackbar
              ><v-snackbar
                v-model="snackbarFailed"
                :timeout="timeout"
                color="primary"
              >
                Gagal, Terjadi Kesalahan
              </v-snackbar>
            </div>
            <div class="button d-flex mt-6">
              <v-spacer></v-spacer>
              <v-btn
                class="text-capitalize text-body-2"
                color="primary"
                depressed
                @click="addSpecialization"
              >
                <v-icon small class="me-2">mdi-plus-thick</v-icon>
                tambah spesialisasi
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-container>
      <!-- HEAD -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nameSpecialization: "",
      snackbar: false,
      timeout: 2000,
      snackbarSuccess: false,
      snackbarFailed: false,
    };
  },
  methods: {
    salinTautan() {
      this.$refs.linkGenerate.focus();
      document.execCommand("copy");
      this.snackbar = !this.snackbar;
    },
    addSpecialization() {
      this.$store.dispatch("specialization/addSpecialization", {
        name: this.nameSpecialization,
        invitation: this.getLink.link,
      });
      if (this.getCode === 200) {
        this.snackbarSuccess = !this.snackbarSuccess;
        this.$router.push("/specialization");
      } else {
        this.snackbarFailed = !this.snackbarFailed;
      }
    },
  },
  computed: {
    getLink() {
      return this.$store.state.specialization.linkInvitation;
    },
    getCode() {
      return this.$store.state.specialization.status;
    },
  },
  mounted() {
    this.$store.dispatch("specialization/generateInvitation");
  },
};
</script>

<style></style>
