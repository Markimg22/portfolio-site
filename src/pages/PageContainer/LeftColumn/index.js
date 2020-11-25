import React from 'react';
import Header from '../../../components/Header';
import AboutSection from '../../../components/AboutSection';
import SkillsSection from '../../../components/SkillsSection';
import LanguagesSection from '../../../components/LanguagesSection';

export default function LeftColumn() {
  return (
    <aside className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <Header />
        <div className="w3-container">
          <AboutSection />
          <hr />
          <SkillsSection />
          <hr />
          <LanguagesSection />
        </div>
      </div>
    </aside>
  );
} 