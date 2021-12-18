import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Link as sLink } from "react-scroll";

const LandingMain = styled.div`
  background-image: url(/bgimage2.jpg);
  width: 100%;
  height: 120vh;
  background-size: cover;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(203, 207, 207, 0.7) 80%
  );
  width: 100%;
  height: 100%;
`;

const HeroWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Bgwave = styled.img`
  display: block;
  width: 100%;
  height: 75%;
`;

const MainText = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-30%, -50%);

  @media screen and (max-width: 768px) {
    position: absolute;
    
    transform: translate(-20%, -30%);
  }
`;

const HeadingLine = styled.h1`
  font-size: 3rem;
  text-align: left;
  line-height: 1;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

const Landing = () => {
  return (
    <LandingMain>
      <Overlay></Overlay>
      <HeroWave>
        <Bgwave src={"/bgwave.svg"} />
      </HeroWave>
      <MainText>
        <h1 className="text-4xl sm:text-5xl font-semibold sm:font-bold ">
          We make your overseasdream into reality. The destination for Students,
          Office Workers or Family to make their overseas dream possible.
        </h1>
        <h3>
          Another example that is related to margin collapse is the child and
          parent. Let’s suppose the following:Another example that is related to
          margin collapse is the child and parent. Let’s suppose the following:
        </h3>
      </MainText>
    </LandingMain>
  );
};

export default Landing;
