<template>
<v-app>
  <v-layout>
    <sideBar/>
    <v-main class="ma-5">
    <v-btn depressed
        class="ma-2"
        color=""
        dark
      >
        <v-icon
          dark
          left
        >
          mdi-arrow-left
        </v-icon>Back
      </v-btn>
      <h3><b>Tambah Spesialization</b></h3> 
      
      <p>Lihat daftar spesialization role yang di perusahaanmu
      </p>
      <template>
        <v-col
          
        >
          <v-text-field
            label="Nama Specialization"
            outlined
          ></v-text-field>
        </v-col>
         <v-col >
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
      </v-col>
      <v-btn depressed
        class="ma-2"
        color=""
        dark
        right
      >
        Save
      </v-btn>
</template>
            
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