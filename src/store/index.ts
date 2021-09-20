import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
import system from './modules/system';
import device from './modules/device';
import { StateInterface as SystemStateInterface } from './modules/system/type';

Vue.use(Vuex);

export const storageKey = 'sesame-sample';

export const secureStorage = new SecureLS({ isCompression: false });

const initialStoreContent = secureStorage.get(storageKey);
export const initialUnencryptedStorage = initialStoreContent
    ? JSON.parse(initialStoreContent)
    : {};

export interface RootStateInterface {
    system: SystemStateInterface;
}

export default new Vuex.Store({
    modules: {
        system,
        device,
    },
    plugins: [
        createPersistedState({
            key: storageKey,
            storage: {
                getItem: (key) => secureStorage.get(key),
                setItem: (key, value) => secureStorage.set(key, value),
                removeItem: (key) => secureStorage.remove(key),
            },
        }),
    ],
});
