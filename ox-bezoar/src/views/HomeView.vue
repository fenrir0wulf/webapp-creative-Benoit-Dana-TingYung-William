<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
</script>

<template>
    <AppHeader/>
    <ButtonPrimary :textButton="startButton.btntext" @click="gotoStart(1)"/>
    <ButtonPrimary :textButton="savesButton.btntext" @click="gotoSaves()"/>
</template>

<script>
    export default {
        name:'HomeView',
        components: { ButtonPrimary },
        data() {
            return {
                startButton: {
                    btntext: "Commencer"
                },
                savesButton: {
                    btntext: "Sauvegardes"
                }
            }
        },
        methods: {
            gotoStart(id) {
                this.$router.push({
                    name: 'chapter',
                    params: {id: id},
                });
            },
            gotoSaves() {
                this.$router.push({
                    name: 'saves',
                })
            }
        }
    }
</script>

<style scoped>
    
</style>