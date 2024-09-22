import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';



function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  // const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
          <br/>
              <br/>
              <br/>
            {/* <ScrollAnimation animateIn="fadeIn" > */}
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Nivis Corpserve LLP',
                  () => setShowSubtitle(true)
                ]}
                // speed={{ type: "keyStrokeDelayInMs", value: 0 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    1,
                    'SEBI Registered',
                    1500,
                    'Share Transfer Agents',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    

                    100,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            {/* </ScrollAnimation> */}
              <br/>
              <br/>


          </HeroLeft>
          {/* <HeroRight> */}
            {/* hellow */}
            {/* <ScrollAnimation animateIn="fadeIn">
              <Images
                src="/blackbg.png"
                alt="man-svgrepo"
              />
            </ScrollAnimation> */}
          {/* </HeroRight> */}
        </HeroWrapper>
        {/* {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>} */}
      </HeroContainer>
    </main>
  );
}

export default Hero;
