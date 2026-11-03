# Invitation de mariage · Dominique & Steve

Contenu du dossier :
- index.html, style.css, script.js : le site
- photos/ : hero.jpg (photo plein écran) et gallery-1.jpg à gallery-6.jpg (galerie)
- favicon.svg : petite icône de l'onglet

## Remplacer les photos
Gardez les mêmes noms de fichiers et remplacez-les dans le dossier photos/.
- hero.jpg : photo verticale (portrait), environ 1200 x 1600 px
- gallery-1.jpg à gallery-6.jpg : photos verticales, environ 900 x 1125 px
Gardez chaque fichier sous 300 Ko (compressez sur squoosh.app) pour un site rapide.

## Réglages (en haut de script.js)
- rsvpUrl : lien de votre formulaire (Google Forms, Tally...)
- rsvpDeadline : date limite de réponse
- hashtag : votre hashtag
- eventDate : début du jour J pour le compte à rebours

## Modifier les horaires
Dans index.html, cherchez la section "Le programme" et changez les heures dans les balises <time>.

## Mettre en ligne (GitHub + Vercel)
1. Créez un compte gratuit sur github.com.
2. Cliquez sur "+" puis "New repository". Nom : mariage-dominique-steve. Laissez "Public". Cliquez "Create repository".
3. Sur la page du dépôt, cliquez "uploading an existing file".
4. Glissez TOUT le contenu du dossier (index.html, style.css, script.js, favicon.svg et le dossier photos). Les fichiers doivent être à la racine, pas dans un sous-dossier.
5. Cliquez "Commit changes".
6. Allez sur vercel.com, cliquez "Sign Up" puis "Continue with GitHub".
7. Cliquez "Add New..." puis "Project". Choisissez mariage-dominique-steve, bouton "Import".
8. Ne changez aucun réglage (Framework : Other, pas de commande de build). Cliquez "Deploy".
9. Après environ 30 secondes, Vercel donne un lien du type mariage-dominique-steve.vercel.app. C'est le lien à partager.
10. Pour modifier le site plus tard : sur GitHub, ouvrez le fichier, cliquez le crayon, modifiez, "Commit changes". Vercel met le site à jour tout seul en 1 minute.

Astuce : dans Vercel, "Settings" puis "Domains" permet de choisir un lien plus joli.
