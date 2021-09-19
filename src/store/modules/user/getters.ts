import { Getters } from 'vuex';
import { GettersInterface, StateInterface } from './type';

export const getters: Getters<StateInterface, GettersInterface> = {
    apiKey(state) {
        return state.apiKey;
    },
};
