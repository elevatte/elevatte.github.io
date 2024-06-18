import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container as ContainerBase } from "components/misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import appleIconImageSrc from "images/icon.svg";

const Container = tw(ContainerBase)`bg-purple-gradient -mx-8`;
const Content = tw(ContentWithPaddingXl)``;
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const ColumnContainer = tw.div`max-w-2xl`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw(SectionHeading)`text-gray-100 max-w-none text-3xl leading-snug`;
const Subheading = tw(SubheadingBase)`text-gray-500 mb-4 tracking-wider text-center mt-4 px-0`;

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center`;
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 bg-gray-100 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-white opacity-10`;
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-white opacity-10`;

export default ({
  subheading = "Download App",
  text = "Developers all over the world are happily using Treact.",
  link1Text = "App Store",
  link1Url = "#",
  link1IconSrc = appleIconImageSrc,
  pushDownFooter = false,
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <Content>
        <Row>
          <TextContainer>
            <Text>{text}</Text>
            {subheading && <Subheading>{subheading}</Subheading>}
            <LinksContainer>
              <Link href={link1Url}>
                <img src={link1IconSrc} alt=""/>
                <span>{link1Text}</span>
              </Link>
            </LinksContainer>
          </TextContainer>
        </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1 />
          <DecoratorBlob2 />
        </DecoratorBlobContainer>
      </Content>
    </Container>
  );
};
