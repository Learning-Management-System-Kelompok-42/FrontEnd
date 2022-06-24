<template>
  <v-app>
  <sideBar/>
    <v-main class="ma-5 ml-10">
<!-- HEAD -->
        <router-link :to="'/specialization/detail'" style="text-decoration:none; color: black">
            <v-btn class="text-capitalize pl-2 pr-3" depressed>
                <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
                Kembali
            </v-btn>
        </router-link>
 
        <div class="d-flex justify-start mt-2">
            <p class="text-h6 mt-2 mb-2"><b>Frontend Engineer</b></p>
            <v-avatar
                class="mt-4 mx-3"
                tile
                size="15"
                color="grey"
            ></v-avatar>
            <p class="text- mt-3 mb-2" style="color:grey">Ganti Nama</p>
            <v-spacer />
        <v-btn class="text-capitalize" dark depressed>Tautan Undangan</v-btn>
        </div>
        <div>   
            <p >Detail dari spesialisasi Frontend Engineer</p>
        </div>
<!-- ADDRESS -->
        <v-row class="mt-1">
            <v-col class="pl-0 pr-6" cols="3">
            <v-card
                class="ml-3 mx-auto"
                outlined
                width="100%"
            >
                <v-list-item two-line>
                        <v-list-item-avatar
                            class="my-1"
                            rounded
                            size="50"
                            color="grey"
                        ></v-list-item-avatar>                
                    <v-list-item-content class="my-3">
                        <v-list-item-subtitle class="text-h7 pb-2">Total Kursus</v-list-item-subtitle>
                        <v-list-item-title class="text-h9">8</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </v-col>
            <v-col cols="3">
            <v-card
                class="mx-auto"
                outlined
                width="100%"
            >
                <v-list-item two-line>
                        <v-list-item-avatar
                            rounded
                            size="50"
                            color="grey"
                        ></v-list-item-avatar>                
                    <v-list-item-content class="my-3 ">
                        <v-list-item-subtitle class="text-h7 pb-2">Total Karyawan</v-list-item-subtitle>
                        <v-list-item-title class="text-h9">15</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </v-col>            
        </v-row>
        <!-- COURSE'S LIST -->

        <p class="text-h6 mt-6"><b> Daftar Kursus</b></p>
        <v-col class="px-0" cols="12">
            <v-card
                class="ml-0 mx-auto"
                outlined
                width="100%"
            >
             <v-container class="d-inline-flex">
                <v-col cols="12">
          <v-text-field
            class="pt-1"
            label="Cari Spesialisasi"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-btn class="mt-4 text-capitalize" dark depressed>Cari</v-btn>      </v-container>
            </v-card>
        </v-col>
        <v-row v-for="n in 4" :key="n">
            <v-col
                v-for="n in 3"
                :key="n"
                cols="4"
            >          
                <v-card
                    class="mx- my-3"
                    width="100%"
                    outlined
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar
                                class="mt-3"
                                rounded
                                height="80"
                                color="grey"
                            ></v-list-item-avatar>
                            <v-list-item-title class="text-h8 mb-1 pt-3">
                            <b>Junior Javascript Mastery</b>
                            </v-list-item-title>
                            <v-list-item-subtitle style="display:block">
                            Course yang dibuat untuk dasar pemahaman Javascript bagi engineer baru dalam bekerja.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    
                    <v-card-actions>
                    <v-btn
                        class="text-capitalize"
                        @click="reveal = false"
                        text
                    >
                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                
            </v-col>
        </v-row>
<!-- EMPLOYEE'S LIST -->
        <p class="text-h6 mt-6"><b> Daftar Karyawan</b></p>
        <v-col class="px-0" cols="12">
            <v-card
                class="ml-0 mx-auto"
                outlined
                width="100%"
            >
             <v-container class="d-inline-flex">
                <v-col cols="12">
          <v-text-field
            class="pt-1"
            label="Cari Karyawan (Nama atau Email)"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-btn class="mt-4 text-capitalize" dark depressed>Cari</v-btn>      </v-container>
            </v-card>
        </v-col>
              <v-row v-for="n in 2" :key="n">
        <v-col v-for="n in 4" :key="n" cols="3">
          <v-card width="100%" outlined>
            <div class="pl-3 pr-0">
              <v-list-item style="display: block">
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
                  <v-list-item-subtitle
                    >fajareka@intanabadi.com</v-list-item-subtitle
                  >
                </v-list-item-content>
                <div class="mt-0 mb-1 pt-0" style="display: flex">
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
                <router-link
                  :to="{ name: 'employeeDetail' }"
                  style="text-decoration: none; color: black"
                >
                  <v-btn
                    class="text-capitalize pl-2 pr-3"
                    @click="reveal = false"
                    text
                  >
                    Lihat Detail<v-icon class="pt-1 pr-0"
                      >mdi-chevron-right</v-icon
                    >
                  </v-btn>
                </router-link>
              </v-card-actions>
            </div>
          </v-card>
          </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

export default {
    data(){
        return {
            value : 55,
        }
    },
}
</script>

<style>

</style>