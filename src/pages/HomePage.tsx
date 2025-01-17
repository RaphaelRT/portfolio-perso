import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Contact from '../components/Contact/Contact';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import FormationSection from '../components/FormationSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h2>Full Stack Developer | Data Engineer | DevOps</h2>
      <div className='homeContainer'>
        <div className='homeContainer_col1'>
          <div>
            <p className='homeContainer_col1_smallDescription'>Je conçois des solutions <b>innovantes</b> et <b>scalables</b> pour transformer <br></br> les défis en <b>opportunités</b>.</p>
            <Contact />
          </div>
          <Menu />
        </div>
        <div className='homeContainer_col2'>
          <AboutSection />
          <ExperiencesSection />
          <FormationSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
