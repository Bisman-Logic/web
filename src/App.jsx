import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header/Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="logo-section">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Bisman Logic LLC" className="company-logo" />
            <div className="company-info">
              <h1 className="company-name">Bisman Logic LLC</h1>
              <p className="tagline">Secure Custom Applications</p>
            </div>
          </div>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#services" onClick={closeMobileMenu}>Services</a>
            <a href="#tech" onClick={closeMobileMenu}>Technology</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
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
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Start Your Project</a>
            <a href="#services" className="cta-button-secondary">Learn More</a>
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

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bisman Logic?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Efficient development process ensuring timely delivery without compromising quality</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Focused Expertise</h3>
              <p>Specialized in Electron and React, providing deep knowledge and best practices</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💼</div>
              <h3>Professional Service</h3>
              <p>Direct communication with experienced developers, no middlemen or bureaucracy</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔧</div>
              <h3>Ongoing Support</h3>
              <p>Continued maintenance and updates to keep your application running smoothly</p>
            </div>
          </div>
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

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Development Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>Understanding your requirements and defining project scope</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Design & Architecture</h3>
              <p>Creating technical specifications and system design</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Development</h3>
              <p>Building your application with clean, maintainable code</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Testing & Deployment</h3>
              <p>Rigorous testing and smooth deployment to production</p>
            </div>
            <div className="process-step">
              <div className="process-number">5</div>
              <h3>Support & Maintenance</h3>
              <p>Ongoing support and updates as your needs evolve</p>
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
          <div className="contact-content">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:bismanlogic@gmail.com">bismanlogic@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <strong>Business Type</strong>
                    <p>Software Engineering Consulting</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌍</span>
                  <div>
                    <strong>Availability</strong>
                    <p>Remote Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <p className="form-description">
                Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <form className="contact-form" action="mailto:bismanlogic@gmail.com" method="post" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
