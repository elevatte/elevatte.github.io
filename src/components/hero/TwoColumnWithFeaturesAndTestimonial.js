import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import bgLeft from "../../images/bg-left.png";

const BackgroundContainer = tw.div`bg-no-repeat bg-left-top pb-8 pt-16`;
const FixedHeaderBackground = styled.div(({ isScrolled }) => [
  tw`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out`,
  isScrolled ? tw`bg-white bg-opacity-75 backdrop-blur-sm shadow-lg` : tw`bg-transparent`
]);
const Header = tw(HeaderBase)`max-w-none`;
const HeaderContainer = tw.div`max-w-screen-2xl mx-auto sm:px-8 pt-4 pb-0`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-snug xl:text-6xl text-primary-gradient`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-secondary max-w-lg`;
const SubHeading = tw(SectionDescription)`mt-4 lg:text-base text-blue-700 max-w-lg`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32 flex justify-end items-end`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full h-auto w-144 rounded-t sm:rounded relative z-20`;

export default ({
  heading = "Better, Faster and Cheaper Cloud.",
  subHeading = 'This is a Subhead',
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  imageSrc = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
  buttonRounded = true,
  targetBlank = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonRoundedCss = buttonRounded && tw`rounded-full bg-primary-gradient`;
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start = null;
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animateScroll = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, ease(progress, startPosition, distance, duration));
        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      requestAnimationFrame(animateScroll);
    }
  };
  
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</NavLink>
      <NavLink href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}>Features</NavLink>
      <NavLink href="#pricing" onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}>Planos</NavLink>
      <NavLink href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }}>Blog</NavLink>
    </NavLinks>
  ];
  return (
    <>
      <FixedHeaderBackground isScrolled={isScrolled}>
        <HeaderContainer>
          <Header links={navLinks} />
        </HeaderContainer>
      </FixedHeaderBackground>
      <BackgroundContainer style={{ backgroundImage: `url(${bgLeft})`, backgroundRepeat: 'no-repeat' }}>
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <SubHeading>{subHeading}</SubHeading>
                <Description>{description}</Description>
                <PrimaryButton as="a" target={targetBlank ? "_blank" : "_self"} href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
              </TextColumn>
              <ImageColumn>
                <ImageContainer>
                  <Image src={imageSrc} />
                </ImageContainer>
              </ImageColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </BackgroundContainer>
    </>
  );
};
