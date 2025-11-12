<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import ChapterHeader from './components/layout/ChapterHeader.vue'
import ChoicePanel from './components/layout/ChoicePanel.vue'
import InventoryDisplay from './components/layout/InventoryDisplay.vue'
import AudioController from './components/specific/AudioController.vue'
import SaveSlotManager from './components/specific/SaveSlotManager.vue'
</script>

<template>
  <AppHeader />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
