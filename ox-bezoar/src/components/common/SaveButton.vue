<script setup>
    import { mapStores } from 'pinia';
    import { useStoryStore } from '../../stores/useStoryStore';
    import { usePlayerStore } from '../../stores/usePlayerStore';
    import { useSaveStore } from '../../stores/useSaveStore';
</script>

<template>
    <div>
        <button @click="save" >Save</button>
    </div>
</template>

<script>
    export default {
        name:'SaveButton',
        components: {},
        data() {
            return {

            }
        },
        computed: {
            ...mapStores( useStoryStore, usePlayerStore, useSaveStore )
        },
        methods: {
            /**
             * cc = currentChapter
             * vc = visitedChapters
             * pf = Flags de l'inventaire
             * Appelle la fonction de sauvegarde et lui donne les valeurs
             */
            save() {
                let cc = this.storyStore.currentChapter;
                let vc = this.storyStore.visitedChapters;
                let pf = this.playerStore.flags;
                this.saveStore.saveGame(cc, vc, pf);
            }
        }
    }
</script>

<style scoped>

</style>