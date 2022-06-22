<template>
  <v-main>
    <v-navigation-drawer class="pa-4" app permanent>
      <v-list flat>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src=" "></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Ahmad Junaidi
            </v-list-item-title>
            <v-list-item-subtitle>PT. Intan Abadi</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group
          color="primary"
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item :to="`/${item.value}`" link>
            <!-- <router-link :to="'/' + item.value" style="text-decoration: none"> -->
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
            <!-- </router-link> -->
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pl-0 pa-2">
          <v-btn class="text-capitalize px-1" text color="warning">
            <v-card :elevation="0" class="ml-0 pa-1 mr-2" color="warning2"
              ><v-icon color="warning">mdi-export</v-icon></v-card
            >
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
        {
          title: "Dashboard",
          icon: "mdi-chart-box-outline",
          value: "dashboard",
        },
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

<style scoped>
/* .title:visited , .icon:visited{
  color : #286F6C !important ;
}
.card:visited{
  color : #D8F7EB !important ;
} */
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #c2c2c2 !important;
}
/* .theme--light.v-list-item--active:before,
.theme--light.v-list-item--active:hover:before,
.theme--light.v-list-item:focus:before {
  opacity: 0;
}
.active {
  color: red !important;
} */
</style>
