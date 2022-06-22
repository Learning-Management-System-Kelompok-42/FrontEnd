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
        danger: "#F26440",
        // primary: "#1976D2",
        // secondary: "#424242",
        // accent: "#82B1FF",
        // error: "#FF5252",
        // info: "#2196F3",
        // succes: "#4CAF50",
        // warning: "#FFC107",
      },
      dark: {
        // primary: "#1976D2",
        // secondary: "#424242",
        // accent: "#82B1FF",
        // error: "#FF5252",
        // info: "#2196F3",
        // succes: "#4CAF50",
        // warning: "#FFC107",
      },
    },
  },
});
