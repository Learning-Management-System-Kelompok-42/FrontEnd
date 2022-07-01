<template>
  <v-app>
    <v-main class="ma-5 ml-10">
        <v-container>
<!-- HEAD -->
        <router-link :to="'/employee'" style="text-decoration:none; color: black">
            <v-btn class="text-capitalize pl-2 pr-3" depressed>
                <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
                Kembali
            </v-btn>
        </router-link>
        <h3 class="mt-6 mb-2"><b>Fajar Eka Pambudi</b></h3>
        <div class="d-flex justify-start">
            <p class="my-auto">Frontend Engineer</p>
            <v-btn class="my-auto text-capitalize" 
             text 
             color="secondary"
             @click="dialog=true"
             >
                <v-icon class="me-2">mdi-pencil-box-outline</v-icon>
                Ganti Spesialisasi
            </v-btn>
        </div>
<!-- Dialog -->
        <v-dialog
        v-model="dialog"
        width="80%"
        >
            <v-card>
            <v-card-title class="primary--text">
                <b>Ganti Spesialisasi</b>
            </v-card-title>
            <p class="text-h20 ml-6">Spesialisasi</p>
            <v-card-text>
                <v-select
                :items="items"
                hide-details=""
                class="align-center mx-auto"
                placeholder="Pilih Spesialisasi Baru"
                outlined
                dense
              ></v-select>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                color="primary"
                @click="dialog= false"
                class="text-capitalize my-auto mb-4"
                >
                <v-icon class="me-2 my-auto" small rounded>mdi-checkbox-outline</v-icon>
                Simpan Perubahan
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
<!-- ADDRESS -->
        <v-row class="mt-1">
            <v-col class="pl-0 pr-6" cols="6">
            <v-card
                class="ml-3 mx-auto"
                width="100%"
                flat
            >
                <v-list-item two-line>
                        <v-list-item-avatar
                            class="my-1"
                            rounded
                            size="50"
                            color="secondary"
                        >
                            <v-icon class="my-auto" color="white">mdi-email-outline</v-icon>
                        </v-list-item-avatar>                
                    <v-list-item-content class="my-3">
                        <v-list-item-subtitle class="text-h7 pb-2">Alamat Email</v-list-item-subtitle>
                        <v-list-item-title class="text-h9"><b>@intanabadi.com</b></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </v-col>
            <v-col cols="6">
            <v-card
                class="mx-auto"
                width="100%"
                flat
            >
                <v-list-item two-line>
                    <v-list-item-avatar
                            rounded
                            size="50"
                            color="secondary"
                    >
                        <v-icon class="my-auto" color="white">mdi-phone-outline</v-icon>
                    </v-list-item-avatar>                
                    <v-list-item-content class="my-3 ">
                        <v-list-item-subtitle class="text-h7 pb-2">Nomor Telepon</v-list-item-subtitle>
                        <v-list-item-title class="text-h9"><b>+6281234567890</b></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </v-col>            
        </v-row>
        <v-col class="px-0" cols="12">
            <v-card
                class="ml-0 mx-auto"
                width="100%"
                flat
            >
                <v-list-item two-line>
                    <v-list-item-avatar
                            rounded
                            size="50"
                            color="secondary"
                    >
                        <v-icon class="my-auto" color="white">mdi-map-marker-outline</v-icon>
                    </v-list-item-avatar>                 
                    <v-list-item-content class="my-3">
                        <v-list-item-subtitle class="text-h7 pb-2">Alamat Rumah</v-list-item-subtitle>
                        <v-list-item-title class="text-h9"><b> Merpati No.86L,Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta </b></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-col>
<!-- COURSE'S LIST -->
        <p class="text-h6 mt-2"><b> Daftar Course yang Diikuti (16 Course)</b></p>
        <v-row v-for="n in 4" :key="n">
            <v-col
                v-for="n in 3"
                :key="n"
                cols="4"
            >          
                <v-card
                    class="mx-2 my-3"
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
                            <v-row class="ma-auto mt-2">
                                <v-rating
                                    v-model="rating"
                                    background-color="orange lighten-3"
                                    color="orange"
                                    half-increments
                                    dense
                                    size="15"    
                                ></v-rating>
                                <span class="grey--text text-caption">{{ rating }}</span>
                            </v-row>
                            <v-list-item-title class="text-h8 mb-1 pt-3">
                                <b>Junior Javascript Mastery</b>
                            </v-list-item-title>
                            <p class="text-h18 my-auto gray--text">Course yang dibuat untuk dasar pemahaman Javascript bagi engineer baru dalam bekerja.
                            </p>
                        </v-list-item-content>
                    </v-list-item>
                    <div class="px-4 d-flex my-auto">
                            <v-progress-linear 
                                v-model="value"
                                class="my-auto"
                                height="5"
                                rounded 
                                color="secondary"
                            ></v-progress-linear>
                        <b class="text-h15 my-auto pl-2 secondary--text" color="secondary">{{value}}%</b>
                    </div>
                    <v-card-actions>
                    <v-btn
                        class="text-capitalize"
                        @click="reveal = false"
                        text
                        color="primary"
                    >
                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                    </v-btn>
                    </v-card-actions>
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
        return {
            value : 100,
            rating : 4.6,
            dialog : false,
            items: ["Backend Engineer", "Frontend Engineer", "UI/UX Designer"],
        }
    },
}
</script>

<style>
h3{
    color: #286F6C;
}

</style>