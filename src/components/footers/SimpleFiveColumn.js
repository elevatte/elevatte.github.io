import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/icon-text.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as WhatsappIcon } from "../../images/whatsapp.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto pt-16 lg:pt-20 flex flex-wrap justify-between `;
const CopyColumn = tw.div`w-full text-center py-8 bg-gray-200`;

const Column = tw.div`md:w-1/5 px-2`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-blue-700 hocus:border-blue-700 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-48`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-blue-700 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const Divider = tw.div`border-b-2 border-gray-300 w-full mb-4`;
const CopyRow = tw.div`flex justify-center items-center text-center`;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base md:mt-0 font-medium text-gray-500 mb-6`;
const getCurrentYear = new Date().getFullYear();
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

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CompanyDescription>
            Assistente de IA para crescimento profissional. Eleve seu valor e conquiste seu aumento salarial.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/elevatte" target="_blank">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/elevatte.me/" target="_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://wa.me/5548988570948?text=Quero%20conhecer%20mais%20sobre%20a%20Elevatte" target="_blank">
              <WhatsappIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Features</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link target="_blank" href="https://wa.me/5548988570948?text=Quero%20saber%20mais%20sobre%20Outplacement">Outplacement</Link>
            </LinkListItem>
            <LinkListItem>
              <Link target="_blank" href="https://wa.me/5548988570948?text=Quero%20saber%20mais%20sobre%20Headhunter">Headhunter</Link>
            </LinkListItem>
            <LinkListItem>
              <Link target="_blank" href="https://wa.me/5548988570948?text=Quero%20saber%20mais%20sobre%20Mentoria%20de%20Carreira">Mentoria de Carreira</Link>
            </LinkListItem>
            <LinkListItem>
              <Link target="_blank" href="https://wa.me/5548988570948?text=Quero%20saber%20mais%20sobre%20Treinamentos%20e%20Palestras">Treinamentos e Palestras</Link>
            </LinkListItem>
            <LinkListItem>
              <Link target="_blank" href="https://wa.me/5548988570948?text=Quero%20saber%20mais%20sobre%20Aperfeiçoamento%20Personalizado">Aperfeiçoamento personalizado</Link>
            </LinkListItem>
            <LinkListItem>
              <Link target="_blank" href="https://wa.me/5548988570948?text=Quero%20saber%20mais%20sobre%20Otimiza%C3%A7%C3%A3o%20da%20Apresenta%C3%A7%C3%A3o%20Pessoal">Otimização da apresentação Pessoal</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Acesso rápido</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</Link>
            </LinkListItem>
            {false &&
              <LinkListItem>
                <Link href="#pricing" onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}>Planos</Link>
              </LinkListItem>
            }
            <LinkListItem>
              <Link href="#sponsors" onClick={(e) => { e.preventDefault(); handleNavClick('sponsors'); }}>Apoiadores</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }}>Blog</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>FAQs</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="mailto:elevatte@letselevate.com.br">Suporte</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
      <CopyColumn>
        <Divider />
        <CopyRow>
          <CopywrightNotice>&copy; {getCurrentYear} Elevatte.me. Todos os direitos reservados.</CopywrightNotice>
        </CopyRow>
      </CopyColumn>
    </Container>
  );
};
