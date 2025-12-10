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
    <!--
        Page principale qui contient toute la logique et l'affichage de l'histoire
    -->
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
                <SaveButton />
                <RouterLink :to="{name: 'home'}"><button>Retour au menu</button></RouterLink>
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
            /**
             * currentChapter: Valeur du chapitre present
             * chapterId: Contient le id et le titre du chapitre present
             * chapterText: Contient le texte du chapitre present
             * chapterChoices: Array qui contient les choix que le joueur doit faire
             */
            currentChapter: null,
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
        // Prendre le id du chapitre par le parametre de l'url
        let cId = this.$route.params.id;
        // Donner la valeur a currentChapter du pinia et de la vue
        this.storyStore.currentChapter = cId;
        this.currentChapter = this.storyStore.currentChapter;
        // Instancer les donnees de la page
        this.instanceChapter(this.currentChapter);
    },
    computed: {
        ...mapStores(usePlayerStore, useStoryStore)
    },
    methods: {
        /**
         * Envoie vers le prochain chapitre
         * @param chapter 
         * @param choice 
         */
        gotoNextChapter(chapter, choice) {
            this.$router.push({
                name: 'chapter',
                params: { id: chapter },
            });
            this.storyStore.currentChapter = chapter;
            //Si le texte du bouton n'est pas seulement "Continuer", ajoute le choix fait a la liste des chapitres visites
            if (choice != "Continuer") {
                this.storyStore.addVisited(choice);
            }
            // Reinstance la page
            this.instanceChapter(chapter);
        },
        /**
         * Envoie vers la vue de fin
         * @param end 
         */
        gotoEnd(end) {
            this.storyStore.atEnd = true;
            this.$router.replace({
                name: 'ending',
                params: { id: end },
            });
        },
        /**
         * Fonction principale de l'affichage de la page, verifie ou le joueur est rendu, et met a jour l'inventaire du joueur
         * @param chapter 
         */
        instanceChapter(chapter) {
            // Met a jour les valeurs pour le prochain chapitre recu
            this.currentChapter = chapter;
            this.chapterId.id = chapter;
            let story = this.storyStore.getStoryData.find(({ id }) => id == this.chapterId.id);
            this.chapterId.title = story.titre;
            this.chapterText.text = story.texte;
            // Verifie si le joueur est rendu au chapitre de verification de fin
            if (this.currentChapter === 13) {
                // Prendre les flags de l'inventaire pour les verifier
                let flags = this.playerStore.getFlags;
                // Si le joueur a tous ces objets, bonne fin
                if (flags.hasDent && flags.hasOeuf && flags.hasOurson) {
                    this.chapterChoices.choices = [story.choices.find(({ path }) => path == 16)];
                } // Si seulement quelques objets, fin moyenne
                else if (flags.hasOeuf || flags.hasOurson) {
                    this.chapterChoices.choices = [story.choices.find(({ path }) => path == 14)];
                } else { // Si non, mauvaise fin
                    this.chapterChoices.choices = [story.choices.find(({ path }) => path == 15)];
                }
            } else { // Si pas une fin
                this.chapterChoices.choices = story.choices;
            }
            // Si il y a un objet, faire le flag de l'objet
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
    overflow-y: auto;
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
    background-size: cover;
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
    background-image: url(/src/img/menu.png);
}

.scene14 {
    background-image: url(/src/img/fin_mid.png);
}

.scene15 {
    background-image: url(/src/img/fin_mauvaise.png);
}

.scene16 {
    background-image: url(/src/img/fin_bonne.png);
}

@media screen and (min-width: 1700px) {

    .livre {
        width: 1300px;
        height: 730px;
    }

    .book {
        padding: 100px;
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
        border-radius: 50px;
    }

    .livre {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 90vw;
        height: 85vh;
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
    }

}
</style>
