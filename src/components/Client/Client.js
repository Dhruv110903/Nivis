import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ClientCard, ClientImage } from './ClientElements';
import {
  ContactWrapper,
} from "./ClientElements";

const images = [
  '/clientsimages/apl_logo_white_bg.png', 
  '/clientsimages/bhartiya.jpg', 
  '/clientsimages/Drishtee.png', 
  '/clientsimages/GoodluckDefense.png', 
  '/clientsimages/harton_logo.png', 
  '/clientsimages/JindalGroup.png', 
  '/clientsimages/paperfinal.png', 
  '/clientsimages/sael-logo.svg', 
  '/clientsimages/SunSourcelogo.svg',  
  '/clientsimages/UFLEX.png',  
  '/clientsimages/Uttam_Sugar.png', 
  '/clientsimages/mind.png',
  '/clientsimages/jalan.png'
  
];

const Client = () => {
  return (

      <ContactWrapper id="client">
         {/* <div className="Container"> */}
         <div className="SectionTitle"  style={{ textAlign:"center" }}>Our Clients</div>
         <div className="BigCard" style={{ marginLeft: "10%", marginRight: "10%" }}>
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={600}
        centerMode={true}
        centerSlidePercentage={30}
        showIndicators={false}
      >
        {images.map((URL, index) => (
          <ClientCard key={index}>
            <ClientImage alt="Client_logo" src={URL} />
          </ClientCard>
        ))}
      </Carousel>
      </div>
      {/* </div> */}
      </ContactWrapper>

  );
};

export default Client;