<template>
  <v-main>
    <v-card class="pa-2" flat width="100%">
      <div class="pl-4 py-5">
        <logo />
      </div>
      <v-card-actions class="pa-0">
        <v-list-item two-line class="mr-0 pr-0">
          <v-img
            rounded
            max-width="41"
            color="secondary"
            src="@/assets/bagas.png"
          ></v-img>
          <v-list-item-content class="ml-3">
            <v-list-item-title class="text-subtitle-1"
              ><b>Krisnoado Prasetyo</b></v-list-item-title
            >
            <v-list-item-subtitle class="text-caption"
              >Backend Engineer</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
      <v-btn
        :to="'/urdashboard'"
        color="gray"
        class="black--text text-capitalize ma-3"
        outlined
        dense
        ><v-icon class="pt-1" color="black">mdi-chevron-left</v-icon>Dashboard
        Saya</v-btn
      >
    </v-card>

    <v-col class="pa-0 pt-2">
      <v-card flat class="mx-auto" width="100%">
        <v-virtual-scroll
          :bench="benched"
          :items="items"
          height="420"
          item-height="2500"
        >
          <template>
            <v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text">Pengenalan</b></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in done"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Array</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in progress"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Variables</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Functions</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Objects</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Control Statements</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Cookies</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Loop Statements</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Data Structures</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Error Handling</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text"
                    >Javascript Regular Expressions</b
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list-item>
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
                <v-list-item-title
                  ><b class="gray9--text">Penutup</b></v-list-item-title
                >
              </v-list-item>
              <v-list nav dense>
                <v-list-item
                  v-for="([icon, title, mark], i) in todo"
                  :key="i"
                  link
                  class="ma-2 mt-0 list"
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
                  <v-list-item-icon>
                    <v-icon v-text="mark" size="20" color="primary"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-list>
          </template>
        </v-virtual-scroll>
      </v-card>
    </v-col>
  </v-main>
</template>
<script>
import logo from "@/components/Logo.vue";
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
      benched: 0,
    };
  },
  components: { logo },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 1;
    },
  },
};
</script>
<style scoped>
.list {
  background-color: #d8f7eb;
}
</style>
