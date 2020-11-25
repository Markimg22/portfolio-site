import React from 'react';
import AboutItem from './AboutItem';

export default function AboutSection() {
  return (
    <section>
      <AboutItem iconName="briefcase" info="Web Developer" />
      <AboutItem iconName="home" info="Cuiabá, MT" />
      <AboutItem iconName="envelope" info="marquim.net.221200@gmail.com" />
      <AboutItem iconName="phone" info="(65) 99241-2839" />
    </section>
  );
}