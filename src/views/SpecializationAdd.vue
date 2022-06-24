<template>
<v-app>
  <v-layout>
    <sideBar/>
    
    <v-main class="ma-5" ml-10>
<!-- HEAD -->
    <router-link :to="'/specialization/add'" style="text-decoration:none; color: black">
            <v-btn class="text-capitalize pl-2 pr-3" depressed>
                <v-icon class="pt-1 pl-0">mdi-chevron-left</v-icon>
                Kembali
            </v-btn>
        </router-link>

      <div class="d-flex justify-start mt-2">
            <p class="text-h6 mt-2 mb-2"><b>Tambah Spesialisasi</b></p>
            <v-spacer />
        </div>
        <div>   
            <p >Masukkan data dari spesialisasi baru</p>
        </div>

    <!-- FILTER -->
      <v-col class="px-0" cols="12">
      
            <v-card
                class="ml-0 mx-auto"
                outlined
                width="100%"
            >
             <v-container class="d-inline-flex">
                <v-col cols="10">
          <v-text-field
            class="pt-1"
            label="Nama Spesialisasi"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            class="pt-1"
            label="Link"
            outlined
            dense
          ></v-text-field>
          <p class="text- mt-1 mb-2" style="color:grey">Gunakan link diatas untuk mengundang employee ke spesialization ini</p>
          <v-btn class="mt-5 text-capitalize" dark depressed>Salin Tautan</v-btn>   
        </v-col>
           </v-container>
            </v-card>
        </v-col>                  
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