import { Flex, Typography } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <Flex
      align="center"
      justify="center"
      vertical
      style={{ paddingLeft: "5rem", flexGrow: 1 }}
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
          contact
        </Typography.Title>
      </div>
      <Typography.Paragraph>
        Feel free to drop me and email at{" "}
        <Typography.Link
          href={"mailto:charlotte.hodgkinson4@gmail.com"}
          target="_blank"
        >
          charlotte.hodgkinson4@gmail.com
        </Typography.Link>
        .
      </Typography.Paragraph>
      <Flex gap={10} justify="center" align="center">
        <Typography.Paragraph style={{ marginBottom: 0 }}>
          Or find me at:
        </Typography.Paragraph>
        <Typography.Link href={"https://github.com/CharlieHodgkinson"}>
          <FaGithub size={30} />
        </Typography.Link>
        <Typography.Link
          href={"https://www.linkedin.com/in/charlotte-hodgkinson-669349174"}
        >
          <FaLinkedin size={30} />
        </Typography.Link>
      </Flex>
    </Flex>
  );
};
