<template>
  <v-app>
    <UserSidebar />
    <router-view />
  </v-app>
</template>
<script>
import UserSidebar from "@/components/UserSidebar.vue";

export default {
  components: { UserSidebar },
};
</script>
