import React, { useState } from 'react';
import FilterDropdown from '../FilterDropdown';
import Anchor from '../Anchor/Anchor';
import { formation, Formation } from "./formation";

const FormationSection: React.FC = () => {
 

  return (
    <section className="formationSection" id='education'>
      <Anchor label='formation' anchor='education'/>
      <div className='formationSection_content'>
        {formation.map(education => {
          return (
            <div className='formationSection_card'>
              <div>
                <h3>{education.diploma}</h3>
                <span>{education.school}, {education.place}</span>
              </div>
              <span>{education.begin} - {education.end}</span>
            </div>
          )
        })}
      </div>
      
    </section>
  );
};

export default FormationSection;
