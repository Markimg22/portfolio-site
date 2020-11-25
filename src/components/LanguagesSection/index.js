import React from 'react';
import HeaderSection from '../HeaderSection';
import LanguagesItem from './LanguagesItem';

export default function LanguagesSection() {
  return (
    <section>
      <HeaderSection iconName="globe" nameSection="Languages" />
      <LanguagesItem />
    </section>
  );  
}