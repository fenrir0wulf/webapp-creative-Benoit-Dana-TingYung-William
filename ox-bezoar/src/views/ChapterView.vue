<script setup>
    import ChapterHeader from '../components/layout/ChapterHeader.vue';
    import NarrativeText from '../components/layout/NarrativeText.vue';
    import ButtonPrimary from '../components/specific/ButtonPrimary.vue';

    import { mapStores } from 'pinia';
    import { usePlayerStore } from '../stores/usePlayerStore';
    import { useStoryStore } from '../stores/useStoryStore';
</script>

<template>
<div class="bg">
   <div class="livre" :class="`scene{{ currentchapter }}`">
    <div class="chapter">
      <ChapterHeader :chapterId="chapterId" />
      <NarrativeText :textNarrative="chapterText" />
      <ButtonPrimary
        @nextChapter="gotoNextChapter"
        v-for="choice in chapterChoices.choices"
        :textButton="choice.btntext"
        :btnPath="choice.path"
      />
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
.chapter {
  background-color: lightyellow;
}

.bg {
    background-image: url(/img/bg.jpg);
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

.scene2 {
    background-image: url(/img/chap2.jpg);
}

.scene3 {
    background-image: url();
}

.scene4 {
    background-image: url();
}

.scene5 {
    background-image: url();
}

.scene6 {
    background-image: url();
}

.scene7 {
    background-image: url();
}

.scene8 {
    background-image: url();
}

.scene9 {
    background-image: url();
}

.scene10 {
    background-image: url();
}

.scene11 {
    background-image: url();
}

@media screen and (max-width: 500px) {
  .chapter {
  background-color: lightblue;
  }

  .bg {
    background-image: url();
}

.livre {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 370px;
    height: 740px;
}

  .scene2 {
    background-image: url(/img/chap2-mobile.jpg);
}

.scene3 {
    background-image: url();
}

.scene4 {
    background-image: url();
}

.scene5 {
    background-image: url();
}

.scene6 {
    background-image: url();
}

.scene7 {
    background-image: url();
}

.scene8 {
    background-image: url();
}

.scene9 {
    background-image: url();
}

.scene10 {
    background-image: url();
}

.scene11 {
    background-image: url();
}
}
</style>
