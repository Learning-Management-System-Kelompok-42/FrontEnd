<template>
<v-app>
  <v-layout>
    <sideBar/>
    <v-main class="ma-5">
      <h3><b>Employees</b></h3> 
      <p>Lihat daftar employee yang terdaftar di perusahaanmu</p>
          <v-data-table
            :headers="headers"
            :items="employee"
            class="elevation-1"
            app
          >
            <template v-slot:[`item.status`]='{item}'> 
              <v-chip small>{{item.status}}</v-chip>
            </template>

            <template v-slot:[`item.action`]='{item}'> 
              <v-btn class="text-capitalize" small @click="showDetail(item)">{{item.action}}</v-btn>
            </template>
          </v-data-table>

          <v-dialog v-model="dialogDetail">
            <v-card>
              <v-container>
                <v-row>
                  <v-col cols= '4'>
                    Nama
                  </v-col>
                  <v-col cols= '8'>
                    : {{detailItem.name}}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols= '4'>
                    Spesialisasi
                  </v-col>
                  <v-col cols= '8'>
                    : {{detailItem.spesialize}}
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>  
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
            index: '2.',
            name: 'Rendy Pandugo',
            spesialize: 'Frontend Engineer',
            status: 'Registered',
            action: 'detail',
          },
          {
            index: '3.',
            name: 'Shawn Mendes',
            spesialize: 'Quality Asurance',
            status: 'Registered',
            action: 'detail',
          },          
          
        ],
        dialogDetail : false,
        detailItem : {},       
      }
    },
  components:{
    sideBar
  },
  methods:{
    showDetail(item){
      this.dialogDetail = true,
      this.detailItem = item
    }
  }
}
</script>

<style>

</style>