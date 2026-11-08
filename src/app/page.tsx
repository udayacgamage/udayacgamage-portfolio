import Image from "next/image";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <section id="home" className="hero wrap">
        <div>
          <p className="eyebrow">● NETWORKING · CYBER SECURITY · SRI LANKA</p>
          <h1>
            Network engineering &amp;
            <br />
            <em>software development.</em>
          </h1>
          <p className="intro">
            I’m Udaya Chathuranga, an Information and Communication Technology
            undergraduate at the University of Sri Jayewardenepura.
          </p>
          <p className="description">
            I build software around networking protocols, IoT telemetry
            pipelines, and mobile applications using Flutter, React Native,
            and Node.js.
          </p>
          <div className="actions">
            <a className="button" href="#projects">
              View Projects ↗
            </a>
            <a className="text-link" href="mailto:udayacgamage@gmail.com">
              Email Me ↗
            </a>
          </div>
          <div className="hero-note">
            COLOMBO, SRI LANKA <span>BICT UNDERGRADUATE · USJ</span>
          </div>
        </div>
        <div className="portrait-block">
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Udaya Chathuranga"
              fill
              priority
              sizes="(max-width:760px) 90vw, 38vw"
              className="portrait"
            />
            <span className="portrait-marker">UC.</span>
          </div>
          <div className="portrait-caption">
            <span>Udaya Chathuranga</span>
            <span>Networks, IoT &amp; Software</span>
          </div>
        </div>
      </section>

      <div className="expertise-strip">
        <div className="wrap">
          <span>NETWORK ENGINEERING</span>
          <i>✳</i>
          <span>CYBER SECURITY</span>
          <i>✳</i>
          <span>IOT &amp; TELEMETRY</span>
          <i>✳</i>
          <span>MOBILE &amp; WEB</span>
        </div>
      </div>

      <section id="networking" className="section wrap network-focus">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / NETWORKS &amp; IOT</p>
            <h2>Telemetry pipelines &amp; protocols.</h2>
          </div>
          <p>
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
              <h3>Interactive network labs</h3>
              <p>
                Developing Cloudpath to help students visualize packet routing,
                CIDR subnetting, and ARP resolution through in-browser simulated
                labs.
              </p>
            </div>
            <div>
              <span className="eyebrow">SYSTEMS &amp; SECURITY</span>
              <h3>Linux &amp; infrastructure</h3>
              <p>
                Working with Linux server environments, Docker containerization,
                and transport security (TLS) for resilient client-server
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="about" className="about section wrap">
        <div>
          <p className="eyebrow">03 / BACKGROUND</p>
          <h2>
            Engineering foundation,
            <br />
            <em>practical execution.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m a BICT undergraduate at the University of Sri Jayewardenepura,
            specializing in network engineering, systems administration, and
            application development.
          </p>
          <p>
            My projects focus on connecting hardware and distributed services:
            MQTT telemetry for bridge sensors, cross-platform mobile apps using
            Flutter and React Native, and full-stack web platforms backed by
            PostgreSQL and MongoDB.
          </p>
          <div className="about-facts">
            <div>
              <span>UNIVERSITY</span>
              <strong>University of Sri Jayewardenepura</strong>
              <p>Bachelor of Information and Communication Technology</p>
            </div>
            <div>
              <span>TECHNICAL FOCUS</span>
              <strong>Networks, Security &amp; Systems</strong>
              <p>Routing protocols, Linux, and cloud infrastructure.</p>
            </div>
          </div>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/udaya-chathuranga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile ↗
          </a>
        </div>
      </section>

      <section id="skills" className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / TECHNICAL SKILLS</p>
            <h2>Languages, tools &amp; protocols.</h2>
          </div>
          <p>
            Technologies applied across
            <br />
            academic and personal projects.
          </p>
        </div>
        <div className="skill-grid">
          {[
            [
              "01",
              "Networking & infrastructure",
              "MQTT, WebSockets, TCP/IP, Wireshark, Linux administration, Docker, and AWS basics.",
            ],
            [
              "02",
              "Mobile development",
              "Flutter, Dart, React Native, Expo, TypeScript, and Firebase.",
            ],
            [
              "03",
              "Web & databases",
              "Next.js, React, Node.js, Express, PostgreSQL, MongoDB, Prisma, Git, and Postman.",
            ],
          ].map(([n, title, detail]) => (
            <div className="skill" key={n}>
              <span className="eyebrow">{n} /</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap contact-inner">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Get in touch.</h2>
          <div className="contact-bottom">
            <p>
              Open to software and network engineering roles, internships,
              <br />
              and technical collaborations.
            </p>
            <a className="contact-email" href="mailto:udayacgamage@gmail.com">
              udayacgamage@gmail.com ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
