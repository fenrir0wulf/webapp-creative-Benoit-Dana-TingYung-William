<script setup>
import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
import AppHeader from '../components/layout/AppHeader.vue';
import LoadingSpinner from '../components/common/LoadingSpinner.vue';
import ChapterView from './ChapterView.vue';
</script>

<template>
    <div class="story">
    MAIN STORY VIEW WITH ALL SUBCOMPONENTS
    <ChapterView />
    </div>
</template>

<script>
    export default {
        name:'StoryView',
        components: {},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .story {
        background-color: aqua;
    }
</style>