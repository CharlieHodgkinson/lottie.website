import { Flex, Timeline, Typography } from "antd";
import { FaStar, FaRegStar } from "react-icons/fa6";

export const Resume = () => {
  return (
    <Flex justify="center" vertical style={{ flexGrow: 1 }} gap={50}>
      <Flex align="center" justify="center">
        <div style={{ width: "max-content" }}>
          <Typography.Title
            level={2}
            style={{
              backgroundColor: "#a545d1",
              color: "white",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            resume
          </Typography.Title>
        </div>
      </Flex>
      <div style={{ maxWidth: "500px" }}>
        <Timeline mode={"left"} items={resumeItems} />
      </div>
    </Flex>
  );
};

const Item = ({
  bullets,
  role,
  company,
  description,
}: {
  bullets?: string[];
  role: string;
  company: string;
  description: string;
}) => {
  return (
    <div style={{ width: "400%", paddingBottom: "20px" }}>
      <Typography.Title level={3} style={{ marginTop: 0 }}>
        {role} <span className="purple">@ {company}</span>
      </Typography.Title>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      {bullets && (
        <ul>
          {bullets.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const resumeItems = [
  {
    label: <Typography.Paragraph>2022-present</Typography.Paragraph>,
    dot: <FaRegStar color="#c770f0" size={20} />,
    children: (
      <Item
        role={"Fullstack Software Engineer"}
        company="Wealth Wizards"
        description="Developed SaaS applications using a micro-frontend architecture with a mobile-first approach, ensuring compliance with WCAG AA accessibility standards. Built and maintained applications that deliver automated financial advice to consumers and enhance the efficiency of financial advisers in a highly regulated financial environment. Designed and implemented sophisticated APIs for complex mathematical operations, leveraging advanced functional programming concepts."
        bullets={[
          "Built 10+ different SAAS applications using AWS, Typescript and React with a focus on mobile first design.",
          "Lead the development of a Pension Contributions Tool which is live with 3 clients and has had over 8000 unique users.",
          "Supported the development of a Pension Guidance Tool which in 6 months had over 65 pot consolidations with £1,354,190.62 transferred",
          "Integrated applications into the live websites of several different clients with authentication using AWS Cognito,  and provided ongoing maintenance and support.",
          "Developed in a monorepo environment using NX with over 30 different apps and libraries using GitLab CI/CD pipelines for automated testing and deployment.",
          "Collaborated in building a design system using emotion, storybook and chromatic with atomic components and customisable themes for each client.",
        ]}
      />
    ),
  },
  {
    label: <Typography.Paragraph>2021-2022</Typography.Paragraph>,
    dot: <FaStar color="#c770f0" size={20} />,
    children: (
      <Item
        role={"DevOps Engineer"}
        company="RS Components"
        description="Supported Engineering teams in implementing security best practices and provided tools to enhance CI/CD processes, ensuring efficient and secure deployments"
        bullets={[
          "Developed and maintained GitLab CI/CD pipeline templates and provided technical guidance and support to teams in integrating and optimizing CI/CD workflows.",
          "Managed docker containers orchestrated via Nomad used for deployments across engineering teams.",
          "Triaged and remediated security incidents and other vulnerabilities.",
        ]}
      />
    ),
  },
  {
    label: <Typography.Paragraph>2019-2021</Typography.Paragraph>,
    dot: <FaStar color="#c770f0" size={20} />,
    children: (
      <Item
        role={"Software Developer"}
        company="RS Components"
        description="Developed API's and other backend microservices using GraphQL and NodeJS to service product data transactions and warehouse data management."
        bullets={[
          "Designed and built scalable, serverless APIs to facilitate the migration of master product data to the cloud.",
          "Assisted in migrating services from a legacy monolith to a serverless cloud architecture.",
        ]}
      />
    ),
  },
  {
    dot: <FaStar color="#c770f0" size={20} />,
    children: (
      <Item
        role={"Software Development Foundation Degree"}
        company="Ada. National College for Digital Skills"
        description="Studied cloud architecture, machine learning, data structures and algorithms using javascript, C++ and Python3."
      />
    ),
  },
  {
    dot: <FaStar color="#c770f0" size={20} />,
    children: (
      <Item
        role={"Software Developer Lvl4 Apprenticeship"}
        company="British Computer Society"
        description="Completed alongside work at RS Components and with the foundation degree."
      />
    ),
  },
  {
    label: <Typography.Paragraph>2018-2019</Typography.Paragraph>,
    dot: <FaStar color="#c770f0" size={20} />,
    children: (
      <Item
        role={"Computer Science Lvl3 BTEC"}
        company="Tresham College"
        description="Studied algorithms, data structures and programming paradigms as well as low level fundamentals such as binary and logic gates."
      />
    ),
  },
];
