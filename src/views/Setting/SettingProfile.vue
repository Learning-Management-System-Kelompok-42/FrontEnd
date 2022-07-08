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
        <p class="text-h6 mt-6 mb-2 primary--text"><b>Profil Saya</b></p>
        <p>Masukkan informasi valid mengenai dirimu</p>
        <!-- EDIT -->
        <v-col class="px-0" cols="12">
          <v-card class="px-4 py-3">
            <p>{{ getUserData.full_name }}</p>
            <v-text-field outlined dense depressed></v-text-field>
            <p>Alamat Email</p>
            <v-text-field outlined dense></v-text-field>
            <p>Nomor Telepon</p>
            <v-text-field outlined dense></v-text-field>
            <p>Alamat Lengkap</p>
            <v-textarea
              auto-grow
              outlined
              dense
              rows="4"
              row-height="30"
            ></v-textarea>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="dialog = false"
                class="text-capitalize my-auto mb-4"
              >
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
  name: "SettingProfile",
  setup() {},
};
</script>

<style></style>
