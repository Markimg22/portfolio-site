import React from 'react';
import HeaderSections from '../HeaderSections';
import ItemLanguage from './ItemLanguage';

export default function SectionLanguages() {
  return (
    <section>
      <HeaderSections iconName="globe" titleHeader="Languages" isBold={true} />
      <ItemLanguage itemName="Portugues" percentageItem="100%" />
      <ItemLanguage itemName="English" percentageItem="20%" />
      <hr />
    </section>
  );
}