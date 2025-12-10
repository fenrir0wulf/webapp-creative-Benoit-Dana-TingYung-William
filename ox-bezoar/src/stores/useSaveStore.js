import { defineStore } from "pinia";

export const useSaveStore = defineStore('save', {
    state: () => ({
        /**
         * Array des sauvegardes
         */
        saveSlots: []
    }),
    getters: {
        /**
         * hasSaves: getter pour déterminer si il y a des sauvegardes présentes, retourne boolean
         * getSaves: getter qui retourne le array des sauvegardes
         * @param {*} state 
         */
        hasSaves: (state) => state.saveSlots.length > 0,
        getSaves: (state) => state.saveSlots,
    },
    actions: {
        /**
         * Fonction de sauvegarde du progres du joueur
         * @param {number} saveCh valeur du chapitre present
         * @param {array} saveVis valeur de l'array des chapitres visites
         * @param {object} savePl valeur des flags d'inventaire
         */
        saveGame(saveCh, saveVis, savePl) {
            //Mettre les props recu dans un objet
            let aSave = {saveCh, saveVis, savePl};
            //Pousser l'objet dans le array
            this.saveSlots.push(aSave);
            //Copier le array dans le localstorage
            localStorage.setItem('saves', JSON.stringify(this.saveSlots));
            //Si plus que 3 sauvegardes, supprimer la plus vielle
            if(this.saveSlots.length > 3){
                this.saveSlots.shift();
                localStorage.removeItem
            }
        },
        /**
         * fonction qui met les sauvegardes du localstorage dans le array de sauvegardes
         */
        getLocalSaves() {
            let data = localStorage.getItem('saves');
            if(data) {
                this.saveSlots = JSON.parse(data);
            }
        }
    }
})