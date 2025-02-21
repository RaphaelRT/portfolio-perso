export interface Formation {
    diploma: string;
    school: string;
    place: string;
    begin: string;
    end: string;
    link: string;
    description: string[];
}

export const formation: Formation[] = [
    {
      diploma: "Mastère Big Data et Intelligence Artificielle",
      school: "HETIC",
      begin: "2020",
      end: "2022",
      place: "Paris",
      link: "https://www.hetic.net/",
      description: [
        "Formation de <b>deux ans</b> axée sur les métiers de la <b>Data</b>, couvrant à la fois les aspects informatiques (<b>gestion de données massives</b>, <b>déploiements</b>, <b>programmation data</b>) et analytiques (<b>data science</b>, <b>machine learning</b>), ainsi que les dimensions business.",
        "Acquisition de compétences pour accompagner toutes les étapes d’un <b>projet Data</b>, depuis l’<b>analyse exploratoire</b> jusqu’à l’<b>industrialisation d’outils d’IA</b> et de <b>machine learning</b>.",
        "Développement d'une <b>vision globale</b> englobant la <b>data science</b>, le <b>data management</b>, l’<b>IA</b> et la <b>data visualisation</b>.",
        "Programme incluant des <b>projets concrets</b>, des <b>stages</b> et des périodes en <b>alternance</b> pour une immersion professionnelle optimale."
      ]
    },
    {
      diploma: "Expert en Ingénierie de l'Information et de la Communication (RNCP 7)",
      school: "HETIC",
      begin: "2017",
      end: "2020",
      place: "Paris",
      link: "https://www.hetic.net/",
      description: [
        "Programme <b>Grande École</b> formant des <b>experts polyvalents</b> dans le domaine du <b>numérique</b>, avec une approche <b>pluridisciplinaire</b>.",
        "Enseignements couvrant le <b>développement web</b>, le <b>marketing digital</b>, le <b>webdesign</b>, la <b>data</b>, l’<b>intelligence artificielle</b> et l’<b>entrepreneuriat</b>.",
        "Pédagogie basée sur <b>70% de pratique</b>, incluant des <b>projets concrets</b>, des <b>stages</b> (dont un à l’international) et une <b>année en alternance</b> pour renforcer les compétences professionnelles.",
        "Objectif de former les futurs <b>directeurs</b>, <b>entrepreneurs</b> et <b>managers</b> dans le domaine du <b>numérique</b>."
      ]
    }
  ];