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
      <h3><b>Profile Saya</b></h3> 
      <p>Masukan identitas valid mengenai dirimu</p>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nama Lengkap"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Alamat E-Mail"
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