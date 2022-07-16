<template>
  <v-col class="pa-0 pt-2">
    <v-card flat class="mx-auto" width="100%">
      <v-expansion-panels flat>
        <v-expansion-panel
          v-for="detail in getDetailCourse.modules"
          :key="detail.ID"
        >
          <v-expansion-panel-header>
            <v-row align="center" spacer="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar
                  :elevation="0"
                  class="mr-2"
                  color="accentSec"
                  size="36"
                >
                  <v-icon color="secondary" size="20"
                    >mdi-file-document-outline</v-icon
                  >
                </v-avatar>
              </v-col>
              <v-col class="ms-5"
                ><b class="text-capitalize">{{ detail.Title }}</b></v-col
              >
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0" color="accent">
            <v-list color="accent">
              <v-list-item
                v-for="([icon, title], i) in done"
                :key="i"
                link
                class="content"
              >
                <v-list-item-icon>
                  <v-icon
                    v-text="icon"
                    color="primary"
                    class="px-auto"
                  ></v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  v-text="title"
                  class="primary--text"
                ></v-list-item-title>
                <v-spacer />
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Pengenalan</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in done"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Javascript Array</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in progress"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Javascript Variables</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Javascript Functions</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Javascript Objects</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title
              ><b>Javascript Control Statements</b></v-list-item-title
            >
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Javascript Cookies</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title
              ><b>Javascript Loop Statements</b></v-list-item-title
            >
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title
              ><b>Javascript Data Structures</b></v-list-item-title
            >
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title
              ><b>Javascript Error Handling</b></v-list-item-title
            >
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title
              ><b>Javascript Regular Expressions</b></v-list-item-title
            >
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-list>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-avatar :elevation="0" class="mr-2" color="accentSec" size="36">
              <v-icon color="secondary" size="20"
                >mdi-file-document-outline</v-icon
              >
            </v-avatar>
            <v-list-item-title><b>Penutup</b></v-list-item-title>
          </template>
          <v-list color="accent">
            <v-list-item
              v-for="([icon, title, mark], i) in todo"
              :key="i"
              link
              class="content"
            >
              <v-list-item-icon>
                <v-icon v-text="icon" color="primary" class="px-auto"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="primary--text"
              ></v-list-item-title>
              <v-spacer />
              <v-list-item-icon>
                <v-icon v-text="mark" size="20" color="primary"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list> -->
    </v-card>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      done: [
        ["mdi-play-circle-outline", "Video Materi", "mdi-checkbox-marked"],
        ["mdi-text-box-outline", "Slide Presentasi", "mdi-checkbox-marked"],
        ["mdi-alert-circle-outline", "Quiz", "mdi-checkbox-marked"],
      ],
      progress: [
        ["mdi-play-circle-outline", "Video Materi"],
        ["mdi-text-box-outline", "Slide Presentasi", "mdi-lock"],
        ["mdi-alert-circle-outline", "Quiz", "mdi-lock"],
      ],
      todo: [
        ["mdi-play-circle-outline", "Video Materi", "mdi-lock"],
        ["mdi-text-box-outline", "Slide Presentasi", "mdi-lock"],
        ["mdi-alert-circle-outline", "Quiz", "mdi-lock"],
      ],
    };
  },
  computed: {
    getDetailCourse() {
      return this.$store.state.course.detailCourse;
    },
  },
};
</script>
<style>
.content:hover {
  color: #b3f0dd;
}
b {
  color: black;
}
</style>
