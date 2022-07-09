<template>
  <v-app>
    <v-main class="ml-10 ma-5">
      <v-container>
        <h3><b>Pengaturan</b></h3>
        <p>Pengaturan akun yang mungkin diperlukan</p>

        <v-row>
          <v-col cols="3">
            <v-card flat max-width="100%" outlined class="flex-shrink">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-avatar
                    class="mt-3 d-block"
                    size="80"
                    max-width="80"
                  >
                    <img src="@/assets/company.png" />
                  </v-list-item-avatar>
                  <v-list-item-title class="text-h8 mb-1 pt-3">
                    <b>Perusahaan</b>
                  </v-list-item-title>
                  <p class="text-caption mb-0">
                    Ubah informasi perusahaan kamu
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions class="pt-0">
                <router-link
                  :to="{ name: 'settingCompany' }"
                  style="text-decoration: none; color: black"
                >
                  <v-btn
                    class="text-capitalize px-1 pt-0"
                    @click="reveal = false"
                    text
                    color="primary"
                  >
                    Ubah Sekarang
                    <v-icon class="pt-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="mx-auto" width="100%" outlined>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-avatar class="mt-3" size="80" max-width="80">
                    <img src="@/assets/profile.png" />
                  </v-list-item-avatar>
                  <v-list-item-title class="text-h8 mb-1 pt-3">
                    <b>Profil</b>
                  </v-list-item-title>
                  <p class="text-caption mb-0">Ubah informasi diri kamu</p>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions class="pt-0">
                <router-link
                  :to="{ name: 'settingProfile' }"
                  style="text-decoration: none; color: black"
                >
                  <v-btn
                    class="text-capitalize px-1"
                    @click="reveal = false"
                    text
                    color="primary"
                  >
                    Ubah Sekarang
                    <v-icon class="pt-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="mx-auto" width="100%" outlined>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-avatar class="mt-3" size="80" max-width="80">
                    <img src="@/assets/password.png" />
                  </v-list-item-avatar>
                  <v-list-item-title class="text-h8 mb-1 pt-3">
                    <b>Kata Sandi</b>
                  </v-list-item-title>
                  <p class="text-caption mb-0">Ubah Kata Sandimu</p>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions class="pt-0">
                <router-link
                  :to="{ name: 'settingPassword' }"
                  style="text-decoration: none; color: black"
                >
                  <v-btn
                    class="text-capitalize px-1"
                    @click="reveal = false"
                    text
                    color="primary"
                  >
                    Ubah Sekarang
                    <v-icon class="pt-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style></style>
