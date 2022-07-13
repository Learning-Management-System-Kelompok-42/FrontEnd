<template>
    <div class="mt-6">
    <v-container class="text-center">
      <div></div>
      <v-card
        class="rounded-circle mx-auto d-flex justify-center align-center"
        width="280"
        height="280"
        color="#D8F7EB"
        flat
      >
        <v-img src="@/assets/done.png"  max-width="240"></v-img>
      </v-card>
      <div class="mb-12">
        <h1 class="text-capitalize primary--text mt-3">Kursus Telah Selesai</h1>
        <p class="text-caption gray6--text mx-5 mt-2">
          Kamu bisa mengunduh sertifikat kursus sekarang atau melalui <br/>
          dashboard milikmu setelah memberikan penilaian
        </p>
      </div>
      <v-btn :elevation="0" class="text-capitalize mr-4"  color="primary">
        <v-icon small class="mr-2">mdi-file-document-outline</v-icon> 
        unduh sertifikat
      </v-btn>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="1200"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            class="text-capitalize" 
            outlined  
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon small class="mr-2">mdi-chat-processing-outline</v-icon>
            Berikan Penilaian
          </v-btn>
        </template>

        <v-card class="pa-8">
          <v-row class="mb-2 mx-0">
          <v-card-title class="primary--text pa-0"><b>Penilaian Kursus</b></v-card-title>
          <v-spacer/>
          <v-btn
            icon
            @click="dialog = false"
            class="pt-0"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-row>
          <p class="mb-0"><b>Rating</b></p>
          <v-rating
            v-model="rating"
            :length="length"
            color="orange"
            background-color="grey lighten-1"
            size="35"
            class="pt-1 ma-0"
          ></v-rating>
          <p><b>Bagaimana pendapatmu?</b></p>
          <v-textarea
          auto-grow
          outlined
          rows="4"
          row-height="15"
        ></v-textarea>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            class="text-capitalize my-auto mb-2"
          >
            <v-icon class="me-2 my-auto" small rounded>mdi-checkbox-outline</v-icon>
            Berikan Penilaian
          </v-btn>          
        </v-card-actions>
        
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>
<script>

export default{
  data() {
    return {
      rating : 0,
      length :5,
      dialog : false,
    };
  },
}
</script>
<style scoped>
.v-rating.v-icon{
  padding-left: 4pt;
}
</style>
