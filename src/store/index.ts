import Vue from 'vue';
import Vuex from 'vuex';
import system from './modules/system';
import device from './modules/device';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        system,
        device,
    },
});
