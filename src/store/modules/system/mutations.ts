import { Mutations } from 'vuex';
import { MutationsInterface, StateInterface } from './type';

export const mutations: Mutations<StateInterface, MutationsInterface> = {
    setApiKey(state, payload) {
        state = { ...state, apiKey: payload };
    },
    setIsLoading(state, payload) {
        state = { ...state, isLoading: payload };
    },
    setSnackbarText(state, payload) {
        state = { ...state, snackbarText: payload };
    },
    setSnackbarColor(state, payload) {
        state = { ...state, snackbarColor: payload };
    },
    reset(state) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state = {
            apiKey: null,
            isLoading: false,
            snackbarText: null,
            snackbarColor: 'info',
        };
    },
};
