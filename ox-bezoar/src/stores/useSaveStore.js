import { defineStore } from "pinia";

export const useSaveStore = defineStore('save', {
    state: () => ({
        saveSlots: []
    }),
    getters: {
        hasSaves: (state) => state.saveSlots.length > 0,
        latestSave: (state) => state.saveSlots.length,
    },
    actions: {
        saveGame(saveCh, saveVis, savePl) {
            let aSave = {saveCh, saveVis, savePl};
            this.saveSlots.push(aSave);
        },
        loadGame(save) {

        },
        deleteSave(save) {

        },
        getSaveInfo(save) {
            //Relevant?
        },
    }
})