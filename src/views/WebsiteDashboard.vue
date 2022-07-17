<template>
  <v-app>
    <v-layout>
      <sideBar/>
    <v-main class="ma-5">
      <h3><b>Dashboard</b></h3> 
      <p>Lihat informasi statistik milikmu</p>
    <v-row class="ma-2" app>
        <v-col class="mx-4" cols="5" app>
            <v-card height="100px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="60"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Total Perusahaan</v-list-item-title>
                       <v-list-item-subtitle>16</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
        <v-col class="mx-4" cols="5" app>
            <v-card height="100px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="60"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Total Admin</v-list-item-title>
                       <v-list-item-subtitle>2</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
		<v-card
      height="350"
      width="600"
    ></v-card>
        <v-col class="mx-13" cols="4" app>
		&emsp;
            <v-card class="ma-auto" color="white"> 
			&emsp;
			<v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
               <b>Notifikasi Terbaru</b>
                    <v-card height="100px" tile>
                        <v-list-item-content class="pl-4">
                            <v-list-item-subtitle class="mb-1">Permintaan persetujuan baru oleh perusahaan</v-list-item-subtitle>
                            <v-list-item-title>PT.Indah Cena</v-list-item-title></v-list-item-content>
                            <v-btn class="text-lowercase pa-4" small text >2 jam yang lalu</v-btn>
                    </v-card>

                    <v-card height="100px" tile>
                        <v-list-item-content class="pl-4">
                            <v-list-item-subtitle class="mb-1">Permintaan persetujuan baru oleh perusahaan</v-list-item-subtitle>
                            <v-list-item-title>Abdisoft Studio</v-list-item-title></v-list-item-content>
                            <v-btn class="text-lowercase pa-4" small text >3 jam yang lalu</v-btn>
                    </v-card>

                    <v-card height="100px" tile>
                        <v-list-item-content class="pl-4">
                            <v-list-item-subtitle class="mb-1">Permintaan persetujuan baru oleh perusahaan</v-list-item-subtitle>
                            <v-list-item-title>Abdisoft Studio</v-list-item-title></v-list-item-content>
                            <v-btn class="text-lowercase pa-4" small text >6 jam yang lalu</v-btn>
                    </v-card>       
            </v-card>
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