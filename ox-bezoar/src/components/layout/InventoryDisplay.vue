<template>
    <div class="inventaire">
        <!-- les images de objets sont sombres et deviennent clair si ils sont acquises -->
        <div class="boiteObjet"><img src="" alt="objet1"></div>
        <div class="boiteObjet"><img src="" alt="objet2"></div>
        <div class="boiteObjet"><img src="" alt="objet3"></div>
        <div class="boiteObjet"><img src="" alt="objet4"></div>
    </div>
</template>

<script>
export default {
    name: 'InventoryDisplay',
    components: {},
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.inventaire {
    width: 300px;
    height: 20%;
    display: flex;
    flex-direction: flex-end;
    align-items: flex-start;
    gap: 10px;
}

.boiteObjet {
    width: 50px;
    height: 50px;
    background-color: var(--brunclair);
    border-width: 5px;
    border-style: solid;
    border-color: var(--brunsombre);
    border-radius: 5px;
}
</style>