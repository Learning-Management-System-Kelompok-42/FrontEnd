<template>
  <v-app>
    <v-layout>
      <sideBar/>
    <v-main class="ma-5">
	<v-row>
    <v-btn
      tile
      color="white"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      kembali
    </v-btn>
  </v-row>
  <br><br>
      <h3><b>Ganti Kata Sandi</b></h3> 
      <p>Masukan kata sandi baru sesuai keinginan</p>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Kata Sandi Lama"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Kata Sandi Baru"
      required
    ></v-text-field>
	
	<v-text-field
      v-model="email"
      :rules="emailRules"
      label="Konfirmasi Kata Sandi Baru"
      required
    ></v-text-field>

    <v-btn
      :enabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Simpan Perubahan
    </v-btn>
  </v-form>

    </v-main></v-layout>
  </v-app>
</template>

<script>
import sideBar from '../components/AdminwebSidebar.vue'
export default {
    components :{
        sideBar
    }
}
</script>

<style>

</style>