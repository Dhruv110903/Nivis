import React from "react";
import { ServiceList } from "../../../data/ServiceData";
import {
  Card,
  CardLeft,
  CardRight,
} from "./ServiceCardElements";
// import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
  return (
    <>
      {ServiceList.map((list, index) => (
        // <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
            </CardRight>
          </Card>
        // </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
