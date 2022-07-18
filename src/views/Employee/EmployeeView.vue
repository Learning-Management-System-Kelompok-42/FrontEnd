<template>
  <v-app>
    <v-main class="ml-10 ma-5">
      <v-container>
        <!-- HEADER -->
        <v-container class="d-flex">
          <div class="header">
            <h3><b>Karyawan</b></h3>
            <p>Lihat daftar karyawan yang terdaftar di perusahaanmu</p>
          </div>
          <v-spacer />
          <v-btn class="text-capitalize" dark depressed color="primary">
            <v-icon class="me-2">mdi-tray-arrow-down</v-icon>
            Unduh Laporan
          </v-btn>
        </v-container>
        <!-- FILTER -->
        <v-row>
          <v-col cols="6">
            <v-card flat>
              <v-container fluid class="d-flex my-auto">
                <p class="my-auto">Filter :</p>
                <v-select
                  :items="items"
                  hide-details=""
                  class="align-center ma-3"
                  placeholder="Pilih Spesialisasi"
                  outlined
                  dense
                ></v-select>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card flat>
              <v-container fluid class="d-flex my-auto">
                <v-text-field
                  class="ma-3"
                  hide-details=""
                  label="Cari Karyawan (Nama atau Email)"
                  outlined
                  dense
                  clearable
                ></v-text-field>
                <v-btn
                  class="my-auto text-capitalize"
                  depressed
                  color="primary"
                >
                  <v-icon class="me-2">mdi-magnify</v-icon>
                  Telusuri
                </v-btn>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <!-- ITEMS -->
        <v-row>
          <v-col cols="3" v-for="users in getAllUser" :key="users.id">
            <v-card flat width="100%">
              <div class="pl-3 pr-0">
                <v-list-item style="display: block">
                  <v-list-item-avatar
                    class="mt-6"
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-h8 mb-1 pt-0">
                      <b>{{ users.full_name }}</b>
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-caption">
                      {{ users.email }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions class="px-1">
                  <v-btn
                    class="text-capitalize pl-2 pr-3"
                    @click="detailEmployee(users.id)"
                    text
                    color="primary"
                  >
                    Lihat Detail<v-icon class="pt-1 pr-0"
                      >mdi-chevron-right</v-icon
                    >
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: ["Backend Engineer", "Frontend Engineer", "UI/UX Designer"],
    reveal: false,
  }),
  computed: {
    getAllUser() {
      return this.$store.state.user.allUser;
    },
  },
  methods: {
    detailEmployee(id) {
      this.$store.dispatch("user/setUserIdFromVue", id);
      this.$router.push("/employee/detail");
    },
  },
  mounted() {
    this.$store.dispatch("user/getAllUser");
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
h3 {
  color: #286f6c;
}
</style>
