import React, { useState, forwardRef } from 'react';
import FilterDropdown from '../FilterDropdown';
import Anchor from '../Anchor/Anchor';
import { experiences } from "./experiences";
import { ReactComponent as BulletArrow } from '../../assets/icons/bulletArrow.svg';


const MAX_DESCRIPTION_LENGTH = 200;

const ExperiencesSection= forwardRef<HTMLDivElement>((_, ref) => {
 
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
  const initialTechnologies = new Set(
    experiences.flatMap(experience => experience.technologies)
  );
  
  const [technologies ] = useState<Set<string>>(initialTechnologies);
  

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
  const generateText = (text: string) => {
    return text.split("- ").filter(desc => desc.trim() !== "").map((desc, idx) => {
      return (
        <div
          key={idx}
          className='experienceList_card_description_txt'
        >
          <BulletArrow />
          <span dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      );
    });
  };

  const sortTechnologies = (technologies: string[]) => {
    return technologies.sort((a, b) => {
      const aSelected = selectedTechnologies.includes(a);
      const bSelected = selectedTechnologies.includes(b);
      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;
      return a.localeCompare(b);
    });
  };



  return (
    <section ref={ref} className="experiencesSection" id='experiences'>
      <Anchor label='expérience' anchor='experiences'/>
      <div className='experiencesSection_content'>
        <FilterDropdown
            options={Array.from(technologies).sort((a, b) => a.localeCompare(b)).map((technology) => ({
              label: technology,
              value: technology,
            }))}
            onSelectionChange={handleTechnologySelect}
            label="Filter by used technology"
        />
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
                <div key={index} className="experienceList_card">
                  <div className='experienceList_card_header'>
                    <a href={experience.link} target='_blank' rel="noreferrer" className='hoverable'>
                      <h3 className="experienceList_card_header_role">
                        {experience.role}
                      </h3>
                      <span className={"company"}>{experience.company}, {experience.place}</span>
                    </a>
                    <p className={"date"}>{experience.begin} – {experience.end}</p>
                  </div>
                  <div className="experienceList_card_description">
                    {generateText(isExpanded ? fullDescription : truncatedDescription)}
                    {fullDescription.length > MAX_DESCRIPTION_LENGTH && (
                      <button
                        className={"experienceList_card_description_viewMore hoverable"}
                        onClick={() => toggleDescription(index)}
                      >
                        {isExpanded ? 'Voir moins' : 'Voir plus'}
                      </button>
                    )}

                      <div className={"experienceList_card_description_technologiesList"}>
                      {sortTechnologies(experience.technologies).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`experienceList_card_description_technologiesList_badge ${
                            selectedTechnologies.includes(tech) ? "experienceList_card_description_technologiesList_badge_selected" : ""
                          }`}
                          style={{
                            fontWeight: selectedTechnologies.includes(tech) ? "bold" : "normal",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  
                </div>
              );
            })}
        </div>

      </div>
      
    </section>
  );
});

export default ExperiencesSection;
