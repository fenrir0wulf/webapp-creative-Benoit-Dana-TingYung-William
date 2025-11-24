<template>
  <div class="saveSlots">
    <div class="saveSlot">Save 1</div>
    <div class="saveSlot">Save 2</div>
    <div class="saveSlot">Save 3</div>
  </div>
</template>

<script>
export default {
  name: "SaveSlotManager",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.saveSlot {
  background-image: url(/src/img/livre-saves.png);
  background-size: cover;
  width: 20vw;
  height: 20vw;
  margin: 5vw;
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
