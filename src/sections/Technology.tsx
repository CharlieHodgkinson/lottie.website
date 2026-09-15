import { Flex, Typography } from "antd";
import { PropsWithChildren } from "react";
import { Windows95Bar } from "../components/Windows95Bar";
import { FaReact, FaNodeJs, FaNpm, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNx,
  SiServerless,
  SiTerraform,
  SiStorybook,
  SiCypress,
  SiJest,
  SiCucumber,
  SiAwslambda,
  SiGraphql,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

const technologies = [
  { name: "React JS", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node JS", Icon: FaNodeJs },
  { name: "NPM", Icon: FaNpm },
  { name: "NX monorepos", Icon: SiNx },
  { name: "AWS", Icon: FaAws },
  { name: "Serverless Framework", Icon: SiServerless },
  { name: "Hashicorp Terraform", Icon: SiTerraform },
  { name: "Storybook JS", Icon: SiStorybook },
  { name: "Cypress Testing", Icon: SiCypress },
  { name: "Jest JS", Icon: SiJest },
  { name: "Cucumber JS", Icon: SiCucumber },
  { name: "AWS Lambda", Icon: SiAwslambda },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Github", Icon: SiGithub },
  { name: "GitLab", Icon: SiGitlab },
];

export const Technology = () => {
  return (
    <Flex
      className="file-picker-page"
      align="stretch"
      justify="flex-start"
      vertical
      style={{ flexGrow: 1 }}
      gap={50}
    >
      <Windows95Bar className="file-view-toolbar"><span>VIEW</span><strong>Large Icons</strong><span className="file-view-count">21 objects</span></Windows95Bar>
      <section className="program-group">
        <Windows95Bar className="program-group-title"><span>▣</span> DEVELOPMENT TOOLS</Windows95Bar>
        <Flex align="flex-start" justify="flex-start" className="file-grid" style={{ flexWrap: "wrap" }} gap={50}>
          {technologies.map(({ name, Icon }, i) => (
            <div className="skill-file" key={name + i} title={name}>
              <div className="skill-file-icon"><Icon className="technology-icon" size={42} /></div>
              <Typography.Text>{name}</Typography.Text>
            </div>
          ))}
        </Flex>
      </section>
      <section className="program-group methods-group">
        <Windows95Bar className="program-group-title"><span>▤</span> WORK METHODS</Windows95Bar>
        <Flex align="flex-start" justify="flex-start" className="practice-list" style={{ flexWrap: "wrap" }} gap={18}>
          {["agile", "kanban", "DevOps", "CI/CD", "scrum", "TDD"].map((text) => <Badge key={text}>{text}</Badge>)}
        </Flex>
      </section>
    </Flex>
  );
};

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ width: "max-content" }}>
      <Typography.Paragraph className="skill-badge">
        {children}
      </Typography.Paragraph>
    </div>
  );
};
