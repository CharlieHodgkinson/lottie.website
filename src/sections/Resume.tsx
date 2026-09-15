import { useState } from "react";
import { Typography } from "antd";

type ResumeRecord = {
  date: string;
  role: string;
  company: string;
  description: string;
  bullets?: string[];
};

const records: ResumeRecord[] = [
  {
    date: "2022-present",
    role: "Fullstack Software Engineer",
    company: "Wealth Wizards",
    description: "Developed SaaS applications using a micro-frontend architecture with a mobile-first approach, ensuring compliance with WCAG AA accessibility standards. Built applications delivering automated financial advice in a highly regulated environment.",
    bullets: [
      "Built 10+ SaaS applications using AWS, TypeScript and React with a mobile-first focus.",
      "Led the development of a Pension Contributions Tool now live with 3 clients and 8,000+ unique users.",
      "Developed sophisticated APIs for complex mathematical operations using functional programming.",
      "Worked in an NX monorepo with 30+ apps and libraries using GitLab CI/CD.",
    ],
  },
  {
    date: "2021-2022",
    role: "DevOps Engineer",
    company: "RS Components",
    description: "Supported engineering teams with security best practices and tools to improve CI/CD processes and secure deployments.",
    bullets: [
      "Developed and maintained GitLab CI/CD pipeline templates.",
      "Managed Docker containers orchestrated via Nomad.",
      "Triaged and remediated security incidents and vulnerabilities.",
    ],
  },
  {
    date: "2019-2021",
    role: "Software Developer",
    company: "RS Components",
    description: "Developed APIs and backend microservices using GraphQL and Node.js for product data transactions and warehouse data management.",
    bullets: [
      "Designed scalable serverless APIs for migrating master product data to the cloud.",
      "Helped migrate services from a legacy monolith to a serverless architecture.",
    ],
  },
  {
    date: "2018-2019",
    role: "Computer Science Level 3 BTEC",
    company: "Tresham College",
    description: "Studied algorithms, data structures and programming paradigms alongside low-level fundamentals such as binary and logic gates.",
  },
  {
    date: "Education",
    role: "Software Development Foundation Degree",
    company: "Ada. National College for Digital Skills",
    description: "Studied cloud architecture, machine learning, data structures and algorithms using JavaScript, C++ and Python3.",
  },
  {
    date: "Apprenticeship",
    role: "Software Developer Level 4",
    company: "British Computer Society",
    description: "Completed alongside work at RS Components and the foundation degree.",
  },
];

export const Resume = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = records[selectedIndex];

  return (
    <div className="resume-explorer">
      <div className="resume-actions">
        <span>{records.length} objects</span>
        <span className="resume-sort">Name &nbsp; | &nbsp; Date modified &nbsp; | &nbsp; Type</span>
        <a className="resume-download" href="cv.pdf" download="charlotte_hodgkinson_cv.pdf">Download CV</a>
      </div>
      <div className="resume-browser">
        <section className="resume-record-list" aria-label="Career records">
          <div className="resume-list-head"><span>DATE</span><span>NAME</span><span>TYPE</span></div>
          {records.map((record, index) => (
            <button className={`resume-record ${selectedIndex === index ? "is-selected" : ""}`} onClick={() => setSelectedIndex(index)} key={`${record.date}-${record.role}`}>
              <span>{record.date}</span>
              <span><b>{record.role}</b><small>{record.company}</small></span>
              <span>{record.date === "Education" || record.date === "Apprenticeship" ? "EDU" : "WORK"}</span>
            </button>
          ))}
        </section>
        <article className="resume-details">
          <div className="resume-details-bar"><span>PREVIEW</span><span>{selected.role.toUpperCase()}</span></div>
          <div className="resume-details-body">
            <Typography.Title level={2}>{selected.role}</Typography.Title>
            <div className="resume-meta"><span>{selected.company}</span><span>{selected.date}</span></div>
            <p>{selected.description}</p>
            {selected.bullets && <ul>{selected.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </div>
        </article>
      </div>
    </div>
  );
};
