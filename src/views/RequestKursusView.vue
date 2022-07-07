<template>
  <v-app>
    <v-main class="ma-5 ml-10">
        <v-container>
<!-- HEAD-->
        <h3 class="primary--text"><b>Permintaan</b></h3>
        <p>Lihat daftar permintaan yang dibuat oleh employee</p>
<!-- TOTAL -->
<v-row class="mt-1">
    <v-col class="pl-0 pr-6" cols="3">
        <v-list-item >  
            <v-chip
                class="ma-2"
                color="red"
                text-color="white"
                >
            Permintaan Kursus
            </v-chip>           
        </v-list-item>        
    </v-col>
    <v-col class="pl-0 pr-6 mr-1" cols="3">
        <v-list-item>  
            <v-chip
                class="ma-2 ml-0"
                color="red"
                text-color="white"
                >
            Permintaan Konseling
            </v-chip>           
        </v-list-item>
    </v-col>
</v-row>

          <v-row class="mt-1">
            <v-col class="pl-0 pr-6" cols="6">
                <v-card
                class="ml-3 mx-auto"
                width="100%"
                outlined
                >
                    <v-chip
                        class="ma-4 my-4"
                        color="red"
                        text-color="white"
                        >
                        <v-icon small outlined class="me-1">mdi-cancel</v-icon>
                    Belum Selesai
                    </v-chip>
                    <v-list-item two-line>  
                                   
                        <v-list-item-content class="my-0">        
                        <v-list-item-title class="text-h9"><b>Tolong Tambahkan Course mengenal Tailwind CSS </b></v-list-item-title>
                            <v-list-item-subtitle class="text-h7 pb-2">Fajar Eka Pambudi</v-list-item-subtitle>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-action class="mx-1">
                  <v-btn
                    class="text-capitalize my-3 mt-1"
                    plain
                    small
                    to="/request/detail"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-action>
                </v-card>
            </v-col>

            <v-col class="pl-0 pr-6" cols="6">
                <v-card
                class="ml-3 mx-auto"
                width="100%"
                outlined
                >
                <v-chip
                        class="ma-4 my-4"
                        color="green"
                        text-color="white"
                        >
                        <v-icon small class="me-2">mdi-checkbox-marked-circle</v-icon>
                    Sudah Selesai
                    </v-chip>
                    <v-list-item two-line>
                
                        <v-list-item-content class="my-0">
                        
                            <v-list-item-title class="text-h9"><b>Tolong Tambahkan Course mengenal React Context</b></v-list-item-title>
                            <v-list-item-subtitle class="text-h7 pb-2">Fajar Eka Pambudi</v-list-item-subtitle>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-action class="mx-1">
                  <v-btn
                    class="text-capitalize my-3 mt-1"
                    plain
                    small
                    to="/request/detail"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-action>
                </v-card>
            </v-col>            
        </v-row>
<!-- CONTENT-->

        </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
data(){
    return{
        
    }
  },
  methods: {
    
    },
  };
</script>
