<template>
  <v-app>
    <v-main class="ma-5 ml-10">
<!-- HEAD -->
      <router-link :to="'/setting'" style="text-decoration:none; color: black">
        <v-btn class="text-capitalize pl-2 pr-3" depressed>
          <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
          Kembali
        </v-btn>
      </router-link>
      <p class="text-h6 mt-6 mb-2"><b>Kata Sandi</b></p>
      <p>Masukkan kata sandi baru sesuai keinginan kamu</p>
<!-- EDIT -->
      <v-col class="px-0" cols="12">
        <v-card class="px-4 py-3">
          <p>Kata Sandi Lama</p>
          <v-text-field
           placeholder="Masukkan Kata Sandi Lama"
           outlined
           dense
          ></v-text-field>
          <p>Kata Sandi Baru</p>
          <v-text-field
           placeholder="Masukkan Kata Sandi Baru"
           outlined
           dense
          ></v-text-field>
          <p>Konfirmasi Kata Sandi Baru</p>
          <v-text-field
           placeholder="Masukkan Kata Sandi Baru"
           outlined
           dense
          ></v-text-field>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="text-capitalize" dark depressed>Simpan Perubahan</v-btn>
          </v-card-actions>
        </v-card> 
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>