<template>
  <v-app>
    <v-layout>
      <sideBar/>
    <v-main class="ma-5">
      <h3><b>Pengaturan</b></h3> 
      <p>Pengaturan akun yang mungkin dibutuhkan</p>
    <v-row class="ma-2" app>
        <v-col class="mx-4" cols="3" app>
            <v-card height="200px"> 
                   <v-list-item-avatar
                   tile
                   size="40"
                   color="grey"
                   > 
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Profil</v-list-item-title>
                       <v-list-item-subtitle>Ubah informasi diri kamu</v-list-item-subtitle>
					&nbsp;
						<v-list-item-action> Ubah sekarang > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
        <v-col class="mx-4" cols="3" app>
            <v-card height="200px"> 
                   <v-list-item-avatar
                   tile
                   size="40"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Kata Sandi</v-list-item-title>
                       <v-list-item-subtitle>Ubah kata sandi akunmu</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Ubah sekarang > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>

    </v-row></v-main></v-layout>
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