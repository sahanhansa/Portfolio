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
    <nav className="fixed top-0 w-full bg-dark bg-opacity-95 backdrop-blur-sm border-b border-gray-800 z-50" style={{paddingTop: 'env(safe-area-inset-top)'}}>
      <div className="container max-w-full px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            className="text-xl font-bold text-primary hover:text-opacity-80 transition-colors duration-300 whitespace-nowrap flex-shrink-0" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
          >
            Sahan Siriwardhana
          </a>
          
          <div className="flex items-center space-x-4">
            <ul className={`flex items-center space-x-4 xl:space-x-6 ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
              <li>
                <a 
                  href="#home" 
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
                  className={`text-xs xl:text-sm font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
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
              className="px-3 py-1.5 bg-blue-600 text-white text-xs xl:text-sm rounded font-medium hover:bg-blue-700 transition-colors duration-300 hidden lg:inline-block whitespace-nowrap flex-shrink-0"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            >
              Contact Me
            </a>
            
            <button 
              className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}