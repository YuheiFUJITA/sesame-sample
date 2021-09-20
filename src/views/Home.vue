<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field
                        label="APIキー"
                        outlined
                        required
                        v-model="apiKey"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        label="UUID"
                        outlined
                        required
                        v-model="uuid"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn block x-large @click.stop="call">実行</v-btn>
                </v-col>
            </v-row>
        </v-form>
        <v-row>
            <v-col>
                <v-text-field
                    label="バッテリー残量"
                    outlined
                    readonly
                    suffix="%"
                    :value="batteryPercentage"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="電圧"
                    outlined
                    readonly
                    suffix="V"
                    :value="batteryVoltage"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="角度"
                    outlined
                    readonly
                    suffix="°"
                    :value="position"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="状態"
                    outlined
                    readonly
                    :value="status"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="更新日時"
                    outlined
                    readonly
                    type="datetime"
                    :value="timestamp"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as Vuex from 'vuex';

@Component
export default class Home extends Vue {
    $store!: Vuex.ExStore;

    get apiKey(): string {
        return this.$store.state.system.apiKey;
    }
    set apiKey(value: string) {
        this.$store.commit('system/setApiKey', value);
    }

    get uuid(): string {
        return this.$store.state.device.uuid || '';
    }
    set uuid(value: string) {
        this.$store.commit('device/setUuid', value);
    }

    get batteryPercentage(): number | string {
        return this.$store.getters['device/batteryPercentage'] || '不明';
    }

    get batteryVoltage(): number | string {
        return this.$store.getters['device/batteryVoltage'] || '不明';
    }

    get position(): number | string {
        return this.$store.getters['device/position'] || '不明';
    }

    get status(): string {
        switch (this.$store.getters['device/CHSesame2Status']) {
            case 'locked':
                return '施錠';
            case 'unlocked':
                return '解錠';
            case 'moved':
                return '動いてる？';
            default:
                return '不明';
        }
    }

    get timestamp(): Date | string {
        const timestamp = this.$store.getters['device/timestamp'];
        if (timestamp) {
            return new Date(timestamp);
        } else {
            return '不明';
        }
    }

    call(): void {
        this.$store.dispatch('device/asyncGetDeviceStatus');
    }
}
</script>
