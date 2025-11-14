import { defineStore } from "pinia";

export const useStoryStore = defineStore('story', {
    state: () => ({
        currentChapter: null,
        visitedChapters: null,
        availableChoices: null,
        storyData: null,
    }),
    getters: {
        getCurrentChapter: (state) => state.currentChapter,
        getAvailableChoices: (state) => state.availableChoices,

    },
    actions: {
        loadChapter(chapterId) {

        },
        makeChoice(choice) {

        },
        gotoChapter(chapterId) {
            
        }
    }
})