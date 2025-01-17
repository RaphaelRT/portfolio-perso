import React from 'react';
import Anchor from '../Anchor/Anchor';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <Anchor label="à propos" anchor="about" />
      <div>
        <p className="about_text">
          Développeur <b>polyvalent</b> et <b>passionné</b>, je m'attache à créer des solutions sur-mesure qui allient <b>simplicité d'utilisation</b> et <b>performance technique</b>. Mon objectif est de répondre précisément aux besoins des entreprises en leur offrant des outils numériques <b>fiables</b>, <b>adaptés</b> et <b>scalables</b> (capables de grandir avec leur activité).
        </p>
        <br />
        <p className="about_text">
          Lors de mes expériences passées, j’ai travaillé sur des projets variés, comme la <b>réorganisation complète de systèmes</b> pour améliorer leur efficacité, la <b>création d’applications mobiles</b> faciles à utiliser ou encore la <b>mise en place de solutions permettant de mieux gérer les données</b>. Grâce à ces initiatives, j’ai pu contribuer à une <b>réduction des erreurs de gestion de 35%</b>, à une <b>amélioration des performances</b> des services web de <b>40%</b>, et à l’<b>automatisation de tâches complexes</b>, offrant ainsi un gain de temps significatif.
        </p>
        <br />
        <p className="about_text">
          Au-delà de mes compétences techniques, j’aime avant tout <b>travailler en équipe</b>, <b>échanger des idées</b> et <b>proposer des solutions concrètes et durables</b>. Toujours <b>curieux</b>, je suis à l’écoute des <b>dernières innovations</b> pour les mettre au service de mes projets. Mon expertise couvre des domaines variés comme le <b>développement web</b>, les <b>bases de données</b>, et l’utilisation des <b>plateformes cloud</b> pour garantir des solutions <b>fiables</b> et <b>modernes</b>.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
