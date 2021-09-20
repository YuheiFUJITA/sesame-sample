import axios, { AxiosInstance } from 'axios';
import {} from 'vuex';
import { StatusResponse } from '../responses';

export class ApiClient {
    private static instance: ApiClient;
    private static readonly BASE_URL = 'https://app.candyhouse.co/api/';
    private apiKey?: string;
    private axios: AxiosInstance;
    private constructor() {
        this.axios = axios.create({
            baseURL: ApiClient.BASE_URL,
            headers: { 'Access-Control-Allow-Origin': '*' },
        });
    }

    static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    setApiKey(value: string): ApiClient {
        this.apiKey = value;
        return this;
    }

    getDeviceStatus(uuid: string): Promise<StatusResponse> {
        return new Promise<StatusResponse>((resolve, reject) => {
            this.axios
                .get<StatusResponse>(`sesame2/${uuid}`, {
                    headers: {
                        'x-api-key': this.apiKey,
                    },
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
