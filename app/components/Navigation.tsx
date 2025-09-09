'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const htmlElement = section as HTMLElement
        const sectionTop = htmlElement.offsetTop
        if (scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || ''
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
          Sahan Siriwardhana
        </a>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            >
              Introduction
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#work-experience" 
              className={`nav-link ${activeSection === 'work-experience' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('work-experience') }}
            >
              Work Experience
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
            >
              Volunteering
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#certifications" 
              className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('certifications') }}
            >
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#testimonials" 
              className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}
            >
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#blogs" 
              className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('blogs') }}
            >
              Blogs
            </a>
          </li>
        </ul>
        <a 
          href="#contact" 
          className="btn btn-primary"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
        >
          Contact Me
        </a>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
