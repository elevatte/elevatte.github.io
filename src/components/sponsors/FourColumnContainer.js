import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container } from "components/misc/Layouts.js";
import Icon1 from "images/celebration-icon.svg";
import Icon2 from "images/celebration-icon.svg";
import Icon3 from "images/celebration-icon.svg";
import Icon4 from "images/celebration-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
const Content = tw.div`max-w-screen-xl mx-auto py-16`;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const FourColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/4 max-w-xs`}
`;
const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-blue-700 leading-none hocus:text-blue-800 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({
  cards = [
    {
      imageSrc: Icon1,
      alt: "Secure",
      url: "https://timerse.com"
    },
    {
      imageSrc: Icon2,
      alt: "24/7 Support",
      url: "https://google.com"
    },
    {
      imageSrc: Icon3,
      alt: "Customizable",
      url: "https://reddit.com"
    },
    {
      imageSrc: Icon4,
      alt: "Reliable",
      url: "https://example.com"
    }
  ],
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  return (
    <Container>
      <Content>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <FourColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url} target="_blank">
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt={card.title} css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </Card>
            </Column>
          ))}
        </FourColumnContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
