import React from "react";
import { Anchor, Col, Flex, Row, Image } from "antd";
import { Home } from "./sections/Home";
import "./style.css";

const App = () => {
  return (
    <Row>
      <Col span={2} style={{ backgroundColor: "#1c1530", marginTop: "20px" }}>
        <Flex justify="center">
          <Image src="/logo.svg" />
        </Flex>
        <Anchor
          style={{ marginTop: "20px" }}
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
              key: "projects",
              href: "#projects",
              title: "projects",
            },
            {
              key: "contact",
              href: "#contact",
              title: "contact",
            },
          ]}
        />
      </Col>
      <Col span={22}>
        <Flex
          id="home"
          // align="left"
          // justify="center"
          vertical
          style={{ minHeight: "100vh", width: "100%" }}
        >
          <Home />
        </Flex>
        {/* <div
          id="home"
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Home />
        </div> */}
        <div
          id="about"
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          about
        </div>
        <div
          id="technology"
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          technology
        </div>
        <div
          id="projects"
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          projects
        </div>
        <div
          id="contact"
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          contact
        </div>
      </Col>
    </Row>
  );
};

export default App;
