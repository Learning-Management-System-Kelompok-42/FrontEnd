<template>
<v-app>
    <v-navigation-drawer
      class="pa-4"
      app
      permanent
    >
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

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="text-capitalize">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

</v-app>
</template>

<script>
export default {
  data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Specializations', icon: 'mdi-account-box' },
          { title: 'Courses', icon: 'mdi-table-account' },
          { title: 'Employees', icon: 'mdi-account-supervisor-outline' },
          { title: 'Course Request', icon: 'mdi-chart-box-plus-outline' },
          { title: 'Settings', icon: 'mdi-cog-outline' },
        ],
      }
    },
}
</script>

<style>

</style>