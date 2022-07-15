<template>
  <v-app>
    <v-main class="ma-5 ml-10">
        <v-container>
<!-- HEAD-->
        <h3 class="primary--text"><b>Permintaan</b></h3>
        <p>Lihat daftar permintaan yang dibuat oleh employee</p>
        <div class="d-flex align-center mb-2">
          <v-chip
            class="ma-1 "
            color="accentSec"
            text-color="secondary"
          >
            Permintaan Kursus
          </v-chip>
          <v-chip
            class="ma-2"
            color="secondary"
            text-color="white"
          >
            Permintaan Konseling
          </v-chip>    
        </div>
<!-- CONTENT -->
        <v-row class="mt-1">
          <v-col class="pl-0 pr-6" cols="6">
            <v-card
              class="ml-3 mx-auto"
              width="100%"
              flat
            >
              <v-chip
                class="ma-4 my-4 mb-1"
                color="warning2"
                text-color="warning"
              >
                <v-icon small outlined class="me-1">mdi-close-box-outline</v-icon>
                Belum Selesai
              </v-chip>
              <v-list-item two-line>  
                <v-list-item-content class="pl-2">
                  <v-list-item-title><b>Ingin konsultasi mengenai penerapan Redux di ReactJS</b></v-list-item-title>
                    <v-list-item-subtitle>
                      Fajar Eka Pambudi
                      <v-icon>mdi-circle-small</v-icon>
                      2 jam yang lalu 
                    </v-list-item-subtitle>              
                </v-list-item-content>
              </v-list-item>
              <v-card-action>
                <v-row class="ml-2 pt-2 pb-3 ">
                  <v-btn
                    class="text-capitalize"
                    text
                    color="primary"
                    @click.stop="dialog = true"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>

                  <v-dialog
                    v-model="dialog"
                    max-width="1116"
                  >
                    <v-card>
                      <div class="d-flex">
                        <v-card-title class="text-h5 primary--text pa-6 pb-2"><b>Detail Permintaan Konseling</b></v-card-title>
                        <v-spacer/>
                        <v-btn
                          icon
                          @click="dialog = false"
                          class="pa-3"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </div> 

                      <v-card-title class="text-subtitle-1 pt-0">
                        <b>Judul Permintaan</b>
                      </v-card-title>
                      <v-card-subtitle>Ingin konsultasi mengenai penerapan Redux di ReactJS</v-card-subtitle>
                      <v-card-title class="text-subtitle-1 pt-0">
                        <b>Alasan</b>
                      </v-card-title>
                      <v-card-subtitle>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                      </v-card-subtitle>
                      <div class="d-flex pt-0">
                        <v-list>
                          <v-card-title class="text-subtitle-1 pt-0">
                            <b>Tanggal yang diajukan</b>
                          </v-card-title>
                          <v-card-subtitle>Senin, 30 Agustus 2022</v-card-subtitle>
                        </v-list>
                        <v-list>
                          <v-card-title class="text-subtitle-1 pt-0">
                            <b>Waktu yang diajukan</b>
                          </v-card-title>
                          <v-card-subtitle>20:00 WIB</v-card-subtitle>
                        </v-list>

                      </div>
                          
                      <v-card-actions class="pb-4">
                        <v-spacer></v-spacer>
                        <v-btn
                          :elevation="0"
                          color="warning"
                          class="white--text text-capitalize"
                          @click="dialog = false"
                        >
                          <v-icon color="white" small class="mr-2">mdi-close-box-outline</v-icon>
                          Tolak
                        </v-btn>

                        <v-btn
                          :elevation="0"
                          color="primary"
                          class="white--text text-capitalize"
                          @click="dialog = false"
                        >
                          <v-icon color="white" small class="mr-2">mdi-checkbox-outline</v-icon>
                          Terima
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row> 
              </v-card-action>
            </v-card>
          </v-col>
          <v-col class="pl-0 pr-6" cols="6">
            <v-card
              class="ml-3 mx-auto"
              width="100%"
              flat
            >
              <v-chip
                class="ma-4 my-4 mb-1"
                color="accent"
                text-color="primary"
              >
                <v-icon small class="me-2">mdi-checkbox-outline</v-icon>
                Sudah Selesai
              </v-chip>
              <v-list-item two-line>                
                <v-list-item-content class="pl-2">                       
                  <v-list-item-title><b>Ingin konsultasi mengenai penggunaan Figma</b></v-list-item-title>
                  <v-list-item-subtitle>
                    Fajar Eka Pambudi
                    <v-icon>mdi-circle-small</v-icon>
                    6 jam yang lalu
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-action>
                <v-row class="ml-2 pt-2 pb-3 ">
                  <v-btn
                    class="text-capitalize"
                    text
                    color="primary"
                    @click.stop="done = true"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>

                  <v-dialog
                    v-model="done"
                    max-width="1116"
                  >
                    <v-card>
                      <div class="d-flex">
                        <v-card-title class="text-h5 primary--text pa-6 pb-0"><b>Detail Permintaan Konseling</b></v-card-title>
                        <v-spacer/>
                        <v-btn
                          icon
                          @click="done = false"
                          class="pa-3"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </div> 
                      <v-card-title class="text-subtitle-1 pb-0">
                        <b>Status</b>
                      </v-card-title>
                      <v-chip
                        class="ml-4"
                        color="accent"
                        text-color="primary"
                      >
                        <v-icon small class="me-2">mdi-checkbox-outline</v-icon>
                        Sudah Diterima
                      </v-chip>
                      <v-card-title class="text-subtitle-1">
                        <b>Judul Permintaan</b>
                      </v-card-title>
                      <v-card-subtitle class="pb-1">Ingin konsultasi mengenai penerapan Redux di ReactJS</v-card-subtitle>
                      <v-card-title class="text-subtitle-1 pt-0">
                        <b>Alasan</b>
                      </v-card-title>
                      <v-card-subtitle class="pb-1">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                      </v-card-subtitle>
                      <div class="d-flex pl-2 pt-0 pb-0">
                        <v-list>
                          <v-card-title class="text-subtitle-1 pt-0">
                            <b>Tanggal yang diajukan</b>
                          </v-card-title>
                          <v-card-subtitle class="pb-0">Senin, 30 Agustus 2022</v-card-subtitle>
                        </v-list>
                        <v-list>
                          <v-card-title class="text-subtitle-1 pt-0">
                            <b>Waktu yang diajukan</b>
                          </v-card-title>
                          <v-card-subtitle class="pb-0">20:00 WIB</v-card-subtitle>
                        </v-list>
                      </div>
                      <v-card-title class="text-subtitle-1 pt-0">
                        <b>Link Pertemuan</b>
                      </v-card-title>
                      <v-card-subtitle class="pb-4">zoom.us/meeting/register/tJEuceihpj4pE9YG18D1OTbZHQjnniOr_ii-</v-card-subtitle>       
                    </v-card>
                  </v-dialog>
                </v-row> 
              </v-card-action>

              <v-list-item two-line>                
                <v-list-item-content class="pl-2">                       
                  <v-list-item-title><b>Ingin konsultasi mengenai penggunaan Figma</b></v-list-item-title>
                  <v-list-item-subtitle>
                    Fajar Eka Pambudi
                    <v-icon>mdi-circle-small</v-icon>
                    6 jam yang lalu
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-action>
                <v-row class="ml-2 pt-2 pb-3 ">
                  <v-btn
                    class="text-capitalize"
                    text
                    color="primary"
                    @click.stop="reject = true"
                  >
                    lihat detail
                    <v-icon class="ms-2">mdi-chevron-right</v-icon>
                  </v-btn>

                  <v-dialog
                    v-model="reject"
                    max-width="1116"
                  >
                    <v-card>
                      <div class="d-flex">
                        <v-card-title class="text-h5 primary--text pa-6 pb-0"><b>Detail Permintaan Konseling</b></v-card-title>
                        <v-spacer/>
                        <v-btn
                          icon
                          @click="reject = false"
                          class="pa-3"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </div> 
                      <v-card-title class="text-subtitle-1 pb-0">
                        <b>Status</b>
                      </v-card-title>
                      <v-chip
                        class="ml-4"
                        color="warning2"
                        text-color="warning"
                      >
                        <v-icon small class="me-2">mdi-close-box-outline</v-icon>
                        Sudah Ditolak
                      </v-chip>
                      <v-card-title class="text-subtitle-1">
                        <b>Judul Permintaan</b>
                      </v-card-title>
                      <v-card-subtitle class="pb-1">Ingin konsultasi mengenai penerapan Redux di ReactJS</v-card-subtitle>
                      <v-card-title class="text-subtitle-1 pt-0">
                        <b>Alasan</b>
                      </v-card-title>
                      <v-card-subtitle class="pb-1">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                      </v-card-subtitle>
                      <div class="d-flex pl-2 pt-0 pb-3">
                        <v-list>
                          <v-card-title class="text-subtitle-1 pt-0">
                            <b>Tanggal yang diajukan</b>
                          </v-card-title>
                          <v-card-subtitle class="pb-0">Senin, 30 Agustus 2022</v-card-subtitle>
                        </v-list>
                        <v-list>
                          <v-card-title class="text-subtitle-1 pt-0">
                            <b>Waktu yang diajukan</b>
                          </v-card-title>
                          <v-card-subtitle class="pb-0">20:00 WIB</v-card-subtitle>
                        </v-list>
                      </div>       
                    </v-card>
                  </v-dialog>
                </v-row> 
              </v-card-action>
            </v-card>
          </v-col>            
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
data(){
    return{
        dialog : false,
        done : false,
        reject : false,
    }
  },
  methods: {
    
    },
  };
</script>
