<script setup>
    import AppHeader from '../components/layout/AppHeader.vue'
    import ChoiceButton from '../components/common/ChoiceButton.vue';

    import { useStoryStore } from '../stores/useStoryStore';
    import { usePlayerStore } from '../stores/usePlayerStore';
    import { useSaveStore } from '../stores/useSaveStore';
    import { mapStores } from 'pinia';
</script>

<template>
  <main>
    <div class="home">
      <AppHeader />
      <ChoiceButton :textButton="startButton.btntext" @click="gotoStart()" class="btn" />
      <ChoiceButton :textButton="savesButton.btntext" @click="gotoSaves()" class="btn"/>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  components: { ChoiceButton },
  data() {
    return {
      startButton: {
        btntext: "Commencer",
      },
      savesButton: {
        btntext: "Sauvegardes",
      },
    };
  },
  computed: {
        ...mapStores(usePlayerStore, useStoryStore, useSaveStore),
    },
  methods: {
    /**
     * Demarre l'aventure, (re)initialise les donnees du pinia
     */
    gotoStart() {
      this.storyStore.resetStates();
      this.playerStore.resetFlags();
      this.$router.push({
        name: "chapter",
        params: { id: 1 },
      });
    },
    /**
     * Envoi vers la page des sauvegardes
     */
    gotoSaves() {
      this.$router.push({
        name: "saves",
      });
    },
  },
};
</script>

<style scoped>
.home {
  background-image: url(/img/menu.png);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  padding: 2vh;
}

@media screen and (max-width: 500px) {
  .home {
    background-image: url();
  }
}
</style>
