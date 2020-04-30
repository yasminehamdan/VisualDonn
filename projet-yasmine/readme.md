# Projet Datavis

## Les données
Les données utilisées pour se projet proviennet de l'OFS, l'office fédéral de la statistique.
Elles reprérentes les Suisses de l'étranger selon le pays de résidence, le droit de cité, le sexe et la classe d'âge:

https://www.pxweb.bfs.admin.ch/api/v1/fr/px-x-0105090000_102/px-x-0105090000_102.px
(Format JSON)

On entend "Suisse de l'étranger" étranger ayant la nationalité Suisse ou la double nationalité.



## Utilisation des données

### - Les 25 nationalités les plus présentent en Suisse : graphe baton
Ce graphe montre les 25 nationalités les plus présente en Suisse. Ces chiffres ne considère que les Suisses de l'étranger. Les demandeurs d'asile, les sans-papiers, les refugiés ne sont par exemple pas pris en compte dans ces chiffres.

### - Les Suisses de l'étranger selon le continent : graphe camembère
Ce graphe montre le pourcentage de Suisse de l'étrangers regroupés selon leurs continent. Le découpage n'est pas politique mais geographique. Les états et territoires sont répartis en fonction de leur situation géographique sur l'un des cinq continents. 

### - Le nombre de Suisses de l'étranger entre 2017 et 2019 : graphe courbe
Ce graphe montre l'augmentation des Suisses de l'étranger entre 2017 et 2019. C'est-à-dire les étrangers possédant seulement la nationalité Suisse ou possédant plusieurs nationalités.




## Projet billboard

* [Documentation `billboard`](https://naver.github.io/billboard.js/demo/)

* Utilisation
Creez un nouveau dossier au nom de votre projet, copiez cette mise en place et installez les librairies nécessaires:

```
mkdir mon-projet
cd mon-projet
npx degit idris-maps/heig-datavis-2020/template/billboard-batons
npm install
```
