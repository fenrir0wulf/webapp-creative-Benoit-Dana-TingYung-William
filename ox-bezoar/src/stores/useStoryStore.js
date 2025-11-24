import { defineStore } from "pinia";
import story from '../data/histoire.json';

export const useStoryStore = defineStore('story', {
    state: () => ({
        currentChapter: 1,
        visitedChapters: [],
        storyData: story,
        atEnd: false
    }),
    getters: {
        getCurrentChapter: (state) => { return state.currentChapter },
        getVisitedChapters: (state) => { return state.visitedChapters },
        getStoryData: (state) => { return state.storyData },
        isEnding: (state) => { return state.atEnd },
    },
    actions: {
        addVisited(chapterId) {
            this.visitedChapters.push(chapterId);
        },
    }
})