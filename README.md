# Portfolio de Said Sarr - Ingénieur Réseaux & Cybersécurité

Ce projet est un portfolio professionnel moderne et dynamique, conçu pour présenter le profil, les compétences et les réalisations de Said Sarr, ingénieur spécialisé en réseaux et cybersécurité.

## 🚀 Fonctionnalités Principales

### 1. Design Responsive & Moderne
- **Design Premium** : Inspiration des interfaces GitHub et des sites de networking.
- **Thèmes** : Support automatique du mode clair et sombre (Dark/Light Mode) avec bascule instantanée.
- **Typographie Avancée** : Utilisation des polices `Inter` (sans-serif) pour la lisibilité et `Fira Code` (monospace) pour les éléments techniques (CLI, codes, badges).

### 2. Navigation & Structure
- **Barre de Navigation Fixe** : Persistante lors du défilement avec effet de flou (blur) pour une meilleure immersion.
- **Navigation en Temps Réel** : Les liens de navigation sont mis en évidence (`active`) en fonction de la section visible à l'écran.
- **Micro-interactions** : Effets de survol subtils (`hover`), animations de transition fluides (`cubic-bezier`) et indicateurs visuels (`pulse dot`).

### 3. Section 'À Propos' (Hero)
- **Interface Terminal** : Une simulation de terminal Linux élégante pour présenter les informations principales.
- **Commande Interactive** : La commande `whoami` affiche le nom et le statut professionnel.
- **Mise en Évidence** : Utilisation de `span.highlight` pour attirer l'attention sur les mots-clés (`Développeur`, `Cybersécurité`).

### 4. Dossier CV & Expériences
- **Vue CV (Timeline)** : Présentation chronologique des expériences professionnelles, stages et formations.
- **Cartes d'Expérience** : Design soigné avec icônes, dates, missions et résultats concrets.
- **Navigation Rapide** : Filtres pour basculer entre "Expériences Pro", "Stages" et "Formations".

### 5. Réalisations & Projets
- **Grille Dynamique** : Affichage des projets avec un système de tuiles responsive.
- **Tags Contextuels** : Utilisation de tags (`Networking`, `Web`, `Security`, `IoT`) pour catégoriser les projets.
- **Galerie d'Images** : Aperçus visuels pour chaque projet.
- **Filtres Avancés** : Possibilité de filtrer les projets par technologie ou domaine d'expertise.

### 6. Certifications & Badges
- **Richesse visuelle** : Intégration des badges officiels (images) pour une preuve tangible des compétences.
- **Catégorisation** : Séparation claire entre "Cybersécurité", "Réseaux", "Systèmes" et "Événements".
- **Vérification** : Liens directs (`Credly`) pour vérifier l'authenticité des certifications.
- **Design Dedans** : Utilisation du fichier `cert.css` pour un rendu premium des badges.

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique du contenu.
- **CSS3** : Design moderne, variables CSS, animations, et responsive design.
- **JavaScript (Vanilla)** : Fonctionnalités interactives sans dépendances lourdes (Navigation active, Thème, Filtres).

## 📂 Structure du Projet

```
/cv-main
├── index.html            # Page d'accueil (Hero + CV Snippet)
├── cv.html               # Page complète du Dossier CV
├── realisations.html     # Portfolio des Réalisations
├── certifs.html          # Page des Certifications
├── style.css             # Styles globaux et design system
├── cert.css              # Styles spécifiques pour les certs
├── img/
│   ├── profile.jpg       # Photo de profil
│   ├── cisco_logo.png    # Logos Cisco
│   ├── security.jpg      # Visuels des projets
│   ├── github.png        # Icônes
│   ├── ...
├── js/                   # (Optionnel, si fonctions JS ajoutées)
└── README.md             # Documentation du projet
```

## 🛠️ Installation & Utilisation

1.  **Cloner le dépôt** ou télécharger les fichiers.
2.  **Ouvrir** le fichier `index.html` dans un navigateur web moderne (Chrome, Firefox, Edge, Safari).
3.  **Explorer** les différentes sections pour découvrir le profil de Said.

## 🎨 Design System

Le site utilise un système de variables CSS (`:root`) basé sur l'esthétique GitHub/Dark Mode :

- **Backgrounds** : Tons sombres (`#0d1117`, `#161b22`).
- **Text** : Texte clair (`#f0f6fc`, `#8b949e`).
- **Accent** : Bleu `var(--accent)` pour les appels à l'action (`#2f81f7`).
- **Success** : Vert `var(--green)` pour les indicateurs de statut.
