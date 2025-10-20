import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header/Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="logo-section">
            <h1 className="company-name">Bisman Logic LLC</h1>
            <p className="tagline">Secure Custom Applications</p>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#tech">Technology</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="container">
          <h2 className="hero-title">Professional Software Engineering</h2>
          <p className="hero-subtitle">
            Building secure, custom applications with modern technologies
          </p>
          <div className="hero-badges">
            <span className="badge">Electron</span>
            <span className="badge">React</span>
            <span className="badge">Security-First</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Bisman Logic LLC is a professional software engineering company dedicated to 
            creating secure, custom applications for businesses and organizations. With 
            expertise in modern web and desktop technologies, we deliver robust solutions 
            tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Desktop Applications</h3>
              <p>Cross-platform desktop apps built with Electron for Windows, macOS, and Linux</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Applications</h3>
              <p>Modern, responsive web applications using React and cutting-edge frameworks</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Security-First Development</h3>
              <p>Applications designed with security as a core principle, protecting your data</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Custom Solutions</h3>
              <p>Tailored software solutions designed to meet your unique business requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="section tech-section">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Modern UI Frameworks</li>
              </ul>
            </div>
            <div className="tech-item">
              <h4>Desktop</h4>
              <ul>
                <li>Electron</li>
                <li>Node.js</li>
                <li>Cross-platform Development</li>
                <li>Native Integrations</li>
              </ul>
            </div>
            <div className="tech-item">
              <h4>Security</h4>
              <ul>
                <li>Secure Coding Practices</li>
                <li>Data Encryption</li>
                <li>Authentication & Authorization</li>
                <li>Security Audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-text">
            Ready to discuss your next project? Let's build something amazing together.
          </p>
          <div className="contact-info">
            <p className="contact-text">
              Contact us to learn more about how we can help bring your ideas to life 
              with secure, professional software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Bisman Logic LLC. All rights reserved.</p>
          <p className="footer-tagline">Secure Custom Applications with Electron & React</p>
        </div>
      </footer>
    </div>
  )
}

export default App
