import { Mutations } from 'vuex';
import { MutationsInterface, StateInterface } from './type';

export const mutations: Mutations<StateInterface, MutationsInterface> = {
    setApiKey(state, payload) {
        state = { ...state, apiKey: payload };
    },
    reset(state) {
        state = {
            apiKey: null,
        };
    },
};
