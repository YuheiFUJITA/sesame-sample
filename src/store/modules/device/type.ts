export interface StateInterface {
    uuid: string | null;
    batteryPercentage: number | null;
    batteryVoltage: number | null;
    position: number | null;
    CHSesame2Status: 'locked' | 'unlocked' | 'moved' | null;
    timestamp: Date | null;
}

export interface GettersInterface {
    uuid: StateInterface['uuid'];
    batteryPercentage: StateInterface['batteryPercentage'];
    batteryVoltage: StateInterface['batteryVoltage'];
    position: StateInterface['position'];
    CHSesame2Status: StateInterface['CHSesame2Status'];
    timestamp: StateInterface['timestamp'];
}

export interface RootGettersInterface {
    'device/uuid': GettersInterface['uuid'];
    'device/batteryPercentage': GettersInterface['batteryPercentage'];
    'device/batteryVoltage': GettersInterface['batteryVoltage'];
    'device/position': GettersInterface['position'];
    'device/CHSesame2Status': GettersInterface['CHSesame2Status'];
    'device/timestamp': GettersInterface['timestamp'];
}

export interface MutationsInterface {
    setUuid: NonNullable<StateInterface['uuid']>;
    setBatteryPercentage: NonNullable<StateInterface['batteryPercentage']>;
    setBatteryVoltage: NonNullable<StateInterface['batteryVoltage']>;
    setPosition: NonNullable<StateInterface['position']>;
    setCHSesame2Status: NonNullable<StateInterface['CHSesame2Status']>;
    setTimestamp: NonNullable<StateInterface['timestamp']>;
    setAll: StateInterface;
    reset: void;
}

export interface RootMutationsInterface {
    'device/setUuid': MutationsInterface['setUuid'];
    'device/setBatteryPercentage': MutationsInterface['setBatteryPercentage'];
    'device/setBatteryVoltage': MutationsInterface['setBatteryVoltage'];
    'device/setPosition': MutationsInterface['setPosition'];
    'device/setCHSesame2Status': MutationsInterface['setCHSesame2Status'];
    'device/setTimestamp': MutationsInterface['setTimestamp'];
    'device/setAll': MutationsInterface['setAll'];
    'device/reset': MutationsInterface['reset'];
}

export interface ActionsInterface {
    asyncGetDeviceStatus: string;
}

export interface RootActionsInterface {
    'device/asyncGetDeviceStatus': ActionsInterface['asyncGetDeviceStatus'];
}
