export interface Experience {
    role: string;
    company: string;
    place: string;
    begin: string;
    end: string;
    technologies: string[];
    description: string[];
  }
  
  export const experiences: Experience[] = [
    {
      role: "Lead Développeur",
      company: "Terra",
      place: "Paris",
      begin: "févr. 2024",
      end: "nov. 2024",
      technologies: ["ReactJS", "Node.js", "MeteorJS", "Microservices", "DataDog"],
      description: [
        "Management et formation d'une équipe de <b>2 développeurs</b>.<br>",
        "Migration d’un <b>monolithe MeteorJS</b> vers <b>ReactJS</b> et une architecture en <b>micro-services Node.js</b>, améliorant la <b>scalabilité</b>.<br>",
        "Conception et déploiement d’un <b>système de gestion de stock</b> conforme aux normes BIO, réduisant les <b>erreurs de gestion de 35%</b>.<br>",
        "Mise en place d’un <b>système de monitoring</b> technique et business, permettant d’anticiper les <b>incidents critiques</b>.<br>"
      ]
    },
    {
      role: "Développeur Full Stack",
      company: "Terra",
      place: "Paris",
      begin: "juil. 2023",
      end: "févr. 2024",
      technologies: ["React Native", "ReactJS", "PostgreSQL", "MongoDB", "Kubernetes", "MariaDB", "Google Cloud Platform (GCP)"],
      description: [
        "Refonte de <b>3 applications mobiles React Native</b> et migration d’un <b>site vitrine</b> vers ReactJS, augmentant la <b>satisfaction utilisateur</b>.<br>",
        "Optimisation et administration de bases de données (<b>PostgreSQL</b>, <b>MongoDB</b>, <b>MariaDB</b>) pour gérer des volumes de données supérieurs à <b>500 000 lignes</b>.<br>",
        "Gestion de l’<b>infrastructure Kubernetes</b>, incluant la supervision de <b>65 pods</b> sur Google Cloud Platform (GCP).<br>",
        "Maintenance et optimisation des <b>back-ends</b> en Node.js et Django, réduisant les <b>temps de chargement</b> des requêtes de <b>40%</b>.<br>"
      ]
    },
    {
      role: "Développeur Python/Java",
      company: "CE Expertises",
      place: "Paris",
      begin: "juin 2023",
      end: "juil. 2023",
      technologies: ["Python", "Java", "Tabula"],
      description: [
        "Prototypage Python et développement d’un <b>add-on Java</b> personnalisé pour Tabula, optimisé pour des <b>documents complexes</b> (fiches de paie, rapports fiscaux jusqu’à <b>1000 pages</b>).<br>",
        "Automatisation du traitement des documents, réduisant le temps nécessaire de plusieurs jours à <b>moins d’une heure</b>.<br>"
      ]
    },
    {
      role: "Data Engineer / IA",
      company: "Smarterplan",
      place: "Paris",
      begin: "oct. 2021",
      end: "déc. 2022",
      technologies: ["Mask RCNN", "YOLACT", "AWS Lambda"],
      description: [
        "Optimisation d’un modèle <b>Mask RCNN (YOLACT)</b> pour des projets de vision par ordinateur, augmentant la <b>précision des prédictions de 25%</b>.<br>",
        "Création d’un <b>pipeline d’augmentation d’images</b>, réduisant les besoins en données de <b>30%</b>.<br>",
        "Automatisation des pipelines de traitement de données via <b>AWS Lambda</b>, réduisant le temps de traitement global.<br>"
      ]
    },
    {
        role: "Développeur Full Stack",
        company: "City&You",
        place: "Paris",
        begin: "mai 2023",
        end: "juin 2023",
        technologies: ["WordPress", "Amazon AWS"],
        description: [
          "Conception et développement d’un <b>thème WordPress</b> entièrement personnalisé, adapté aux <b>besoins spécifiques</b> du produit Gabarit, avec une attention particulière au <b>design responsive</b> et à l’optimisation des performances.<br>",
          "Déploiement et configuration complète sur <b>AWS</b>, incluant la gestion des <b>certificats SSL</b> et la configuration avancée du <b>nom de domaine</b> pour garantir une <b>disponibilité optimale</b>.<br>",
          "Collaboration étroite avec les équipes produit pour assurer une <b>intégration fluide</b> et une <b>expérience utilisateur</b> optimale.<br>"
        ]
      },
    {
      role: "Développeur web full-stack",
      company: "Trente-Douze",
      place: "Paris",
      begin: "juil. 2019",
      end: "sept. 2019",
      technologies: ["React Native", "ReactJS"],
      description: [
        "Développement d’une <b>application interne React Native</b> pour les médecins.<br>",
        "Création d’un <b>site / app pour Spineart</b>.<br>",
        "Développement du site <b>Villa Prestige Service</b>.<br>"
      ]
    }
  ];
  