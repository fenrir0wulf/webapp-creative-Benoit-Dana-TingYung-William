<script setup>
    import ChoiceButton from '../common/ChoiceButton.vue';
</script>

<template>
    <div>
        <ChoiceButton 
        v-for="choice in choices"
        :textButton="choice.btntext"
        @click="handleButton(choice.path)"
        />
    </div>
</template>

<script>
    export default {
        name:'ButtonPrimary',
        props: ['choices'],
        methods: {
            handleButton(path) {
                if(isNaN(path)){
                    this.$emit('endsHere', path);
                }else {
                    this.$emit('nextChapter', path);
                }
            }
        }
    }
</script>

<style scoped>
button {
    background-color: yellow;
    padding: 0.5vh;
    border: none;
    color: black;
}

button:hover{
    background-color: rgb(255, 208, 0);
}

button:active{
    background-color: rgb(255, 153, 0);
}
</style>