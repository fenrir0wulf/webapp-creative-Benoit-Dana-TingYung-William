<template>
    <div>
        <button type="button" @click="handleButton(btnPath)"> {{ textButton }} </button>
    </div>
</template>

<script>
    export default {
        name:'ButtonPrimary',
        props: ['textButton', 'btnPath'],
        methods: {
            handleButton(path) {
                this.$emit('nextChapter', path);
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