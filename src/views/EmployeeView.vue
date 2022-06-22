<template>
<v-app>
  <v-layout>
    <v-main class="ml-10 ma-5">
<!-- HEADER -->
      <v-container style="display:flex">
        <div class='header'>
          <h3><b>Employees</b></h3> 
          <p>Lihat daftar employee yang terdaftar di perusahaanmu</p> 
        </div>  
        <v-spacer/>
        <v-btn class="text-capitalize" dark depressed >Unduh Laporan</v-btn>
      </v-container>
<!-- FILTER -->
      <v-container class="d-inline-flex">
        <p class="pt-4">Filter :</p>
        <v-col
          cols="8"
          sm="4"
        >
          <v-select
            class="pt-0"
            :items="items"
            label="Pilih Specialization"
            outlined
            dense
          ></v-select>
        </v-col>
      <v-spacer/>
        <v-col cols="4">
          <v-text-field
            class="pt-0"
            label="Cari Employee (Nama atau Email)"
            outlined
            dense
            ></v-text-field>
        </v-col>
        <v-btn class="mt-3 text-capitalize" dark depressed>Telusuri</v-btn>
      </v-container>
<!-- ITEMS -->
      <v-row v-for="n in 5" :key="n">
        <v-col v-for="n in 4" :key="n" cols="3">
          <v-card
            
            width="100%"
            outlined
          >
            <div class="pl-3 pr-0">
            <v-list-item style="display:block" >
              <v-list-item-avatar
                class="mt-6"
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h8 mb-1 pt-0">
                  <b>Fajar Eka Pambudi</b>
                </v-list-item-title>
                <v-list-item-subtitle>fajareka@intanabadi.com</v-list-item-subtitle>
              </v-list-item-content>
              <div class="mt-0 mb-1 pt-0" style="display:flex">
                <v-list-item-avatar
                  class="mt-2 mr-3"
                  tile
                  size="15"
                  color="grey"
                ></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Frontend Engineer</v-list-item-title>
                </v-list-item-content>
              </div>
            </v-list-item>
            <v-card-actions class="px-1">
              <router-link :to="{name :'employeeDetail'}" style="text-decoration:none; color: black">
              <v-btn
                class="text-capitalize pl-2 pr-3"
                @click="reveal = false"
                text
              >
                Lihat Detail<v-icon class="pt-1 pr-0">mdi-chevron-right</v-icon>
              </v-btn>
              </router-link>
            </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>    
    </v-main>
  </v-layout>
</v-app>
</template>

<script>
export default {
  data: ()=>({
    items:['Backend Engineer', 'Frontend Engineer', 'UI/UX Designer'],
    reveal : false
  })
}
</script>

<style scoped>
/* .v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
} */


</style>