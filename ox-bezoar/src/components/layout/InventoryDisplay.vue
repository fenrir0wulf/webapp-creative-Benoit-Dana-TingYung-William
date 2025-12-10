<script setup>
    import { mapStores } from 'pinia';
    import { usePlayerStore } from '../../stores/usePlayerStore';
</script>

<template>
    <div class="inventaire">
        <!-- les images de objets sont sombres et deviennent clair si ils sont acquises -->
        <div class="boiteObjet" :class="{ hasobject : dentActive }"><img src="/src/img/dent_de_requin.png" alt="objet1" class="objet"></div>
        <div class="boiteObjet" :class="{ hasobject : diamantActive }"><img src="/src/img/diamant.png" alt="objet2" class="objet"></div>
        <div class="boiteObjet" :class="{ hasobject : oursonActive }"><img src="/src/img/ourson.png" alt="objet3" class="objet"></div>
        <div class="boiteObjet" :class="{ hasobject : oeufActive }"><img src="/src/img/oeuf.png" alt="objet4" class="objet"></div>
    </div>
</template>

<script>
export default {
    name: 'InventoryDisplay',
    components: {},
    data() {
        return {
            /**
             * Donnees pour afficher si le joueur a les items
             */
            dent: false,
            diamant: false,
            ourson: false,
            oeuf: false,
        }
    },
    computed: {
        ...mapStores(usePlayerStore),
        /**
         * Chaque fonction verifie et retourne l'etat des items de l'inventaire pour afficher si le joueur a les items
         */
        dentActive() {
            this.dent = this.playerStore.getFlags.hasDent;
            return this.dent;
        },
        diamantActive() {
            this.diamant = this.playerStore.getFlags.hasDiamant;
            return this.diamant;
        },
        oursonActive() {
            this.ourson = this.playerStore.getFlags.hasOurson;
            return this.ourson;
        },
        oeufActive() {
            this.oeuf = this.playerStore.getFlags.hasOeuf;
            return this.oeuf;
        }
    }
}
</script>

<style scoped>
.inventaire {
    width: 20vw;
    height: 90%;
    display: flex;
    flex-direction: flex-end;
    align-items: flex-start;
    gap: 10px;
}

.boiteObjet {
    aspect-ratio: 1/1;
    width: 12%;
    background-color: var(--brunclair);
    border-width: 5px;
    border-style: solid;
    border-color: var(--brunsombre);
    border-radius: 5px;
    filter: grayscale(100);

}

.hasobject {
    filter: grayscale(0);
}

.objet {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1000px) {
    .inventaire {
        width: 200px;
        gap: 10px;
    }

    .boiteObjet {
        width: 40px;
        height: 40px;
    }
}

@media screen and (max-width: 600px) {
    .inventaire {
        width: 150px;
        gap: 10px;
    }

    .boiteObjet {
        width: 25px;
        height: 25px;
    }
}
</style>