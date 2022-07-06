<template>
  <v-app>
    <v-main class="ma-5 ml-10">
        <v-container>
<!-- HEAD-->
        <h3 class="primary--text"><b>Dashboard</b></h3>
        <p>Lihat informasi statistik milikmu</p>
<!-- TOTAL -->
        <v-row class="mt-1">
            <v-col class="pl-0 pr-6" cols="4">
                <v-card
                class="ml-3 mx-auto"
                width="100%"
                :elevation="0"
                >
                    <v-list-item two-line>
                            <v-list-item-avatar
                                class="my-1"
                                rounded
                                size="50"
                                color="secondary"
                            >
                                <v-icon class="my-auto" color="white">mdi-file-document-outline</v-icon>
                            </v-list-item-avatar>                
                        <v-list-item-content class="my-3">
                            <v-list-item-subtitle class="text-h7 pb-2">Total Kursus</v-list-item-subtitle>
                            <v-list-item-title class="text-h9"><b>16</b></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col class="pl-0 pr-6" cols="4">
                <v-card
                class="ml-3 mx-auto"
                width="100%"
                :elevation="0"
                >
                    <v-list-item two-line>
                            <v-list-item-avatar
                                class="my-1"
                                rounded
                                size="50"
                                color="secondary"
                            >
                                <v-icon class="my-auto" color="white">mdi-checkbox-outline</v-icon>
                            </v-list-item-avatar>                
                        <v-list-item-content class="my-3">
                            <v-list-item-subtitle class="text-h7 pb-2">Kursus Selesai</v-list-item-subtitle>
                            <v-list-item-title class="text-h9"><b>4</b></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col class="pl-0 pr-6" cols="4">
                <v-card
                class="ml-3 mx-auto"
                width="100%"
                :elevation="0"
                >
                    <v-list-item two-line>
                            <v-list-item-avatar
                                class="my-1"
                                rounded
                                size="50"
                                color="secondary"
                            >
                                <v-icon class="my-auto" color="white">mdi-close-box-outline</v-icon>
                            </v-list-item-avatar>                
                        <v-list-item-content class="my-3">
                            <v-list-item-subtitle class="text-h7 pb-2">Kursus Belum Selesai</v-list-item-subtitle>
                            <v-list-item-title class="text-h9"><b>12</b></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>            
        </v-row>
<!-- BODY-->
        <v-row>
    <!-- ANGGOTA TERBANYAK -->
            <v-col cols="8">
                <v-card
                class="mx-auto"
                width="100%"
                :elevation="0"
                >
                    <v-row class="ma-auto pt-3 pb-0 px-6">
                    <v-list-item-icon class="mr-4">
                        <v-avatar :elevation="0" color="accentSec" size="36">
                            <v-icon class="pa-auto" color="secondary" small>mdi-chart-box-outline</v-icon>
                        </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>  
                        <v-list-item-title class="font-weight-bold ma-auto">Perkembangan Kursus</v-list-item-title>
                    </v-list-item-content>
                    <v-spacer/>
                    <v-btn class="text-capitalize ma-auto" text color='secondary'>Lihat lainnya</v-btn>
                    </v-row>
                <!-- CONTENT-->
                    <div class="ml-4 ma-auto pb-0 pr-3">
                    <v-list-item two-line>
                        <v-list-item-avatar
                                rounded
                                size="100"
                        >  
                            <img src="@/assets/begin.png">
                        </v-list-item-avatar>                
                        <v-list-item-content class="my-3 ">
                            <v-list-item-title class="text-h9"><b>Beginner Javascript Mastery</b></v-list-item-title>
                            <div class="d-flex pt-3">
                                <v-progress-linear 
                                    v-model="value"
                                    class="ma-auto"
                                    height="5"
                                    rounded 
                                    color="secondary"
                                ></v-progress-linear>
                                <b class="text-subtitle-2 my-auto pl-2 secondary--text font-weight-bold">{{value}}%</b>
                            </div>
                            <v-card-actions class="pb-0 pl-0">
                                <v-btn
                                    class="text-capitalize pl-0"
                                    text
                                    color="primary"
                                >
                                    Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-list-item-content>
                    </v-list-item> 
                    <v-list-item two-line>
                        <v-list-item-avatar
                                rounded
                                size="100"
                        >  
                            <img src="@/assets/intro.png">
                        </v-list-item-avatar>                
                        <v-list-item-content class="my-3 ">
                            <v-list-item-title class="text-h9"><b>Introduction to UI/UX Design</b></v-list-item-title>
                            <div class="d-flex pt-3">
                                <v-progress-linear 
                                    v-model="value"
                                    class="ma-auto"
                                    height="5"
                                    rounded 
                                    color="secondary"
                                ></v-progress-linear>
                                <b class="text-subtitle-2 my-auto pl-2 secondary--text font-weight-bold">{{value}}%</b>
                            </div>
                            <v-card-actions class="pb-0 pl-0">
                                <v-btn
                                    class="text-capitalize pl-0"
                                    @click="reveal = false"
                                    text
                                    color="primary"
                                >
                                    Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                        <v-list-item-avatar
                                rounded
                                size="100"
                        >  
                            <img src="@/assets/design.png">
                        </v-list-item-avatar>                
                        <v-list-item-content class="my-3 ">
                            <v-list-item-title class="text-h9"><b>What is Design System in UI/UX Design</b></v-list-item-title>
                            <div class="d-flex pt-3">
                                <v-progress-linear 
                                    v-model="value"
                                    class="ma-auto"
                                    height="5"
                                    rounded 
                                    color="secondary"
                                ></v-progress-linear>
                                <b class="text-subtitle-2 my-auto pl-2 secondary--text font-weight-bold">{{value}}%</b>
                            </div>
                            <v-card-actions class="pb-0 pl-0">
                                <v-btn
                                    class="text-capitalize pl-0"
                                    @click="reveal = false"
                                    text
                                    color="primary"
                                >
                                    Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                        <v-list-item-avatar
                                rounded
                                size="100"
                        >  
                            <img src="@/assets/clean.png">
                        </v-list-item-avatar>                
                        <v-list-item-content class="my-3 ">
                            <v-list-item-title class="text-h9"><b>How to Write Clean Code in Javascript</b></v-list-item-title>
                            <div class="d-flex pt-3">
                                <v-progress-linear 
                                    v-model="value"
                                    class="ma-auto"
                                    height="5"
                                    rounded 
                                    color="secondary"
                                ></v-progress-linear>
                                <b class="text-subtitle-2 my-auto pl-2 secondary--text font-weight-bold">{{value}}%</b>
                            </div>
                            <v-card-actions class="pb-0 pl-0">
                                <v-btn
                                    class="text-capitalize pl-0"
                                    @click="reveal = false"
                                    text
                                    color="primary"
                                >
                                    Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-list-item-content>
                    </v-list-item>  
                    </div>                 
                </v-card>
            </v-col>
