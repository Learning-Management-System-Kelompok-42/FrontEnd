<template>
  <v-main>
    <v-navigation-drawer class="pa-4" app permanent>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src=" "></v-img>
          </v-list-item-avatar>
        </v-list-item>
      
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Ahmad Junaidi
            </v-list-item-title>
            <v-list-item-subtitle>PT. Intan Abadi</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group active-class="visit">
          <v-list-item v-for="item in items" :key="item.title" link>
            <router-link
              :to="'/' + item.value"
              style="text-decoration: none"
            >
              <v-row>
                <v-list-item-icon>
                  <v-card :elevation="0" class="card pa-1"><v-icon>{{ item.icon }}</v-icon></v-card>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="title">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-row>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append >
        <div class="pl-0 pa-2">
        <v-btn class="text-capitalize px-1" text  color="warning">
          <v-card :elevation="0" class="ml-0 pa-1 mr-2" color="warning2"><v-icon color="warning">mdi-export</v-icon></v-card>
          Keluar
        </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-chart-box-outline", value: "dashboard" },
        {
          title: "Spesialisasi",
          icon: "mdi-account-box",
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
};
</script>

<style>
.card {
  color:#F3F8F6;
}
.icon,.title {
  color: #C2C2C2;
}
.router-link-exact-active router-link-active.v-list-item__title{
color: #286F6C !important;
}
.router-link-exact-active router-link-active.v-list-item__icon{
color: #286F6C !important;
}
.router-link-exact-active router-link-active.theme--light.v-card.card{
color: #D8F7EB;
}
.visit{
  background-color: #286F6C
}


</style>
