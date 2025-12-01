<template>
    <div>
        <h1 class="h1">Chapitre {{ chapterId.id }}</h1>
        <h2 class="h2">{{ chapterId.title }}</h2>
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

.h1{
    font-size: 2vw;
    color: #fff;
    font-family: "Mochibop";
}

.h2 {
    font-size: 1vw;
    color: #fff;
    font-family: "Mochibop";
}

@media screen and (max-width: 500px) {
.h1{
    font-size: 5vw;
}

.h2 {
    font-size: 3vw;
}    
}

</style>