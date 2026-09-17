import { useState } from "react";
import { Home } from "./sections/Home";
import styles from "./App.module.css";
import { About } from "./sections/About";
import { Technology } from "./sections/Technology";
import { FaFolder, FaMinus, FaRegSquare, FaStar, FaXmark, FaFolderOpen } from "react-icons/fa6";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";

const sections = [
  {
    id: "welcome", label: "Welcome", component: <Home />
  },
  { id: "about", label: "About", component: <About /> },
  { id: "technology", label: "Skills", component: <Technology /> },
  { id: "resume", label: "Resume", component: <Resume /> },
  { id: "contact", label: "Contact", component: <Contact /> },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("welcome");
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const activeSection = sections.find((section) => section.id === activeTab) ?? sections[0];

  const openSection = (id: string) => {
    setActiveTab(id);
    setIsClosed(false);
    setIsMinimized(false);
    setIsStartOpen(false);
  };

  return (
    <main className={styles.desktopShell}>
      {!isClosed && !isMinimized && (
        <div className={styles.desktopWindow + (isMaximized ? " " + styles.isMaximized : "")}>
          <header className={styles.windowHeader}>
            <div className={styles.windowBrand}>
              <span className={styles.brandMark}><FaStar /></span>
              <span>Exploring - C:\Portfolio\{activeSection.label}</span>
            </div>
            <div className={styles.windowControls}>
              <button aria-label="Minimize desktop" onClick={() => setIsMinimized(true)}><FaMinus /></button>
              <button aria-label={isMaximized ? "Restore desktop" : "Maximize desktop"} onClick={() => setIsMaximized(!isMaximized)}><FaRegSquare /></button>
              <button aria-label="Close desktop" onClick={() => setIsClosed(true)}><FaXmark /></button>
            </div>
          </header>
          <div className={styles.windowToolbar}>
            {['File', 'Edit', 'View', 'Tools', 'Help'].map((item) => (
              <button
                className={styles.toolbarTab}
                onClick={() => item === "File" && openSection("welcome")}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles.windowBody}>
            <nav className={styles.systemSidebar}>
              <div className={styles.sidebarLabel}>All Folders</div>
              <div className={styles.folderTree}>
                <button className={`${styles.sidebarItem} ${styles.portfolioItem}`}>
                  <span className={styles.sidebarIcon}><FaFolderOpen /></span>
                  <span>Portfolio</span>
                </button>
                <div className={styles.folderChildren}>
                  {sections.map((section) => (
                    <button
                      className={styles.sidebarItem}
                      onClick={() => openSection(section.id)}
                      key={section.id}
                    >
                      <span className={`${styles.sidebarIcon} ${activeTab === section.id ? styles.activeSidebarIcon : ""}`}>
                        {activeTab === section.id ? <FaFolderOpen /> : <FaFolder />}
                      </span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
            <div className={styles.workspace}>
              <div className={styles.sidebarLabel}>
                <span>Contents of 'C:\Portfolio\{activeSection.label}'</span>
              </div>
              <div className={styles.sectionContent}>{activeSection.component}</div>
            </div>
          </div>
          <footer className={styles.windowFooter}>
            <div className={styles.footerItem}>5 object(s)</div>
            <div className={styles.footerItem}>0 bytes (Disk free space: 1.91GB)</div>
          </footer>
        </div>
      )}

      {(isClosed || isMinimized) && (
        <button
          className={styles.desktopShortcut}
          onClick={() => {
            setIsClosed(false);
            setIsMinimized(false);
          }}
        >
          <FaFolder />
          <span>Portfolio</span>
        </button>
      )}

      {isStartOpen && <div className={styles.startMenu}>
        <div className={styles.startMenuBanner}><strong>Windows</strong><span>95</span></div>
        <div className={styles.startMenuItems}>
          {sections.map((section) => (
            <button onClick={() => openSection(section.id)} key={section.id}>
              {section.label}
            </button>
          ))}
        </div>
      </div>}

      <footer className={styles.taskbar}>
        <button
          className={styles.startButton}
          onClick={() => setIsStartOpen(!isStartOpen)}
        >
          <FaStar /> Start
        </button>
        {!isClosed && (
          <button
            className={`${styles.taskbarApp} ${!isMinimized ? styles.isActive : ""}`}
            onClick={() => {
              setIsMinimized(!isMinimized);
              setIsClosed(false);
            }}
          >
            <FaFolder /> Portfolio
          </button>
        )}
        <span className={styles.taskbarClock}>{new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
      </footer>
    </main>
  );
};

export default App;
