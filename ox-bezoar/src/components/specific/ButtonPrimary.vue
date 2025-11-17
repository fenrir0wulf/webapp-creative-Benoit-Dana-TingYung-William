<template>
    <div>
        <button type="button"> {{ textButton.title }} </button>
    </div>
</template>

<script>
    export default {
        name:'ButtonPrimary',
        props: ['textButton'],
    }
</script>

<style scoped>

</style>