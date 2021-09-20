import { Actions, RootMutations } from 'vuex';
import {
    ActionsInterface,
    GettersInterface,
    MutationsInterface,
    StateInterface,
} from './type';
import { ApiClient } from '@/api';

export const actions: Actions<
    StateInterface,
    ActionsInterface,
    GettersInterface,
    MutationsInterface & RootMutations
> = {
    asyncGetDeviceStatus(ctx) {
        const client = ApiClient.getInstance().setApiKey(
            ctx.rootGetters['system/apiKey']
        );
        ctx.commit('system/setIsLoading', true, { root: true });
        client
            .getDeviceStatus(ctx.state.uuid || '')
            .then((response) => {
                ctx.commit('setBatteryPercentage', response.batteryPercentage);
                ctx.commit('setBatteryVoltage', response.batteryVoltage);
                ctx.commit('setPosition', response.position);
                ctx.commit('setCHSesame2Status', response.CHSesame2Status);
                ctx.commit('setTimestamp', new Date(response.timestamp));
            })
            .catch(() => {
                ctx.commit('system/setSnackbarColor', 'warning', {
                    root: true,
                });
                ctx.commit('system/setSnackbarText', '取得に失敗しました', {
                    root: true,
                });
            })
            .finally(() => {
                ctx.commit('system/setIsLoading', false, { root: true });
            });
    },
};
