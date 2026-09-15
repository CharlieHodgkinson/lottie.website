import { Flex, Typography, Image } from "antd";

export const About = () => {
  return (
    <div className="document-page about-page">
      <div className="about-document">
        <aside className="about-file-panel">
          <div className="file-panel-heading">FILE DETAILS</div>
          <div className="file-detail"><span>NAME</span><strong>Charlotte</strong></div>
          <div className="file-detail"><span>LOCATION</span><strong>C:\LOTTIE</strong></div>
          <div className="file-detail"><span>ROLE</span><strong>Software Engineer</strong></div>
          <div className="file-detail"><span>STATUS</span><strong>Available</strong></div>
        </aside>
        <article className="about-sheet">
          <div className="about-portrait">
            <div className="about-accent" />
            <Image src="/profile.jpg" width={260} preview />
            <span>CHARLOTTE.JPG</span>
          </div>
          <div className="about-copy">
            <Typography.Title level={2} className="about-sheet-title">About Charlotte</Typography.Title>
            <Typography.Paragraph>
              Hi, I'm Charlotte. I currently live in London working as a fullstack
              software engineer at Wealth Wizards, where I build web apps with
              Typescript, React and AWS.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Outside of work I like doing anything creative. My favourites are
              crocheting, sewing and oil painting. I also like having an active
              social life and supporting my community.
            </Typography.Paragraph>
          </div>
        </article>
      </div>
    </div>
  );
};
