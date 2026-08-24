import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/priya logo.jpg";
import myPhoto from "./assets/myphoto.jpg";

import { QRCodeCanvas } from "qrcode.react";

import backgroundVideo from "./assets/portfolio_background.mp4";

import aalan from "./assets/Aalan tech.jpg";
import codebind from "./assets/codebind.jpg";
import gerogy from "./assets/gerogy.jpg";
import guvi from "./assets/guvi.jpg";

import presentation1 from "./assets/presentation1.jpg";
import presentation2 from "./assets/presentation2.jpg";
import presentation3 from "./assets/presentation3.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  /* ================= TYPING EFFECT ================= */

  const roles = [
    "Aspiring Full Stack Developer",
    "Front End Developer",
    "Python Developer",
    "Web Developer",
  ];

  const [role, setRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setRole(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 90);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setRole("");
    }, 1800);

    return () => clearTimeout(timer);
  }, [charIndex, roleIndex]);

  /* ================= SCROLL REVEAL ================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* ================= SKILL SCROLL ANIMATION ================= */

  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skill-active");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  /* ================= BACK TO TOP ================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================= CLOSE MENU ================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ================= CLOSE MENU ON ESC ================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ================= CONTACT FORM ================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
  };

  return (
    <div className="portfolio">

      {/* ================= BACKGROUND VIDEO ================= */}

      <video
  className="background-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source src={backgroundVideo} type="video/mp4" />
</video>

<div className="video-overlay"></div>


      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        {/* LOGO IMAGE */}

        <div className="nav-logo">
  <img src={logo} alt="Priyadharshini Logo" />

  <div className="logo-name">
    Priyadharshini
  </div>
</div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* NAVIGATION LINKS */}

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certificates
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

      </nav>

      {/* ================= HOME ================= */}

      <section id="home" className="home reveal">

        <div className="home-content">

          <p className="hello">
            Hello, I'm
          </p>

          <h1>
            Priyadharshini M
          </h1>

          <h2 className="typing-text">
            {role}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I am a Computer Science Engineering graduate passionate
            about developing modern web applications and learning
            full-stack technologies.
          </p>

          <div className="buttons">

            {/* SOCIAL LINKS */}

            <div className="social-icons">

              <a
                href="https://github.com/mspriyadharshini"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/priya-dharshini-50a22a32b/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                LinkedIn
              </a>

            </div>

            <a href="#projects" className="btn">
              View Projects
            </a>

            <a
              href="/PRIYA_RESUME.pdf"
              download="Priyadharshini_Resume.pdf"
              className="btn"
            >
              📄 Download Resume
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>

          </div>

        </div>

        {/* PROFILE */}

        <div className="profile">

          <div className="profile-circle">

            <img
              src={myPhoto}
              alt="Priyadharshini"
            />

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section reveal">

        <h2>About Me</h2>

        <div className="about-card">

          <p>
            I am a Computer Science Engineering graduate interested in
            Full Stack Development, React, JavaScript, Python and MySQL.
            I enjoy building responsive web applications and continuously
            improving my technical skills through practical projects.
          </p>

          <div className="about-highlights">

            <div>
              <span>🎓</span>
              <strong>CSE Graduate</strong>
            </div>

            <div>
              <span>💻</span>
              <strong>Web Development</strong>
            </div>

            <div>
              <span>🐍</span>
              <strong>Python Development</strong>
            </div>

            <div>
              <span>🚀</span>
              <strong>Continuous Learning</strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section reveal">

        <h2>My Skills</h2>

        <p className="skills-subtitle">
          Technologies and tools I use to build modern web applications
        </p>

        {/* PROGRAMMING */}

        <h3 className="skill-category">
          Programming & Development
        </h3>

        <div className="skills-grid">

          <div className="skill-card skill-1">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Programming & Development</p>
          </div>

          <div className="skill-card skill-2">
            <div className="skill-icon">⚛️</div>
            <h3>React.js</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card skill-3">
            <div className="skill-icon">🌐</div>
            <h3>HTML5</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card skill-4">
            <div className="skill-icon">🎨</div>
            <h3>CSS3</h3>
            <p>Web Styling</p>
          </div>

          <div className="skill-card skill-5">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card skill-6">
            <div className="skill-icon">🔧</div>
            <h3>Tailwind CSS</h3>
            <p>UI Development</p>
          </div>

        </div>

        {/* DATABASE */}

        <h3 className="skill-category">
          Database
        </h3>

        <div className="skills-grid database-grid">

          <div className="skill-card skill-1">
            <div className="skill-icon">🗄️</div>
            <h3>MySQL</h3>
            <p>Relational Database</p>
          </div>

          <div className="skill-card skill-2">
            <div className="skill-icon">💾</div>
            <h3>SQLite</h3>
            <p>Database Management</p>
          </div>

        </div>

        {/* TOOLS */}

        <h3 className="skill-category">
          Tools & Productivity
        </h3>

        <div className="skills-grid tools-skills-grid">

          <div className="skill-card skill-1">
            <div className="skill-icon">💻</div>
            <h3>VS Code</h3>
            <p>Code Editor</p>
          </div>

          <div className="skill-card skill-2">
            <div className="skill-icon">🔧</div>
            <h3>Git</h3>
            <p>Version Control</p>
          </div>

          <div className="skill-card skill-3">
            <div className="skill-icon">🐙</div>
            <h3>GitHub</h3>
            <p>Code Repository</p>
          </div>

          <div className="skill-card skill-4">
            <div className="skill-icon">🎨</div>
            <h3>Canva</h3>
            <p>Graphic Design</p>
          </div>

          <div className="skill-card skill-5">
            <div className="skill-icon">🖌️</div>
            <h3>Figma</h3>
            <p>UI/UX Design</p>
          </div>

          <div className="skill-card skill-6">
            <div className="skill-icon">📊</div>
            <h3>PowerPoint</h3>
            <p>Presentation</p>
          </div>

          <div className="skill-card skill-1">
            <div className="skill-icon">📝</div>
            <h3>MS Word</h3>
            <p>Documentation</p>
          </div>

          <div className="skill-card skill-2">
            <div className="skill-icon">📈</div>
            <h3>MS Excel</h3>
            <p>Spreadsheet & Data</p>
          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section reveal">

        <h2>My Projects</h2>

        <div className="projects-container">

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>ThyroScanner</h3>

            <p>
              Explainable Ensemble Learning based Thyroid Disease
              Classification and Management System.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>Machine Learning</span>
              <span>SQLite</span>
            </div>

          </div>

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>Personal Portfolio</h3>

            <p>
              Responsive portfolio developed using HTML, CSS,
              JavaScript and React.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>HTML</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section reveal">

        <h2>Internship & Experience</h2>

        <div className="experience-container">

          <div className="experience-card">

            <div className="experience-icon">
              💼
            </div>

            <div className="experience-content">

              <h3>
                Web Development Intern
              </h3>

              <h4>
                Code Bind Technologies
              </h4>

              <p className="experience-date">
                June 2025 – July 2025
              </p>

              <p>
                Completed a one-month internship in Web Development.
                Gained practical experience in developing web applications
                and working with modern web technologies.
              </p>

              <div className="experience-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>Web Development</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section reveal">

        <h2>Education</h2>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <h3>
            B.E. Computer Science and Engineering
          </h3>

          <p>
            Annapoorana Engineering College
          </p>

           <p>
           Salem-636308
          </p>

          <p>
            2022 - 2026
          </p>

          <div className="cgpa">
            CGPA: 8.75
          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section id="certifications" className="section reveal">

        <h2>My Certifications</h2>

        {/* INTERNSHIP */}

        <h3 className="certificate-category">
          💼 Internship & Project Experience
        </h3>

        <div className="certificates-container">

          <div className="certificate-card">

            <img
              src={aalan}
              alt="Java Programming Internship Certificate"
            />

            <h3>
              Java Programming Internship
            </h3>

            <p>
              Aalan Tech Soft
            </p>

            <a
              href={aalan}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

          <div className="certificate-card">

            <img
              src={codebind}
              alt="CodeBind Project Completion Certificate"
            />

            <h3>
              Photography Website Project
            </h3>

            <p>
              HTML | CSS | JavaScript | PHP | MySQL
            </p>

            <a
              href={codebind}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

        </div>

        {/* TECHNICAL */}

        <h3 className="certificate-category">
          🎓 Technical Certifications
        </h3>

        <div className="certificates-container">

          <div className="certificate-card">

            <img
              src={gerogy}
              alt="iOS App Development Certificate"
            />

            <h3>
              iOS App Development
            </h3>

            <p>
              George Academy
            </p>

            <a
              href={gerogy}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

        </div>

        {/* WORKSHOP */}

        <h3 className="certificate-category">
          🎤 Workshops & Seminars
        </h3>

        <div className="certificates-container">

          <div className="certificate-card">

            <img
              src={guvi}
              alt="GUVI HCL Workshop Certificate"
            />

            <h3>
              Full Stack Development Workshop
            </h3>

            <p>
              GUVI | HCL
            </p>

            <a
              href={guvi}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

        </div>

        {/* CONFERENCES */}

        <h3 className="certificate-category">
          📚 Conferences & Paper Presentations
        </h3>

        <div className="certificates-container">

          <div className="certificate-card">

            <img
              src={presentation1}
              alt="ICCBIET 2025 Conference Certificate"
            />

            <h3>
              ICCBIET'25
            </h3>

            <p>
              Smart Agriculture using IoT & Deep Learning
            </p>

            <a
              href={presentation1}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

          <div className="certificate-card">

            <img
              src={presentation2}
              alt="Inspire 25 Paper Presentation Certificate"
            />

            <h3>
              Inspire 25
            </h3>

            <p>
              Paper Presentation – Certificate of Merit
            </p>

            <a
              href={presentation2}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

          <div className="certificate-card">

            <img
              src={presentation3}
              alt="MRIET 2026 Conference Certificate"
            />

            <h3>
              MRIET-2026
            </h3>

            <p>
              Explainable Ensemble Learning-Based System
              for Thyroid Disease Classification
            </p>

            <a
              href={presentation3}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section reveal">

        <h2>Contact Me</h2>

        <p className="contact-subtitle">
          Feel free to contact me for opportunities, projects or collaborations.
        </p>

        {/* QR */}

       <div className="qr-section">
  <h3>Scan My Resume</h3>

  <QRCodeCanvas
    value="http://192.168.43.240:5174/PRIYA_RESUME.pdf"
    size={200}
    level="H"
    includeMargin={true}
  />

  <p>Scan to view my Resume</p>
</div>

        <div className="contact-container">

          {/* CONTACT INFO */}

          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-icon">
                📧
              </div>

              <div>
                <h3>Email</h3>

                <a href="mailto:mspriyadharshini3@gmail.com">
                  mspriyadharshini3@gmail.com
                </a>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                📱
              </div>

              <div>
                <h3>Phone</h3>

                <a href="tel:+916369023280">
                  +91 6369023280
                </a>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                💻
              </div>

              <div>
                <h3>GitHub</h3>

                <a
                  href="https://github.com/mspriyadharshini"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/mspriyadharshini
                </a>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                🔗
              </div>

              <div>
                <h3>LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/priya-dharshini-50a22a32b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="contact-form">

            <h3>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">
                Send Message 
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ================= BACK TO TOP ================= */}

      {showTopButton && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Priyadharshini M | Portfolio
        </p>

      </footer>

    </div>
  );
}

export default App;