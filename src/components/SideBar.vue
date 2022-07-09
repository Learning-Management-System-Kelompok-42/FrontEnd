<template>
  <v-main>
    <v-navigation-drawer class="pa-4" app permanent>
      <v-list flat>
        <v-subheader class="mx-2 px-2">
          <logo />
        </v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-h6 primary--text font-weight-bold"
              v-text="getCompany.NameAdmin"
            >
              {{ getCompany.CompanyID }}
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="getCompany.NameCompany"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group
          color="primary"
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item :to="`/${item.value}`" link>
            <v-row>
              <v-list-item-icon class="pe-3">
                <v-card :elevation="0" class="card pa-1" color="#F3F8F6">
                  <v-icon class="icon" v-text="item.icon"> </v-icon>
                </v-card>
              </v-list-item-icon>
              <v-list-item-content class="title">
                <v-list-item-title v-text="item.title" class="font-weight-bold">
                </v-list-item-title>
              </v-list-item-content>
            </v-row>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pl-0 pa-2">
          <v-btn
            class="text-capitalize px-1"
            text
            color="warning"
            @click="logout"
          >
            <v-card :elevation="0" class="ml-0 pa-1 mr-2" color="warning2">
              <v-icon color="warning">mdi-export</v-icon>
            </v-card>
            Keluar
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-main>
</template>

<script>
import logo from "@/components/Logo.vue";
let cookie = require("tiny-cookie");
export default {
  components: { logo },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-chart-box-outline",
          value: "dashboard",
        },
        {
          title: "Spesialisasi",
          icon: "mdi-briefcase-variant-outline",
          value: "specialization",
        },
        { title: "Kursus", icon: "mdi-file-document-outline", value: "course" },
        {
          title: "Karyawan",
          icon: "mdi-account-group-outline",
          value: "employee",
        },
        {
          title: "Permintaan",
          icon: "mdi-bookmark-minus-outline",
          value: "request",
        },
        { title: "Pengaturan", icon: "mdi-cog-outline", value: "setting" },
      ],
    };
  },
  computed: {
    getUser() {
      return this.$store.state.user.user;
    },
    getCompany() {
      console.log(this.$store.state.company.dataCompany);
      return this.$store.state.company.dataCompany;
    },
  },
  methods: {
    logout() {
      cookie.remove("token");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$store.dispatch("company/fetchCompany");
  },
};
</script>

<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #c2c2c2 !important;
}
</style>
