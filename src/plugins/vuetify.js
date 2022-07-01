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
        accent: "#D8F7EB",
        secondary : "#F26440",
        accentSec:"#FEEBD8",
        warning: "#DD2E4B",
        warning2: "#FDDDD5",
        gray: "#C2C2C2",
        gray9: "#484848",
        sub : "#000006"
      },
    },
  },
});
