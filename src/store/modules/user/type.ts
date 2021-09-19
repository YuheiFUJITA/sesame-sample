export interface StateInterface {
    apiKey: string | null;
}

export interface GettersInterface {
    apiKey: StateInterface['apiKey'];
}

export interface RootGettersInterface {
    'device/apiKey': GettersInterface['apiKey'];
}

export interface MutationsInterface {
    setApiKey: NonNullable<StateInterface['apiKey']>;
    reset: void;
}

export interface RootMutationsInterface {
    'device/setApiKey': MutationsInterface['setApiKey'];
    'device/reset': MutationsInterface['reset'];
}

export interface ActionsInterface {
    asyncSetApiKey: string;
    asyncDeleteApiKey: void;
}

export interface RootActionsInterface {
    'device/asyncSetApiKey': ActionsInterface['asyncSetApiKey'];
    'device/asyncDeleteApiKey': ActionsInterface['asyncDeleteApiKey'];
}
