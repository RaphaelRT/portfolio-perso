import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import FormationSection from '../components/FormationSection';

const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const col2Ref = useRef<HTMLDivElement>(null); // Référence pour homeContainer_col2
  const aboutRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const formationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const col2Element = col2Ref.current;
      if (!col2Element) return;

      const col2Rect = col2Element.getBoundingClientRect();

      const sections = [
        { id: 'about', ref: aboutRef },
        { id: 'experiences', ref: experiencesRef },
        { id: 'education', ref: formationRef },
      ];

      for (const section of sections) {
        const sectionElement = section.ref.current;
        if (!sectionElement) continue;

        const sectionRect = sectionElement.getBoundingClientRect();

        // Vérifie si la section est partiellement visible dans le conteneur
        if (
          sectionRect.top < col2Rect.bottom &&
          sectionRect.bottom > col2Rect.top
        ) {
          setCurrentSection(section.id);
          return;
        }
      }

      // Si aucune section n'est visible, réinitialise
      setCurrentSection(null);
    };

    const col2Element = col2Ref.current;
    col2Element?.addEventListener('scroll', handleScroll);

    return () => {
      col2Element?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <h2>Full Stack Developer | Data Engineer | DevOps</h2>
      <div className="homeContainer">
        <div className="homeContainer_col1">
          <div>
            <p className="homeContainer_col1_smallDescription">
              Je conçois des solutions <b>innovantes</b> et <b>scalables</b> pour transformer
              <br />
              les défis en <b>opportunités</b>.
            </p>
            <ContactSection />
          </div>
          <Menu currentSection={currentSection} />
        </div>
        <div className="homeContainer_col2" ref={col2Ref}>
          <AboutSection ref={aboutRef} />
          <ExperiencesSection ref={experiencesRef} />
          <FormationSection ref={formationRef} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
