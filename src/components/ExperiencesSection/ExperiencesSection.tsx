import React, { useState } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Anchor from '../Anchor/Anchor';

interface Experience {
  role: string;
  company: string;
  place: string;
  begin: string;
  end: string;
  technologies: string[];
  description: string[];
}

const MAX_DESCRIPTION_LENGTH = 150;

const ExperiencesSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      role: "Lead Développeur",
      company: "Terra",
      begin: "Février 2024",
      end: "Novembre 2024",
      place: "Paris",
      technologies: ["ReactJS", "Node.js", "MeteorJS", "Microservices"],
      description: [
        "Management et formation d'une équipe de 2 développeurs.",
        "Migration d’un monolithe MeteorJS vers ReactJS et architecture en micro-services Node.js, améliorant la scalabilité.",
        "Conception et déploiement d’un système de gestion de stock conforme aux normes BIO, réduisant les erreurs de gestion de 35%.",
        "Mise en place d’un système de monitoring technique et business, permettant d’anticiper les incidents critiques."
      ]
    },
    {
      role: "Développeur Full Stack",
      company: "Terra",
      place: "Paris",
      begin: "Juillet 2023",
      end: "Février 2024",
      technologies: ["React Native", "ReactJS", "PostgreSQL", "MongoDB", "Kubernetes", "MariaDB"],
      description: [
        "Refonte de 3 apps React Native et migration d’un site vitrine vers ReactJS, augmentant la satisfaction utilisateur.",
        "Optimisation et administration de bases de données (PostgreSQL, MongoDB, MariaDB) pour gérer des volumes de données > 500k lignes.",
        "Gestion de l’infrastructure Kubernetes, incluant la supervision de 65 pods sur Google Cloud Platform (GCP).",
        "Maintenance et optimisation des back-ends en Node.js et Django, réduisant les temps de chargement des requêtes de 40%."
      ]
    },
    {
      role: "Développeur Python/Java",
      company: "CE Expertises",
      place: "Paris",
      begin: "Juin 2023",
      end: "Juillet 2023",
      technologies: ["Python", "Java", "Tabula"],
      description: [
        "Prototypage Python et développement d’un add-on Java personnalisé pour Tabula, optimisé pour des documents complexes (fiches de paie, rapports fiscaux jusqu’à 1000 pages).",
        "Automatisation du traitement des documents, réduisant le temps nécessaire de plusieurs jours à moins d’une heure."
      ]
    },
    {
      role: "Data Engineer / IA",
      company: "Smarterplan",
      place: "Paris",
      begin: "Octobre 2021",
      end: "Décembre 2022",
      technologies: ["Mask RCNN", "YOLACT", "AWS Lambda"],
      description: [
        "Optimisation d’un modèle Mask RCNN (YOLACT) pour des projets de vision par ordinateur, augmentant la précision des prédictions de 25%.",
        "Création d’un pipeline d’augmentation d’images, permettant de réduire les besoins en données de 30%.",
        "Automatisation des pipelines de traitement de données via AWS Lambda, réduisant le temps de traitement global."
      ]
    },
    {
      role: "Développeur Full Stack",
      company: "City&You",
      place: "Paris",
      begin: "Mai 2023",
      end: "Juin 2023",
      technologies: ["WordPress", "AWS"],
      description: [
        "Création d’un thème WordPress from scratch pour leur produit Gabarit.",
        "Déploiement sur AWS et configuration du nom de domaine."
      ]
    },
    {
      role: "Développeur web full-stack",
      company: "Trente-Douze",
      place: "Paris",
      begin: "Juillet 2019",
      end: "Septembre 2019",
      technologies: ["React Native", "ReactJS"],
      description: [
        "Développement d’une application React native interne pour les médecins.",
        "Développement d’un site/app pour Spineart.",
        "Développement de Villa Prestige Service."
      ]
    }
  ];

  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

  const technologyColors: Record<string, string> = {
    ReactJS: '#295F98',
    'Node.js': '#A2D5AB',
    MeteorJS: '#F3B0C3',
    Microservices: '#FFD9A0',
    'React Native': '#CDC2A5',
    PostgreSQL: '#88ABDA',
    MongoDB: '#AAD5A2',
    Kubernetes: '#A0C4FF',
    Python: '#FFBF69',
    Java: '#FFC9C9',
    Tabula: '#E0E0E0',
    'Mask RCNN': '#F5CBA7',
    YOLACT: '#C7CEEA',
    'AWS Lambda': '#FFDDC1',
    WordPress: '#CBD4C2',
    AWS: '#D5A6BD',
  };

  const handleTechnologySelect = (selectedValues: string[]) => {
    setSelectedTechnologies(selectedValues);
  };

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className={"experiencesSection"} id='experiences'>
      <Anchor label='expérience' anchor='education'/>
      <div>
        <div className={"filterDropdown"}>
          <CustomDropdown
            options={Object.keys(technologyColors).map((tech) => ({ label: tech, value: tech }))}
            onSelectionChange={handleTechnologySelect}
            label="Filtrer par technologie utilisée"
          />
        </div>
        <div className={"experienceList"}>
          {experiences
            .filter((experience) =>
              selectedTechnologies.length
                ? experience.technologies.some((tech) => selectedTechnologies.includes(tech))
                : true
            )
            .map((experience, index) => {
              const isExpanded = expandedDescriptions.has(index);
              const fullDescription = experience.description.map(desc => `- ${desc}`).join('\n');
              const truncatedDescription = fullDescription.length > MAX_DESCRIPTION_LENGTH
                ? fullDescription.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
                : fullDescription;

              return (
                <div key={index} className={"experienceCard"}>
                  <h3 className={"role"}>
                    {experience.role} <span className={"company"}>- <b>{experience.company}</b>, <b>{experience.place}</b></span>
                  </h3>
                  <p className={"date"}>{experience.begin} - {experience.end}</p>
                  <div className={"descriptionContainer"}>
                    <pre className={"description"} style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                      {isExpanded ? fullDescription : truncatedDescription}
                    </pre>
                  </div>
                  {fullDescription.length > MAX_DESCRIPTION_LENGTH && (
                    <button
                      className={"toggleButton"}
                      onClick={() => toggleDescription(index)}
                    >
                      {isExpanded ? 'Voir moins' : 'Voir plus'}
                    </button>
                  )}
                  <div className={"technologies"}>
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={"technologyBadge"}
                        style={{ backgroundColor: "rgba(241, 162, 8, 0.1)", color: 'rgba(241, 162, 8, 1)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

      </div>
      
    </section>
  );
};

export default ExperiencesSection;
