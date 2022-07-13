import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Annie Zhou" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Nice to meet you 🤠" />
        <ProjectsSection sectionId="features" heading="Check out what I'm building! 👩🏻‍💻" />
        <ArticlesSection sectionId="articles" heading="Read some of my thoughts 💭" sources={['Medium']} />
        <InterestsSection sectionId="details" heading="Dive into my interests 🧚🏻‍♂️" />
        <ContactSection sectionId="github" heading="Thanks for stopping by ♥️" />
      </Page>
    </>
  );
}
