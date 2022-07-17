<template>
<v-app>
    <v-navigation-drawer
      class="pa-4"
      app
      permanent
    >
	<h3><b>&emsp;Edemia</b></h3> 
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
           <v-img src=" "></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Administrator
              </v-list-item-title>
              <v-list-item-subtitle>Website Admin</v-list-item-subtitle>
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
          { title: 'Perusahaan', icon: 'mdi-account' },
          { title: 'Tambah Admin', icon: 'mdi-account-group' },
          { title: 'Pengaturan', icon: 'mdi-cog-outline' },
        ],
      }
    },
}
</script>

<style>

</style>