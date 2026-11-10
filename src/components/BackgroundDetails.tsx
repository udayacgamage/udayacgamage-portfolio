export default function BackgroundDetails() {
  return (
    <section id="education" className="section wrap" aria-labelledby="background-heading">
      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-num">05</span>
        <span className="section-divider-title">EDUCATION &amp; CREDENTIALS</span>
        <span className="section-divider-line" />
      </div>
      <div className="section-heading">
        <h2 id="background-heading">A foundation in network technology.</h2>
        <p className="font-serif italic text-lg text-[var(--muted)]">Academic work, professional learning<br />and community involvement.</p>
      </div>
      <div className="background-grid">
        <div>
          <article className="education-record">
            <span className="eyebrow">2024 — PRESENT</span>
            <h3>BICT (Honours)</h3>
            <p className="credential-institution">University of Sri Jayewardenepura</p>
            <p>Faculty of Technology · Specialization in Network Technology</p>
            <div className="academic-stat"><strong>3.87<span> / 4.00</span></strong><span>Current GPA</span></div>
            <h4>Relevant coursework</h4>
            <p>Networking Essentials, Network Systems Design, Advanced Networking, Computer Security, Wireless Communication, and Distributed Networks.</p>
          </article>
          <article className="education-record">
            <span className="eyebrow">2022/23 · G.C.E. ADVANCED LEVEL</span>
            <h3>Technology stream · 3 As</h3>
            <p>District rank 1 · Island rank 5</p>
            <p>Presidential Appreciation Award</p>
          </article>
          <article className="education-record">
            <span className="eyebrow">2019 · G.C.E. ORDINARY LEVEL</span>
            <h3>9 As</h3>
          </article>
        </div>
        <div className="credentials-column">
          <div>
            <h3 className="credential-group-title">Certifications &amp; learning</h3>
            <ul className="credential-list">
              <li><span className="credential-state">Completed</span><h4>AWS Certified Cloud Practitioner</h4><p>Amazon Web Services</p></li>
              <li><span className="credential-state">Completed · 2026</span><h4>DevOps Foundations: Continuous Delivery / Continuous Integration</h4><p>LinkedIn Learning</p></li>
              <li><span className="credential-state">Completed · 2026</span><h4>Security in the 6G Era</h4><p>IEEE ComSoc Student Branch Chapter, USJ</p></li>
              <li><span className="credential-state in-progress">In progress</span><h4>Cisco Networking Academy</h4><p>Networking Basics · Introduction to Cybersecurity · Cisco Network Support and Security</p></li>
            </ul>
          </div>
          <div className="community-details">
            <h3 className="credential-group-title">Beyond the classroom</h3>
            <ul>
              <li>Organizing team member, CRYPT-X cybersecurity CTF challenge.</li>
              <li>Member, IEEE ComSoc Student Branch Chapter, University of Sri Jayewardenepura.</li>
              <li>Member, Information and Communication Technology Society (ICTS), University of Sri Jayewardenepura.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
