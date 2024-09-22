import React from "react";
import styled from "@emotion/styled";
import { FaLinkedin,FaBuilding,FaMailBulk , FaPhoneAlt} from 'react-icons/fa';


const FooterSection = styled.footer`
background-image: url('/rectangle.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 4rem 0 2rem;
  color: #FFFFFF;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2rem;
`;


const FooterColumn = styled.div`
  flex: 1; /* Distributes space evenly */
  min-width: 200px; /* Ensures each column has a minimum width */
  margin-right: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;

  .p{
      margin-right: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  }

  @media (max-width: 768px) {
    flex: 100%; /* On smaller screens, each column will take full width */
    margin-right: 0;
  }
`;

const Logo = styled.img`
  width: 175px;
  margin-bottom: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.8rem;
  font-weight:400;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    text-decoration: underline;
    color:red;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    color: #ddd;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  width: 100%;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ContactIcon = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const ContactText = styled.span`
  max-width: 100%; 
  word-wrap: break-word; 
  white-space: normal;
`;

function Footer() {
  return (
    <FooterSection>
    <FooterContent>
      <FooterColumn>
        <Logo src="/blackbg.png" alt="Company Logo" />
        <SocialIcons>
        <SocialIcon href="https://www.linkedin.com/company/nivis-corpserve-llp/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          {/* <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon> */}
   
          {/* <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon> */}
        </SocialIcons>
      </FooterColumn>
      
      <FooterColumn>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterLink href="https://www.bseindia.com/" target="_blank">Bombay Stock Exchange</FooterLink>
        <FooterLink href="https://www.nseindia.com/" target="_blank">National Stock Exchange</FooterLink>
        <FooterLink href="https://www.sebi.gov.in/" target="_blank">Securities Exchange Board of India</FooterLink>
        <FooterLink href="https://www.bsesme.com/" target="_blank">BSE SME</FooterLink>
        <FooterLink href="https://www.nseindia.com/market-data/sme-market" target="_blank">NSE SME</FooterLink>
      </FooterColumn>
      
      <FooterColumn>
        <FooterTitle>Contact Us</FooterTitle>
        <ContactInfo>
          <ContactIcon><FaBuilding /></ContactIcon>
          <ContactText>03 Shankar Vihar 2nd Floor, Main Vikas Marg Opposite Metro Pillar No 74Delhi-110092</ContactText>
        </ContactInfo>
        <ContactInfo>
          <ContactIcon><FaMailBulk /></ContactIcon>
          <ContactText>info@nivis.co.in</ContactText>
        </ContactInfo>
        <ContactInfo>
          <ContactIcon><FaPhoneAlt /></ContactIcon>
          <ContactText>011-45201005</ContactText>
        </ContactInfo>
      </FooterColumn>
    </FooterContent>
    
    <Copyright>
      © {new Date().getFullYear()} Nivis LLP. All rights reserved.
    </Copyright>
  </FooterSection>
  );
}

export default Footer;