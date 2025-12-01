<script setup>
    import { mapStores } from 'pinia';
    import { usePlayerStore } from '../stores/usePlayerStore';
    import { useStoryStore } from '../stores/useStoryStore';
</script>

<template>
    <div>
        <h2>Fin atteinte: {{ endingData.titre }} </h2>
        <p>Chemins visités: {{ visitedChapters }}</p>
        <button><RouterLink :to="{name: 'home'}">Retour au menu</RouterLink> </button>
    </div>
</template>

<script>
    export default {
        name:'EndingScreen',
        components: {},
        data() {
            return {
                visitedChapters: null,
                endingGet: null,
                endingData: {
                    id: null,
                    titre: null,
                },
            }
        },
        created() {
            this.visitedChapters = this.storyStore.getVisitedChapters;
            this.endingGet = this.$route.params.id;
            this.endingData = this.storyStore.getStoryData.find(({id}) => id == this.endingGet);
        },
        computed: {
            ...mapStores(usePlayerStore, useStoryStore)
        },
    }
</script>

<style scoped>

</style>