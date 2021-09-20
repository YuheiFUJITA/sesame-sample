import { Actions } from 'vuex';
import {
    ActionsInterface,
    GettersInterface,
    MutationsInterface,
    StateInterface,
} from './type';

export const actions: Actions<
    StateInterface,
    ActionsInterface,
    GettersInterface,
    MutationsInterface
> = {
    asyncSetApiKey(ctx, payload) {
        ctx.commit('setApiKey', payload);
    },
    asyncDeleteApiKey(ctx) {
        ctx.commit('reset');
    },
    asyncSetIsLoading(ctx, payload) {
        ctx.commit('setIsLoading', payload);
    },
    asyncShowSnackbar(ctx, payload) {
        ctx.commit('setSnackbarText', payload.text);
        ctx.commit('setSnackbarColor', payload.color);
    },
    asyncCloseSnackbar(ctx) {
        ctx.commit('setSnackbarText', null);
    },
};
