import { Getters } from 'vuex';
import { GettersInterface, StateInterface } from './type';

export const getters: Getters<StateInterface, GettersInterface> = {
    apiKey(state) {
        return state.apiKey;
    },
    isLoading(state) {
        return state.isLoading;
    },
    snackBarText(state) {
        return state.snackbarText;
    },
    snackBarColor(state) {
        return state.snackbarColor;
    },
};
