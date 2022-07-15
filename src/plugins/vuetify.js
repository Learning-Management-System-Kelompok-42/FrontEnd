import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#286F6C",
        gray6: "#A4A4A4",
        accent: "#D8F7EB",
        warning: "#DD2E4B",
        warning2: "#FDDDD5",
        gray: "#C2C2C2",
        gray1: "#484848",
        gray7: "#858585",
        secondary :"#F26440",
        accentSec :"#FEEBD8",
      },
    },
  },
});
