<template>
  <v-app>
    <v-row>
<!-- SIDE-BAR -->
      <v-col class="ma-4 bar">
        <goDash/>
      </v-col>
<!-- MAIN -->
      <v-main class="ma-5">
        <v-container class="pt-7">
              <h1 class="primary--text"><b>Junior Javascript Mastery</b></h1> 
              <p class="text-caption gray6--text pl-0">Javascript Array <v-icon>mdi-circle-small</v-icon>Kuis</p>
<!-- RESULT -->
        <v-card class="mb-6" flat>
            <v-card-text class="pa-4">
                <p class="mb-0"><b>Informasi Penilaian :</b></p>
                <p class="gray6--text">Kamu berhasil menjawab <span class="black--text">3</span> soal dengan benar dari total <span class="black--text">6</span> soal yang ada</p>
                <p class="mb-0"><b>Nilai yang diperoleh :</b></p>
                <p class="text-h6 secondary--text mb-0"><b>50 Poin</b></p>
            </v-card-text>
        </v-card>
<!-- QUIZ'S ANSWER -->
        <v-card class="mb-4" flat height="260px">
            <v-card-text class="pb-0">
                <p class="text-subtitle-1">
                    <v-avatar color="accentSec" rounded size="25" class="secondary--text mx-2">1</v-avatar>
                    Inside which HTML element do we put the JavaScript?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col class="ml-13" cols="5">
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">A</v-avatar>
                                scripting                       
                            </p>
                        </v-card>
                        <!-- USER'S CHOICE-->
                        <v-card flat color="primary">
                            <p class="pa-2 white--text">
                                <v-avatar color="white" rounded size="25" class="primary--text mx-2">B</v-avatar>                            
                                javascript
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="6">   
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">C</v-avatar>
                                script
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">D</v-avatar>
                                JS
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-col class="ml-13 pt-0" cols="11">
                <v-card flat outlined rounded="xl" color="warning2">
                        <p class="pa-2 mb-0 warning--text">
                            <v-icon color="warning" size="25" class="mx-2">mdi-alert-circle-outline</v-icon>
                            Jawaban salah, yang benar adalah poin A                       
                        </p>
                </v-card>
            </v-col>
        </v-card>
        <v-card class="mb-4" flat height="260px">
            <v-card-text class="pb-0">
                <p class="text-subtitle-1">
                    <v-avatar color="accentSec" rounded size="25" class="secondary--text mx-2">2</v-avatar>
                    How to write an IF statement for executing some code if "i" is NOT equal to 5?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col class="ml-13" cols="5">
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">A</v-avatar>
                                scripting                       
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">B</v-avatar>                            
                                javascript
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                    <!-- USER'S CHOICE-->
                        <v-card flat color="primary">
                            <p class="pa-2 white--text">
                                <v-avatar color="white" rounded size="25" class="primary--text mx-2">C</v-avatar>
                                script
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">D</v-avatar>
                                JS
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-col class="ml-13 pt-0" cols="11">
                <v-card flat outlined rounded="xl" color="success1">
                        <p class="pa-2 mb-0 success5--text">
                            <v-icon color="success5" size="25" class="mx-2">mdi-alert-circle-outline</v-icon>
                            Jawaban kamu benar                       
                        </p>
                </v-card>
            </v-col>
        </v-card>
        <v-card class="mb-4" flat height="260px">
            <v-card-text class="pb-0">
                <p class="text-subtitle-1">
                    <v-avatar color="accentSec" rounded size="25" class="secondary--text mx-2">3</v-avatar>
                    What is the correct way to write a JavaScript array?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col class="ml-13" cols="5">
                    <!-- USER'S CHOICE -->
                        <v-card flat color="primary">
                            <p class="pa-2 white--text">
                                <v-avatar color="white" rounded size="25" class="primary--text mx-2">A</v-avatar>
                                scripting                       
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">B</v-avatar>                            
                                javascript
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="6">   
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">C</v-avatar>
                                script
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">D</v-avatar>
                                JS
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-col class="ml-13 pt-0" cols="11">
                <v-card flat outlined rounded="xl" color="warning2">
                        <p class="pa-2 mb-0 warning--text">
                            <v-icon color="warning" size="25" class="mx-2">mdi-alert-circle-outline</v-icon>
                            Jawaban salah, yang benar adalah poin D                       
                        </p>
                </v-card>
            </v-col>
        </v-card>
        <v-card class="mb-4" flat height="260px">
            <v-card-text class="pb-0">
                <p class="text-subtitle-1">
                    <v-avatar color="accentSec" rounded size="25" class="secondary--text mx-2">4</v-avatar>
                    How do you find the number with the highest value of x and y?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col class="ml-13" cols="5">
                    <!-- USER'S CHOICE -->
                        <v-card flat color="primary">
                            <p class="pa-2 white--text">
                                <v-avatar color="white" rounded size="25" class="primary--text mx-2">A</v-avatar>
                                scripting                       
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">B</v-avatar>                            
                                javascript
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="6">   
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">C</v-avatar>
                                script
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">D</v-avatar>
                                JS
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-col class="ml-13 pt-0" cols="11">
                <v-card flat outlined rounded="xl" color="warning2">
                        <p class="pa-2 mb-0 warning--text">
                            <v-icon color="warning" size="25" class="mx-2">mdi-alert-circle-outline</v-icon>
                            Jawaban salah, yang benar adalah poin B                       
                        </p>
                </v-card>
            </v-col>
        </v-card>
        <v-card class="mb-4" flat height="260px">
            <v-card-text class="pb-0">
                <p class="text-subtitle-1">
                    <v-avatar color="accentSec" rounded size="25" class="secondary--text mx-2">5</v-avatar>
                    How do you declare a JavaScript variable?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col class="ml-13" cols="5">
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">A</v-avatar>
                                scripting                       
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">B</v-avatar>                            
                                javascript
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="6">   
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">C</v-avatar>
                                script
                            </p>
                        </v-card>
                    <!--USER'S CHOICE -->
                        <v-card flat color="primary">
                            <p class="pa-2 white--text">
                                <v-avatar color="white" rounded size="25" class="primary--text mx-2">D</v-avatar>
                                JS
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-col class="ml-13 pt-0" cols="11">
                <v-card flat outlined rounded="xl" color="success1">
                        <p class="pa-2 mb-0 success5--text">
                            <v-icon color="success5" size="25" class="mx-2">mdi-alert-circle-outline</v-icon>
                            Jawaban kamu benar                       
                        </p>
                </v-card>
            </v-col>
        </v-card>
        <v-card class="mb-4" flat height="260px">
            <v-card-text class="pb-0">
                <p class="text-subtitle-1">
                    <v-avatar color="accentSec" rounded size="25" class="secondary--text mx-2">6</v-avatar>
                    Which operator is used to assign a value to a variable?
                </p>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col class="ml-13" cols="5">
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">A</v-avatar>
                                scripting                       
                            </p>
                        </v-card>
                    <!-- USER'S CHOICE -->
                        <v-card flat color="primary">
                            <p class="pa-2 white--text">
                                <v-avatar color="white" rounded size="25" class="primary--text mx-2">B</v-avatar>                            
                                javascript
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="6">   
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">C</v-avatar>
                                script
                            </p>
                        </v-card>
                        <v-card flat color="accent">
                            <p class="pa-2 primary--text">
                                <v-avatar color="primary" rounded size="25" class="white--text mx-2">D</v-avatar>
                                JS
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-col class="ml-13 pt-0" cols="11">
                <v-card flat outlined rounded="xl" color="success1">
                        <p class="pa-2 mb-0 success5--text">
                            <v-icon color="success5" size="25" class="mx-2">mdi-alert-circle-outline</v-icon>
                            Jawaban kamu benar                       
                        </p>
                </v-card>
            </v-col>
        </v-card>
            
      </v-container>
      </v-main>
    </v-row>
  </v-app>
</template>

<script>
import goDash from "@/components/toDashboard.vue"
export default {
    components : {goDash}
}
</script>
<style scoped>
.bar{
  max-width: 394px;
}
p{
    color: black;
}
</style>