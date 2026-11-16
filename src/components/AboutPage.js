import React, { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { motion } from "framer-motion";

import { DarkTheme, mediaMax } from "./Themes";

import astronaut from "../assets/Images/s-man-3-removebg-preview.png";
import SoundBar from "../subComponent/SoundBar";
import Loading from "../subComponent/Loading";

const HomeButton = lazy(() => import("../subComponent/HomeButton"));
const LogoComponent = lazy(() => import("../subComponent/LogoComponent"));
const SocialIcons = lazy(() => import("../subComponent/SocialIcons"));
const ParticalComponent = lazy(
  () => import("../subComponent/ParticalComponent"),
);
const BigTitles = lazy(() => import("../subComponent/BigTitles"));

const MainContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  position: relative;
`;

const About = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  height: 68vh;
  min-height: 0;
  box-sizing: border-box;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;


  ${mediaMax(50)`
    width: 50vw;
    height: 55vh;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
  `};

  ${mediaMax(40)`
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `};

  ${mediaMax(30)`
    width: 60vw;
    height: 75vh;
    max-height: 75vh;
    backdrop-filter: blur(1.5px);
    margin-top: 2rem;
  `};

  ${mediaMax(20)`
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  `};
`;

const float = keyframes`
  0%{
    transform: translateY(-10px);
  }
  50%{
    transform: translateY(15px) translateX(15px);
  }
  100%{
    transform: translateY(-10px);
  }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 30vw;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
  }

  ${mediaMax(50)`
      z-index: 5;
    `}
`;

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
  exit: { opacity: 0, transition: { duration: 1, delay: 0.2 } },
};

export default function AboutPage() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Suspense fallback={<Loading />}>
          <MainContainer
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ParticalComponent theme="dark" /> {/* star partical component */}
            <HomeButton />
            <LogoComponent theme="dark" />
            <SocialIcons theme="dark" />
            <SoundBar />
            <SpaceMan
              initial={{ right: "-20%", top: "100%" }}
              animate={{
                right: "5%",
                top: "10%",
                transition: { duration: 2, delay: 0.5 },
              }}
            >
              <motion.img src={astronaut} alt="space=man" />
            </SpaceMan>
            <About
              className="About"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.2 }}
            >
              I'm an Associate Software Developer from India with 1 year and 3
              months of professional experience at Powersoft Techno Solutions,
              Coimbatore. I specialize in building responsive, user-friendly web
              applications using React.js, JavaScript, HTML, CSS, and Bootstrap.
              <br />
              <br />
              I have hands-on experience with state management and data fetching
              using Redux Toolkit, Zustand, and React Query, along with styling
              tools like Tailwind CSS. I also have working knowledge of backend
              technologies such as Node.js, Express.js, NestJS, MongoDB, and
              MySQL.
              <br />
              <br />I have worked on various projects, including e-commerce
              applications, content management systems (CMS), password managers,
              and file management systems. I enjoy learning new technologies,
              improving my development skills, and building practical solutions
              that deliver a great user experience. Connect with me through my
              social links!
            </About>
            <BigTitles text="ABOUT" top="3.5%" right="15%" />
          </MainContainer>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
