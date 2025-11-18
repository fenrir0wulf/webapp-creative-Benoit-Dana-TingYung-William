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

</style>