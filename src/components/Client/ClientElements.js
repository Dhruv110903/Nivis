import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
padding-top:100px;
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

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

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


export const ClientWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const ClientCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const ClientImage = styled.img`
  max-height: 100px;
  max-width: 300px;
  width: auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  object-fit: contain;
`;