<!-- KURSUS SERING DIBUKA -->
            <v-col cols="4">
                <v-card class="mx-auto" :elevation="0">
                    <v-row class="ma-auto pt-3 pb-6 px-6">
                    <v-list-item-icon class="mr-4">
                        <v-avatar :elevation="0" color="accentSec" size="36">
                            <v-icon class="pa-auto" color="secondary" small>mdi-file-document-outline</v-icon>
                        </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">Kursus yang sering dibuka</v-list-item-title>
                        <v-list-item-subtitle class="gray6--text">Dalam 7 hari terakhir</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-row>
                <!-- CONTENT -->
                        <div class="ml-4 pl-6">
                            <v-row>
                                <v-list-item-icon class="mt-2 mr-4">
                                    <v-avatar :elevation="0" color="accent" size="32" class="pl-0">
                                        <p class="my-auto primary--text text-caption font-weight-bold">1</p>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content class="py-0">
                                <p class="my-auto">Beginner Javascript Mastery</p>
                                <v-card-actions class="pl-0">
                                    <v-btn
                                        class="text-capitalize pl-0"
                                        text
                                        color="primary"
                                    >
                                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                </v-list-item-content>
                            </v-row>
                            <v-row>
                                 <v-list-item-icon class="mt-2 mr-4">
                                    <v-avatar :elevation="0" color="accent" size="32" class="pl-0">
                                        <p class="my-auto primary--text text-caption font-weight-bold">2</p>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content class="py-0">
                                <p class="my-auto">Introduction to UI/UX Design</p>
                                <v-card-actions class="pl-0">
                                    <v-btn
                                        class="text-capitalize pl-0"
                                        text
                                        color="primary"
                                    >
                                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                </v-list-item-content>
                            </v-row>
                            <v-row>
                                 <v-list-item-icon class="mt-2 mr-4">
                                    <v-avatar :elevation="0" color="accent" size="32" class="pl-0">
                                        <p class="my-auto primary--text text-caption font-weight-bold">3</p>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content class="py-0">
                                <p class="my-auto">Roadmap Guide Become Frontend Engineer</p>
                                <v-card-actions class="pl-0">
                                    <v-btn
                                        class="text-capitalize pl-0"
                                        text
                                        color="primary"
                                    >
                                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                </v-list-item-content>
                            </v-row>
                            <v-row>
                                 <v-list-item-icon class="mt-2 mr-4">
                                    <v-avatar :elevation="0" color="accent" size="32" class="pl-0">
                                        <p class="my-auto primary--text text-caption font-weight-bold">4</p>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content class="py-0">
                                <p class="my-auto">Intermediet CSS Styling</p>
                                <v-card-actions class="pl-0">
                                    <v-btn
                                        class="text-capitalize pl-0"
                                        text
                                        color="primary"
                                    >
                                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                </v-list-item-content>
                            </v-row>
                            <v-row>
                                 <v-list-item-icon class="mt-2 mr-4">
                                    <v-avatar :elevation="0" color="accent" size="32" class="pl-0">
                                        <p class="my-auto primary--text text-caption font-weight-bold">5</p>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content class="py-0">
                                <p class="my-auto">Tailwind CSS Framework</p>
                                <v-card-actions class="pl-0">
                                    <v-btn
                                        class="text-capitalize pl-0"
                                        text
                                        color="primary"
                                    >
                                        Lihat Detail <v-icon class="pt-1">mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                </v-list-item-content>
                            </v-row>
                        </div>
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
        value:80,
    }
  },
  methods: {
    gettoken() {
      const cookie = require("tiny-cookie");
      return cookie.get("token");
      },
    },
    mounted() {
      console.log(this.$store.state.user.userid);
      console.log(this.gettoken());
    },
    created() {
      document.title = "Dashboard";
    },
  };
</script>
