import vue from "vue";
import vuex from "vuex";
import todo from "./todo";

vue.use(vuex);

const store = new vuex.Store({
  modules: {
    todo
  }
});

export default store;
