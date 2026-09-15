import { Button, Typography } from "antd";

export const Home = () => {
  return (
    <div className="document-page home-page">
      <div className="home-explorer">
        <section className="home-copy">
          <span className="file-type-label">APPLICATION / WELCOME.EXE</span>
          <Typography.Title level={1}>hey there!<br />i'm <b className="purple">Charlotte Hodgkinson</b></Typography.Title>
          <p className="home-summary">Fullstack software engineer building useful things for the web.</p>
          <Button type="primary" href="cv.pdf" download="charlotte_hodgkinson_cv.pdf">Download CV</Button>
        </section>
        <section className="home-preview">
          <div className="preview-label">SYSTEM INFORMATION</div>
          <div className="welcome-panel">
            <div className="welcome-icon">★</div>
            <div>
              <strong>CHARLOTTE'S DESKTOP</strong>
              <p>Welcome to my personal portfolio.</p>
            </div>
          </div>
          <dl className="home-properties">
            <div><dt>ROLE</dt><dd>Software Engineer</dd></div>
            <div><dt>LOCATION</dt><dd>London, UK</dd></div>
            <div><dt>FOCUS</dt><dd>React / TypeScript / AWS</dd></div>
            <div><dt>STATUS</dt><dd><span className="status-light" /> Available</dd></div>
          </dl>
        </section>
      </div>
    </div>
  );
};
