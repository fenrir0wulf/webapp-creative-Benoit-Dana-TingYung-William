import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        playerName: "",
        stats: {},
        inventory: [],
        flags: [],
    }),
    getters: {
        getItem: (state) => (id) => { return state.inventory.find(item => item.id === id) }
    },
    actions: {
        setPlayerName(name) {
            this.playerName = name;
        },
        addItem(item) {
            this.inventory.push(...item);
        },
        updateStat(stat) {
            //Relevant?
        },
        setFlag(flag) {
            //Relevant?
        }
    }
})