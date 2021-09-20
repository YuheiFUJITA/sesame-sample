export type StatusResponse = {
    batteryPercentage: number;
    batteryVoltage: number;
    position: number;
    CHSesame2Status: 'locked' | 'unlocked' | 'moved';
    timestamp: number;
};
