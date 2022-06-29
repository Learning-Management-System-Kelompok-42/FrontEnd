import { getField } from "vuex-map-fields";

const state = () => ({
  dataCourse: {},
  course: {
    title: "",
    description: "",
    thumbnail: null,
    modules: [
      {
        orders: "",
        title: "",
        slide_url: "",
        youtube_url: "",
        quizzes: [
          {
            question: "",
            answer: "",
            multiple_choice: [],
          },
        ],
      },
    ],
  },
});
const getters = {
  getField,
};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
