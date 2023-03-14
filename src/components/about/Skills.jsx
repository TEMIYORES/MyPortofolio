import React from "react";
import "./skills.css";

const frontendSkills = [
  {
    title: "Javascript",
    percentage: "100%",
  },
  {
    title: "React.js",
    percentage: "100%",
  },
  {
    title: "Html | Css",
    percentage: "100%",
  },
  {
    title: "WordPress",
    percentage: "100%",
  },
  {
    title: "Elementor",
    percentage: "100%",
  },
];

const backendSkills = [
  {
    title: "NodeJs | ExpressJs",
    percentage: "80%",
  },
  {
    title: "MongoDB",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="frontend_skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="backend_skills w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill_data mb-3">
      <div className="skill_title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>

      <div className="skill_bar">
        <span
          className="skill_bar-percentage "
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
