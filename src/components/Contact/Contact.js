import React, { useRef, useState } from "react";
import { ContactWrapper } from "./ContactElements";
// import {  Email } from "./ContactElements";
// import { MdContentCopy } from "react-icons/md";
// import { IconButton, Tooltip } from "@mui/material";
// import Zoom from '@mui/material/Zoom';
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { Map, Marker, Overlay } from 'pigeon-maps';


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 672px) {
    padding-bottom:80px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  min-width: 200px;
  @media (max-width: 782px) {
      padding-right:1%;
  }
`;

const MapSection = styled.div`
  flex: 1;
  min-width: 300px;
  max-height: 400px;
  padding-top: 200px;
  padding-bottom: 103px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 782px) {
    padding-right:1%;
  }

  @media (max-width: 427px) {
    padding-right:2%;
  }

  @media (max-width: 401px) {
    padding-right:8%;
  }

  @media (max-width: 379px) {
    padding-right:17%;
  }
  @media (max-width: 355px) {
    padding-right:35%;
  }
`;

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 20vh;
//   padding: 20px;
//   box-sizing: border-box;
// `;

// const Rightcentered = styled.div`
//   display: flex;
//   justify-content: right;
//   align-items: center;
//   min-height: 20vh;
//   padding: 20px;
//   box-sizing: border-box;
// `;




const ContactForm = styled.form`
  width: 100%;
  max-width: 100%; // Changed from 600px to 100%
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactInput = styled.input`
  width: 100%; // Changed from 350px to 100%
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%; // Added to ensure full width
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  height: 150px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

// ... (rest of the code remains the same)

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background-color: rgb(57, 134, 250);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color:white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgb(57, 134, 250);
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 60%, 1) 0%,
      hsla(294, 100%, 60%, 1) 100%
    );
  }
`;

// const center = [28.6385466, 77.2896466]; // Replace with your actual latitude and longitude
const MyMap = () => {
  const center = [28.6385466, 77.2896466]; // Replace with your coordinates
  const link = "https://maps.app.goo.gl/Cnv8xNCnKGGvQMqVA"; // Replace with your link
  const [hover, setHover] = useState(false); // State to track hover

  const handleMarkerClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Map defaultCenter={center} defaultZoom={17} height={438}>
      <Marker 
        width={70} 
        anchor={center} 
        color="red" // Set the marker color to red
        onClick={handleMarkerClick} // Handle click event
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
       {hover && (
        <Overlay 
          anchor={center} 
          offset={[205,120]} // Positioning the overlay correctly
        >
          <div style={{
            padding: '5px', 
            backgroundColor: 'white', 
            borderRadius: '5px', 
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
          }}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue',fontSize:'20px',textAlign:'left' }}>
            03 Shankar Vihar, Main Vikas Marg, Delhi
            </a>
          </div>
        </Overlay>
      )}
    </Map>
  );
};

function Contact() {
  // const [showTooltip, setShowTooltip] = useState(false);
  const form = useRef();

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText("info@nivis.com");
  //   setShowTooltip(true);
  //   setTimeout(() => {
  //     setShowTooltip(false);
  //   }, 700);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current['from_email'].value.trim();
    const name = form.current['from_name'].value.trim();
    const subject = form.current['subject'].value.trim();

    if (!email || !name || !subject) {
      toast.error('Fields cannot be empty!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // emailjs.sendForm('service_sv7zkoo', 'template_iqysfbc', form.current, 'z6L-Y5_P_xTjk77-J')
    // .then((result) => {

    // service name -smtp, default template id, forml.current, account->public key

    emailjs.sendForm('service_m2drjta', 'template_txaccpo', form.current, 'ggHA_X7h_U5Ecqk1L')
      .then((result) => {
        form.current.reset();
        toast.success('Email Sent Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Something went wrong!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <ContactWrapper id="contact">
<div
  className="Container"
  style={{
    background: "#fff",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",
    borderRadius: "1rem",
  }}
>
        <div className="SectionTitle" style={{ textAlign:"center"}} >Contact Us</div>
        {/* <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>info@nivis.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:info@nivis.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
        </ScrollAnimation> */}
   {/* <CenteredContainer> */}
   <FlexContainer >
    <FormSection>
        <ScrollAnimation animateIn="fadeIn">
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </ScrollAnimation>
        </FormSection>
        <MapSection>
        <MyMap />
        </MapSection>

        </FlexContainer>
        {/* </CenteredContainer> */}
        {/* <Rightcentered>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        </Rightcentered> */}
      </div>
      <br/>
      <ToastContainer />

    </ContactWrapper>
  );
}

export default Contact;