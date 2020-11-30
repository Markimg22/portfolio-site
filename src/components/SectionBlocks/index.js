import React from 'react';
import HeaderSections from '../HeaderSections';
import ItemBlock from './ItemBlock';

export default function SectionBlock({ titleSection, iconName, infos=[] }) {
  return (
    <section className="w3-container w3-card w3-white w3-margin-bottom w3-text-grey">
      <HeaderSections titleSize="xxlarge" iconName={iconName} titleHeader={titleSection} />
      {infos.map(info => <ItemBlock key={info.title} info={info} />)}      
    </section>
  );
}