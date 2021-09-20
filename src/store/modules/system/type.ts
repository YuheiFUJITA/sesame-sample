export interface StateInterface {
    apiKey: string | null;
    isLoading: boolean;
    snackbarText: string | null;
    snackbarColor: 'info' | 'warning';
}

export interface GettersInterface {
    apiKey: StateInterface['apiKey'];
    isLoading: StateInterface['isLoading'];
    snackBarText: StateInterface['snackbarText'];
    snackBarColor: StateInterface['snackbarColor'];
}

export interface RootGettersInterface {
    'system/apiKey': GettersInterface['apiKey'];
    'system/isLoading': GettersInterface['isLoading'];
    'system/snackbarText': GettersInterface['snackBarText'];
    'system/snackbarColor': GettersInterface['snackBarColor'];
}

export interface MutationsInterface {
    setApiKey: NonNullable<StateInterface['apiKey']>;
    setIsLoading: StateInterface['isLoading'];
    setSnackbarText: StateInterface['snackbarText'];
    setSnackbarColor: StateInterface['snackbarColor'];
    reset: void;
}

export interface RootMutationsInterface {
    'system/setApiKey': MutationsInterface['setApiKey'];
    'system/setIsLoading': MutationsInterface['setIsLoading'];
    'system/setSnackbarText': MutationsInterface['setSnackbarText'];
    'system/setSnackbarColor': MutationsInterface['setSnackbarColor'];
    'system/reset': MutationsInterface['reset'];
}

export interface ActionsInterface {
    asyncSetApiKey: string;
    asyncDeleteApiKey: void;
    asyncSetIsLoading: boolean;
    asyncShowSnackbar: { text: string; color: StateInterface['snackbarColor'] };
    asyncCloseSnackbar: void;
}

export interface RootActionsInterface {
    'system/asyncSetApiKey': ActionsInterface['asyncSetApiKey'];
    'system/asyncDeleteApiKey': ActionsInterface['asyncDeleteApiKey'];
    'system/asyncSetIsLoading': ActionsInterface['asyncSetIsLoading'];
    'system/asyncShowSnackbar': ActionsInterface['asyncShowSnackbar'];
    'system/asyncCloseSnackbar': ActionsInterface['asyncCloseSnackbar'];
}
