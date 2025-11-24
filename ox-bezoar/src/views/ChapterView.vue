<script setup>
    import ChapterHeader from '../components/layout/ChapterHeader.vue';
    import NarrativeText from '../components/layout/NarrativeText.vue';
    import ButtonPrimary from '../components/specific/ButtonPrimary.vue';

    import { mapStores } from 'pinia';
    import { usePlayerStore } from '../stores/usePlayerStore';
    import { useStoryStore } from '../stores/useStoryStore';
</script>

<template>
    <div class="body">
<div class="bg">
    <div class="livre" :class="`scene${currentChapter}`">
    <div class="chapter">
      <ChapterHeader :chapterId="chapterId" />
      <NarrativeText :textNarrative="chapterText" />
      <div class="btns">
        <ButtonPrimary
        @nextChapter="gotoNextChapter"
        v-for="choice in chapterChoices.choices"
        :textButton="choice.btntext"
        :btnPath="choice.path"
      />
      </div>
      
    </div>
  </div> 
</div>
</div>
</template>

<script>
    export default {
        name:'ChapterView',
        components: {ChapterHeader, NarrativeText, ButtonPrimary},
        data() {
            return {
                currentChapter: 1,
                chapterId: {
                    id: null,
                    title: null,
                },
                chapterText: {
                    text: null,
                },
                chapterChoices: {
                    choices: [],
                },
            }
        },
        created() {
            this.instanceChapter(this.currentChapter);
        },
        computed: {
            ...mapStores(usePlayerStore, useStoryStore)
        },
        methods: {
            gotoNextChapter(chapter) {
                this.$router.push({
                    name: 'chapter',
                    params: {id: chapter},
                });
                this.instanceChapter(chapter);
            },
            instanceChapter(chapter) {
                console.log('instance');
                this.currentChapter = chapter
                this.chapterId.id = chapter;
                this.chapterId.title = this.storyStore.getStoryData[this.chapterId.id -1].titre;
                this.chapterText.text = this.storyStore.getStoryData[this.chapterId.id - 1].texte;
                this.chapterChoices.choices = this.storyStore.getStoryData[this.chapterId.id - 1].choices;
                console.log(this.storyStore.getStoryData[this.currentChapter -1]);
            }
        },
    };
</script>

<style scoped>

.body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.btns {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.chapter {
  width: 25vw;
  height: 60%;
  padding: 3vw;
  margin-right: 5vw;
  margin-top: 7%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
}

.bg {
    background-image: url(/src/img/bg.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.livre {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 77vw;
    height: 68vh;
}

.scene1 {
    background-image: url(/src/img/home.jpg);
}

.scene2 {
    background-image: url(/src/img/chap2.jpg);
}

.scene3 {
    background-image: url(/src/img);
}

.scene4 {
    background-image: url(/src/img);
}

.scene5 {
    background-image: url(/src/img);
}

.scene6 {
    background-image: url(/src/img);
}

.scene7 {
    background-image: url(/src/img);
}

.scene8 {
    background-image: url(/src/img);
}

.scene9 {
    background-image: url(/src/img);
}

.scene10 {
    background-image: url(/src/img);
}

.scene11 {
    background-image: url(/src/img);
}

@media screen and (max-width: 500px) {
  .chapter {
    width: 60vw;
  height: 40%;
  padding: 3vw;
  margin-right: 0vw;
  margin-left: 5%;
  margin-top: 5%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  }

  .bg {
    background-image: url(/src/img/bg.jpg);
}

.livre {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 370px;
    height: 740px;
}

.scene1 {
    background-image: url(/src/img/home-mobile.jpg);
}

  .scene2 {
    background-image: url(/src/img/chap2-mobile.jpg);
}

.scene3 {
    background-image: url(/src/img);
}

.scene4 {
    background-image: url(/src/img);
}

.scene5 {
    background-image: url(/src/img);
}

.scene6 {
    background-image: url(/src/img);
}

.scene7 {
    background-image: url(/src/img);
}

.scene8 {
    background-image: url(/src/img);
}

.scene9 {
    background-image: url(/src/img);
}

.scene10 {
    background-image: url(/src/img);
}

.scene11 {
    background-image: url(/src/img);
}
}
</style>
