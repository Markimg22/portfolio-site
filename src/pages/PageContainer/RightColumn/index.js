import React from 'react';
import SectionBlocks from '../../../components/SectionBlocks';
import { infosExperience, infosEducation } from '../../../data/data';

export default function RightColumn() {
  return (
    <main className="w3-twothird">
      <SectionBlocks
        titleSection="Work Experience" 
        iconName="suitcase" 
        infos={infosExperience}
      />
      <SectionBlocks 
        titleSection="Education"
        iconName="certificate"
        infos={infosEducation}
      />
    </main>
  );
}