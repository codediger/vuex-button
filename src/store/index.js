import Vue from 'vue';
import Vuex from 'vuex';
import style from './modules/style';

Vue.use(Vuex);

const env = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    style,
  },
  strict: env,
});
