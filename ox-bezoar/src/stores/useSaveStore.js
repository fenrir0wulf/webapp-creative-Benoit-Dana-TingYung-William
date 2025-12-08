import { defineStore } from "pinia";

export const useSaveStore = defineStore('save', {
    state: () => ({
        saveSlots: []
    }),
    getters: {
        hasSaves: (state) => state.saveSlots.length > 0,
        latestSave: (state) => state.saveSlots.length,
        getSaves: (state) => state.saveSlots,
    },
    actions: {
        saveGame(saveCh, saveVis, savePl) {
            let aSave = {saveCh, saveVis, savePl};
            this.saveSlots.push(aSave);
            console.log(aSave, this.saveSlots);
            if(this.saveSlots.length > 3){
                this.saveSlots.shift();
            }
        }
    }
})