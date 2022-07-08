<template>
  <div class="mt-6">
    <v-container class="text-center">
      <div></div>
      <v-card
        class="rounded-circle mx-auto d-flex justify-center align-center"
        :img="sukses"
        width="280"
        height="280"
        color="#D8F7EB"
        flat
      >
      </v-card>
      <div>
        <h1 class="text-capitalize primary--text">berhasil masuk</h1>
        <p class="text-caption mx-5">
          Sebentar lagi kamu akan dialihkan ke halaman dashboard milikmu
        </p>
      </div>
      <div v-if="isLoading" class="mt-6">
        <loader />
        <p class="text-caption">Tunggu Sebentar</p>
      </div>
    </v-container>
  </div>
</template>
<script>
import loader from "@/components/Loader.vue";
export default {
  components: { loader },
  setup() {},
  data() {
    return {
      sukses: require("@/assets/target.png"),
      isLoading: false,
    };
  },
  computed: {
    getAccess() {
      return this.$store.state.user.akses;
    },
  },
  methods: {
    cekAccess() {
      if (this.getAccess === "admin") {
        this.$router.push("/dashboard");
      } else this.$router.push("/urdashboard");
    },
    loading() {
      this.isLoading = true;
      setTimeout(this.cekAccess, 3000);
    },
  },
  mounted() {
    this.loading();
  },
};
</script>
<style>
.img {
  margin-top: 100px !important;
}
</style>
