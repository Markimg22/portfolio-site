import React from 'react';
import Header from '../../../components/Header';
import SectionAbout from '../../../components/SectionAbout';
import SectionSkills from '../../../components/SectionSkills';
import SectionLanguages from '../../../components/SectionLanguages';

export default function LeftColumn() {
  return (
    <aside className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <Header />
        <div className="w3-container">
          <SectionAbout />
          <SectionSkills />
          <SectionLanguages />
        </div>
      </div>
    </aside>
  );
} 