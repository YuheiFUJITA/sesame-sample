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
    asyncGetDeviceStatus(ctx, payload) {
        ctx.commit('setAll');
    },
    asyncUpdateDeviceStatus(ctx) {
        ctx.commit('setAll');
    },
    asyncDeleteDeviceStatus(ctx) {
        ctx.commit('reset');
    },
};
