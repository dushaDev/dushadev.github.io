import { useEffect, useState } from "react";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import * as React from "react";

export default function VerticalTimelineCustom({ icon, category, skills }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        color: "var(--secondary)",
        boxShadow: "none",
        padding: "0 0 0 30px",
      }}
      contentArrowStyle={{ borderRight: "8px solid var(--primary)" }}
      iconStyle={{ background: "var(--primary)", color: "var(--secondary)", boxShadow: "none",}}
      icon={icon}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-secondary font-bold text-xl mb-10 ">
          {category}
        </div>
        <div className="flex items-end justify-end gap-5">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={skill.icon}
                alt={skill.altText}
                width={60}
                height={60}
              />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
