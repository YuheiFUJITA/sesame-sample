import { Getters } from 'vuex';
import { GettersInterface, StateInterface } from './type';

export const getters: Getters<StateInterface, GettersInterface> = {
    batteryPercentage(state) {
        return state.batteryPercentage;
    },
    batteryVoltage(state) {
        return state.batteryVoltage;
    },
    position(state) {
        return state.position;
    },
    CHSesame2Status(state) {
        return state.CHSesame2Status;
    },
    timestampe(state) {
        return state.timestampe;
    },
};
