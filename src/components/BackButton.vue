<template>
  <div>
    <v-btn
      small
      dense
      plain
      outlined
      class="text-capitalize mb-4"
      color="#286F6C"
      @click="goBack"
    >
      <v-icon class="me-2">mdi-chevron-left</v-icon>
      Kembali
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "ButtonBack",
  setup() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

