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
  SiPython,
} from "react-icons/si";
import styles from "./Technology.module.css";
import { RiFolderChartLine } from "react-icons/ri";

const technologies = [
  { name: "React JS", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node JS", Icon: FaNodeJs },
  { name: "Python", Icon: SiPython },
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
  { name: "agile", Icon: RiFolderChartLine },
  { name: "kanban", Icon: RiFolderChartLine },
  { name: "DevOps", Icon: RiFolderChartLine },
  { name: "CI/CD", Icon: RiFolderChartLine },
  { name: "scrum", Icon: RiFolderChartLine },
  { name: "TDD", Icon: RiFolderChartLine }
];

export const Technology = () => {
  return (
    <div className={styles.fileGrid}>
      {technologies.map(({ name, Icon }, i) => (
        <div className={styles.skillFile} key={name + i} title={name}>
          <div className={styles.skillFileIcon}>
            <Icon className={styles.technologyIcon} size={42} />
          </div>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};
