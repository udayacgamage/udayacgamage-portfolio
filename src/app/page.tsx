import Image from "next/image";
import portrait from "../../public/profile.webp";
import Projects from "@/components/Projects";
import BackgroundDetails from "@/components/BackgroundDetails";

export default function Home() {
  return (
    <>
      {/* ====================================================================
          Hero & 01 ABOUT (matching reference layout & typography)
          ==================================================================== */}
      <section id="home" className="hero wrap pt-8 md:pt-14 pb-12">
        <div className="w-full">
          {/* Eyebrow status row: Location and undergraduate info */}
          <div className="hero-status-row">
            <span className="hero-status-badge">
              <span className="status-dot-green" aria-hidden="true" />
              COLOMBO, SRI LANKA
            </span>
            <span>BICT UNDERGRADUATE · USJ</span>
          </div>

          {/* Main Name Heading: Bold modern sans */}
          <h1 className="hero-name">Udaya Chathuranga</h1>

          {/* Subtitle: Literary serif italic */}
          <p className="hero-subtitle">
            Network engineering, connected systems & software.
          </p>

          {/* Section Divider: 01 ABOUT */}
          <div id="about" className="section-divider scroll-mt-28" aria-hidden="true">
            <span className="section-divider-num">01</span>
            <span className="section-divider-title">ABOUT</span>
            <span className="section-divider-line" />
          </div>

          {/* Bio copy and portrait frame */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <p className="text-lg md:text-xl font-normal leading-relaxed text-[var(--ink)] dark:text-[#ede9e3]">
                I&apos;m Udaya. I work across network engineering, IoT telemetry,
                and software development. I like tools that are simple, ownable, and well-made.
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)] dark:text-[#8e887f]">
                I’m a BICT (Honours) undergraduate specializing in Network Technology at the
                University of Sri Jayewardenepura, with a current GPA of 3.87/4.00.
                As an AWS Certified Cloud Practitioner, I’m interested in connecting
                network infrastructure, cloud services, and practical software.
              </p>
              <div className="actions pt-4">
                <a className="button" href="#projects">
                  View Projects ↗
                </a>
                <a className="text-link" href="mailto:udayacgamage@gmail.com">
                  Email Me ↗
                </a>
                <a className="text-link" href="#education">Education &amp; credentials ↓</a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="portrait-frame w-full max-w-[270px] aspect-[4/5] relative rounded-lg overflow-hidden border border-[var(--line)] dark:border-[#262320]">
                <Image
                  src={portrait}
                  alt="Udaya Chathuranga"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width:760px) 270px, 270px"
                  className="portrait object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Ticker */}
      <div className="expertise-strip">
        <div className="wrap font-mono text-xs tracking-widest">
          <span>NETWORK ENGINEERING</span>
          <i>✳</i>
          <span>CYBER SECURITY</span>
          <i>✳</i>
          <span>IOT &amp; TELEMETRY</span>
          <i>✳</i>
          <span>MOBILE &amp; WEB</span>
        </div>
      </div>

      {/* ====================================================================
          02 NETWORKS & IOT
          ==================================================================== */}
      <section id="networking" className="section wrap network-focus">
        <div className="section-divider" aria-hidden="true">
          <span className="section-divider-num">02</span>
          <span className="section-divider-title">NETWORKS &amp; IOT</span>
          <span className="section-divider-line" />
        </div>

        <div className="section-heading">
          <div>
            <h2 className="text-3xl md:text-4xl">Telemetry pipelines &amp; protocols.</h2>
          </div>
          <p className="font-serif italic text-lg text-[var(--muted)] dark:text-[#8e887f]">
            Transport protocols, message brokers,
            <br />
            and real-time monitoring systems.
          </p>
        </div>

        <div className="network-layout">
          <div className="network-topology">
            <p className="eyebrow">BRIDGEM / ARCHITECTURE</p>
            <div
              className="network-flow"
              aria-label="Sensor data travels through an MQTT broker over WebSockets to a mobile dashboard"
            >
              <div>
                <span aria-hidden="true">◉</span>
                <strong>Bridge Sensors</strong>
                <small>Strain &amp; vibration data</small>
              </div>
              <span className="flow-link" aria-hidden="true">
                →
              </span>
              <div>
                <span aria-hidden="true">⌘</span>
                <strong>MQTT Broker</strong>
                <small>Mosquitto / QoS 1</small>
              </div>
              <span className="flow-link" aria-hidden="true">
                →
              </span>
              <div>
                <span aria-hidden="true">▥</span>
                <strong>Mobile App</strong>
                <small>React Native (WebSocket)</small>
              </div>
            </div>
            <p className="network-caption">
              End-to-end telemetry pipeline streaming bridge load, vibration
              frequencies, and structural alerts to maintenance teams.
            </p>
            <a
              className="text-link"
              href="https://github.com/udayacgamage/IOT-bridge-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View BridgeM on GitHub ↗
            </a>
          </div>

          <div className="network-interests">
            <div>
              <span className="eyebrow">ROUTING &amp; SIMULATION</span>
              <h3>Enterprise network design labs</h3>
              <p>
                Designed a four-floor hierarchical network in Cisco Packet Tracer
                with OSPF routing, 24 VLANs, centralized DHCP, SSH access, and
                port-security hardening as part of networking coursework.
              </p>
            </div>
            <div>
              <span className="eyebrow">SYSTEMS &amp; SECURITY</span>
              <h3>Linux &amp; infrastructure</h3>
              <p>
                Working with Linux administration, shell scripting, and cloud
                fundamentals. Academic security work includes a literature study
                on machine-learning-based intrusion detection systems and CTF challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          03 SELECTED WORK (Projects)
          ==================================================================== */}
      <Projects />

      {/* ====================================================================
          04 TECHNICAL SKILLS (with minimalist stack list from screenshot)
          ==================================================================== */}
      <section id="skills" className="section wrap">
        <div className="section-divider" aria-hidden="true">
          <span className="section-divider-num">04</span>
          <span className="section-divider-title">TECHNICAL SKILLS</span>
          <span className="section-divider-line" />
        </div>

        <div className="section-heading">
          <div>
            <h2 className="text-3xl md:text-4xl">Languages, tools &amp; protocols.</h2>
          </div>
          <p className="font-serif italic text-lg text-[var(--muted)] dark:text-[#8e887f]">
            Technologies applied across
            <br />
            academic and engineering projects.
          </p>
        </div>

        {/* Minimal vertical list + Categorized domain cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Vertical minimal list matching reference */}
          <div className="md:col-span-4">
            <span className="eyebrow block mb-2">CORE STACK</span>
            <div className="minimal-skill-list">
              <span>C / C++</span>
              <span>Python &amp; Linux</span>
              <span>MQTT &amp; WebSockets</span>
              <span>TCP/IP &amp; Wireshark</span>
              <span>Cisco IOS &amp; Packet Tracer</span>
              <span>OSPF, VLANs &amp; STP</span>
              <span>Docker &amp; Containers</span>
              <span>React Native &amp; Flutter</span>
              <span>Next.js &amp; Node.js</span>
              <span>PostgreSQL &amp; MongoDB</span>
            </div>
          </div>

          {/* Categorized cards */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <span className="eyebrow block">APPLIED DOMAINS</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="skill">
                <span className="eyebrow">01 /</span>
                <h3>Networking &amp; Infrastructure</h3>
                <p>
                  Cisco IOS, Packet Tracer, OSPF, VLANs, STP, NAT, DHCP, ACLs,
                  TCP/IP, Wireshark, MQTT, and wireless networking (IEEE 802.11).
                </p>
              </div>
              <div className="skill">
                <span className="eyebrow">02 /</span>
                <h3>Mobile Engineering</h3>
                <p>
                  Flutter, Dart, React Native, Expo, TypeScript, and Firebase for real-time applications.
                </p>
              </div>
              <div className="skill">
                <span className="eyebrow">03 /</span>
                <h3>Web Systems &amp; Databases</h3>
                <p>
                  Next.js, React, Node.js, Express, PostgreSQL, MongoDB, Prisma ORM, Git, and RESTful APIs.
                </p>
              </div>
              <div className="skill">
                <span className="eyebrow">04 /</span>
                <h3>Cloud, Systems &amp; Security</h3>
                <p>AWS, Linux administration, shell scripting, Docker, Git/GitHub,
                  CI/CD foundations, VPNs, cybersecurity fundamentals, and beginner-level Nmap.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackgroundDetails />

      {/* ====================================================================
          06 CONTACT
          ==================================================================== */}
      <section id="contact" className="contact">
        <div className="wrap">
          <div className="section-divider" aria-hidden="true">
            <span className="section-divider-num">06</span>
            <span className="section-divider-title">CONTACT</span>
            <span className="section-divider-line" />
          </div>

          <div className="contact-inner pt-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch.</h2>
            <div className="contact-bottom">
              <p className="font-serif italic text-lg text-[var(--muted)] dark:text-[#8e887f]">
                Seeking a network engineering or DevOps internship,
                <br />
                and technical collaborations.
              </p>
              <a className="contact-email" href="mailto:udayacgamage@gmail.com">
                udayacgamage@gmail.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
