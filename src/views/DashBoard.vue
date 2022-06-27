<template>
  <v-app>
    <v-layout>
    <v-main class="ma-5">
      <h3><b>Dashboard</b></h3> 
      <p>Lihat informasi statistik milikmu</p>
    <v-row class="ma-2" app>
        <v-col class="mx-4" cols="3" app>
            <v-card height="100px"> 
               <v-list-item two-line>
                   <v-list-item-avatar
                   tile
                   size="60"
                   color="grey"
                   >
                   </v-list-item-avatar>
                   <v-list-item-content>
                       <v-list-item-title class="text-h8 mb-1">Specializations</v-list-item-title>
                       <v-list-item-subtitle>4</v-list-item-subtitle>
                   </v-list-item-content>
               </v-list-item> 
            </v-card>
            <br />
            <!-- PROGRESS-->
            <v-card height="250px">
              <v-card-title>Progress</v-card-title>
            </v-card>
            <br />
            <v-card height="250px">
              <v-card-title>Progress</v-card-title>
            </v-card>
          </v-col>

          <v-col class="mx-4" cols="3" app>
            <v-card height="100px">
              <v-list-item two-line>
                <v-list-item-avatar tile size="60" color="grey">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-h8 mb-1"
                    >Employees</v-list-item-title
                  >
                  <v-list-item-subtitle>4</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <br />
            <!-- MOST VIEW -->
            <v-card class="ma-auto" color="grey">
              <v-card-subtitle><b>Most Visited Course</b></v-card-subtitle>
              <v-card height="75px" tile>
                <v-card-subtitle class="mx-2 pa-2"
                  >UI/UX for Mobile</v-card-subtitle
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>

              <v-card height="75px" tile color="grey">
                <v-card-subtitle class="mx-2 pa-2">React JS</v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>

              <v-card height="75px" tile>
                <v-card-subtitle class="mx-2 pa-2"
                  >Flutter for Android</v-card-subtitle
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>

              <v-card height="75px" tile color="grey">
                <v-card-subtitle class="mx-2 pa-2">QE Engineer</v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>

          <v-col class="mx-13" cols="4" app>
            <!-- SEARCH -->
            <v-text-field label="search" solo dense rounded></v-text-field>

            <!-- ONLINE USER-->
            <v-card class="ma-auto" color="grey">
              <v-card-subtitle><b>Online User</b></v-card-subtitle>
              <v-card height="50px" tile>
                <v-list-item>
                  <v-list-item-subtitle>Asep</v-list-item-subtitle>
                  <v-list-item-icon>
                    <v-icon color="green light">mdi-circle-medium</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-card>

              <v-card height="50px" tile>
                <v-list-item>
                  <v-list-item-subtitle>Udin</v-list-item-subtitle>
                  <v-list-item-icon>
                    <v-icon color="green light">mdi-circle-medium</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-card>

              <v-card height="50px" tile>
                <v-list-item>
                  <v-list-item-subtitle>Sujiwo</v-list-item-subtitle>
                  <v-list-item-icon>
                    <v-icon color="green light">mdi-circle-medium</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-card>
            </v-card>
            <br />
            <!-- COURSE LIBRARY-->
            <v-card class="ma-auto" color="grey">
              <v-card-subtitle><b>Course Library</b></v-card-subtitle>
              <v-card height="50px" tile>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="grey light" right>mdi-checkbox-blank</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle>UI/UX</v-list-item-subtitle>
                </v-list-item>
              </v-card>

              <v-card height="50px" tile>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="grey light" right>mdi-checkbox-blank</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle>Flutter</v-list-item-subtitle>
                </v-list-item>
              </v-card>

              <v-card height="50px" tile>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="grey light" right>mdi-checkbox-blank</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle>Backend</v-list-item-subtitle>
                </v-list-item>
              </v-card>
            </v-card>
            <br />
            <!-- TIMELINE-->
            <v-card class="ma-auto" color="grey">
              <v-card-subtitle><b>Timeline</b></v-card-subtitle>
              <v-card height="100px" tile>
                <v-list-item-content class="pl-4">
                  <v-list-item-subtitle class="mb-1"
                    >Kamis, 2 Juni 2022</v-list-item-subtitle
                  >
                  <v-list-item-title
                    >Pretest UI Mobile</v-list-item-title
                  ></v-list-item-content
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>

              <v-card height="100px" tile>
                <v-list-item-content class="pl-4">
                  <v-list-item-subtitle class="mb-1"
                    >Kamis, 2 Juni 2022</v-list-item-subtitle
                  >
                  <v-list-item-title
                    >Pretest UI Mobile</v-list-item-title
                  ></v-list-item-content
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>

              <v-card height="100px" tile>
                <v-list-item-content class="pl-4">
                  <v-list-item-subtitle class="mb-1"
                    >Kamis, 2 Juni 2022</v-list-item-subtitle
                  >
                  <v-list-item-title
                    >Pretest UI Mobile</v-list-item-title
                  ></v-list-item-content
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="text-lowercase pa-3" small text>detail</v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  methods: {
    gettoken() {
      const cookie = require("tiny-cookie");
      return cookie.get("token");
    },
  },
  mounted() {
    console.log(this.$store.state.user.userid);
    console.log(this.gettoken());
  },
  created() {
    document.title = "Dashboard";
  },
};
</script>
