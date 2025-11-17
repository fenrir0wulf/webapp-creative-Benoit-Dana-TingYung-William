<template>
    <div class="zoneNarrative">
        <p>{{ textNarrative.text }}</p>
    </div>
</template>

<script>
    export default {
        name:'NarrativeText',
        props: ['textNarrative'],
        components: {},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .zoneNarrative {
        background-color: brown;
    }
</style>