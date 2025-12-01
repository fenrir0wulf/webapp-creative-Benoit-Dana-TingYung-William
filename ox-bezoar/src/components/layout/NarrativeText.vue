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


@media screen and (max-width: 1000px){
  .zoneNarrative {
        font-size: 1.3vw;
    }  
}
    
</style>