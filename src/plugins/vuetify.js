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
        primary1:"#D8F7EB",
        primary2 :"#B3F0DD",
        accent: "#D8F7EB",
        success1 : "#DEFAD4",
        success5 : "#2AAA39",
        secondary : "#F26440",
        accentSec:"#FEEBD8",
        warning: "#DD2E4B",
        warning2: "#FDDDD5",
        gray: "#C2C2C2",
        gray1: "#484848",
        gray6: "#A4A4A4",
        gray7: "#858585",
        gray9: "#484848",
      },
    },
  },
});
