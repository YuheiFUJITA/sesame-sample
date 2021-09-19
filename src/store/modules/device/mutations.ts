import { Mutations } from 'vuex';
import { MutationsInterface, StateInterface } from './type';

export const mutations: Mutations<StateInterface, MutationsInterface> = {
    setUuid(state, payload) {
        state = { ...state, uuid: payload };
    },
    setBatteryPercentage(state, payload) {
        state = { ...state, batteryPercentage: payload };
    },
    setBatteryVoltage(state, payload) {
        state = { ...state, batteryVoltage: payload };
    },
    setPosition(state, payload) {
        state = { ...state, position: payload };
    },
    setCHSesame2Status(state, payload) {
        state = { ...state, CHSesame2Status: payload };
    },
    setTimestamp(state, payload) {
        state = { ...state, timestampe: payload };
    },
    setAll(state, payload) {
        state = payload;
    },
    reset(state) {
        state = {
            uuid: null,
            batteryPercentage: null,
            batteryVoltage: null,
            position: null,
            CHSesame2Status: null,
            timestampe: null,
        };
    },
};
