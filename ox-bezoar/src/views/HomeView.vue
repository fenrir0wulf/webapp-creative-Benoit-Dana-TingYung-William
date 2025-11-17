<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
</script>

<template>
    <AppHeader/>
    <ButtonPrimary :textButton="startButton" @click="gotoStart(1)"/>
    <ButtonPrimary :text-button="savesButton" />
</template>

<script>
    export default {
        name:'HomeView',
        components: { ButtonPrimary },
        data() {
            return {
                startButton: {
                    title: "Commencer"
                },
                savesButton: {
                    title: "Sauvegardes"
                }
            }
        },
        methods: {
            gotoStart(id) {
                this.$router.push({
                    name: 'chapter',
                    params: {id: id},
                })
            }
        }
    }
</script>

<style scoped>
    
</style>