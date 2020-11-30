import React from 'react';
import ItemAbout from './ItemAbout';

export default function SectionAbout() {
  return (
    <section>
      <ItemAbout iconName="briefcase" itemName="Web Developer" />
      <ItemAbout iconName="home" itemName="Cuiabá, MT" />
      <ItemAbout iconName="envelope" itemName="marquim.net.221200@gmail.com" />
      <ItemAbout iconName="phone" itemName="(65) 99241-2839" />
      <hr />
    </section>
  );
}