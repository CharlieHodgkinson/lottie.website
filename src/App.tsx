import { useState } from "react";
import { Typography } from "antd";
import { Home } from "./sections/Home";
import "./style.css";
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
    <main className="desktop-shell">
      {!isClosed && !isMinimized && <div className={`desktop-window ${isMaximized ? "is-maximized" : ""}`}>
        <header className="window-header">
          <div className="window-brand"><span className="brand-mark"><FaStar /></span><Typography.Text>PORTFOLIO</Typography.Text></div>
          <div className="window-controls">
            <button aria-label="Minimize desktop" onClick={() => setIsMinimized(true)}><FaMinus /></button>
            <button aria-label={isMaximized ? "Restore desktop" : "Maximize desktop"} onClick={() => setIsMaximized(!isMaximized)}><FaRegSquare /></button>
            <button aria-label="Close desktop" onClick={() => setIsClosed(true)}><FaXmark /></button>
          </div>
        </header>
        <nav className="window-toolbar" aria-label="Main navigation">
          {tabs.map((tab) => <button className={`toolbar-tab ${activeTab === tab.id ? "is-active" : ""}`} onClick={() => openSection(tab.id)} key={tab.id}>
            <span className="toolbar-tab-icon">{tab.icon}</span>{tab.id.toUpperCase()}
          </button>)}
          <span className="toolbar-location">C:\\USERS\\CHARLOTTE\\PORTFOLIO</span>
        </nav>
        <div className="window-body">
          <aside className="system-sidebar">
            <div className="sidebar-label">MY COMPUTER</div>
            <button className="computer-icon" onClick={() => openSection("home")}><span>▣</span><small>C:\LOTTIE</small></button>
            <div className="sidebar-label folder-label">PROGRAMS</div>
            {tabs.slice(1).map((tab) => <button className={activeTab === tab.id ? "sidebar-item is-active" : "sidebar-item"} onClick={() => openSection(tab.id)} key={tab.id}><span className="sidebar-icon">{tab.icon}</span><span>{tab.id}.exe</span></button>)}
            <div className="sidebar-status"><span className="status-light" /><span>system online</span></div>
          </aside>
          <div className="workspace">
            <Windows95Bar className="section-titlebar"><span className="titlebar-glyph">◆</span><span>{activeSection.title}</span><span className="titlebar-path">C:\\LOTTIE\\{activeSection.id.toUpperCase()}</span></Windows95Bar>
            <div className="section-content">{activeSection.component}</div>
          </div>
        </div>
        <footer className="window-footer"><span>5 OBJECTS &nbsp; | &nbsp; 1 SELECTED</span><span>READY &nbsp; | &nbsp; NETWORK: CONNECTED</span></footer>
      </div>}

      {isClosed && <button className="desktop-shortcut" onClick={() => { setIsClosed(false); setIsMinimized(false); }}><FaFolder /><span>Charlotte's<br />Desktop</span></button>}

      {isStartOpen && <div className="start-menu">
        <div className="start-menu-banner"><strong>Windows</strong><span>95</span></div>
        <div className="start-menu-items">
          {tabs.map((tab) => <button onClick={() => openSection(tab.id)} key={tab.id}><span>{tab.icon}</span>{tab.id === "home" ? "Welcome" : tab.id[0].toUpperCase() + tab.id.slice(1)}</button>)}
        </div>
      </div>}

      <footer className="taskbar">
        <button className="start-button" onClick={() => setIsStartOpen(!isStartOpen)}><FaStar /> Start</button>
        {!isClosed && <button className={`taskbar-app ${!isMinimized ? "is-active" : ""}`} onClick={() => { setIsMinimized(!isMinimized); setIsClosed(false); }}><FaFolder /> Charlotte's Desktop</button>}
        <span className="taskbar-clock">{new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
      </footer>
    </main>
  );
};

export default App;
