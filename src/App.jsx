import "./App.css";

const projects = [
{
  number: "01",
  title: "System & Network Security Monitoring Tool",
  technologies: "Python • Nmap • Scapy",
  status: "Complete",
  description:
  "Built a Python security monitoring tool that analyzes system logs, monitors CPU and memory usage, and generates alerts when suspicious activity is detected.",
details:
  "Integrated Nmap service detection and Scapy packet capture to analyze local network activity and identify source and destination IP addresses.",
  links: [
    {
      text: "View on GitHub →",
      url: "https://github.com/ekim23205/system-network-security-monitor",
    },
  ],
},

  {
  number: "02",
  title: "Campus Password Strength Checker",
  technologies: "JavaScript • HTML • CSS",
  status: "Live",
  description:
  "Built an interactive password strength checker that evaluates passwords based on length, character variety, and common security weaknesses.",
details:
  "Implemented real-time security feedback entirely in the browser so entered passwords are never transmitted to or stored on a server.",
  links: [
    {
      text: "Live Demo →",
      url: "https://ekim23205.github.io/campus-password-strength-checker/",
    },
    {
      text: "View on GitHub →",
      url: "https://github.com/ekim23205/campus-password-strength-checker",
    },
  ],
},

{
  number: "03",
  title: "Active Directory Home Lab",
  technologies: "Windows Server 2022 • Active Directory • DNS • VirtualBox",
  status: "Complete",
  description:
    "Built a virtual Windows domain environment using Windows Server 2022 and Windows 10 to simulate how organizations centrally manage users and computers.",
  details:
    "Configured the lab.local domain, DNS, organizational units, user accounts, and security groups. Connected a Windows 10 client to the domain and verified centralized authentication and computer management through Active Directory.",
  links: [
    {
      text: "View on GitHub →",
      url: "https://github.com/ekim23205/active-directory-home-lab",
    },
  ],
},
];

