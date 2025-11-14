<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import SaveSlotManager from '../components/layout/SaveSlotManager.vue';
</script>

<template>
    <header>
        <AppHeader />
    </header>

    <main>
        <h1>Sauvegardes</h1>
        <SaveSlotManager />
    </main>
</template>

<script>
    export default {
        name:'SavesView',
        components: {},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>