import { useEffect, useRef, useState } from "react";
import styles from "./Resume.module.css";

type ResumeRecord = {
  date: string;
  role: string;
  company: string;
  description: string;
  type: string;
  bullets?: string[];
};

type DialogPosition = {
  left: number;
  top: number;
};

const records: ResumeRecord[] = [
  {
    date: "2022-2025",
    role: "Fullstack Software Engineer",
    company: "Wealth Wizards",
    type: "WORK",
    description: "Developed SaaS applications using a micro-frontend architecture with a mobile-first approach, ensuring compliance with WCAG AA accessibility standards. Built applications delivering automated financial advice in a highly regulated environment.",
    bullets: [
      "Built 10+ SaaS applications using AWS, TypeScript and React with a mobile-first focus.",
      "Led the development of a Pension Contributions Tool now live with 3 clients and 8,000+ unique users.",
      "Developed sophisticated APIs for complex mathematical operations using functional programming.",
      "Worked in an NX monorepo with 30+ apps and libraries using GitLab CI/CD.",
    ],
  },
  {
    date: "2021-2022",
    role: "DevOps Engineer",
    company: "RS Components",
    type: "WORK",
    description: "Supported engineering teams with security best practices and tools to improve CI/CD processes and secure deployments.",
    bullets: [
      "Developed and maintained GitLab CI/CD pipeline templates.",
      "Managed Docker containers orchestrated via Nomad.",
      "Triaged and remediated security incidents and vulnerabilities.",
    ],
  },
  {
    date: "2019-2021",
    role: "Software Developer",
    company: "RS Components",
    type: "WORK",
    description: "Developed APIs and backend microservices using GraphQL and Node.js for product data transactions and warehouse data management.",
    bullets: [
      "Designed scalable serverless APIs for migrating master product data to the cloud.",
      "Helped migrate services from a legacy monolith to a serverless architecture.",
    ],
  },
  {
    date: "2019-2021",
    role: "Software Development Foundation Degree",
    type: "EDU",
    company: "Ada. National College for Digital Skills",
    description: "Studied cloud architecture, machine learning, data structures and algorithms using JavaScript, C++ and Python3.",
  },
  {
    date: "2019-2021",
    role: "Software Developer Level 4",
    type: "EDU",
    company: "British Computer Society",
    description: "Completed alongside work at RS Components and the foundation degree.",
  },
  {
    date: "2018-2019",
    role: "Computer Science Level 3 BTEC",
    type: "EDU",
    company: "Tresham College",
    description: "Studied algorithms, data structures and programming paradigms alongside low-level fundamentals such as binary and logic gates.",
  },
];

export const Resume = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [dialogPosition, setDialogPosition] = useState<DialogPosition | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dragStartRef = useRef<{
    pointerX: number;
    pointerY: number;
    left: number;
    top: number;
  } | null>(null);
  const selected = selectedIndex === null ? records[0] : records[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isDialogOpen && !dialog.open) {
      dialog.show();
    } else if (!isDialogOpen && dialog.open) {
      dialog.close();
    }
  }, [isDialogOpen]);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const dragStart = dragStartRef.current;
      const dialog = dialogRef.current;

      if (!dragStart || !dialog) {
        return;
      }

      const footerHeight = 36;
      const left = Math.max(
        0,
        Math.min(
          window.innerWidth - dialog.offsetWidth,
          dragStart.left + event.clientX - dragStart.pointerX,
        ),
      );
      const top = Math.max(
        0,
        Math.min(
          window.innerHeight - dialog.offsetHeight - footerHeight,
          dragStart.top + event.clientY - dragStart.pointerY,
        ),
      );

      setDialogPosition({ left, top });
    };

    const handlePointerUp = () => {
      dragStartRef.current = null;
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  return (
    <div className={styles.resumeExplorer}>
      <div className={styles.resumeBrowser}>
        <table className={styles.resumeTable} aria-label="Career records">
          <thead>
            <tr className={styles.resumeTableHead}>
              <th>Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr
                className={`${styles.resumeRecord} ${selectedIndex === index ? styles.isSelected : ""}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsDialogOpen(true);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedIndex(index);
                    setIsDialogOpen(true);
                  }
                }}
                tabIndex={0}
                key={`${record.date}-${record.role}`}
              >
                <td>{record.role}</td>
                <td>{record.company}</td>
                <td>{record.date}</td>
                <td>{record.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog
          className={styles.resumeDialog}
          ref={dialogRef}
          onClose={() => {
            setIsDialogOpen(false);
            setSelectedIndex(null);
            setDialogPosition(null);
          }}
          style={dialogPosition ? {
            left: `${dialogPosition.left}px`,
            top: `${dialogPosition.top}px`,
            transform: "none",
          } : undefined}
        >
          <div
            className={styles.resumeDetailsBar}
            onPointerDown={(event) => {
              if (event.button !== 0 || (event.target instanceof Element && event.target.closest("button"))) {
                return;
              }

              const dialog = dialogRef.current;

              if (!dialog) {
                return;
              }

              const bounds = dialog.getBoundingClientRect();
              dragStartRef.current = {
                pointerX: event.clientX,
                pointerY: event.clientY,
                left: bounds.left,
                top: bounds.top,
              };
              setDialogPosition({ left: bounds.left, top: bounds.top });
              setIsDragging(true);
            }}
          >
            <span>Preview - {selected.role} \ {selected.company}</span>
            <button
              className={styles.resumeCloseButton}
              type="button"
              aria-label="Close preview"
              onClick={() => setIsDialogOpen(false)}
            >
              X
            </button>
          </div>
          <div className={styles.resumeDetailsBody}>
            <h2>{selected.role}</h2>
            <div className={styles.resumeMeta}>
              <span>{selected.company}</span>
              <span>{selected.date}</span>
            </div>
            <p>{selected.description}</p>
            {selected.bullets && (
              <ul>
                {selected.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
};
