import React from 'react';
import SkillsItem from './SkillsItem';
import HeaderSection from '../HeaderSection';

export default function SkillsSection() {
  return (
    <section>
      <HeaderSection nameSection="Skills" iconName="asterisk" />
      <SkillsItem skillName="React JS/Native" skillScore="20%" />
      <SkillsItem skillName="JavaScript" skillScore="40%" />
      <SkillsItem skillName="HTML5" skillScore="90%" />
      <SkillsItem skillName="CSS3" skillScore="80%" />
    </section>
  );
}