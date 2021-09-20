<template>
    <v-app id="inspire">
        <v-app-bar app>
            <v-toolbar-title>Sesame-Sample</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
        <loading></loading>
        <snackbar></snackbar>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading.vue';
import Snackbar from '@/components/Snackbar.vue';

@Component({
    components: {
        Loading,
        Snackbar,
    },
})
export default class App extends Vue {
    drawer = false;
}
</script>
