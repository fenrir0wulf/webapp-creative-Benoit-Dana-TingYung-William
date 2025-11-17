<script setup>
    import ChapterHeader from '../components/layout/ChapterHeader.vue';
    
</script>

<template>
    <div class="chapter">
        Chapter header
        <ChapterHeader :chapterId="chapterId" />
    </div>
</template>

<script>
    export default {
        name:'ChapterView',
        components: {},
        data() {
            return {
                chapterId: {
                    id: null,
                    title: null,
                }
            }
        },
        created() {
            this.chapterId.id = this.$route.params.id;
            this.chapterId.title = "Testing"
        }
    };
</script>

<style scoped>
    .chapter {
        background-color: lightyellow;
    }
</style>