import React from "react";
// import { stackList } from "../../data/ProjectData";
import {
  // Image,
  // Technologies,
  // Tech,
  // TechImg,
  // TechName,
  ContactWrapper,
  NavBtn
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="ContainerAbout">
        <div className="SectionTitle"  style={{ textAlign:"center" }}>About us</div>
        <div className="BigCardAbout">
        <ScrollAnimation animateIn="fadeInLeft">
          {/* <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          /> */}
        </ScrollAnimation>
          <div className="AboutBio" >            
            <ScrollAnimation animateIn="fadeInLeft">
            NIVIS CORPSERVE LLP is recognised as category II registrar to an issue and share transfer agent by Securities Exchange Board of India (SEBI) Vide registration number INR000004264 which is managed by seasoned senior management and expert partners. Key management at NIVIS provides the organisation with qualities that allow it to assist both current and potential clients in achieving the organisation's goal and mission. Our work ethics are based on our dedication to deadlines and timely service delivery. Modern technology at NIVIS is geared towards providing high-quality and value-added services.
            <ScrollAnimation animateIn="fadeInLeft">
            <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://firebasestorage.googleapis.com/v0/b/nivisrta.appspot.com/o/Brochure%2FBrochure%20Nivis.pdf?alt=media&token=53411b85-bd27-433d-a377-9761fa119975"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brochure
          </a>
        </NavBtn>


            </ScrollAnimation>
            </ScrollAnimation>
            <br />


            {/* <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies> */}
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
