<template>
  <div class="saveSlots">
    <button class="saveSlot">Save 1</button>
    <button class="saveSlot">Save 2</button>
    <button class="saveSlot">Save 3</button>
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
