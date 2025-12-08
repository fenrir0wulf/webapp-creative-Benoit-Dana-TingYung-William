<template>
  <div class="saveSlots">
    <button class="saveSlot" v-for="save in saves" @click="handleLoad(save)">
      <h4>Chapitre courant: {{ save.saveCh }}</h4>
      <h4>Chapitres visités: {{ save.saveVis }}</h4>
      <h4>Objets: {{ save.savePl }}</h4>
    </button>
  </div>
</template>

<script>
export default {
  name: "SaveSlotManager",
  props: ['saveSlots'],
  components: {},
  data() {
    return {
      saves: [],
    };
  },
  created() {
    this.saves = this.saveSlots;
  },
  methods: {
    handleLoad(save) {
      this.$emit('load', save)
    }
  }
};
</script>

<style scoped>
.saveSlot {
  background-color: #ffffff00;
  background-image: url(/src/img/book.png);
  background-size: cover;
  width: 30vw;
  height: 30vw;
  margin: 1vw;
}

.saveSlots {
  display: flex;
  flex-direction: row;

}

@media screen and (max-width: 500px) {
  .saveSlot {
  width: 50vw;
  height: 50vw;
}
.saveSlots {
  padding-top: 30vw;
  flex-direction: column;
}
}
</style>
