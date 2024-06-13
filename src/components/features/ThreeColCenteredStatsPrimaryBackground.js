import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";

const Container = tw(ContainerBase)`mt-8 text-gray-100 bg-purple-gradient px-8`;
const StatsContainer = tw.div`flex flex-col sm:flex-row items-center justify-center flex-wrap justify-between`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide sm:w-1/2 md:w-1/3 max-w-xs break-words`;
const StatValue = tw.div`text-2xl font-black`;

export default ({
  stats = [
    {
      value: "Aumento salarial de até 40%",
    },
    {
      value: "Crie currículos atrativos em menos de 10 minutos",
    },
    {
      value: "Seu Linkedin com 10x mais visitas",
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
