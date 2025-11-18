<script setup>
    import ChapterHeader from '../components/layout/ChapterHeader.vue';
    import NarrativeText from '../components/layout/NarrativeText.vue';
    import ButtonPrimary from '../components/specific/ButtonPrimary.vue';
</script>

<template>
    <div class="chapter">
        <ChapterHeader :chapterId="chapterId" />
        <NarrativeText :textNarrative="chapterText" />
        <ButtonPrimary @nextChapter="gotoNextChapter" v-for="choice in chapterChoices.choices" :textButton="choice.btntext" :btnPath="choice.path"/>
    </div>
</template>

<script>
    export default {
        name:'ChapterView',
        components: {ChapterHeader, NarrativeText, ButtonPrimary},
        data() {
            return {
                currentChapter: 1,
                chapterId: {
                    id: null,
                    title: null,
                },
                chapterText: {
                    text: null,
                },
                chapterChoices: {
                    choices: [],
                },
                chapterData: [
    {
        "id": 1,
        "titre":" Chapitre 1",
        "texte": "Aujourd'hui, John va à l'hôpital pour voir sa mère gravement malade. Il arrive d'avance pour le rendez-vous qu'il avait prévu avec le médecin pour parler de l'avancement des traitements. Dans la salle d'attente, John s'ennuie et décide de lire un livre pour enfant qui traîne sur la table. ",
        "choices": [ {"btntext":"Continuer", "path": 2}]
    },
    {
        "id": 2,
        "titre":"Chapitre 2",
        "texte": "Au moment où John ouvre le livre, il est téléporté directement dans celui-ci. Il se retrouve désormais dans une petite pièce toute blanche avec 2 portails, un vert et un rouge. Il ne comprend pas grand-chose, mais il sait qu'il doit faire un choix.",
        "choices": [ {"btntext":"Rentrer dans le monde de droite", "path": 3},
        {"btntext":"Rentrer dans le monde gauche", "path": 4}]
    },
    {
        "id": 3,
        "titre":"Chapitre 3",
        "texte": "Après être entré dans le portail vert, John est téléporté dans un autre monde. Dans ce monde il y a plein de champignon, il fait chaud et il put. John sens que son corps n'aime vraiment pas cet environnement. Il voit des champignons qui marchent et ils semblent tous l'ignoré, mais à ce moment-là un champignon s'arrête et commence à le fixer. Il commence à avoir peur et se demande quoi faire. À cet instant, il voit un autre portail du coin de l'œil, un jaune cette fois-ci. Le portail se trouve à une distance d'environ une centaine de mètres et vu la vitesse de marche des champignons, il se dit qu'il peut facilement le semer. D'un autre côté, qu'est-ce qui lui dit que le champignon est méchant, peut-être qu'il est juste étonné de voir un humain dans un monde de champignons.",
        "choices": [ {"btntext":"Rester dans ce monde", "path": 5},
        {"btntext":"Aller dans le portal", "path": 6}]
    },
    {
        "id": 4,
        "titre":"Chapitre 4",
        "texte": "",
        "choices": [ {"btntext":"Rester dans ce monde", "path": 7},
        {"btntext":"Aller dans le portal", "path": 8}]
    },
    {
        "id": 5,
        "titre":"Chapitre 5",
        "texte": "John reste devant le champignon et le salut. Le champignon continue à le fixer, donc il essaie une autre technique d'approche. Il cri JOHN et là le champignon hésite pendant quelques secondes et fini par crier CHAMPI. John sourie et commence à s'approcher du champignon. Champi lui fait un gros câlin et John comprend que Champi est juste un gentil champignon. Champi commence à marcher et John le suit. Ils marchent pour une bonne heure avant d'enfin s'arrêter devant une grotte. John à peur, mais il décide de suivre son nouvel ami. Quand il rentre dans la grotte, il voit un trésor digne d'un film de pirate. Il réalise que les champignons son enfaite des mineurs qui utilisent les toxines qu'ils sécrètent pour désintégrer toute matière qui n'est pas assez solide. Champi qui est très heureux de s'être fais un ami, donne en cadeau à John un énorme diamant. Le soir, John retourna au campement des champignon et s'endormi paisiblement.",
        "choices": [ {"btntext":"Continuer", "path": 2}]
    },
    {
        "id": 6,
        "titre":"Chapitre 6",
        "texte": "John s'enfuit vers le portail avec facilité et tout d'un coup se retrouve dans un nouveau monde. Dans le ciel, il voit des dragons et il entend des cris stridents, mais ce qui lui fait le plus peur, c'est le grognement qu'il entend juste derrière lui. Il sent une respiration chaude sur son épaule alors brusquement, il se retourne. Devant lui se trouve un dragon vert émeraude qui semble avoir peur. John se dit qu'à ce point-là, il peut bien essayer d'en faire son ami plutôt que son ennemi. Il se penche en guise de respect et lui dit “Salut toi, je m'appelle John, et toi ?”. Le dragon, encore effrayé, lui dit que son nom est Julien. Cette journée-là, John et Julien se lient d'amitié, le soir, ils allument un feu dans la forêt et mangent, du poisson qu'ils avaient péché un peu plus tôt dans la rivière. Tout à coup, ils entendent un craquement de branches pas loin d'eux. Un chasseur de dragon sort d'un buisson et tente de tirer sur Julien. John hésite, mais il n'a pas beaucoup de temps. Veut-il mettre sa vie en danger pour sauver un dragon qu'il vient de rencontrer ? ",
        "choices": [ {"btntext":"Sauver le dragon", "path": 9},
        {"btntext":"Rien faire", "path": 10}]
    },
    {
        "id": 7,
        "titre":"Chapitre 7",
        "texte": ""
    },
    {
        "id": 8,
        "titre":"Chapitre 8",
        "texte": ""
    },
    {
        "id": 9,
        "titre":"Chapitre 9 ( choix de défendre le dragon)",
        "texte": "Avec tout son courage, John se lance devant la balle du chasseur. La balle arrive tout droit entre ses deux yeux et il s'effondre au sol. Bizarrement, John se relève et il n'a absolument rien. Julien lui explique tout “Euh, j'espère que tu ne m'en veux pas trop pour ce que je viens de te faire vivre. En fait, je ne t'ai pas tout dis, mon nom complet est Julien Des 3 Trinités et je suis le roi de ce monde. Je t'aime bien et je voulais tester notre amitié. Je suis très heureux du résultat et je souhaite que nous restions amis. Tu ne sais pas encore pourquoi, mais tu as besoin de ces items alors je te les donne avec plaisir. ” Julien donne à John, une dent de requin, une fraise et un petit ours en peluche. Les deux amis s'endorment sur le bord du feu. ",
        "choices": [ {"btntext":"Continuer", "path": 13}]
    },
    {
        "id": 10,
        "titre":"Chapitre 10 ( choix de ne défendre pas le dragon)",
        "texte": "John reste à sa place, pourquoi mettrait-il sa vie en danger pour un dragon qu'il a rencontré le jour même. Julien le regarde et lui dit “Tu me déçois John... En fait, je ne t'ai pas tout dis, mon nom complet est Julien Des 3 Trinités et je suis le roi de ce monde. Je t'aimais bien et je voulais tester notre amitié. Le résultat en est décevant et je souhaite que tu quittes mon monde immédiatement” John regarde le sol avec honte et il marche vers le portail que Julien a invoqué. Tout doucement, il lui dit “Je suis désolé” et il quitte ce monde. ",
        "choices": [ {"btntext":"Continuer", "path": 15}]
    },
    {
        "id": 11,
        "titre":"Tu t'es fait kidnapper! Mauvaise fin",
        "texte": "John suit ArK-9X dans la chambre secrète. *TOC* Un son métallique se fit entendre. John se retourne, la porte qu'il fait face est fermée. « LES HUMAINS SONT SI NAÏFS » dit ArK-9X. Avant que John puisse réagir, il se fait entourer par les bras mécaniques du robot méchant et se fait enfermer dans une capsule étrange. Les cognements et les supplications de John sont en vain, dans le corps froid de ArK-9X ne réside pas un cœur."
    },
    {
        "id": 13,
        "titre":"Bonne fin",
        "texte": "John revient à son monde et part à toute vitesse dans sa chambre. En rentrant, John voit que le docteur se trouver dans la chambre avec sa mère. Sa mère lui dit que le docteur a une super bonne nouvelle. Le docteur lui dit que sa mère a guéri par miracle. John ressent une joie l'envahir et court vers sa mère pour lui donner un grand câlin. John a réussi à sauver sa mère. "
    },
    {
        "id": 14,
        "titre":"Fin moyenne",
        "texte": "John revient à son monde et part à toute vitesse dans la chambre dans sa chambre. En voyant John arriver, le docteur lui dit qu'il a une bonne et mauvaise nouvelle. Il lui dit que la bonne nouvelle est que la condition à sa mère s'est améliorée et que la mauvaise nouvelle est que sa maladie n'est pas partie au complet. John comprend que même si sa mère est encore malade, il aura au moins un peu plus de temps pour faire plus de souvenirs avec elle."
    },
    {
        "id": 15,
        "titre":"Mauvaise fin",
        "texte": "John revient à son monde et part à toute vitesse dans la chambre dans sa chambre. Le docteur voit John et lui que la condition de sa mère est critique. Il lui demande s'il veut passer ces derniers moments avec elle. John, ayant un nœud dans la gorge, lui fait un signe de tête. En s'approchant du lit, il voit l'état dont est sa mère. John reste aux côtés de sa mère jusqu'à son dernier soupir. Sa mère décède le soir même."
    }
],
            }
        },
        created() {
            this.instanceChapter(this.currentChapter);
        },
        methods: {
            gotoNextChapter(chapter) {
                this.$router.push({
                    name: 'chapter',
                    params: {id: chapter},
                });
                this.instanceChapter(chapter);
            },
            instanceChapter(chapter) {
                console.log('instance');
                this.currentChapter = chapter
                this.chapterId.id = chapter;
                this.chapterId.title = this.chapterData[this.chapterId.id - 1].titre;
                this.chapterText.text = this.chapterData[this.chapterId.id - 1].texte;
                this.chapterChoices.choices = this.chapterData[this.chapterId.id - 1].choices;
            }
        },
    };
</script>

<style scoped>
    .chapter {
        background-color: lightyellow;
    }
</style>