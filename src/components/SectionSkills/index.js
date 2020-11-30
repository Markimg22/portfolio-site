import React from 'react';
import ItemSkill from './ItemSkill';
import HeaderSections from '../HeaderSections';

export default function SectionSkills() {
  return (
    <section>
      <HeaderSections iconName="asterisk" titleHeader="Skills" isBold={true} />
      <ItemSkill itemName="React JS" percentageSkill="40%" />
      <ItemSkill itemName="HTML5" percentageSkill="90%" />
      <ItemSkill itemName="CSS3" percentageSkill="80%" />
      <ItemSkill itemName="JavaScript" percentageSkill="50%" />
      <hr />
    </section>
  );
}