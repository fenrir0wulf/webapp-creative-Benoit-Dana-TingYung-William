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
    <div class="book">
    <div class="livre" :class="`scene${currentChapter}`">
    <div class="chapter">
      <ChapterHeader :chapterId="chapterId" />
      <NarrativeText :textNarrative="chapterText" />
      <div class="btns">
        <ButtonPrimary
        @nextChapter="gotoNextChapter"
        @endsHere="gotoEnd"
        :choices="chapterChoices.choices"
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
            this.storyStore.resetStates();
        },
        computed: {
            ...mapStores(usePlayerStore, useStoryStore)
        },
        methods: {
            gotoNextChapter(chapter, choice) {
                this.$router.push({
                    name: 'chapter',
                    params: {id: chapter},
                });
                this.storyStore.currentChapter = chapter;
                if(choice != "Continuer"){
                    this.storyStore.addVisited(choice);
                }
                this.instanceChapter(chapter);
            },
            gotoEnd(end) {
                this.storyStore.atEnd = true;
                this.$router.push({
                    name: 'ending',
                    params: {id: end},
                });
            },
            instanceChapter(chapter) {
                console.log('instance');
                this.currentChapter = chapter;
                this.chapterId.id = chapter;
                let story = this.storyStore.getStoryData.find(({id}) => id == this.chapterId.id);
                console.log(story);
                this.chapterId.title = story.titre;
                this.chapterText.text = story.texte;
                this.chapterChoices.choices = story.choices;
            }
        },
    };
</script>

<style scoped>

.book {
    background-color: #39315a;
    padding: 5vw;
    border-radius: 5vw;
}

.btns {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.chapter {
  width: 30vw;
  height: 90%;
  padding: 1vw;
  margin-right: 15px;
  margin-top: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  font-size: 1vw;
  color: #fff;
}


.bg {
    background-color: #b28755;
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
    width: 71vw;
    height: 40vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #fff;
}

.scene1 {
    background-image: url(/src/img/normal1.png);
}

.scene2 {
    background-image: url(/src/img/normal2.png);
}

.scene3 {
    background-image: url(/src/img/3A.png);
}

.scene4 {
    background-image: url(/src/img/futur1.png);
}

.scene5 {
    background-image: url(/src/img/4A.png);
}

.scene6 {
    background-image: url(/src/img/4B.png);
}

.scene7 {
    background-image: url(/src/img/futur1.png);
}

.scene8 {
    background-image: url(/src/img/futur1.png);
}

.scene9 {
    background-image: url(/src/img/4D.png);
}

.scene10 {
    background-image: url(/src/img/5A.png);
}

.scene11 {
    background-image: url(/src/img/5B.png);
}
@media screen and (min-width: 1700px) {
    
.livre {
    width: 1300px;
    height: 730px;
}
.book {
    padding: 80px;
}
.chapter {
  width: 550px;
  height: 90%;
  padding: 15px;
  margin-right: 15px;
  margin-top: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  font-size: 18px;
  color: #fff;
}
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
