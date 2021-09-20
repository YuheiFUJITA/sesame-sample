<template>
    <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as Vuex from 'vuex';

@Component
export default class Loading extends Vue {
    $store!: Vuex.ExStore;
    get isLoading(): boolean {
        return this.$store.getters['system/isLoading'];
    }
}
</script>
