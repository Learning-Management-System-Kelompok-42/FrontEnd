<template>
  <v-app>
    <v-navigation-drawer class="pa-4" app permanent>
      <v-list>
        <v-list-item-group active-class="#286F6C">
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src=" "></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6 text-capitalize">
                {{ getuser.full_name }}
              </v-list-item-title>
              <v-list-item-subtitle>PT. Intan Abadi</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="item in items" :key="item.title" link>
            <router-link
              :to="'/' + item.value"
              style="text-decoration: none; color: black"
            >
              <v-row>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content></v-row
              >
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="text-capitalize" @click="btnLogout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", value: "dashboard" },
        {
          title: "Specializations",
          icon: "mdi-account-box",
          value: "specialization",
        },
        { title: "Courses", icon: "mdi-table-account", value: "kursus" },
        {
          title: "Employees",
          icon: "mdi-account-supervisor-outline",
          value: "employee",
        },
        {
          title: "Course Request",
          icon: "mdi-chart-box-plus-outline",
          value: "request",
        },
        { title: "Settings", icon: "mdi-cog-outline", value: "setting" },
      ],
    };
  },
  computed: {
    getuser() {
      return this.$store.state.user.user;
    },
  },
  mounted() {
    this.$store.dispatch("user/getUserById");
  },
  methods: {
    btnLogout() {
      const cookie = require("tiny-cookie");
      cookie.remove("token");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
