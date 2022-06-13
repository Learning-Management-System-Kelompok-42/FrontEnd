<template>
<v-app>
  <v-layout>
    <sideBar/>
    <v-main class="ma-5">
      <h3><b>Spesializations</b></h3>
      <router-link :to="{name :'specializationadd'}" style="text-decoration:none; color: black"> 
        <v-btn depressed color="" >
          <span>Tambah Spesialization</span>
        </v-btn>
      </router-link>
      <!-- <router-view/> -->
      <p>Lihat daftar spesialization role yang di perusahaanmu
      </p>
          <v-data-table
            :headers="headers"
            :items="specialization"
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
                    Description
                  </v-col>
                  <v-col cols= '8'>
                    : {{detailItem.description}}
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
          { text: "Specialization Name", value: 'name' },
          { text: "Description", value: 'description' },
          { text: 'Total Courses', value: 'totalCourses' },
          { text: 'Total Users', value: 'totalUsers' },
          { text: 'Action', value: 'action' },
        ],
        specialization: [
          {
            index: '1.',
            name: 'Backend Engineer',
            description: 'Course yang dibuat untuk para backend',
            totalCourses: '12',
            totalUsers: '12',
            action: 'detail',
          },
          {
            index: '2.',
            name: 'Backend Engineer',
            description: 'Course yang dibuat untuk para backend',
            totalCourses: '12',
            totalUsers: '12',
            action: 'detail',
          },
          {
            index: '3.',
            name: 'Backend Engineer',
            description: 'Course yang dibuat untuk para backend',
            totalCourses: '12',
            totalUsers: '12',
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