import React from "react";
import { Anchor, Col, Flex, Row, Typography } from "antd";
import { Home } from "./sections/Home";
import "./style.css";
import { About } from "./sections/About";
import { Technology } from "./sections/Technology";
import { FaStar } from "react-icons/fa6";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";

const App = () => {
  return (
    <Row>
      <Col
        span={3}
        style={{
          backgroundColor: "rgba(40, 30, 69, 0.3)",
          paddingTop: "20px",
        }}
      >
        <Flex justify="center" style={{ paddingTop: "20px" }}>
          <Typography.Paragraph>lottie.website</Typography.Paragraph>
          <FaStar color="#c770f0" />
        </Flex>
        <Anchor
          style={{ paddingTop: "20px" }}
          items={[
            {
              key: "home",
              href: "#home",
              title: "home",
            },
            {
              key: "about",
              href: "#about",
              title: "about",
            },
            {
              key: "technology",
              href: "#technology",
              title: "technology",
            },
            {
              key: "resume",
              href: "#resume",
              title: "resume",
            },
            {
              key: "contact",
              href: "#contact",
              title: "contact",
            },
          ]}
        />
      </Col>
      <Col span={21}>
        <Flex
          id="home"
          vertical
          style={{ minHeight: "100vh", width: "100%", overflow: "hidden" }}
        >
          <Home />
        </Flex>
        <Flex
          id="about"
          vertical
          style={{ minHeight: "100vh", width: "100%", overflow: "hidden" }}
        >
          <About />
        </Flex>
        <Flex
          id="technology"
          vertical
          style={{ minHeight: "100vh", width: "100%", overflow: "hidden" }}
        >
          <Technology />
        </Flex>
        <Flex
          id="resume"
          vertical
          style={{ minHeight: "100vh", width: "100%", overflow: "hidden" }}
        >
          <Resume />
        </Flex>
        <Flex
          id="contact"
          vertical
          style={{ minHeight: "100vh", width: "100%", overflow: "hidden" }}
        >
          <Contact />
        </Flex>
      </Col>
    </Row>
  );
};

export default App;
