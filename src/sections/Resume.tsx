import { useEffect, useRef, useState } from "react";
import styles from "./Resume.module.css";

type ResumeRecord = {
  date: string;
  role: string;
  company: string;
  description?: string;
  type: string;
  bullets?: string[];
};

type DialogPosition = {
  left: number;
  top: number;
};

const records: ResumeRecord[] = [
  {
    date: "2025-PRESENT",
    role: "Frontend Software Engineer",
    company: "Flawless AI",
    type: "WORK",
    bullets: [
      "Led development of an Avid Media Composer extension from the ground up, enabling editors to create AI-powered visual dubs. Built a TypeScript, React and Vite SPA embedded via QtWebView, integrating with Avid's desktop SDK through a generated protobuf/gRPC-Web client with event streaming and authentication.",
      "Selected by Avid as one of two partners featured in the Extensions Spotlight for Media Composer 2026.8, with the extension subsequently demonstrated at IBC.",
      "Built complex video workflows for localisation and in-video ADR, including character refinement, timeline editing and media management across Flawless' TrueSync and DeepEditor products. These capabilities supported production of the world's first theatrically released full-length feature film using AI-powered immersive dubbing.",
      "Developed real-time video playback and editing functionality using GraphQL APIs and webhooks, and contributed to Python-based Temporal workflows supporting asynchronous media-processing pipelines.",
      "Worked directly with customer feedback to diagnose production issues, performing root-cause analysis across frontend applications, APIs and third-party integrations and translating feedback into product fixes and UX improvements.",
      "Contributed to a shared design system, developing reusable table and UX components and designing and building a theme provider that enabled application-wide rebranding without customer-facing disruption.",
      "Improved frontend reliability and maintainability by introducing Storybook integration testing into CI/CD pipelines, strengthening application-level error handling with Datadog RUM, and building user-action dashboards to accelerate issue detection and investigation.",
    ],
  },
  {
    date: "2022-2025",
    role: "Fullstack Software Engineer",
    company: "Wealth Wizards",
    type: "WORK",
    bullets: [
      "Built 10+ SaaS applications using TypeScript, React and AWS, following a micro-frontend architecture and mobile-first approach and ensuring compliance with WCAG AA accessibility standards.",
      "Led development of a pension contributions tool deployed with three clients and used by more than 8,000 users.",
      "Contributed to a pension guidance tool that, within six months of launch, facilitated more than 65 pension consolidations representing £1.35m in transferred assets.",
      "Designed and implemented APIs for complex financial calculations, applying functional programming concepts to model and process financial data within a highly regulated environment.",
      "Embedded micro-frontend applications into live sites of several different clients with authentication using AWS Cognito,  and provided ongoing maintenance and support.",
      "Developed within an Nx monorepo containing 30+ applications and libraries, using GitLab CI/CD pipelines for automated testing and deployment.",
      "Contributed extensively to a shared design system built with Emotion, Storybook and Chromatic, developing reusable atomic components and customisable themes to support multiple clients.",
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
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              setIsDialogOpen(false);
            }
          }}
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
            {selected.description && (
              <p>{selected.description}</p>
            )}
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
