import React from 'react'
import "./Team.css"
import team01 from '../../images/team-01.png'
import ScrollAnimation from 'react-animate-on-scroll'
import {
    ContactWrapper,
  } from "./TeamElements";


import {
  TeamWrapper,
  TeamItem,
  // TeamImg,
  TeamDetails,
  Name,
  Position,
  Bio
} from "./TeamElements";


const teamMembers = [

    {
        imgUrl: team01,
        name: 'CS Naveen Kumar Rastogi',
        position: 'Partner',
        bio:"Fellow Member of the Institute of Company Secretaries of India for more than 25 Years of experience. His extensive experience includes managing IPOs for various companies and advisory on legal and compliance matters under The Companies Act, 2013 for multiple corporate clients."
    },
    {
        imgUrl: team01,
        name: 'Richa Rastogi',
        position: 'Partner',
        bio: "Designated Partner and Compliance Officer at NIVIS Corpserve LLP. Richa is known for her leadership and team management skills to excel in her professional endeavours.                                                                                                                                                                                                                             "
    },

    {
        imgUrl: team01,
        name: 'Anil Khanna',
        position: 'Partner',
        bio:"He is a seasoned professional with over 35 years of extensive experience in data punching, processing, and management, particularly for IPO applications. He contributes to national service by providing data services to the Prime Minister's Relief Fund."
    }
]

const Team = () => {
    return (
        <>
    <ContactWrapper id="team">
      <div className="container">
        <div className="SectionTitle" style={{ textAlign: "center" ,paddingTop:"5rem" }}>Our Team</div>
        <div className="BigCard" style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          marginRight: '10%',
          marginLeft: '10%',
          borderRadius: '1rem',
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px",
        }}>
          <ScrollAnimation animateIn="fadeInLeft">
            <TeamWrapper>
              {teamMembers.map((item, index) => (
                <TeamItem key={index}>
                  {/* <TeamImg>
                   <img src={item.imgUrl} alt={item.name} />
                  </TeamImg> */}
                  <TeamDetails>
                    <Name>{item.name}</Name>
                    <Position>{item.position}</Position>
                    <Bio>{item.bio}</Bio>
                  </TeamDetails>
                </TeamItem>
              ))}
            </TeamWrapper>
          </ScrollAnimation>
        </div>
      </div>
    </ContactWrapper>
        </>
    )
}

export default Team