import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import FAQ from "components/faqs/SingleCol.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import imageFirstFeature from "../images/feature-1.png";
import imageSecondFeature from "../images/feature-2.png";
import imageThirdFeature from "../images/feature-3.png";
import heroImage from '../images/pessoa-com-notebook.svg';
import bgRight from "../images/bg-right.png";
import bgWave from "../images/bg-wave.svg";

import outplacementImage from "images/trust.png";
import headHunterImage from "images/key-person.png";
import mentoriaDeCarreiraImage from "images/growth.png";
import treinamentosEPalestrasImage from "images/coaching.png";
import aperfeicoamentoImage from "images/learning.png";
import apresentacaoPessoalImage from "images/role-model.png";

import testimonial1 from "images/testimonial-1.png"
import testimonial2 from "images/testimonial-2.png"
import testimonial3 from "images/testimonial-3.png"
import testimonial4 from "images/testimonial-4.png"

const HighlightedText = tw.span`text-blue-700`
const BackgroundRightContainer = tw.div`bg-no-repeat bg-right pb-8`;
const BackgroundWaveContainer = tw.div`bg-no-repeat bg-left-bottom pb-8`;
const HighlightedTextInverse = tw.span`bg-gray-100 text-blue-700 px-4 transform inline-block`;

export default () => {
  return (
    <AnimationRevealPage>
      <div id="home">
        <Hero
          heading='Eleve seu valor e conquiste seu aumento salarial'
          description='Seja destaque nos processos seletivos com nossas ferramentas avançadas para criar currículo e preparação para entrevistas. Crie sua conta e comece agora mesmo!'
          subHeading='Assistente de IA para crescimento profissional'
          imageSrc={heroImage}
          primaryButtonUrl = "#"
          primaryButtonText = "Começar"
        />
      </div>
      <FeatureStats/>
      <div id="features">
        <BackgroundRightContainer style={{ backgroundImage: `url(${bgRight})`, backgroundRepeat: 'no-repeat' }}>
          <MainFeature
            subheading=''
            imageSrc={imageFirstFeature}
            heading={<>Tenha velocidade na criação do seu CV</>}
            description='Não se preocupe com os errors básicos e como escrever as suas informações no currículo, nós fazemos isso para você! Melhoramos a escrita do seu currículo utilizando o nosso a nossa IA com conhecimento abrangente sobre processo seletivos e construção de CV atrativos.'
            features={[]}
            primaryButtonText='Saiba mais'
          />
        </BackgroundRightContainer>
        <BackgroundWaveContainer style={{ backgroundImage: `url(${bgWave})`, backgroundRepeat: 'no-repeat' }}>
          <MainFeature
            textOnLeft={false}
            subheading=''
            imageSrc={imageSecondFeature}
            heading={<>Seu currículo ganha destaque nas vagas</>}
            description='Seja um dos primeros nos processos seletivos utilizando o currículo da elevatte, que combina um design atraente e totalmente otimizado para sistemas de recrutramento. Nossa plataforma ajuda a realçar suas habilidades, experiências, conquistas e na correção de errors básicos, tornando você mais visível e atraente para recrutadores.'
            features={[]}
            primaryButtonText='Saiba mais'
          />
        </BackgroundWaveContainer>
        <BackgroundRightContainer style={{ backgroundImage: `url(${bgRight})`, backgroundRepeat: 'no-repeat' }}>
          <MainFeature
            subheading=''
            imageSrc={imageThirdFeature}
            heading={<>Auto tradução do seu CV para outros idiomas</>}
            description='Não se preocupe com os errors básicos e como escrever as suas informações no currículo, nós fazemos isso para você! Melhoramos a escrita do seu currículo utilizando o nosso a nossa IA com conhecimento abrangente sobre processo seletivos e construção de CV atrativos.'
            features={[]}
            primaryButtonText='Saiba mais'
          />
        </BackgroundRightContainer>
        <Features
          heading={<>Serviços <HighlightedText>Incríveis</HighlightedText></>}
          linkText="Saiba mais"
          cards={[
            {
              imageSrc: outplacementImage,
              title: "Outplacement",
              description: "Facilitamos a transição de carreira com análise de perfil, currículos impactantes, preparo para entrevistas e acesso a uma rede de contatos. Recolocação rápida e personalizada.",
              url: "#"
            },
            {
              imageSrc: headHunterImage,
              title: "Headhunter",
              description: "Recrutamos talentos de alto nível para posições-chave, com total discrição. Apresentamos profissionais qualificados que impulsionam o crescimento da sua organização.",
              url: "#"
            },
            {
              imageSrc: mentoriaDeCarreiraImage,
              title: "Mentoria de Carreira",
              description: "Desenvolva sua carreira com diagnóstico, plano estratégico e mentoria contínua. Avance e alcance seus objetivos com nosso suporte.",
              url: "#"
            },
            {
              imageSrc: treinamentosEPalestrasImage,
              title: "Treinamentos e Palestras",
              description: "Capacitamos sua equipe em gestão, desenvolvimento e inovação. Workshops práticos para enfrentar desafios e alcançar resultados excepcionais.",
              url: "#"
            },
            {
              imageSrc: aperfeicoamentoImage,
              title: "Aperfeiçoamento Personalizado",
              description: "Receba feedback detalhado e recomendações baseadas nas tendências de mercado para aprimorar suas habilidades e se destacar profissionalmente.",
              url: "#"
            },
            {
              imageSrc: apresentacaoPessoalImage,
              title: "Otimização da Apresentação Pessoal",
              description: "Aprimore sua apresentação pessoal com orientações claras e práticas, destacando suas competências e conquistas de forma impactante.",
              url: "#"
            }
          ]}
          imageContainerCss={tw`p-2!`}
          imageCss={tw`w-20! h-20!`}
        />
      </div>
      <Testimonial
        heading={<>Depoimentos de <HighlightedText>Sucesso</HighlightedText></>}
        description = "Uma série de depoimentos de nossos clientes satisfeitos em diversos setores e casos de uso."
        testimonials={[
          {
            imageSrc: testimonial1,
            quote:
              "Na época eu ainda estava dando meus primeiros passos na programação e além de estar meio perdido com a programação em si, também estava meio perdido com a carreira. Mas, diferentemente da programação que tem vários tutoriais e cursos, não encontrava ninguem que falasse direto ao ponto como eu deveria me fazer para me colocar no mercado, até encontrar o Jorge. O Jorge, com o growth de carreira, em poucas reuniões me fez entender muito sobre como me posicionar, como me planejar, como me vender. E não apenas isso, ele me mostrou como eu deveria utilizar as ferramentas disponíveis a meu favor tais como linkedin, curriculo, networking. Algumas semanas após o Growth, já recebi algumas propostas de emprego. E nessa hora, o Jorge também me ajudou a identificar quais propostas fariam mais sentido ao longo prazo. No geral, foi uma experiência muito importante e com certeza fez toda a diferença para eu conseguir finalmente ingressar no mercado de trabalho",
            customerName: "Thiago Barbosa",
            customerTitle: "Software Engineer – Softensity Inc – USA"
          },
          {
            imageSrc: testimonial2,
            quote:
              "Depois de dez anos sem mexer no meu CV, precisei atualizá-lo para encontrar uma nova oportunidade. Na minha cabeça era apenas preencher o LinkedIn com as minhas últimas experiências para posteriormente entrar em contato com algumas empresa, enviando o clássico email com o CV em anexo. Inocência minha. Hoje em dia conquistar uma nova colocação é um trabalho de Growth e SEO que exige um método pragmático e eficaz e pode ser a diferença entre entrar na empresa dos seus sonhos ou em uma ruim. O Jorge Mallet e a Elevatte me ajudaram nesse processo. Eles desenvolveram um método próprio para conduzir esse trabalho e não mediram esforços para entregar o resultado. Muito obrigado Elevatte e especialmente ao Jorge, só tenho a agradecer a vocês.",
            customerName: "Cesar Barone",
            customerTitle: "Software Engineer Manager – Nutrisense – USA"
          },
          {
            imageSrc: testimonial3,
            quote:
              "O Growth de Carreira aplicado por Jorge Mallet é rápido e o melhor: provoca uma mudança profunda motivacional para a vida toda. Com apenas uma sessão eu pude rever diversos conceitos que me ajudaram a mudar o rumo da minha carreira. Funciona pois o objetivo é destacar o potencial que já existe dentro de você, mas que por diversos motivos você deixa de perceber. Eu saí de uma posição de especialista para gerência sênior, e o melhor, podendo escolher qual empresa eu queria atuar. E isso só foi possível pois com a técnica aplicada pelo Jorge Mallet eu pude entender qual era o meu verdadeiro lugar e qual era meu potencial, valores e diferenciais.",
            customerName: "Daniella Borges",
            customerTitle: "Professora ESPM – Sócia na Agência Onda Live Marketing"
          },
          {
            imageSrc: testimonial4,
            quote:
              "Estou em um momento de transição de carreira, em que decidi mudar meu ramo de atuação. Em alguns momentos, sentia que faltava algo a mais para poder ser mais efetivo neste processo. Há algumas semanas, iniciei o meu projeto de growth de carreira com Jorge Mallet, e a cada reunião tem sido uma descoberta incrível. As ações de autoconhecimento, construção de marca profissional, posicionamento nas mídias sociais e direcionamento na busca por oportunidades estão me apoiando muito neste processo de transição e me tornando um profissional mais capacitado e preparado. Obrigado Jorge pelo apoio incondicional. Esta jornada está sendo fantástica.",
            customerName: "Diego Rodriguez",
            customerTitle: "Gerente comercial – Rappi"
          }
        ]}
      />
      <div id="faq">
        <FAQ
          subheading=''
          heading={<>Alguma <HighlightedText>dúvida ?</HighlightedText></>}
          description = "Confira nossas respostas para as perguntas mais frequentes."
          faqs = {[
            {
              question: "Como a IA da Elevatte melhora meu currículo?",
              answer:
                "Nossa IA avançada analisa seu currículo, corrige erros básicos e melhora a redação para destacar suas habilidades e experiências. Utilizamos conhecimentos abrangentes sobre processos seletivos para criar um currículo atraente e otimizado, aumentando suas chances de se destacar nas vagas."
            },
            {
              question: "Quais benefícios terei ao utilizar os serviços de outplacement da Elevatte?",
              answer:
                "Facilitamos sua transição de carreira com análise de perfil, criação de currículos impactantes, preparo para entrevistas e acesso a uma rede de contatos. Nosso serviço de outplacement é personalizado para garantir uma recolocação rápida e eficiente."
            },
            {
              question: "Como funciona a mentoria de carreira oferecida pela Elevatte?",
              answer:
                "Nossa mentoria de carreira oferece um diagnóstico detalhado, um plano estratégico e suporte contínuo. Ajudamos você a desenvolver suas habilidades, definir objetivos claros e avançar em sua carreira com confiança."
            },
            {
              question: "A Elevatte oferece suporte para criar currículos em outros idiomas?",
              answer:
                "Sim! Nossa plataforma inclui um recurso de auto tradução que utiliza IA para traduzir seu currículo para diversos idiomas, garantindo que você tenha um CV bem escrito e otimizado, independente da língua do processo seletivo."
            }
          ]}
        />
      </div>
      <div id="blog">
        <Blog
          subheading="Blog"
          heading={<>Nós amamos <HighlightedText>Escrever</HighlightedText></>}
          posts = {[
            {
              postImageSrc:
                "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*mhW-IR7S3z9xkTWPHbY0cg.jpeg",
              authorImageSrc:
                "https://cdn-images-1.medium.com/fit/c/45/45/1*uVIx7_mUQBBlrhLcD2bMLA.png",
              title: "Growth de Carreira",
              description:
                "O objetivo deste método é empoderar as pessoas de suas carreiras. Ele foi desenvolvido pensando em como podemos ajudá-las a conquistar o…",
              authorName: "Jorge Mallet",
              authorProfile: "",
              url: "https://medium.com/elevatte/growth-de-carreira-b338b36c14e",
              featured: true
            },
            {
              postImageSrc:
                "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nvK_JaRMB9a_sBsSqHI0Gw.jpeg",
              title: "10 Dicas para montar um currículo atraente",
              authorName: "Camila Kilian",
              url: "https://medium.com/elevatte/10-dicas-para-criar-um-curr%C3%ADculo-atraente-7d1af3d980d8"
            },
            {
              postImageSrc:
                "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Cm2s5fBnU_BqOFDlNMuagQ.jpeg",
              title: "Algoritmo do Linkedin",
              authorName: "Jorge Mallet",
              url: "https://medium.com/elevatte/algoritmo-do-linkedin-36b768f3fa15"
            },
            {
              postImageSrc:
                "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*tRvQJJZTY_dDu4Se3v9VYg.jpeg",
              title: "A mente da pessoa que recruta",
              authorName: "Jorge Mallet",
              url: "https://medium.com/elevatte/a-mente-da-pessoa-que-recruta-4fcacfbdcd04"
            },
            {
              postImageSrc:
                "https://miro.medium.com/v2/resize:fit:720/format:webp/1*A50dVdRecZqUwDzGtF73Bg.jpeg",
              title: "COMO ESTÁ O SEU QUOCIENTE DE ADAPTABILIDADE (QA)?",
              authorName: "Camila Kilian",
              url: "https://medium.com/elevatte/como-est%C3%A1-o-seu-quociente-de-adaptablidade-qa-3851fa020f83"
            }
          ]}
        />
      </div>
      <DownloadApp
        text={<><HighlightedTextInverse>Eleve</HighlightedTextInverse>  seu valor Profissional agora!</>}
        subheading="Deixe a nossa IA transformar seu currículo. Juntos, podemos destacar suas habilidades e aumentar seu salário em até 40%."
        link1Text="Comece agora"
      />
      <Footer />
    </AnimationRevealPage>
  );
}
