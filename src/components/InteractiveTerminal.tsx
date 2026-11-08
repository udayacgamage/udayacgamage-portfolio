"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "error" | "info" | "system";
  text: string;
  isHtml?: boolean;
}

const INITIAL_LINES: TerminalLine[] = [
  {
    id: "init-1",
    type: "system",
    text: "Udaya Chathuranga Shell [v2.4-net-eng] — Type 'help' for commands or 'ping' to test link.",
  },
  {
    id: "init-2",
    type: "info",
    text: "Ready. Explore projects, networking concepts, or run 'skills' to view toolkit.",
  },
];

const AVAILABLE_COMMANDS = [
  "help",
  "about",
  "projects",
  "skills",
  "ping",
  "contact",
  "theme",
  "clear",
  "whoami",
  "date",
  "sudo",
];

let lineSequence = 100;
function createLineId(prefix: string): string {
  lineSequence += 1;
  return `${prefix}-${lineSequence}`;
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>(INITIAL_LINES);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Scroll to bottom on new lines
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  // Global hotkey: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, trimmed]);
    setCmdIndex(-1);

    const inputEntry: TerminalLine = {
      id: createLineId("in"),
      type: "input",
      text: `$ ${trimmed}`,
    };

    const args = trimmed.split(" ");
    const command = args[0].toLowerCase();

    let outputEntries: TerminalLine[] = [];

    switch (command) {
      case "help":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "Available commands:\n  help      - Show this manual\n  about     - Overview of education & background\n  projects  - List highlighted networking, mobile & web projects\n  skills    - Technical capabilities & protocols\n  ping      - Ping simulated network node\n  contact   - Reach out via email or LinkedIn\n  theme     - Toggle light / dark theme\n  whoami    - Current user identity\n  clear     - Clean the terminal screen\n  sudo      - Execute as superuser",
          },
        ];
        break;

      case "about":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "Udaya Chathuranga — BICT Undergraduate at University of Sri Jayewardenepura.\nFocus: Network Engineering, Cyber Security & Connected Distributed Systems.\nPhilosophy: Build curiosity into practical systems, from telemetry sensors to mobile dashboards.",
          },
        ];
        break;

      case "projects":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "Featured Projects:\n1. Cloudpath: Simulated network labs & routing lessons (JS/Sim)\n2. BridgeM: IoT bridge monitoring via MQTT over WebSockets (React Native)\n3. UCHAT: Real-time messaging with Firebase & Riverpod (Flutter)\n4. Frame: Social media platform with media feeds (React Native/Supabase)\n5. LensLoop: Production gear rental with QR handovers (Next.js/PostgreSQL)\n6. USJ Pool: University facility scheduling & QR attendance (MERN Stack)",
          },
        ];
        break;

      case "skills":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "Toolkit Breakdown:\n• Networking: MQTT, WebSockets, Wireshark, TCP/IP, Routing, Linux, AWS, Docker\n• Mobile: Flutter, Dart, Firebase, React Native, Expo, TypeScript\n• Web & DBs: Next.js, React, Node.js, Express, PostgreSQL, MongoDB, Prisma\n• Tools: Git, Postman, Linux CLI, Bash",
          },
        ];
        break;

      case "ping": {
        const host = args[1] || "bridge.udaya.lk";
        outputEntries = [
          {
            id: createLineId("out"),
            type: "info",
            text: `PING ${host} (192.168.10.4): 56 data bytes\n64 bytes from 192.168.10.4: icmp_seq=1 ttl=64 time=14.2 ms\n64 bytes from 192.168.10.4: icmp_seq=2 ttl=64 time=15.8 ms\n64 bytes from 192.168.10.4: icmp_seq=3 ttl=64 time=13.9 ms\n--- ${host} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, rtt avg 14.63 ms`,
          },
        ];
        break;
      }

      case "contact":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "Connect with Udaya:\n• Email: udayacgamage@gmail.com\n• LinkedIn: linkedin.com/in/udaya-chathuranga\n• GitHub: github.com/udayacgamage",
          },
        ];
        break;

      case "theme": {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const nextTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
        window.dispatchEvent(new Event("storage"));
        outputEntries = [
          {
            id: createLineId("out"),
            type: "info",
            text: `Theme switched to: ${nextTheme.toUpperCase()}`,
          },
        ];
        break;
      }

      case "clear":
        setHistory([]);
        return;

      case "whoami":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "guest@udaya-portfolio [Authorized Engineer]",
          },
        ];
        break;

      case "date":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "output",
            text: "System time synchronized with UTC NTP servers.",
          },
        ];
        break;

      case "sudo":
        outputEntries = [
          {
            id: createLineId("out"),
            type: "error",
            text: "Permission denied: Root privilege reserved. But feel free to explore all public interfaces!",
          },
        ];
        break;

      default:
        outputEntries = [
          {
            id: createLineId("out"),
            type: "error",
            text: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
          },
        ];
        break;
    }

    setHistory((prev) => [...prev, inputEntry, ...outputEntries]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length > 0 && cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx >= cmdHistory.length) {
          setCmdIndex(-1);
          setInputVal("");
        } else {
          setCmdIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (current) {
        const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(current));
        if (match) {
          setInputVal(match);
        }
      }
    }
  };

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        className="terminal-launcher"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle interactive developer terminal"
        title="Interactive Terminal (Ctrl+K)"
      >
        <span className="terminal-prompt-sym" aria-hidden="true">&gt;_</span>
        <span className="terminal-launcher-text">Terminal</span>
        <span className="terminal-shortcut-pill">Ctrl+K</span>
      </button>

      {/* Terminal Drawer / Modal */}
      {isOpen && (
        <div className="terminal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="terminal-window"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Portfolio interactive terminal"
          >
            {/* Window titlebar */}
            <div className="terminal-titlebar">
              <div className="terminal-dots">
                <span className="term-dot close" onClick={() => setIsOpen(false)} />
                <span className="term-dot min" />
                <span className="term-dot max" />
              </div>
              <span className="terminal-title">udaya@portfolio: ~ (bash)</span>
              <button
                type="button"
                className="terminal-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close terminal"
              >
                ✕
              </button>
            </div>

            {/* Quick Command Suggestions */}
            <div className="terminal-quick-chips">
              <span className="chip-label">Quick run:</span>
              {["help", "projects", "skills", "ping", "about"].map((cmd) => (
                <button
                  type="button"
                  key={cmd}
                  className="quick-chip-btn"
                  onClick={() => {
                    handleCommand(cmd);
                    inputRef.current?.focus();
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Scrollable log area */}
            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
              {history.map((line) => (
                <div key={line.id} className={`terminal-line line-${line.type}`}>
                  <pre>{line.text}</pre>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Command input prompt */}
            <div className="terminal-input-bar">
              <span className="terminal-prompt-user">udaya@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'projects', 'ping')..."
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
