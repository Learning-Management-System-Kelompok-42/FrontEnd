<template>
  <v-app>
    <v-layout>
      <sideBar/>
    <v-main class="ma-5">
      <h3><b>Perusahaan</b></h3> 
      <p>Lihat daftar perusahaan yang terdaftar</p>
    <v-col cols="12">
          <v-card flat>
            <v-container fluid class="d-flex my-auto">
              <v-text-field
                hide-details=""
                label="Cari Perusahaan"
                outlined
                dense
                clearable
              ></v-text-field>
              <v-btn class="my-auto text-capitalize" depressed color="success">
                <v-icon class="me-2">mdi-magnify</v-icon>
                Telusuri
              </v-btn>
            </v-container>
          </v-card>
        </v-col>
		<div class="chips">
          <v-chip class="ml-6 ma-2" color="secondary" text-color="white">
            Menunggu Persetujuan
          </v-chip>
          <v-chip class="ma-2" color="accentSec" text-color="secondary">
            Sudah Disetujui
          </v-chip>
          <v-chip class="ma-2" color="accentSec" text-color="secondary">
            Tidak Disetujui
          </v-chip>
        </div>
         <v-row class="ma-3" app>
        <v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">PT.Adiguna Triswara</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Informasi dan teknologi</v-list-item-subtitle>
					&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
        <v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">Slab Design Studio</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Industri Kreatif</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
		<v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">Kulineran</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Makanan dan minuman</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
    </v-row>
	<v-row class="ma-3" app>
        <v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">PT.Adiguna Triswara</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Informasi dan teknologi</v-list-item-subtitle>
					&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
        <v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">Slab Design Studio</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Industri Kreatif</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
		<v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">Kulineran</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Makanan dan minuman</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
    </v-row>
	<v-row class="ma-3" app>
        <v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">PT.Adiguna Triswara</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Informasi dan teknologi</v-list-item-subtitle>
					&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
        <v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">Slab Design Studio</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Industri Kreatif</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
		<v-col cols="4" app>
            <v-card height="280px"> 
                   <v-list-item-avatar class="ma-4"
                   tile
                   size="30"
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
                       <v-list-item-title class="text-h8 mb-1 ma-4">Kulineran</v-list-item-title>
                       <v-list-item-subtitle class="ma-4">Makanan dan minuman</v-list-item-subtitle>&nbsp;
						<v-list-item-action> Lihat Detail > </v-list-item-action>
                   </v-list-item-content>
            </v-card>
          <br/>
        </v-col>
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