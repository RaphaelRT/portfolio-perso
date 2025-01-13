import React from 'react';
import Anchor from '../Anchor/Anchor';

const AboutSection: React.FC = () => {
  return (
  <section id="about" className="about">
    <Anchor label='à propos' anchor="about"/>
    <div>
      <p className="about_text"> Développeur <b>passionné</b>, j'allie un design <b>intuitif</b> à une ingénierie <b>robuste</b> pour créer des solutions <b>performantes</b> et <b>adaptées</b> aux besoins des clients. Mon expérience couvre le <b>développement full stack</b>, le <b>data engineering</b> et les pratiques <b>DevOps</b>, avec une approche axée sur la <b>résolution de problèmes</b> et des solutions <b>scalables</b>.
      </p>
      <br></br>
      <p className={"about_text"}> J’ai contribué à la <b>migration vers des microservices</b>, à <b>l’optimisation d’applications mobiles</b>, et à <b>la mise en place de pipelines Big Data</b>. Mes réalisations incluent une <b>réduction de 35% des erreurs de gestion</b>, l’<b>optimisation des performances backend (+40%)</b> et l’<b>automatisation de processus via AWS Lambda</b>. Toujours curieux, j'aime <b>relever des défis ambitieux</b> tout en explorant de nouvelles technologies.
      </p>
    </div>
    
  </section> 
);
};

export default AboutSection;
