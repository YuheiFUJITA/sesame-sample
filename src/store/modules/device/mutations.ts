import { Mutations } from 'vuex';
import { MutationsInterface, StateInterface } from './type';

export const mutations: Mutations<StateInterface, MutationsInterface> = {
    setUuid(state, payload) {
        state.uuid = payload;
    },
    setBatteryPercentage(state, payload) {
        state.batteryPercentage = payload;
    },
    setBatteryVoltage(state, payload) {
        state.batteryVoltage = payload;
    },
    setPosition(state, payload) {
        state.position = payload;
    },
    setCHSesame2Status(state, payload) {
        state.CHSesame2Status = payload;
    },
    setTimestamp(state, payload) {
        state.timestamp = payload;
    },
    setAll(state, payload) {
        state = payload;
    },
    reset(state) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state = {
            uuid: null,
            batteryPercentage: null,
            batteryVoltage: null,
            position: null,
            CHSesame2Status: null,
            timestamp: null,
        };
    },
};
