import React, { forwardRef } from 'react';
import Anchor from '../Anchor/Anchor';
import { formation } from "./formation";

const FormationSection = forwardRef<HTMLDivElement>((_, ref) => {
 

  return (
    <section ref={ref} className="formationSection" id='education'>
      <Anchor label='formation' anchor='education'/>
      <div className='formationSection_content'>
        {formation.map((education, id) => {
          return (
            <div key={id} className='formationSection_card'>
              <a href={education.link} target='_blank' rel="noreferrer" className='formationSection_card_infos hoverable'>
                <h3>{education.diploma}</h3>
                <span>{education.school}, {education.place}</span>
              </a>
              <p>{education.begin} - {education.end}</p>
            </div>
          )
        })}
      </div>
      
    </section>
  );
});

export default FormationSection;
