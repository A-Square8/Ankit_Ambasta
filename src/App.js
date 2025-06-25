// App.js
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Typing animation for name
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Ankit Ambasta';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // All skills including IoT skills and new additions
  const skills = [
    { name: 'C++', icon: 'fab fa-cuttlefish', color: '#00599C' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'Java', icon: 'fab fa-java', color: '#ED8B00' },
    { name: 'C', icon: 'fas fa-code', color: '#A8B9CC' },
    { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
    { name: 'RESTful APIs', icon: 'fas fa-exchange-alt', color: '#FF6B6B' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
    { name: 'PL/SQL', icon: 'fas fa-table', color: '#F80000' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
    { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
    { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Google Cloud', icon: 'fab fa-google', color: '#4285F4' },
    // IoT and Embedded Systems Skills
    { name: 'Sensors & Actuators', icon: 'fas fa-microchip', color: '#4CAF50' },
    { name: 'IoT', icon: 'fas fa-network-wired', color: '#2196F3' },
    { name: 'Fog Computing', icon: 'fas fa-cloud', color: '#9C27B0' },
    { name: 'Embedded System', icon: 'fas fa-microchip', color: '#FF5722' },
    { name: 'Arduino', icon: 'fas fa-microchip', color: '#00979D' },
    { name: 'Proteus', icon: 'fas fa-cogs', color: '#FF6B35' }
  ];

  const projects = [
    {
      title: 'KharchaWise',
      description: 'Real-time financial management web application using Firebase with support for 100+ transactions/sec.',
      tech: ['Firebase', 'JavaScript', 'CSS'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: 'https://github.com/A-Square8/KharchaWise',
      live: 'https://kharcha-wise.vercel.app/'
    },
    {
      title: 'AI-Powered Industrial Safety System',
      description: 'IoT safety monitoring system for real-time hazard detection using ESP32 and AI-driven analysis.',
      tech: ['ESP32', 'MongoDB', 'Node.js', 'AI'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: 'https://github.com/ambastaankit8/industrial-safety'
    },
    {
      title: 'MediTrack',
      description: 'Comprehensive Android medicine reminder app with smart notifications, analytics dashboard, PDF reporting, and SQLite database for tracking medication schedules and adherence.',
      tech: ['Kotlin', 'Android', 'SQLite', 'Material Design'],
      gradient: 'linear-gradient(135deg, #ff9a56 0%, #ffad56 100%)',
      github: 'https://github.com/A-Square8/MediTrack2',
    },
    {
      title: 'Smart Suit for Industrial Workers',
      description: 'Software simulation of a wearable smart suit with sensors and actuators to monitor workers\' health, safety, and performance in extreme industrial environments.',
      tech: ['Arduino', 'Proteus', 'Sensors', 'Simulation'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      github: 'https://github.com/A-Square8/Smart-Suit-for-Industrial-Workers'
    }
  ];

  const sections = ['Home', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      {/* Animated Background */}
      <motion.div
        className="animated-background"
        style={{ y: backgroundY }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-code"></i> Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {sections.map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button onClick={() => scrollToSection(section.toLowerCase())}>
                {section}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="menu-toggle mobile-only"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="hamburger"
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.div
            className="hamburger"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className="hamburger"
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay mobile-only"
            initial={{ clipPath: "circle(0% at 90% 10%)" }}
            animate={{ clipPath: "circle(150% at 90% 10%)" }}
            exit={{ clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.ul className="menu-items">
              {sections.map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 20, scale: 1.1 }}
                  onClick={() => scrollToSection(section.toLowerCase())}
                >
                  {section}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="profile-container"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              duration: 1.5
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 0 50px rgba(102, 126, 234, 0.8)"
            }}
          >
            <div className="profile-image">
              <img src="/AnkitBitMoji.png" alt="Ankit Ambasta" />
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {displayedText}
            <motion.span
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            B.Tech - CSE With Internet of Things | VIT Vellore
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1x5xSZvDPm8WudvyH8KtasmD2RJ6EAJeD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download"></i> Download CV
            </motion.a>
            <motion.button
              className="btn btn-secondary"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-envelope"></i> Contact Me
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="skills-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-cogs"></i> Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                boxShadow: `0 10px 30px ${skill.color}40`
              }}
              viewport={{ once: true }}
              style={{ '--skill-color': skill.color }}
            >
              <i className={skill.icon} style={{ color: skill.color }}></i>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-project-diagram"></i> Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              viewport={{ once: true }}
              style={{ background: project.gradient }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.2 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-buttons">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-address-book"></i> Get In Touch
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-grid">
            <motion.a
              href="tel:+916395727518"
              className="contact-item"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-phone"></i>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 63957 27518</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:ambastaankit8@gmail.com"
              className="contact-item"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
              <div className="contact-details">
                <h4>Email</h4>
                <p>ambastaankit8@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/A-Square8"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
              <div className="contact-details">
                <h4>GitHub</h4>
                <p>@A-Square8</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ankit-ambasta-4a58002b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p>Ankit Ambasta</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="location-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-map-marker-alt"></i>
            <span>Gujarat, India</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default App;
