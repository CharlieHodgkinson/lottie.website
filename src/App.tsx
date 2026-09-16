import { useState } from "react";
import { Home } from "./sections/Home";
import styles from "./App.module.css";
import { About } from "./sections/About";
import { Technology } from "./sections/Technology";
import { FaFolder, FaMinus, FaRegSquare, FaStar, FaXmark } from "react-icons/fa6";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";
import { Windows95Bar } from "./components/Windows95Bar";

const tabs = [
  { id: "home", label: "C:\\LOTTIE", icon: "▣" },
  { id: "about", label: "ABOUT", icon: "▤" },
  { id: "technology", label: "SKILLS", icon: "▤" },
  { id: "resume", label: "RESUME", icon: "▤" },
  { id: "contact", label: "CONTACT", icon: "▤" },
];

const sections = [
  { id: "home", title: "welcome.exe", component: <Home /> },
  { id: "about", title: "about.txt", component: <About /> },
  { id: "technology", title: "technology.sys", component: <Technology /> },
  { id: "resume", title: "resume.doc", component: <Resume /> },
  { id: "contact", title: "contact.mail", component: <Contact /> },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
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
              <span>PORTFOLIO</span>
            </div>
            <div className={styles.windowControls}>
              <button aria-label="Minimize desktop" onClick={() => setIsMinimized(true)}><FaMinus /></button>
              <button aria-label={isMaximized ? "Restore desktop" : "Maximize desktop"} onClick={() => setIsMaximized(!isMaximized)}><FaRegSquare /></button>
              <button aria-label="Close desktop" onClick={() => setIsClosed(true)}><FaXmark /></button>
            </div>
          </header>
          <nav className={styles.windowToolbar} aria-label="Main navigation">
            {tabs.map((tab) => <button className={`${styles.toolbarTab} ${activeTab === tab.id ? styles.isActive : ""}`} onClick={() => openSection(tab.id)} key={tab.id}>
              <span className={styles.toolbarTabIcon}>{tab.icon}</span>{tab.id.toUpperCase()}
            </button>)}
            <span className={styles.toolbarLocation}>C:\\USERS\\CHARLOTTE\\PORTFOLIO</span>
          </nav>
          <div className={styles.windowBody}>
            <aside className={styles.systemSidebar}>
              <div className={styles.sidebarLabel}>MY COMPUTER</div>
              <button className={styles.computerIcon} onClick={() => openSection("home")}><span>▣</span><small>C:\LOTTIE</small></button>
              <div className={`${styles.sidebarLabel} ${styles.folderLabel}`}>PROGRAMS</div>
              {tabs.slice(1).map((tab) => (
                <button
                  className={`${styles.sidebarItem} ${activeTab === tab.id ? styles.isActive : ""}`}
                  onClick={() => openSection(tab.id)}
                  key={tab.id}
                >
                  <span className={styles.sidebarIcon}>{tab.icon}</span>
                  <span>{tab.id}.exe</span>
                </button>
              ))}
              <div className={styles.sidebarStatus}>
                <span className={styles.statusLight} />
                <span>system online</span>
              </div>
            </aside>
            <div className={styles.workspace}>
              <Windows95Bar className={styles.sectionTitlebar}>
                <span className={styles.titlebarGlyph}>◆</span>
                <span>{activeSection.title}</span>
                <span className={styles.titlebarPath}>
                  C:\\LOTTIE\\{activeSection.id.toUpperCase()}
                </span>
              </Windows95Bar>
              <div className={styles.sectionContent}>{activeSection.component}</div>
            </div>
          </div>
          <footer className={styles.windowFooter}>
            <span>5 OBJECTS &nbsp; | &nbsp; 1 SELECTED</span>
            <span>READY &nbsp; | &nbsp; NETWORK: CONNECTED</span>
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
          <span>Charlotte's<br />Desktop</span>
        </button>
      )}

      {isStartOpen && <div className={styles.startMenu}>
        <div className={styles.startMenuBanner}><strong>Windows</strong><span>95</span></div>
        <div className={styles.startMenuItems}>
          {tabs.map((tab) => <button onClick={() => openSection(tab.id)} key={tab.id}><span>{tab.icon}</span>{tab.id === "home" ? "Welcome" : tab.id[0].toUpperCase() + tab.id.slice(1)}</button>)}
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
            <FaFolder /> Charlotte's Desktop
          </button>
        )}
        <span className={styles.taskbarClock}>{new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
      </footer>
    </main>
  );
};

export default App;
