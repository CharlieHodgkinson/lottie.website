import { Typography } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="document-page contact-page">
      <div className="contact-document">
        <div className="contact-header">
          <div className="contact-avatar">@</div>
          <div><Typography.Title level={2} className="contact-document-title">Charlotte Hodgkinson</Typography.Title><p>Address card / London, UK</p></div>
        </div>
        <div className="contact-fields">
          <div className="contact-field"><span>EMAIL</span><Typography.Link href="mailto:charlotte.hodgkinson4@gmail.com">charlotte.hodgkinson4@gmail.com</Typography.Link></div>
          <div className="contact-field"><span>GITHUB</span><Typography.Link href="https://github.com/CharlieHodgkinson" target="_blank" rel="noreferrer"><FaGithub /> github.com/CharlieHodgkinson</Typography.Link></div>
          <div className="contact-field"><span>LINKEDIN</span><Typography.Link href="https://www.linkedin.com/in/charlotte-hodgkinson-669349174" target="_blank" rel="noreferrer"><FaLinkedin /> linkedin.com/in/charlotte-hodgkinson</Typography.Link></div>
        </div>
        <div className="contact-note"><strong>MESSAGE</strong><p>Feel free to drop me an email. I'm always happy to talk about software, creative work, and new opportunities.</p></div>
      </div>
    </div>
  );
};
