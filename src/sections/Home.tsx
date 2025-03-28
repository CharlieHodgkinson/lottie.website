import { Button, Col, Flex, Row, Typography } from "antd";
import Typewriter from "typewriter-effect";
import { RetroComputerModel } from "../components/RetroComputerModel";

export const Home = () => {
  return (
    <Flex
      align="left"
      justify="center"
      vertical
      style={{ flexGrow: 1 }}
      gap={50}
    >
      <Row style={{ paddingLeft: "5rem", height: "100%" }}>
        <Col span={12}>
          <Flex
            align="left"
            justify="center"
            vertical
            gap={50}
            style={{ height: "100%" }}
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
            <Button
              type="primary"
              style={{ width: "fit-content" }}
              href="cv.pdf"
              download={"charlotte_hodgkinson_cv.pdf"}
            >
              Download CV
            </Button>
          </Flex>
        </Col>
        <Col span={12}>
          <RetroComputerModel />
        </Col>
      </Row>
    </Flex>
  );
};
