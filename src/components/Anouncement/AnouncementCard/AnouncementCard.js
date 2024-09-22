// import React from "react";
// import { AnouncementList } from "../../../data/AnouncementData";
// import {
//   Card,
//   CardLeft,
//   CardRight,
//   // TechCardContainer,
//   // TechCard,
//   BtnGroup,
// } from "./AnouncementCardElements";
// import ScrollAnimation from "react-animate-on-scroll";
// function AnouncementCard() {
//   return (
//     <>
//       {AnouncementList.map((list, index) => (
//         <ScrollAnimation animateIn="fadeInLeft" key={index}>
//           <Card>
//             <CardLeft>
//               {/* <img src={list.img} alt={list.name} /> */}
//             </CardLeft>
//             <CardRight>
//               <h4>{list.title}</h4>
//               <p>{list.description}</p>
//               {/* <TechCardContainer>
//                 {list.tech_stack.map((tech, index) => (
//                   <TechCard key={index}>{tech}</TechCard>
//                 ))}
//               </TechCardContainer> */}
//               <BtnGroup>
//                 {/* {list.github_url.length > 0 && (
//                   // <a
//                   //   className="btn SecondaryBtn btn-shadow"
//                   //   href={list.github_url}
//                   //   target="_blank"
//                   //   rel="noopener noreferrer"
//                   // >
//                   //   Github
//                   // </a>
//                 )
//                 } */}
//                 {list.demo_url.length > 0 && (
//                   <a
//                     className="btn PrimaryBtn btn-shadow"
//                     href={list.demo_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Read More ➜
//                   </a>
//                 )}
//               </BtnGroup>
//             </CardRight>
//           </Card>
//         </ScrollAnimation>
//       ))}
//     </>
//   );
// }

// export default AnouncementCard;
import React, { useState, useEffect } from "react";
import {
  Card,
  CardLeft,
  CardRight,
  BtnGroup,
} from "./AnouncementCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function AnouncementCard() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function fetchAnnouncements() {
      const csvUrl = 'https://docs.google.com/spreadsheets/d/1Sa0rFXHgpxOXIpqRKggeAoYlxOPHwPi02Iu_-v1BdXc/pub?gid=0&single=true&output=csv'; // Replace with your published CSV URL

      try {
        const response = await fetch(csvUrl);
        const data = await response.text();

        const rows = data.split('\n').filter(row => row.trim() !== '');
        const fetchedAnnouncements = rows.slice(1).map(row => {
          const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); // Split by commas not inside quotes
          return {
            title: columns[0].replace(/"/g, ''), // Remove surrounding quotes
            description: columns.slice(1, columns.length - 1).join(',').replace(/"/g, ''),
            demo_url: columns[columns.length - 1].replace(/"/g, ''),
          };
        });

        setAnnouncements(fetchedAnnouncements);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    }

    fetchAnnouncements();
  }, []);

  return (
    <>
      {announcements.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              {/* <img src={list.img} alt={list.name} /> */}
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <BtnGroup>
                {list.demo_url && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default AnouncementCard;
