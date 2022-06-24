<template>
  <v-app>
    <v-main class="ma-5 ml-10">
<!-- HEAD -->
        <router-link :to="'/employee'" style="text-decoration:none; color: black">
            <v-btn class="text-capitalize pl-2 pr-3" depressed>
                <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
                Kembali
            </v-btn>
        </router-link>
        <p class="text-h6 mt-6 mb-2"><b>Fajar Eka Pambudi</b></p>
        <div class="d-flex justify-start mt-1">
            <p>Frontend Engineer</p>
            <v-avatar
                class="mt-1 mx-3"
                tile
                size="15"
                color="grey"
            ></v-avatar>
            <p style="color:grey">Ganti Specialization</p>
        </div>
<!-- ADDRESS -->
        <v-row class="mt-1">
            <v-col class="pl-0 pr-6" cols="6">
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
                        <v-list-item-subtitle class="text-h7 pb-2">Alamat Email</v-list-item-subtitle>
                        <v-list-item-title class="text-h9">fajareka@intanabadi.com</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </v-col>
            <v-col cols="6">
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
                        <v-list-item-subtitle class="text-h7 pb-2">Nomor Telepon</v-list-item-subtitle>
                        <v-list-item-title class="text-h9">+6281234567890</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </v-col>            
        </v-row>
        <v-col class="px-0" cols="12">
            <v-card
                class="ml-0 mx-auto"
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
                        <v-list-item-subtitle class="text-h7 pb-2">Alamat Rumah</v-list-item-subtitle>
                        <v-list-item-title class="text-h9">Jl. Merpati No.86L,Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta </v-list-item-title>
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
                            <v-list-item-title class="text-h8 mb-1 pt-3">
                            <b>Junior Javascript Mastery</b>
                            </v-list-item-title>
                            <v-list-item-subtitle style="display:block">Course yang dibuat untuk dasar pemahaman Javascript bagi engineer baru dalam bekerja.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <div class="pa-4 d-flex">
                        <div>
                            <v-progress-linear 
                                v-model="value"
                                height="7"
                                rounded 
                                color="black"
                            ></v-progress-linear>
                        </div>
                        <strong class="text-h10">{{value}}%</strong>
                    </div>
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