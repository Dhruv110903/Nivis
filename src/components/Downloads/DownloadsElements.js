import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  padding-top:25px;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;


export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column; /* Stack links vertically */
  align-items: center; /* Center links horizontally */
  margin: 0 auto; /* Center the container itself */

  


  .link {
    color: #3986FA; /* Link color */
    text-decoration: none; /* Remove underline */
    font-size: 20px; /* Font size */
    font-weight:500;
    margin-bottom: 8px; /* Space between links */
    transition: color 0.3s, text-decoration 0.3s; /* Smooth transition for hover effects */
    text-align:center;

    &:hover {
      color: #42cce2; /* Hover color */
      text-decoration: underline; /* Underline on hover */
    }
  }
`;




export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  // margin-right: 24px;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;


export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
