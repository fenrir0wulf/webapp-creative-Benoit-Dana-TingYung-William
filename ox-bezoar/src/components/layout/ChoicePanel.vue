<script setup>
import ChoiceButton from '../common/ChoiceButton.vue';
</script>

<template>
    <div>
        <h1>Qu'allez vous faire?</h1>
        <div class="btnChoix">
            <h2>Choix 1</h2>
            <ChoiceButton/>
        </div>
        <div class="btnChoix">
            <h2>Choix 2</h2>
            <ChoiceButton/>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ChoicePanel',
        components: {},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>