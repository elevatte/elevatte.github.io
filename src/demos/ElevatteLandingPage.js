import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
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
    <AnimationRevealPage disabled>
      <div id="home">
        <Hero
          heading='Eleve seu valor e conquiste seu aumento salarial'
          description='Seja destaque nos processos seletivos com nossas ferramentas avançadas para criar currículo e preparação para entrevistas. Crie sua conta e comece agora mesmo!'
          subHeading='Assistente de IA para crescimento profissional'
          imageSrc={heroImage}
          primaryButtonUrl = "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849007280c01902c06b5ef09b0"
          primaryButtonText = "Começar"
        />
      </div>
      <FeatureStats/>
      <div id="features">
        <BackgroundRightContainer style={{ backgroundImage: `url(${bgRight})`, backgroundRepeat: 'no-repeat' }}>
          <MainFeature
            subheading=''
            imageSrc={imageFirstFeature}
            heading={<>Crie seu CV com Rapidez e Precisão</>}
            description='Diga adeus aos erros básicos e à dificuldade de escrever seu currículo. Nossa IA especializada faz todo o trabalho pesado para você, garantindo uma escrita impecável e um CV atrativo, perfeito para qualquer processo seletivo.'
            features={[]}
            onButton={false}
          />
        </BackgroundRightContainer>
        <BackgroundWaveContainer style={{ backgroundImage: `url(${bgWave})`, backgroundRepeat: 'no-repeat' }}>
          <MainFeature
            textOnLeft={false}
            subheading=''
            imageSrc={imageSecondFeature}
            heading={<>Destacar-se Nunca foi Tão Fácil</>}
            description='Seja um dos primeiros a ser notado nos processos seletivos com nosso CV otimizado e de design atraente. Nossa plataforma destaca suas habilidades, experiências e conquistas, corrigindo qualquer erro e tornando você irresistível aos olhos dos recrutadores.'
            features={[]}
            onButton={false}
          />
        </BackgroundWaveContainer>
        <BackgroundRightContainer style={{ backgroundImage: `url(${bgRight})`, backgroundRepeat: 'no-repeat' }}>
          <MainFeature
            subheading=''
            imageSrc={imageThirdFeature}
            heading={<>Traduza seu CV para Vários Idiomas sem Esforço</>}
            description='Elimine a barreira do idioma com nossa funcionalidade de tradução automática. Nossa IA não só traduz, mas também ajusta seu currículo para que ele seja atrativo em qualquer língua, sem erros e com uma escrita impecável.'
            features={[]}
            onButton={false}
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
              url: "https://web.whatsapp.com/send?phone=5548988570948&text=Quero%20saber%20mais%20sobre%20Outplacement"
            },
            {
              imageSrc: headHunterImage,
              title: "Headhunter",
              description: "Recrutamos talentos de alto nível para posições-chave, com total discrição. Apresentamos profissionais qualificados que impulsionam o crescimento da sua organização.",
              url: "https://web.whatsapp.com/send?phone=5548988570948&text=Quero%20saber%20mais%20sobre%20Headhunter"
            },
            {
              imageSrc: mentoriaDeCarreiraImage,
              title: "Mentoria de Carreira",
              description: "Desenvolva sua carreira com diagnóstico, plano estratégico e mentoria contínua. Avance e alcance seus objetivos com nosso suporte.",
              url: "https://web.whatsapp.com/send?phone=5548988570948&text=Quero%20saber%20mais%20sobre%20Mentoria%20de%20Carreira"
            },
            {
              imageSrc: treinamentosEPalestrasImage,
              title: "Treinamentos e Palestras",
              description: "Capacitamos sua equipe em gestão, desenvolvimento e inovação. Workshops práticos para enfrentar desafios e alcançar resultados excepcionais.",
              url: "https://web.whatsapp.com/send?phone=5548988570948&text=Quero%20saber%20mais%20sobre%20Treinamentos%20e%20Palestras"
            },
            {
              imageSrc: aperfeicoamentoImage,
              title: "Aperfeiçoamento Personalizado",
              description: "Receba feedback detalhado e recomendações baseadas nas tendências de mercado para aprimorar suas habilidades e se destacar profissionalmente.",
              url: "https://web.whatsapp.com/send?phone=5548988570948&text=Quero%20saber%20mais%20sobre%20Aperfeiçoamento%20Personalizado"
            },
            {
              imageSrc: apresentacaoPessoalImage,
              title: "Otimização da Apresentação Pessoal",
              description: "Aprimore sua apresentação pessoal com orientações claras e práticas, destacando suas competências e conquistas de forma impactante.",
              url: "https://web.whatsapp.com/send?phone=5548988570948&text=Quero%20saber%20mais%20sobre%20Otimiza%C3%A7%C3%A3o%20da%20Apresenta%C3%A7%C3%A3o%20Pessoal"
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
              "Comecei na programação perdido tanto na área quanto na carreira. Não encontrava orientação clara até conhecer a Elevatte. Em poucas reuniões, eles me ensinaram a me posicionar, planejar e usar ferramentas como LinkedIn e networking. Recebi propostas de emprego rapidamente e eles me ajudaram a escolher as melhores. Foi uma experiência crucial para minha entrada no mercado.",
            customerName: "Thiago Barbosa",
            customerProfile: "Software Engineer – Softensity Inc – USA"
          },
          {
            imageSrc: testimonial2,
            quote:
              "Após dez anos sem atualizar meu CV, precisei de uma nova oportunidade. Pensava que era só atualizar o LinkedIn e enviar e-mails com o CV em anexo, mas hoje isso exige uma estratégia de Growth e SEO. A Elevatte me ajudou com um método eficaz, resultando em sucesso. Agradeço muito a eles.",
            customerName: "Cesar Barone",
            customerProfile: "Software Engineer Manager – Nutrisense – USA"
          },
          {
            imageSrc: testimonial3,
            quote:
              "O Growth de Carreira com a Elevatte é rápido e transformador. Em uma sessão, revi conceitos que mudaram minha carreira. Entendi meu potencial e passei de especialista a gerente sênior, podendo escolher a empresa onde queria trabalhar. Eles me ajudaram a reconhecer meu valor e diferencial.",
            customerName: "Daniella Borges",
            customerProfile: "Professora ESPM – Sócia na Agência Onda Live Marketing"
          },
          {
            imageSrc: testimonial4,
            quote:
              "Em transição de carreira, senti que precisava de mais orientação. Iniciei meu projeto de growth com a Elevatte, e cada reunião tem sido reveladora. O autoconhecimento, construção de marca profissional, e direcionamento nas mídias sociais estão me capacitando. Obrigado, Elevatte, pelo apoio. Esta jornada tem sido incrível.",
            customerName: "Diego Rodriguez",
            customerProfile: "Gerente comercial – Rappi"
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
        link1Url="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849007280c01902c06b5ef09b0"
      />
      <Footer />
    </AnimationRevealPage>
  );
}
