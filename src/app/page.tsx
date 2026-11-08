import Image from "next/image";
import Projects from "@/components/Projects";
import NetworkFlowSimulator from "@/components/NetworkFlowSimulator";
import InteractiveSkills from "@/components/InteractiveSkills";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Home() {
  return (
    <>
      <section id="home" className="hero wrap">
        <div>
          <p className="eyebrow">● NETWORKING · CYBER SECURITY · SRI LANKA</p>
          <h1>
            Connected systems.
            <br />
            <em>Curiosity at work.</em>
          </h1>
          <p className="intro">
            I’m Udaya Chathuranga, a network-focused developer exploring how
            devices communicate, services connect, and systems stay secure.
          </p>
          <p className="description">
            Networking and cyber security drive my learning. I put that
            curiosity into practice through IoT monitoring, network learning
            tools, and mobile applications.
          </p>
          <div className="actions">
            <a className="button" href="#projects">
              Explore my work ↗
            </a>
            <CopyEmailButton
              email="udayacgamage@gmail.com"
              className="copy-hero-btn"
            >
              <span>Copy Email ⧉</span>
            </CopyEmailButton>
            <a className="text-link" href="mailto:udayacgamage@gmail.com">
              Let’s talk ↗
            </a>
          </div>
          <div className="hero-note">
            BASED IN SRI LANKA <span>BUILDING WITH CURIOSITY</span>
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
            <span>Networks, systems & software ↗</span>
          </div>
        </div>
      </section>

      <div className="expertise-strip">
        <div className="wrap">
          <span>NETWORKING</span>
          <i>✳</i>
          <span>CYBER SECURITY</span>
          <i>✳</i>
          <span>CONNECTED SYSTEMS</span>
          <i>✳</i>
          <span>MOBILE DEVELOPMENT</span>
        </div>
      </div>

      <section id="networking" className="section wrap network-focus">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / NETWORKS &amp; CONNECTED SYSTEMS</p>
            <h2>Beyond the interface.</h2>
          </div>
          <p>
            Understanding the connections
            <br />
            that make software work.
          </p>
        </div>

        <div className="network-layout">
          {/* Live Interactive Telemetry Flow Simulator */}
          <NetworkFlowSimulator />

          <div className="network-interests">
            <div>
              <span className="eyebrow">EXPLORING / NETWORKING</span>
              <h3>How systems communicate</h3>
              <p>
                Wireless communication, routing concepts, and network
                infrastructure are central to my learning. Cloudpath brings
                these topics into visual lessons and simulated labs.
              </p>
            </div>
            <div>
              <span className="eyebrow">EXPLORING / SECURITY &amp; OPERATIONS</span>
              <h3>What keeps them dependable</h3>
              <p>
                I’m developing my understanding of cyber security, Linux, cloud
                infrastructure, and DevOps alongside hands-on software projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="about" className="about section wrap">
        <div>
          <p className="eyebrow">03 / ABOUT ME</p>
          <h2>
            Networks first.
            <br />
            <em>A builder’s mindset.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m a BICT undergraduate at the University of Sri Jayewardenepura,
            with a particular interest in network engineering, cyber security,
            and the infrastructure behind connected applications.
          </p>
          <p>
            I learn by building: an MQTT-connected monitoring app, visual
            networking lessons, mobile messaging, and full-stack platforms.
            Working across these layers helps me connect network concepts with
            the applications that depend on them.
          </p>
          <div className="about-facts">
            <div>
              <span>EDUCATION</span>
              <strong>University of Sri Jayewardenepura</strong>
              <p>BICT undergraduate</p>
            </div>
            <div>
              <span>CURRENT INTERESTS</span>
              <strong>Networks, security &amp; DevOps</strong>
              <p>Always learning, always building.</p>
            </div>
          </div>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/udaya-chathuranga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </section>

      <section id="skills" className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / THE TOOLKIT</p>
            <h2>From infrastructure to apps.</h2>
          </div>
          <p>
            A practical stack, shaped by
            <br />
            the problem at hand.
          </p>
        </div>

        {/* Live Interactive Skills Explorer */}
        <InteractiveSkills />

        <div className="skill-grid">
          {[
            [
              "01",
              "Networks & infrastructure",
              "MQTT & WebSockets in BridgeM. Exploring Linux, AWS, Docker, networking, and cyber security.",
            ],
            [
              "02",
              "Mobile development",
              "Flutter, Dart, Firebase, React Native, Expo & TypeScript",
            ],
            [
              "03",
              "Web, backend & workflow",
              "React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Git & Postman",
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
          <p className="eyebrow">05 / START A CONVERSATION</p>
          <h2>
            Have something
            <br />
            in mind? <em>Let’s build it.</em>
          </h2>
          <div className="contact-bottom">
            <p>
              For a project, a collaboration,
              <br />
              or a conversation about networks and technology.
            </p>
            <div className="contact-cta-group">
              <CopyEmailButton
                email="udayacgamage@gmail.com"
                className="contact-copy-btn"
              >
                <span>Copy Email ⧉</span>
              </CopyEmailButton>
              <a className="contact-email" href="mailto:udayacgamage@gmail.com">
                udayacgamage@gmail.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Interactive Terminal */}
      <InteractiveTerminal />
    </>
  );
}
