<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="contain">
          <h4 class="mb-5">LMS</h4>
          <h1>Masuk</h1>
          <p>
            Lengkapi form dibawah ini dengan menggunakan data Anda yang valid
          </p>
          <v-text-field label="Email Perusahaan" outlined dense></v-text-field>
          <v-text-field label="Kata Sandi" outlined dense append-icon="mdi-eye">
          </v-text-field>
          <span class="d-flex">
            <v-checkbox class="my-0 mx-0"> </v-checkbox>
            <p class="mt-1">Ingat Saya</p>
          </span>
          <v-btn
            class="text-capitalize white--text mt-2"
            color="#484848"
            depressed
          >
            Masuk
          </v-btn>
        </v-container>
      </v-col>
      <v-col cols="5">
        <v-img
          src="http://placehold.jp/20x20.png"
          width="100%"
          height="560"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.contain {
  margin-top: 50px;
  width: 400px;
}
.body {
  margin: 0;
}
</style>
