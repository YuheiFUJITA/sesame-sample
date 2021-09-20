import { Mutations } from 'vuex';
import { MutationsInterface, StateInterface } from './type';

export const mutations: Mutations<StateInterface, MutationsInterface> = {
    setApiKey(state, payload) {
        state.apiKey = payload;
    },
    setIsLoading(state, payload) {
        state.isLoading = payload;
    },
    setSnackbarText(state, payload) {
        state.snackbarText = payload;
    },
    setSnackbarColor(state, payload) {
        state.snackbarColor = payload;
    },
    reset(state) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state = {
            apiKey: '',
            isLoading: false,
            snackbarText: null,
            snackbarColor: 'info',
        };
    },
};
