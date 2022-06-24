<template>
  <div class="mt-6">
    <v-container class="contain mt-6 text-center">
      <v-img
        class="img mx-auto"
        src="http://placehold.jp/50x50.png"
        width="250"
        height="250"
      ></v-img>
      <div>
        <h1 class="text-capitalize">berhasil masuk</h1>
        <p class="text-caption mx-5">
          Sebentar lagi kamu akan dialihkan ke halaman dashboard milikmu
        </p>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  setup() {},
  mounted() {
    setTimeout(() => {
      this.$router.push("/dashboard");
    }, 3000);
  },
};
</script>
<style>
.img {
  margin-top: 100px !important;
}
</style>
