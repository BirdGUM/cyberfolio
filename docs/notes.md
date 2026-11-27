# Notes de réalisation du Cyberfolio Bird Gum

## 1. Mise en route

J’ai commencé par une page d’accueil en HTML. J’ai séparé le contenu, la mise en forme et les interactions pour pouvoir modifier le texte d’un projet sans toucher au comportement des filtres. Pour les fichiers du site, j’utilise des chemins relatifs. Par exemple, depuis le dossier CSS, `../fonts/` remonte d’un niveau avant de chercher les polices. Ce choix évite aussi de faire apparaître un chemin personnel de mon PC dans le code.

## 2. Persona et plan du site

J’ai organisé le site autour d’un visiteur qui découvre mon profil, par exemple un recruteur qui cherche à savoir ce que je sais déjà faire en cybersécurité. Depuis l’accueil, il doit pouvoir repérer mon domaine, trouver un projet concret dans « Réalisations » et accéder à « Contact » depuis le menu.

J’ai demandé à l’IA de m’aider à répartir mes idées entre compétences, réalisations et démarche de sécurité. J’ai retenu une distinction simple. Configurer des VLAN est une compétence. Le réseau que j’ai monté avec des VLAN et du filtrage pfSense est une réalisation.

## 3. Accueil en HTML sémantique

J’ai structuré l’accueil en plusieurs parties pour présenter mon profil, mes compétences et ma démarche de sécurité. Dans ma démarche de sécurité, j’explique pourquoi je fais attention à ce que je publie sur mes projets et pourquoi je privilégie, lorsque c’est possible, des outils open source ou souverains.

## 4. Mise en forme CSS

# De Photoshop au logo dans la page

J’ai créé le logo « Bird GUM » dans Photoshop à partir de polices libres de droits. J’ai travaillé la position des deux mots ensemble. Le détail auquel je tenais était l’emboîtement du B de « Bird » dans la courbe du G de « GUM ». L’espace entre ces deux lettres faisait donc partie du dessin du logo.

Pour retrouver cette composition dans le titre principal de l’accueil, j’ai repris les deux mots en SVG directement dans le HTML du <h1>. Je voulais qu’un visiteur puisse sélectionner les lettres et copier mon pseudo. C’est la façon d’écrire le SVG qui le permet : dans un élément <text>, « Bird » reste une suite de caractères. Si je convertis les lettres en tracés <path>, le navigateur dessine leurs contours et perd le texte sélectionnable.

Dans le SVG, je peux placer les deux mots séparément. Sur un élément <text>, x règle la position horizontale de départ et y place la ligne de base des lettres. Si le G tombe trop bas par rapport au B, je peux donc remonter le mot « GUM » en diminuant son y. Le viewBox définit le repère du dessin. Cela permet de redimensionner l’ensemble sur la page en conservant la position relative des deux mots. Pour juger du résultat, le détail à regarder est l’espace entre le B et le G une fois les polices chargées.

# Charger les polices et composer la page

J’ai travaillé avec DxBrutalist-ExtraBold, Hermaiona et Blubird. Pour utiliser les fichiers de polices sur le site, j’ai dû faire le lien entre le fichier présent dans le projet et le nom employé dans ma feuille de style. Dans une règle @font-face, src indique où trouver le fichier et font-family lui donne un nom utilisable en CSS. Je peux ensuite appliquer Blubird au body pour le texte courant. Un détail m’a posé problème : pour un fichier qui se termine par .otf, le nom du format dans la déclaration CSS est format("opentype"). Une police de remplacement peut changer la largeur du B et du G, même si leurs coordonnées dans le SVG sont correctes.

J’ai choisi le gris presque noir #1C1C1C pour le fond, le rose #FF5FC2 pour la couleur principale, le vert vif #00FF0B en accent et le gris clair #E4E4E4 pour le texte. Pour les bulles du formulaire, j’ai travaillé l’effet de verre en plusieurs couches : un fond translucide laisse apparaître les couleurs derrière le champ, backdrop-filter: blur(...) adoucit ce qui se trouve derrière et une ombre intérieure avec inset fait ressortir le bord. Flouter le champ lui-même avec filter aurait aussi flouté le texte saisi.

Pour les compétences, j’ai rencontré un problème concret avec les listes imbriquées. Le sélecteur .liste-competences li atteint tous les éléments de liste à l’intérieur de la section, y compris les détails de DevSecOps.

## 5. Adaptation au mobile

Sur téléphone, je voulais empiler les cartes de compétences et garder les trois destinations du menu faciles à trouver. J’ai travaillé sur les règles CSS en fonction de la largeur de l’écran. J’ai observé deux problèmes en comparant les affichages : les lettres du logo s’alignaient mieux sur téléphone que sur grand écran, et le fond animé s’arrêtait trop tôt sur mobile.

Pour la relecture finale, je dois revenir à **375 px** sur chacune des trois pages, faire défiler jusqu’au pied de page et vérifier qu’aucun élément n’oblige à défiler horizontalement.

## 6. Interactions en JavaScript

Sur la page Réalisations, j’ai ajouté des boutons pour filtrer les projets par catégorie. Lors de mes premiers essais, les cartes disparaissaient au clic.

J’ai compris la correction en suivant le trajet de la valeur. Le clic déclenche une fonction avec `addEventListener`. Cette fonction lit le filtre, parcourt les cartes et modifie leur propriété `hidden`. Le bouton « Tous » doit les réafficher. Le filtrage agit sur des cartes déjà présentes dans la page, sans construire de HTML à partir d’une saisie.

J’ai privilégié un menu qui laisse les trois liens visibles. Le sujet demande aussi une ouverture et une fermeture sur mobile. Ce comportement reste à contrôler dans la version remise.

## 7. Réalisations et contact

Sur la page Contact, j’ai travaillé sur les champs du nom, de l’adresse e-mail et du message. J’ai prévu de traiter l’envoi réel plus tard. Pour ce rendu, le test consiste à essayer un champ obligatoire vide, une adresse mal formée et un message à la limite autorisée. Ces contrôles guident la saisie dans le navigateur.