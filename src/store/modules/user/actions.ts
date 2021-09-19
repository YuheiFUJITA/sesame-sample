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
};
