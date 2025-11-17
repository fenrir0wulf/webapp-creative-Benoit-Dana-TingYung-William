<template>
    <div>
        <button type="button" @click=""> {{ textButton }} </button>
    </div>
</template>

<script>
    export default {
        name:'ButtonPrimary',
        props: ['textButton', 'path'],
    }
</script>

<style scoped>

</style>