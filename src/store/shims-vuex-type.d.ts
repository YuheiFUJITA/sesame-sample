import 'vuex';
import * as Device from './modules/device/type';
import * as System from './modules/system/type';

declare module 'vuex' {
    type Getters<S, G> = {
        [K in keyof G]: (
            state: S,
            getters: G,
            rootState: RootState,
            rootGetters: RootGetters
        ) => G[K];
    };

    type Mutations<S, M> = {
        [K in keyof M]: (state: S, payload: M[K]) => void;
    };

    type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void;
    type ExDispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any;
    type ExActionContext<S, A, G, M> = {
        commit: ExCommit<M>;
        dispatch: ExDispatch<A>;
        state: S;
        getters: G;
        rootState: RootState;
        rootGetters: RootGetters;
    };
    type Actions<S, A, G = Record<string, never>, M = Record<string, never>> = {
        [K in keyof A]: (
            ctx: ExActionContext<S, A, G, M>,
            payload: A[K]
        ) => any;
    };

    interface ExStore extends Store<RootState> {
        getters: RootGetters;
        commit: ExCommit<RootMutations>;
        dispatch: ExDispatch<RootActions>;
    }
    type StoreContext = ExActionContext<
        RootState,
        RootActions,
        RootGetters,
        RootMutations
    >;

    type RootState = {
        device: Device.StateInterface;
        system: System.StateInterface;
    };
    type RootGetters = Device.RootGettersInterface &
        System.RootGettersInterface;
    type RootMutations = Device.RootMutationsInterface &
        System.RootMutationsInterface;
    type RootActions = Device.RootActionsInterface &
        System.RootActionsInterface;
}
