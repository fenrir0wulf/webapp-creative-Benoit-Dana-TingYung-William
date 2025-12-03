<script setup>
import ChapterHeader from '../components/layout/ChapterHeader.vue';
import NarrativeText from '../components/layout/NarrativeText.vue';
import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
import InventoryDisplay from '../components/layout/InventoryDisplay.vue';
import SaveButton from '../components/common/SaveButton.vue';

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
                    <div class="btnsContainer">
                        <ButtonPrimary class="btns" @nextChapter="gotoNextChapter" @endsHere="gotoEnd"
                            :choices="chapterChoices.choices" />
                    </div>
                </div>
            </div>
            <div class="bookBottom">
                <InventoryDisplay />
                <div class="saveButton">
                    <SaveButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChapterView',
    components: { ChapterHeader, NarrativeText, ButtonPrimary, InventoryDisplay, SaveButton },
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
        this.playerStore.resetFlags();
    },
    computed: {
        ...mapStores(usePlayerStore, useStoryStore)
    },
    methods: {
        gotoNextChapter(chapter, choice) {
            this.$router.push({
                name: 'chapter',
                params: { id: chapter },
            });
            this.storyStore.currentChapter = chapter;
            if (choice != "Continuer") {
                this.storyStore.addVisited(choice);
            }
            this.instanceChapter(chapter);
        },
        gotoEnd(end) {
            this.storyStore.atEnd = true;
            this.$router.push({
                name: 'ending',
                params: { id: end },
            });
        },
        instanceChapter(chapter) {
            console.log('instance');
            this.currentChapter = chapter;
            this.chapterId.id = chapter;
            let story = this.storyStore.getStoryData.find(({ id }) => id == this.chapterId.id);
            console.log(story);
            this.chapterId.title = story.titre;
            this.chapterText.text = story.texte;
            if (this.currentChapter === 16) {
                let flags = this.playerStore.getFlags;
                if (flags.hasDent && flags.hasOeuf && flags.hasOurson) {
                    this.chapterChoices.choices = [story.choices.find(({ path }) => path == 13)];
                }
                else if (flags.hasOeuf || flags.hasOurson) {
                    this.chapterChoices.choices = [story.choices.find(({ path }) => path == 14)];
                } else {
                    this.chapterChoices.choices = [story.choices.find(({ path }) => path == 15)];
                }
            } else {
                this.chapterChoices.choices = story.choices;
            }
            if (story.objet) {
                this.playerStore.setFlags(story.objet);
            }
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

.btnsContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btns {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
}

.chapter {
    width: 30vw;
    height: 90%;
    padding: 1vw;
    margin-right: 15px;
    margin-top: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50px;
    box-shadow: 0px 0px 15px #555555;
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
    background-image: url(/src/img/futur2.png);
}

.scene8 {
    background-image: url(/src/img/futur3.png);
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

.scene12 {
    background-image: url(/src/img/fin_surprise.png);
}

.scene13 {
    background-image: url(/src/img/fin_surprise.png);
}

.scene14 {
    background-image: url(/src/img/fin_mid.png);
}

.scene15 {
    background-image: url(/src/img/fin_surprise.png);
}

.scene16 {
    background-image: url(/src/img/fin_surprise.png);
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
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50px;
        font-size: 18px;
        color: #fff;
    }
}

@media screen and (max-width: 1000px) {
    .chapter {
        width: 90%;
        margin-bottom: 1vh;
        margin-left: 1vw;
        height: 53vh;
        padding: 3vw;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50px;
    }

    .livre {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 90vw;
        height: 85vh;
        background-size: cover;
        background-position: 50% 50%;
    }
}

@media (min-aspect-ratio: 16/9) {
    .book {
        width: 50vw;
        height: 70vh;
    }

    .chapter {
        width: 45%;
        height: 85%;
    }

    .livre {
        width: 100%;
        height: 100%;
        background-size: cover;
    }

}
</style>
