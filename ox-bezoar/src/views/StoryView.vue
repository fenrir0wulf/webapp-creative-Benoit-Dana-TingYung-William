<script setup>
import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
import AppHeader from './components/layout/AppHeader.vue';
import LoadingSpinner from './components/layout/LoadingSpinner.vue';
</script>

<template>
    MAIN STORY VIEW WITH ALL SUBCOMPONENTS
    <header>
        <AppHeader/>
    </header>
    <main>
        <LoadingSpinner/>
        <div>
            <h1>Ox Bezoar Temporel</h1>
        </div>
        
        <h2>Commencer</h2>
        <ButtonPrimary/>

        <button>Sauvegardes</button>
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