<script setup>
import AppHeader from "../components/layout/AppHeader.vue";
import SaveSlotManager from "../components/specific/SaveSlotManager.vue";
</script>

<template>
  <main>
    <div class="saves">
      <SaveSlotManager />
    </div>
  </main>
</template>

<script>
export default {
  name: "SavesView",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.saves {
  background-image: url();
}
</style>