function App() {
  return (
    <div>

      {/* NAVIGATION */}
      <nav>
        <h2>Eun Kim</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
  href="/Cybersecurity-portfolio/Eun-Kim-Resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  Resume
</a>
        </div>
      </nav>


      <main>

        {/* HERO */}
        <section className="hero">
  <div className="hero-content">

    <div className="status">
      <span className="status-dot"></span>
      OPEN TO CYBERSECURITY OPPORTUNITIES
    </div>

    <p className="intro">Hello, I'm</p>

    <h1>Eun Kim</h1>

    <h2>Cybersecurity Management & Analytics Student</h2>

    <p className="hero-description">
      Cybersecurity student at Virginia Tech interested in network
      security, security monitoring, and building practical tools
      that improve system security.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View My Projects
      </a>

      <a href="#contact" className="secondary-button">
        Contact Me
      </a>

      <a
        href="/Cybersecurity-portfolio/Eun-Kim-Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="secondary-button"
      >
        View Resume
      </a>
    </div>

  </div>

  <div className="hero-terminal">
    <div className="terminal-top">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="terminal-content">
      <p><span>$</span> whoami</p>
      <p className="terminal-result">Eun Kim</p>

      <p><span>$</span> field</p>
      <p className="terminal-result">Cybersecurity</p>

      <p><span>$</span> focus</p>
      <p className="terminal-result">
        Network Security / Security Monitoring
      </p>

      <p><span>$</span> status</p>
      <p className="terminal-success">
        ● Building & Learning
      </p>

      <p className="cursor-line">
        <span>$</span> <span className="cursor"></span>
      </p>
    </div>
  </div>
</section>




        {/* ABOUT */}
        <section id="about">

          <p className="section-label">ABOUT</p>

          <h2>About Me</h2>

          <p className="section-description">
            I'm a cybersecurity student with experience building
            security-focused projects using Python, JavaScript,
            Nmap, Scapy, and other technologies. I enjoy applying
            cybersecurity concepts to practical problems involving
            network monitoring, system security, and automation.
          </p>

        </section>


        {/* EDUCATION */}
        <section id="education">

          <p className="section-label">EDUCATION</p>

          <h2>Education</h2>

          <div className="card">

            <div className="card-header">
              <div>
                <h3>Virginia Tech</h3>
                <p>Pamplin College of Business</p>
              </div>

              <p>Jan. 2026 – May 2028</p>
            </div>

            <p>
              B.S. in Business, Cybersecurity Management and Analytics
            </p>

            <p>GPA: 3.5 / 4.0 • Dean's List</p>

            <p className="technologies">
              Cybersecurity Foundations • Statistical Analytics • Linux
            </p>

          </div>


          <div className="card">

            <div className="card-header">
              <div>
                <h3>George Mason University</h3>
                <p>Volgenau School of Engineering</p>
              </div>

              <p>Aug. 2024 – Dec. 2025</p>
            </div>

            <p>
              B.S. Cybersecurity Engineering
            </p>

            <p>GPA: 3.6 / 4.0 • Dean's List</p>

            <p className="technologies">
              Cybersecurity Engineering • Python • Java
            </p>

          </div>

        </section>


        {/* PROJECTS */}
<section id="projects">

  <p className="section-label">PORTFOLIO</p>

  <h2>Featured Projects</h2>

  <div className="project-grid">
    {projects.map((project) => (
      <div
        className="project-card"
        key={project.number}
      >

        <div className="project-card-top">
          <p className="project-number">
            {project.number}
          </p>

          <span className="project-status">
            {project.status}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p className="technologies">
          {project.technologies}
        </p>

        <p>{project.description}</p>

        <p>{project.details}</p>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>

      </div>
    ))}
  </div>

</section>

        {/* EXPERIENCE */}
        <section id="experience">

          <p className="section-label">EXPERIENCE</p>

          <h2>Work Experience</h2>


          <div className="experience-item">

            <div className="experience-heading">
              <div>
                <h3>Wegmans</h3>
                <p>Stocking Associate</p>
              </div>

              <p>Jul. 2025 – Present</p>
            </div>

            <ul>
              <li>
                Managed inventory counting programs to support
                efficient store operations.
              </li>

              <li>
                Organized and monitored inventory for efficient
                storage and retrieval.
              </li>

              <li>
                Assisted customers with locating products.
              </li>
            </ul>

          </div>


          <div className="experience-item">

            <div className="experience-heading">
              <div>
                <h3>Hasang Korean School</h3>
                <p>Teacher's Assistant</p>
              </div>

              <p>Jun. 2022 – Jul. 2023</p>
            </div>

            <ul>
              <li>
                Assisted in teaching students ranging from
                Pre-K through high school.
              </li>

              <li>
                Used Excel, Word, PowerPoint, and Zoom to support
                classes and school events.
              </li>

              <li>
                Created presentations and spreadsheets for
                instructional activities.
              </li>
            </ul>

          </div>
          <div className="experience-item">

  <div className="experience-heading">
    <div>
      <h3>Virginia Delegate Irene Shin</h3>
      <p>Campaign Assistant</p>
    </div>

    <p>Oct. 2021 – Dec. 2021</p>
  </div>

  <ul>
    <li>
      Supported campaign outreach and community engagement efforts.
    </li>

    <li>
      Created and maintained an Excel call sheet to organize
      campaign outreach information.
    </li>

    <li>
      Developed digital advertisements using Microsoft tools
      to support campaign marketing and engagement.
    </li>
  </ul>

</div>

        </section>


        {/* SKILLS */}
<section id="skills">

  <p className="section-label">SKILLS</p>

  <h2>Technical Skills</h2>

  <div className="skill-categories">

    <div className="skill-category">
      <h3>Languages</h3>
      <div className="skills">
        <span>Python</span>
        <span>Java</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Development</h3>
      <div className="skills">
        <span>React</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Cybersecurity & Systems</h3>
      <div className="skills">
        <span>Linux</span>
        <span>Kali Linux</span>
        <span>Nmap</span>
        <span>Scapy</span>
      </div>
    </div>

  </div>

</section>


        {/* CONTACT */}
        <section id="contact">

          <p className="section-label">CONTACT</p>

          <h2>Let's Connect</h2>

          <p>
            I'm always interested in learning more about
            cybersecurity and connecting with others in the field.
          </p>

          <div className="contact-links">

            <a
              href="https://www.linkedin.com/in/eun-kim23"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
  href="https://github.com/ekim23205"
  target="_blank"
  rel="noreferrer"
>
  GitHub
</a>

            <a href="mailto:ekim23@vt.edu">
              Email
            </a>

          </div>

        </section>

      </main>

<footer>
  <p>Designed & Built by Eun Kim</p>

  <div className="footer-links">
    <a
      href="https://github.com/ekim23205"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/eun-kim23"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <a href="mailto:ekim23@vt.edu">
      Email
    </a>
  </div>
</footer>

    </div>
  );
}

export default App;