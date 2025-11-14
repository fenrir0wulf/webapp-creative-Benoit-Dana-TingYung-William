import { defineStore } from "pinia";

export const useAudioStore = defineStore('audio', {
    state: () => ({
        currentMusic: null,
        soundEffects: [],
        volume: null,
        isMuted: false,
    }),
    actions: {
        playMusic(music) {

        },
        playSound(sound) {

        },
        toggleMute() {

        },
        setVolume(vol) {
            
        }
    }
})