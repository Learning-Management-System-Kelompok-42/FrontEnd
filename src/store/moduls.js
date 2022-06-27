import { getField, updateField } from "vuex-map-fields";

const state = () => ({
  modul: [
    {
      nomodul: 1,
      namamodul: "",
      linkslides: "",
      linkvideo: "",
      quiz: [
        {
          noquiz: 1,
          question: "",
          optiona: "",
          optionb: "",
          optionc: "",
          optiond: "",
          optioncorrect: "",
        },
      ],
    },
  ],
});
const getters = {
  getField,
};
const mutations = {
  updateField,
  addModul(state) {
    // let number = ;
    // number + 1;
    state.modul.push({
      nomodul: 1,
      namamodul: "",
      linkslides: "",
      linkvideo: "",
      quiz: [
        {
          noquiz: 1,
          question: "",
          optiona: "",
          optionb: "",
          optionc: "",
          optiond: "",
          optioncorrect: "",
        },
      ],
    });
    console.log(state.modul);
  },
  addQuiz(state) {
    for (let i = 0; i < state.modul.length; i++) {
      console.log(state.modul[i]);
      if (i === state.modul[i]) {
        state.modul[i].quiz.push({
          noquiz: +1,
          question: "",
          optiona: "",
          optionb: "",
          optionc: "",
          optiond: "",
          optioncorrect: "",
        });
      }
    }
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
