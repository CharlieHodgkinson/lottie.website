import { Flex, Typography, Image } from "antd";

export const About = () => {
  return (
    <Flex
      align="center"
      justify="center"
      style={{ paddingLeft: "5rem", paddingRight: "5rem", flexGrow: 1 }}
      gap={"5rem"}
    >
      <div style={{ position: "relative", width: "350px", height: "450px" }}>
        <div
          style={{
            backgroundColor: "#c770f0",
            position: "absolute",
            width: "300px",
            height: "400px",
            marginLeft: "50px",
            marginTop: "50px",
          }}
        />
        <Image src="/profile.jpg" width={300} />
      </div>
      <Flex vertical style={{ maxWidth: "500px" }}>
        <div style={{ width: "max-content" }}>
          <Typography.Title
            level={2}
            style={{
              backgroundColor: "#a545d1",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            about
          </Typography.Title>
        </div>
        <Typography.Paragraph>
          Hi, I'm Charlotte. I currently live in London working as a fullstack
          software engineer at Wealth Wizards. Where I build web apps with
          Typescript, React and AWS. If you're interested in what I've been
          working on take a look at my projects.
          <br />
          <br />
          Outside of work I like to try every creative hobby there is! My
          favourites are crocheting, sewing and oil painting. I also like having
          an active social life and supporting my community.
        </Typography.Paragraph>
      </Flex>
    </Flex>
  );
};
