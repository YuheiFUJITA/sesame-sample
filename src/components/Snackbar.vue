<template>
    <v-snackbar
        multi-line
        :color="color"
        transition="dialog-bottom-transition"
        v-model="isOpen"
    >
        {{ text }}
        <template v-slot:action>
            <v-btn text dark @click="close">閉じる</v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as Vuex from 'vuex';

@Component
export default class Snackbar extends Vue {
    $store!: Vuex.ExStore;
    get text(): string | null {
        return this.$store.state.system.snackbarText;
    }

    get isOpen(): boolean {
        return !!this.text;
    }
    set isOpen(_value: boolean) {
        this.$store.dispatch('system/asyncCloseSnackbar');
    }

    get color(): 'info' | 'warning' {
        return this.$store.state.system.snackbarColor;
    }

    close(): void {
        this.$store.dispatch('system/asyncCloseSnackbar');
    }
}
</script>
