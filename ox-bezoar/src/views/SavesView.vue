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
  background-image: url(/img/saves.jpg);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

@media screen and (max-width: 500px) {

.saves {
  flex-direction: column;
}


}
</style>
