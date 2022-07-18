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
      <h3><b>Informasi Perusahaan</b></h3> 
	  <v-col class="mx-0" cols="12" app>
            <v-card height="100px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="70"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
				   <div class="container"
				   display="flex"
				   >
						<v-btn
					  class="ma-1"
					  outlined
					  x-small
					  color="primary"
					>
					  Menunggu persetujuan
					</v-btn>
					</div>
                       <v-list-item-title class="text-h8 mb-1">One Week Wonders</v-list-item-title>
                       
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
     <v-row class="ma-0" app>
        <v-col class="mx-0" cols="6" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Bidang</v-list-item-title>
                       <v-list-item-subtitle>Industri Kreatif</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
        <v-col class="mx-0" cols="6" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Website</v-list-item-title>
                       <v-list-item-subtitle>www.oneweekwonders.com</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
		</v-row>
		<v-col class="mx-0" cols="12" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Alamat</v-list-item-title>
                       <v-list-item-subtitle>Jl.Merpati No.86L,Ngringin,Condongcatur,Kec.Depok,Kabupaten Slemen,Daerah Istimewa Yogyakarta</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
      <h3><b>Informasi Penanggung Jawab</b></h3>
	  
	  <v-col class="mx-0" cols="12" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Ahmad Junaidi</v-list-item-title>
                       <v-list-item-subtitle>Penanggung Jawab</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
		<v-row class="ma-0" app>
        <v-col class="mx-0" cols="6" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Alamat E-mail</v-list-item-title>
                       <v-list-item-subtitle>ahmadjunaidi@intanabadi.com</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
        <v-col class="mx-0" cols="6" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Nomor Telepon</v-list-item-title>
                       <v-list-item-subtitle>+6281234567890</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
		</v-row>
		<v-col class="mx-0" cols="12" app>
            <v-card height="70px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="30"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Alamat</v-list-item-title>
                       <v-list-item-subtitle>Jl.Merpati No.86L,Ngringin,Condongcatur,Kec.Depok,Kabupaten Slemen,Daerah Istimewa Yogyakarta</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
          <br/>
        </v-col>
		<v-row
		align="center"
    justify="center"
  >
    <v-btn
      depressed
      color="error"
    > 
      Tolak
    </v-btn>
    <v-btn
      depressed
      color="success"
    >
      Setujui
    </v-btn>
  </v-row>
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