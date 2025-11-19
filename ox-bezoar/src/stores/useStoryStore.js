import { defineStore } from "pinia";
import story from '../data/histoire.json';

export const useStoryStore = defineStore('story', {
    state: () => ({
        currentChapter: null,
        visitedChapters: null,
        availableChoices: null,
        storyData: story,
    }),
    getters: {
        getCurrentChapter: (state) => { return state.currentChapter },
        getAvailableChoices: (state) => { return state.availableChoices },
        getStoryData: (state) => { return state.storyData},
    },
    actions: {
        loadChapter(chapterId) {

        },
        makeChoice(choice) {

        },
        gotoChapter(chapterId) {
            
        },
    }
})