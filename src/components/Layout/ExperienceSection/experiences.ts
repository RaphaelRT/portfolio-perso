export interface Experience {
    role: string;
    company: string;
    place: string;
    begin: string;
    end?: string;
    technologies: string[];
    description: string[];
    link: string;
    contact: string;
  }
  
  export const experiences: Experience[] = [
    {
      role: "Lead Developer",
      company: "Terra",
      place: "Paris",
      begin: "2024",
      contact: "CDI",
      technologies: ["ReactJS", "Node.js", "MeteorJS", "Microservices", "DataDog", "Docker", "GitLab CI/CD"],
      description: [
        "Management et formation d'une équipe de <b>2 développeurs</b>.<br>",
        "Migration d’un <b>monolithe MeteorJS</b> vers <b>ReactJS</b> et une architecture en <b>micro-services Node.js</b>, améliorant la <b>scalabilité</b>.<br>",
        "Conception et déploiement d’un <b>système de gestion de stock</b> conforme aux normes BIO, réduisant les <b>erreurs de gestion de 35%</b>.<br>",
        "Mise en place d’un <b>système de monitoring</b> technique et business, permettant d’anticiper les <b>incidents critiques</b>.<br>"
      ],
      link: "https://www.kelbongoo.com/"
    },
    {
      role: "Développeur Full Stack",
      company: "Terra",
      place: "Paris",
      begin: "2023",
      contact: "CDI",
      technologies: ["React Native", "ReactJS", "PostgreSQL", "MongoDB", "Kubernetes", "MariaDB", "Google Cloud Platform (GCP)", "Django"],
      description: [
        "Refonte de <b>3 applications mobiles React Native</b> et migration d’un <b>site vitrine</b> vers ReactJS, augmentant la <b>satisfaction utilisateur</b>.<br>",
        "Optimisation et administration de bases de données (<b>PostgreSQL</b>, <b>MongoDB</b>, <b>MariaDB</b>) pour gérer des volumes de données supérieurs à <b>500 000 lignes</b>.<br>",
        "Gestion de l’<b>infrastructure Kubernetes</b>, incluant la supervision de <b>65 pods</b> sur Google Cloud Platform (GCP).<br>",
        "Maintenance et optimisation des <b>back-ends</b> en Node.js et Django, réduisant les <b>temps de chargement</b> des requêtes de <b>40%</b>.<br>"
      ],
      link: "https://www.kelbongoo.com/"
    },
    {
      role: "Développeur Python/Java",
      company: "CE Expertises",
      place: "Paris",
      begin: "2023",
      contact: "Freelance",
      technologies: ["Python", "Java", "Tabula", "Automatisation"],
      description: [
        "Prototypage Python et développement d’un <b>add-on Java</b> personnalisé pour Tabula, optimisé pour des <b>documents complexes</b> (fiches de paie, rapports fiscaux jusqu’à <b>1000 pages</b>).<br>",
        "Automatisation du traitement des documents, réduisant le temps nécessaire de plusieurs jours à <b>moins d’une heure</b>.<br>"
      ],
      link: "https://www.ce-expertises.fr/"
    },
    {
      role: "Développeur Full Stack",
      company: "City&You",
      place: "Paris",
      begin: "2023",
      contact: "Freelance",
      technologies: ["WordPress", "Amazon AWS", "SSL", "Responsive Design"],
      description: [
        "Conception et développement d’un <b>thème WordPress</b> entièrement personnalisé, adapté aux <b>besoins spécifiques</b> du produit Gabarit.<br>",
        "Déploiement et configuration complète sur <b>AWS</b>, incluant la gestion des <b>certificats SSL</b> et la configuration avancée du <b>nom de domaine</b>.<br>",
        "Collaboration étroite avec les équipes produit pour assurer une <b>intégration fluide</b> et une <b>expérience utilisateur</b> optimale.<br>"
      ],
      link: "https://gabarit.fr/"
    },
    {
      role: "Data Engineer / IA",
      company: "Smarterplan",
      place: "Paris",
      begin: "2021",
      end: "2022",
      contact: "Alternance / Freelance",
      technologies: ["Mask RCNN", "YOLACT", "AWS Lambda", "Computer Vision"],
      description: [
        "Optimisation d’un modèle <b>Mask RCNN (YOLACT)</b> pour des projets de vision par ordinateur, augmentant la <b>précision des prédictions de 25%</b>.<br>",
        "Création d’un <b>pipeline d’augmentation d’images</b>, réduisant les besoins en données de <b>30%</b>.<br>",
        "Automatisation des pipelines de traitement de données via <b>AWS Lambda</b>.<br>"
      ],
      link: "https://www.smarterplan.io/"
    },
    {
      role: "Développeur Full Stack",
      company: "Hetic",
      place: "Paris",
      begin: "2021",
      contact: "Projet étudiant",
      technologies: ["MERN", "Docker", "Flask", "Selenium"],
      description: [
        "Création d’une infrastructure <b>MERN</b> (MongoDB, Express, ReactJS, Node.js).<br>",
        "Scraping d’articles avec <b>Selenium</b> et optimisation des processus CPU par parallélisation.<br>",
        "Création d’une <b>API Flask</b> et lancement d’un container Docker.<br>"
      ],
      link: "https://www.hetic.net/"
    },
    {
      role: "Data Engineer",
      company: "Corse Matin",
      place: "Corse",
      begin: "2023",
      contact: "Projet étudiant",
      technologies: ["Google Analytics", "Spark", "GeoPandas", "Selenium"],
      description: [
        "Analyse, visualisation et nettoyage de base de données <b>Google Analytics</b> et <b>AT Internet</b>.<br>",
        "Scraping d’articles avec <b>Selenium</b> et création de base de données.<br>",
        "Traitement Big Data avec <b>Spark RDD/SQL</b>.<br>",
        "Traitement et visualisation de données géographiques avec <b>GeoPandas</b>.<br>"
      ],
      link: "https://www.corsematin.com/"
    },
    {
      role: "Développeur web full-stack",
      company: "Trente-Douze",
      place: "Paris",
      begin: "2019",
      contact: "Stage",
      technologies: ["React Native", "ReactJS", "PHP", "Symfony"],
      description: [
        "Développement d’une <b>application interne React Native</b> pour les médecins.<br>",
        "Création d’un <b>site pour Spineart</b>.<br>",
        "Développement du site <b>Villa Prestige Service</b>.<br>"
      ],
      link: "https://www.trente-douze.fr/"
    },
    {
      role: "Développeur web WordPress",
      company: "Acm Studio Music",
      place: "Paris",
      begin: "2019",
      contact: "Freelance",
      technologies: ["WordPress", "PHP", "Hébergement"],
      description: [
        "Développement et mise en place d'un <b>nom de domaine</b>, de l'<b>hébergement</b> ainsi que la création du site internet.<br>"
      ],
      link: "https://www.acmstudiomusic.com/"
    }
  ];
  