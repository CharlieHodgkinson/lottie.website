import { Flex, Typography, Tooltip } from "antd";
import { PropsWithChildren } from "react";
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
      align="center"
      justify="center"
      vertical
      style={{ paddingLeft: "5rem", paddingRight: "5rem", flexGrow: 1 }}
      gap={50}
    >
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
          technology
        </Typography.Title>
      </div>
      <Flex
        align="center"
        justify="center"
        style={{ flexWrap: "wrap", paddingLeft: "5rem", paddingRight: "5rem" }}
        gap={50}
      >
        {technologies.map(({ name, Icon }, i) => (
          <Tooltip key={name + i} title={name} color="#a545d1">
            <Icon color="white" size={80} />
          </Tooltip>
        ))}
      </Flex>
      <Flex
        align="center"
        justify="center"
        style={{ flexWrap: "wrap", paddingLeft: "5rem", paddingRight: "5rem" }}
        gap={50}
      >
        {["agile", "kanban", "DevOps", "CI/CD", "scrum", "TDD"].map(
          (text, i) => (
            <Badge key={i}>{text}</Badge>
          )
        )}
      </Flex>
    </Flex>
  );
};

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ width: "max-content" }}>
      <Typography.Paragraph
        style={{
          backgroundColor: "#a545d1",
          color: "white",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "6px",
          fontSize: "18px",
        }}
      >
        {children}
      </Typography.Paragraph>
    </div>
  );
};
