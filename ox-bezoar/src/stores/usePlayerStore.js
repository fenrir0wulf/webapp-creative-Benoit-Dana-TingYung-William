import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        playerName: "John",
        flags: {
            hasDiamant: false,
            hasOeuf: false,
            hasOurson: false,
            hasDent: false
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
        setFlags(flag) {
            switch(flag) {
                case "diamant": this.flags.hasDiamant = true; break;
                case "oeuf": this.flags.hasOeuf = true; break;
                case "ourson": this.flags.hasOurson = true; break;
                case "dent": this.flags.hasDent = true; break;
                default: return;
            }
        },
        resetFlags() {
            this.flags.hasDiamant = false;
            this.flags.hasOeuf = false;
            this.flags.hasOurson = false;
            this.flags.hasDent = false;
        }
    }
})