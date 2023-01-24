import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styled from "styled-components";

const CardHead = styled.h3`
  margin-bottom: 5px;
`;

const CardSubHead = styled.h4`
  margin-bottom: 10px;
  color: #131010;
  font-weight: 600;
`;

const CardDetailText = styled.li`
  color: #141313;
  margin: 5px;
`;

const Responsibilities = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  letter-spacing: 0.2ch;
`;

function ChronoTimeline({ currentTheme }) {
  const items = [
    {
      title: " Nov 2021 - Present",
      // cardSubtitle: "Full Stack Web Development",
      cardTitle: "Full Stack Web Development",
      cardDetailedText: ["Masai full stack web development course ."],
    },
    {
      title: " July 2019 - Sep 2021",
      cardSubtitle: "CSJM University",
      cardTitle: "Bachelor of Science (Non-Technical)",
      cardDetailedText: [
        "Computer Science Engineering (CSE) is an engineering discipline that covers several topics related to computation, programming languages, program design, computer hardware and software and integrates several fields of computer science.",
      ],
    },
   
    {
      title: " Mar 2018 - Apr 2019",
      cardSubtitle: "SGS inter college",
      cardTitle: "SGS inter college",
      cardDetailedText: [
        "An intermediate course of two years duration, conducted by state education institutions or boards in India.",
      ],
    },
  ];

  return (
    <VerticalTimeline animate={false} position="left">
      {items?.map((history) => (
        <EducationTimelineCard
          key={history.school}
          currentTheme={currentTheme}
          {...history}
        />
      ))}
    </VerticalTimeline>
  );
}

function EducationTimelineCard({
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  internship,
  currentTheme,
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        textAlign: "left",
        background: "#ffffff",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
      date={title}
      iconStyle={{
        background: `${currentTheme === "light" ? "#FEC107" : "#C50E6A"}`,
        color: "#1a1111",
        transform: "scale(0.4)",
      }}
    >
      <CardHead
        style={{ color: "#000000" }}
        className="vertical-timeline-element-title"
      >
        {cardTitle}
      </CardHead>
      <CardSubHead
        style={{ color: "#393e46" }}
        className="vertical-timeline-element-subtitle"
      >
        {cardSubtitle}
      </CardSubHead>
      {internship && (
        <Responsibilities>
          <b>Responsibilities</b>
        </Responsibilities>
      )}

      <ul>
        {cardDetailedText.map((item) => (
          <CardDetailText key={item.title}>{item}</CardDetailText>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export { ChronoTimeline };
