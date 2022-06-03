<template>
<v-app>
  <v-layout>
    <sideBar/>
    <v-main class="ma-5">
      <h3><b>Employees</b></h3> 
      <v-spacer/>
      <p>Lihat daftar employee yang terdaftar di perusahaanmu</p>
      <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="employee"
            class="elevation-1"
            app
          >
            <template v-slot:[`item.status`]='{item}'> 
              <v-chip>{{item.status}}</v-chip>
            </template>

            <template v-slot:[`item.action`]='{item}'> 
              <v-btn class="text-capitalize" mini-icon @click="showDetail(item.index)">{{item.action}}</v-btn>
            </template>
          </v-data-table>
    </v-main>
  </v-layout>
</v-app>
</template>

<script>
import sideBar from '../components/SideBar.vue'
export default {
  data () {
      return {
         headers: [
          {
            text: 'No.',
            align: 'start',
            value: 'index',
          },
          { text: "Employee's Name", value: 'name' },
          { text: 'Spesialization', value: 'spesialize' },
          { text: 'Registered Status', value: 'status' },
          { text: 'Action', value: 'action' },
        ],
        employee: [
          {
            index: '1.',
            name: 'Budi Doremi',
            spesialize: 'Backend Engineer',
            status: 'Registered',
            action: 'detail',
          },
          {
            index: '1.',
            name: 'Budi Doremi',
            spesialize: 'Backend Engineer',
            status: 'Registered',
            action: 'detail',
          },
          {
            index: '1.',
            name: 'Budi Doremi',
            spesialize: 'Backend Engineer',
            status: 'Registered',
            action: 'detail',
          },          
          
        ],       
      }
    },
  components:{
    sideBar
  }
}
</script>

<style>

</style>