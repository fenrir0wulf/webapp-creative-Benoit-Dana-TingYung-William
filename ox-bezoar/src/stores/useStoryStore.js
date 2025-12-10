import { defineStore } from "pinia";
import story from '../data/histoire.json';

export const useStoryStore = defineStore('story', {
    state: () => ({
        /**
         * currentChapter: valeur num du chapitre present du joueur
         * visitedChapters: array des chapitres visites
         * storyData: contient l'importation du json de l'histoire complete
         * atEnd: boolean qui dit si le joueur est a un chapitre de fin
         */
        currentChapter: 1,
        visitedChapters: [],
        storyData: story,
        atEnd: false
    }),
    getters: {
        /**
         * getCurrentChapter: retourne la valeur du chapitre present
         * getVisitedChapters: retourne le array des chapitres visites
         * getStoryData: retourne les donnees de l'histoire
         * isEnding: retourne si le joueur est a la fin
         * @param {*} state 
         */
        getCurrentChapter: (state) => { return state.currentChapter },
        getVisitedChapters: (state) => { return state.visitedChapters },
        getStoryData: (state) => { return state.storyData },
        isEnding: (state) => { return state.atEnd },
    },
    actions: {
        /**
         * Ajoute le chapitre visite au array
         * @param {object} chapterId 
         */
        addVisited(chapterId) {            
            this.visitedChapters.push(chapterId);
        },
        /**
         * Reset des valeurs lors d'une nouvelle partie
         */
        resetStates() {
            this.currentChapter = 1;
            this.visitedChapters = [];
            this.atEnd = false;
        }
    }
})