import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        playerName: "John",
        flags: {
            hasItems: false
        },
    }),
    getters: {
        getPlayerName: (state) => { return state.playerName },
        getFlags: (state) => { return state.flags }
    },
    actions: {
        setPlayerName(name) {
            this.playerName = name;
        },
    }
})