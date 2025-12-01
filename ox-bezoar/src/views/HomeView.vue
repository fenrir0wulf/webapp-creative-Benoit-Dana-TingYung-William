<script setup>
    import AppHeader from '../components/layout/AppHeader.vue'
    import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
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
      <ChoiceButton :textButton="startButton.btntext" @click="gotoStart(1)" class="btn" />
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
