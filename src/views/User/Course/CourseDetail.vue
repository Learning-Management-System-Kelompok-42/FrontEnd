<template>
  <v-main class="ma-5 ml-10">
    <v-container>
        <Back/>
        <v-img src="@/assets/JavaHeaders.png"></v-img>
        <v-row class="mt-1">
          <v-col cols="7">
            <v-chip
                class="ma-2"
                color="accentSec"
                text-color="secondary"
                >
                  <v-icon class="me-2" color="secondary" small>mdi-account-group-outline</v-icon>
                  15 Peserta
                </v-chip>
                <v-chip
                class="ma-2"
                color="accentSec"
                text-color="secondary"
                >
                  <v-icon class="me-2" color="secondary" small>mdi-file-document-outline</v-icon>
                  12 Modul
                </v-chip>
<!-- DESC -->
            <h1><b>Junior Javascript Mastery</b></h1>
            <v-row class="ma-auto">
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                half-increments
                dense
                size="15"
                class="my-auto pt-0"
              ></v-rating>
              <span class="black--text text-caption ml-1 my-auto pt-1" >{{ rating }}</span>
              <span class="grey--text text-caption ml-2  my-auto pt-1">(15 Penilaian)</span>
            </v-row>
            <br/>
            <v-btn class="text-capitalize" depressed color="primary" dense>
                <v-icon class="me-2" color="white" small>mdi-play-circle-outline</v-icon>
                Pelajari Kursus
            </v-btn>
             <v-btn class="ml-3 text-capitalize" depressed color="secondary" dense>
                <v-icon class="me-2" color="white" small>mdi-file-document-outline</v-icon>
                Unduh Sertifikat
            </v-btn>
            <h3 class="black--text mt-6"><b>Deskripsi Khusus</b></h3>
            <p class="gray--text">
              The course is created thorough, extensive, but easy to follow content which you’ll easily understand and absorb. 
              The course starts with the basics, including JavaScript fundamentals, programming, and user interaction. 
              The curriculum is going to be very hands-on as we walk you from start to finish to become a professional Javascript developer. 
              We will start from the very beginning by teaching you Javascript basics and programming fundamentals, 
              and then execute into real-life practice and be ready for the real world. While Javascript is complicated for beginners to learn,
              it is widely used in many web development areas. This course gets you started with an introduction to JavaScript. 
              It assumes that you're new to the language, so it gets you started with basic functionality such as creating functions, 
              creating variables, and calling these lines of code from your standard HTML pages. It talks about events 
              and triggers for custom event handling. It talks about pattern matching, searching for text within a page, 
              flow control and the document object model (DOM). We start off with the basics and move on to more complex 
              functionality such as arrays and objects. We then discuss how to script common elements with JavaScript
              such as forms and tables. At the very end, we discuss major libraries such as Ajax, 
              which allows you to make asynchronous calls to server-side scripts without reloading the web page in the server.
            </p>
<!-- REVIEW -->
            <h3 class="black--text mt-4"><b>Apa yang mereka katakan?</b></h3>
            <v-col>
              <v-card class="ml-0" width="100%" :elevation="0">
                <v-card-text>
                  <v-row class="ma-auto mb-2">
                    <v-rating
                      v-model="rating"
                      background-color="orange lighten-3"
                      color="orange"
                      half-increments
                      dense
                      size="15"
                      class="my-auto pt-0"
                    ></v-rating>
                    <span class="black--text text-caption ml-1 my-auto pt-1" >{{ rating }}</span>
                  </v-row>
                  <div>
                    “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”
                  </div>
                  <v-card-actions >
                  <v-list-item two-line class="mr-0 pr-0">
                    <v-spacer></v-spacer>
                            <v-img
                                rounded
                                max-width="41"
                                color="secondary"
                                src="@/assets/bagas.png"
                            >    
                            </v-img>                
                        <v-list-item-content class="ml-3">
                            <v-list-item-title class="text-subtitle-1"><b>Bagas Kresna Putra</b></v-list-item-title>
                            <v-list-item-subtitle class="text-caption">bagaskresna@intanabadi.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-col>
          </v-col>
<!-- BAR -->
          <v-col cols="5">
            <h3><b>Modul Kursus</b></h3>
            <ModulBar/>
          </v-col>
        </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ModulBar from "@/components/ModulBar.vue"
import Back from "@/components/BackButton.vue"
export default {
  data(){
    return{
      rating : 4.7
    }
  },
    components : {ModulBar, Back}
}
</script>

<style>

</style>