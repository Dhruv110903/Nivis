import React from "react";
import {
  ContactWrapper,
  NavBtn,Links
} from "./DownloadsElements";
import ScrollAnimation from "react-animate-on-scroll";
function Downloads() {
  return (
    <ContactWrapper id="downloads">
      <div className="Container">
        <div className="SectionTitle"  style={{ textAlign:"center" }}>Download Section</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">

            {/* <NavBtn>
          <a
            className="PrimaryBtn"
            href="https://www.sebi.gov.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brochure
          </a>
        </NavBtn> */}


  <Links>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/15NCdUSeh71bjfkR-hybkVDIRdv6gSm9n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transmission of Shares
          </a>
<br/>
          <a
            className="link"
            href=" https://drive.google.com/drive/folders/1t4lNKSRJSLel73w9yJ8kxi9_K0udANLN?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            KYC - ISR Forms

          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1GVhmFjJEiIYG6E2BNheAjZxBL_vsR21v?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issuance of Duplicate Securities Certificates 
          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1EqFfSQVhPfzPcnWMz3K9xtijCUJLaj0_?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
         Transmission of Securities 
          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1YRDPdNKfabw4eQ3wFAdOssEnu2AHBeqF?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transposition of Shares
          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1NPq35IBqaP1dUXbfK5bNwKuqL7ImexS4?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deletion of Name 
          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1LxvzC8g3EKLRW0jCtyaZjN0cgQw0Awal?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nomination of Securities
          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1fWd5Yh0dXTdohiME4SQWhiF9k8y6T3yI"
            target="_blank"
            rel="noopener noreferrer"
          >
           ISIN Documents
          </a>
          <br/>
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1IteVy-tCyh1Q2UOUbskyFy9kxkIO6Edw?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
           DP Indemnity
          </a>
          <br/>
          <a
            className="link"
            href="https://firebasestorage.googleapis.com/v0/b/nivisrta.appspot.com/o/Downloads%2FNIVIS%20SEBI%20Registration%20Certificate.pdf?alt=media&token=4fe17fe9-baf8-4963-84a2-a5976e1d614f"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIVIS SEBI Registration Certificate
          </a>
          <br/>
          {/* <a
            className="link"
            href="https://www.sebi.gov.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            link 10
          </a> */}
          </Links>
        </ScrollAnimation>
          </div>
        </div>

    </ContactWrapper>
  );
}

export default Downloads;
