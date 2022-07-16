<template>
    <v-main class="ma-5 ml-10">
      <v-container>
<!-- HEAD -->
      <back/>
      <p class="text-h6 mt-2 mb-2 primary--text"><b>Kata Sandi</b></p>
      <p>Masukkan kata sandi baru sesuai keinginan kamu</p>
<!-- EDIT -->
      <v-col class="px-0" cols="12">
        <v-card class="px-4 py-3">
          <p>Kata Sandi Lama</p>
          <v-text-field
           placeholder="Masukkan Kata Sandi Lama"
           outlined
           dense
          ></v-text-field>
          <p>Kata Sandi Baru</p>
          <v-text-field
           placeholder="Masukkan Kata Sandi Baru"
           outlined
           dense
          ></v-text-field>
          <p>Konfirmasi Kata Sandi Baru</p>
          <v-text-field
           placeholder="Masukkan Kata Sandi Baru"
           outlined
           dense
          ></v-text-field>
          <v-card-actions>
            <v-spacer/>
            <v-btn
                color="primary"
                class="text-capitalize my-auto mb-4"
                >
                <v-icon class="me-2 my-auto" small rounded>mdi-checkbox-outline</v-icon>
                Simpan Perubahan
            </v-btn>
          </v-card-actions>
        </v-card> 
      </v-col>
      </v-container>
    </v-main>
</template>
<script>
import back from "@/components/BackButton.vue"
export default {
  components : {back}
}
</script>