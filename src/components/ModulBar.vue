<template>
    <v-main>
        <v-container>
            <v-col cols="4">
            <v-card
                class="mx-auto"
                width="100%"
            >
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Pengenalan</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in done"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20"  color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Array</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in progress"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Variables</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Functions</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Objects</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Control Statements</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Cookies</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Loop Statements</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Data Structures</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Error Handling</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Javascript Regular Expressions</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="false"
                    >
                        <template v-slot:activator>
                            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
                                <v-icon color="secondary" size="20" >mdi-file-document-outline</v-icon>
                            </v-avatar>
                            <v-list-item-title><b>Penutup</b></v-list-item-title>
                        </template>
                        <v-list color="accent">
                            <v-list-item
                                v-for="([icon,title, mark], i) in todo"
                                :key="i"
                                link
                                class="content"
                            >     
                                <v-list-item-icon>
                                    <v-icon v-text="icon" color="primary" class="px-auto" ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title v-text="title" class="primary--text" ></v-list-item-title>
                                <v-spacer/>
                                <v-list-item-icon>
                                <v-icon v-text="mark" size="20" color="primary"></v-icon>
                                </v-list-item-icon>                          
                            </v-list-item>
                        </v-list>
                    </v-list-group>
                </v-list>               
            </v-card></v-col>
    </v-container>
  </v-main>
</template>
<script>

export default {
    data() {
        return{
           done: [
                ['mdi-play-circle-outline','Video Materi','mdi-checkbox-marked'],
                ['mdi-text-box-outline','Slide Presentasi','mdi-checkbox-marked'],
                ['mdi-alert-circle-outline','Quiz','mdi-checkbox-marked'],
            ],
            progress: [
                ['mdi-play-circle-outline','Video Materi'],
                ['mdi-text-box-outline','Slide Presentasi','mdi-lock'],
                ['mdi-alert-circle-outline','Quiz','mdi-lock'],
            ],
            todo: [
                ['mdi-play-circle-outline','Video Materi','mdi-lock'],
                ['mdi-text-box-outline','Slide Presentasi','mdi-lock'],
                ['mdi-alert-circle-outline','Quiz','mdi-lock'],
            ],

        }
    }
}
</script>
<style scoped>
.content:hover{
    color: #B3F0DD;
}
b{
    color: black;
}
</style>
