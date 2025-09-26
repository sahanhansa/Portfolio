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
    <nav className="fixed top-0 w-full bg-dark bg-opacity-95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            className="text-2xl font-bold text-primary hover:text-opacity-80 transition-colors duration-300" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
          >
            Sahan Siriwardhana
          </a>
          
          <ul className={`flex items-center space-x-8 ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
            <li>
              <a 
                href="#home" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'home' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
              >
                Introduction
                {activeSection === 'home' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'education' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
              >
                Education
                {activeSection === 'education' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'projects' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
              >
                Projects
                {activeSection === 'projects' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'skills' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
              >
                Skills
                {activeSection === 'skills' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#volunteering" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'volunteering' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('volunteering') }}
              >
                Volunteering
                {activeSection === 'volunteering' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'experience' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
              >
                Work Experience
                {activeSection === 'experience' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#certifications" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'certifications' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('certifications') }}
              >
                Certifications
                {activeSection === 'certifications' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'testimonials' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}
              >
                Testimonials
                {activeSection === 'testimonials' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#blogs" 
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative ${
                  activeSection === 'blogs' ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={(e) => { e.preventDefault(); scrollToSection('blogs') }}
              >
                Blogs
                {activeSection === 'blogs' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
          </ul>
          
          <a 
            href="#contact" 
            className="btn btn-primary hidden md:inline-block"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
          >
            Contact Me
          </a>
          
          <button 
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
