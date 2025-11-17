# Components

## Common
- ChoiceButton
- ContinueButton
- LoadingSpinner
- ProgressBar
- StatsPanel

## Layout
- AppHeader
- ChapterHeader
- ChoicePanel
- DialogueBox
- InventoryDisplay
- Modal
- NarrativeText

## Specific
- AudioController
- ButtonPrimary
- SaveSlotManager

## Views
- ChapterView
- EndingScreen

# Component Blocks


```
{
    Nom: 'ChoiceButton'
    Responsabilité: 'Bouton pour sélectioner les choix dans l'histoire'
    Props: 'Nom du choix'
    Emits: 'Le choix'
}
```

```
{
    Nom: 'ContinueButton'
    Responsabilité: 'Bouton pour reprendre sa partie'
    Props: '# sauvegarde'
    Emits: '# sauvegarde'
}
```

```
{
    Nom: 'LoadingSpinner'
    Responsabilité: 'Component qui va apparaitre lorsque les pages vont etre entrain de se charger'
    Props: 'x'
    Emits: 'x'
}
```

```
{
    Nom: 'ProgressBar'
    Responsabilité: 'Barre de progrès qui montre le progrès global de l'histoire'
    Props: 'Pourcentage rendu'
    Emits: 'x'
}
```

```
{
    Nom: 'StatsPanel'
    Responsabilité: 'Panneau des statistiques / habiletés du joueur'
    Props: 'Statistiques'
    Emits: 'x'
}
```

```
{
    Nom: 'AppHeader'
    Responsabilité: 'Entête de la page'
    Props: 'Texte d'entète, ChapterHeader'
    Emits: 'x'
}
```

```
{
    Nom: 'ChapterHeader'
    Responsabilité: 'Entête des chapitres'
    Props: 'Titre du chapitre'
    Emits: 'x'
}
```

```
{
    Nom: 'ChoicePanel'
    Responsabilité: 'Panneau qui contient les boutons pour les choix'
    Props: 'Boutons choix'
    Emits: 'x'
}
```

```
{
    Nom: 'DialogueBox'
    Responsabilité: 'Boite pour les dialogues'
    Props: 'Texte du dialogue'
    Emits: 'x'
}
```

```
{
    Nom: 'InventoryDisplay'
    Responsabilité: 'Module d'affichage de l'inventaire du joueur'
    Props: 'Objets d'inventaire'
    Emits: 'x'
}
```

```
{
    Nom: 'NarrativeText'
    Responsabilité: 'Boite pour le texte normal de l'histoire'
    Props: 'Texte principal'
    Emits: 'x'
}
```

```
{
    Nom: 'AudioController'
    Responsabilité: 'Module de contrôle de l'audio de la page'
    Props: ''
    Emits: ''
}
```

```
{
    Nom: 'ButtonPrimary'
    Responsabilité: 'Modèle principal des boutons de l'interface'
    Props: 'Nom du bouton'
    Emits: 'Event du bouton'
}
```

```
{
    Nom: 'SaveSlotManager'
    Responsabilité: 'Panneaux pour les sauvegardes du joueur'
    Props: 'Sauvegardes'
    Emits: 'x'
}
```

```
{
    Nom: 'ChapterView'
    Responsabilité: 'Vue pour les chapitres que le joueur a accès'
    Props: '# chapitres'
    Emits: '# chapitre'
}
```

```
{
    Nom: 'EndingScreen'
    Responsabilité: 'Vue d'un écran final lorsque le joueur arrive à une fin'
    Props: '# fin'
    Emits: 'x'
}
```

```
{
    Nom: ''
    Responsabilité: ''
    Props: ''
    Emits: ''
}
```