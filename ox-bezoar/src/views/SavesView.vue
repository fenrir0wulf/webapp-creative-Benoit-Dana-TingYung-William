<script setup>
  import SaveSlotManager from "../components/specific/SaveSlotManager.vue";

  import { mapStores } from "pinia";
  import { usePlayerStore } from "../stores/usePlayerStore";
  import { useStoryStore } from "../stores/useStoryStore";
  import { useSaveStore } from "../stores/useSaveStore";
</script>

<template>
  <main>
    <div class="saves">
      <SaveSlotManager :saveSlots="saves" @load="loadSave"/>
    </div>
    <RouterLink :to="{name: 'home'}"><button>Retour au menu</button></RouterLink>
  </main>
</template>

<script>
export default {
  name: "SavesView",
  components: {SaveSlotManager},
  data() {
    return {
      saves: [],
    };
  },
  created() {
    this.getSaves();
  },
  computed: {
    ...mapStores(usePlayerStore, useStoryStore, useSaveStore)
  },
  methods: {
    getSaves() {
      if(this.saveStore.hasSaves){
        this.saves = this.saveStore.saveSlots;
      }else {
        this.saveStore.getLocalSaves();
        this.saves = this.saveStore.saveSlots;
      }
    },
    loadSave(save) {
      console.log(save);
      this.storyStore.currentChapter = save.saveCh;
      this.storyStore.visitedChapters = save.saveVis;
      this.playerStore.flags.hasDent = save.savePl.hasDent;
      this.playerStore.flags.hasDiamant = save.savePl.hasDiamant;
      this.playerStore.flags.hasOeuf = save.savePl.hasOeuf;
      this.playerStore.flags.hasOurson = save.savePl.hasOurson;
      this.$router.replace({
        name: 'chapter',
        params: {id: this.storyStore.currentChapter},
      });
    }
  }
};
</script>

<style scoped>
.saves {
  background-color: #b28755;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-size: fill;
  background-repeat: no-repeat;
  width: 100vw;
  height: 70vh;
}

@media screen and (max-width: 500px) {

.saves {
  flex-direction: column;
}


}
</style>
