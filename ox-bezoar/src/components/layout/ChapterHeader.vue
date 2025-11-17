<template>
    <div>
        <h1>Chapitre {{ chapterId.id }}</h1>
        <h2>{{ chapterId.title }}</h2>
    </div>

</template>

<script>
    export default {
        name: 'ChapterHeader',
        props: ['chapterId'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>