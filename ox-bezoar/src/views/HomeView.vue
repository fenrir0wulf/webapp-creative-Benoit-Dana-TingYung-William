<script setup>
    import AppHeader from '../components/layout/AppHeader.vue'
    import ButtonPrimary from '../components/specific/ButtonPrimary.vue';

    import { useStoryStore } from '../stores/useStoryStore';
    import { usePlayerStore } from '../stores/usePlayerStore';
    import { useSaveStore } from '../stores/useSaveStore';
    import { mapStores } from 'pinia';
</script>

<template>
  <main>
    <div class="home">
      <AppHeader />
      <p class="texte">
        Aujourd'hui, John va à l'hôpital pour voir sa mère gravement malade. Il arrive d'avance pour le rendez-vous qu'il avait prévu avec le médecin pour parler de l'avancement des traitements. Dans la salle d'attente, John s'ennuie et décide de lire un livre pour enfant qui traîne sur la table.
      </p>
      <ButtonPrimary :textButton="startButton.btntext" @click="gotoStart(2)" />
      <ButtonPrimary :textButton="savesButton.btntext" @click="gotoSaves()" />
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  components: { ButtonPrimary },
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
    gotoStart(id) {
      this.$router.push({
        name: "chapter",
        params: { id: id },
      });
    },
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
  background-image: url();
}

@media screen and (max-width: 500px) {
  .home {
    background-image: url();
  }
}
</style>
