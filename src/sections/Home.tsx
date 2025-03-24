import { Anchor, Col, Flex, Row, Typography } from "antd";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <Flex
      align="left"
      justify="center"
      vertical
      style={{ paddingLeft: "5rem", flexGrow: 1 }}
    >
      <Typography.Title level={1}>
        hey there!
        <br />
        i'm <b className="purple">Charlotte Hodgkinson</b>
      </Typography.Title>
      <Typewriter
        options={{
          strings: [
            "fullstack software engineer",
            "frontend developer",
            "backend developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </Flex>
  );
};
