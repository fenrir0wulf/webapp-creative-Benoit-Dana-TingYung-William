import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        /**
         * Flags boolean qui nous servent d'inventaire
         */
        flags: {
            hasDiamant: false,
            hasOeuf: false,
            hasOurson: false,
            hasDent: false
        },
    }),
    getters: {
        /**
         * Getter qui retourne l'etat des flags
         * @param {*} state 
         */
        getFlags: (state) => { return state.flags }
    },
    actions: {
        /**
         * Switch statement pour set les items de l'inventaire
         * Recoit l'objet a set en string
         * @param {string} flag
         */
        setFlags(flag) {
            switch(flag) {
                case "diamant": this.flags.hasDiamant = true; break;
                case "oeuf": this.flags.hasOeuf = true; break;
                case "ourson": this.flags.hasOurson = true; break;
                case "dent": this.flags.hasDent = true; break;
                default: return;
            }
        },
        /**
         * Reset des flags de l'inventaire lors d'une nouvelle partie
         */
        resetFlags() {
            this.flags.hasDiamant = false;
            this.flags.hasOeuf = false;
            this.flags.hasOurson = false;
            this.flags.hasDent = false;
        }
    }
})