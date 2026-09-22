import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  const activateRow = (row: HTMLTableRowElement) => {
    row.querySelector<HTMLAnchorElement>("a")?.click();
  };

  return (
    <div className={styles.contactDocument}>
      <table className={styles.contactTable} aria-label="Contact methods">
        <thead>
          <tr className={styles.contactTableHead}>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={styles.contactRecord}
            onClick={(event) => {
              if (!(event.target instanceof Element && event.target.closest("a"))) {
                activateRow(event.currentTarget);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activateRow(event.currentTarget);
              }
            }}
            tabIndex={0}
          >
            <td>Email</td>
            <td>
              <a href="mailto:charlotte.hodgkinson4@gmail.com">
                charlotte.hodgkinson4@gmail.com
              </a>
            </td>
          </tr>
          <tr
            className={styles.contactRecord}
            onClick={(event) => {
              if (!(event.target instanceof Element && event.target.closest("a"))) {
                activateRow(event.currentTarget);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activateRow(event.currentTarget);
              }
            }}
            tabIndex={0}
          >
            <td>GitHub</td>
            <td>
              <a
                href="https://github.com/CharlieHodgkinson"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> github.com/CharlieHodgkinson
              </a>
            </td>
          </tr>
          <tr
            className={styles.contactRecord}
            onClick={(event) => {
              if (!(event.target instanceof Element && event.target.closest("a"))) {
                activateRow(event.currentTarget);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activateRow(event.currentTarget);
              }
            }}
            tabIndex={0}
          >
            <td>LinkedIn</td>
            <td>
              <a
                href="https://www.linkedin.com/in/charlotte-hodgkinson-669349174"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> linkedin.com/charlotte-hodgkinson
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
