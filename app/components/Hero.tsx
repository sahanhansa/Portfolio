'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "Tech Enthusiast", 
    "Aspiring Project Manager",
    "Backend Developer"
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
        }, 100) // Typing speed
        return () => clearTimeout(timeout)
      } else {
        // Pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Display duration
        return () => clearTimeout(timeout)
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50) // Erasing speed
        return () => clearTimeout(timeout)
      } else {
        // Move to next title
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, currentTitleIndex, isTyping, titles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 bg-particles"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sahan Siriwardhana</span>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold min-h-[4.5rem] flex items-center">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap leading-tight">{displayedText}</span>
                <span className="inline-block w-1 h-[0.9em] bg-primary ml-2 animate-pulse"></span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                Passionate about Full Stack Development, Business Analysis, Networking, and Project Management.
                Currently pursuing BSc. Hons. Information Technology at University of Moratuwa.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a 
                href="/images/Sahan Siriwardhana.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View My CV
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/sahanhansa" 
                className="w-12 h-12 bg-dark-secondary rounded-full flex items-center justify-center text-2xl text-text-secondary hover:text-primary hover:bg-primary hover:bg-opacity-20 transition-all duration-300" 
                aria-label="GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/sahan-siriwardhana-977700288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                className="w-12 h-12 bg-dark-secondary rounded-full flex items-center justify-center text-2xl text-text-secondary hover:text-primary hover:bg-primary hover:bg-opacity-20 transition-all duration-300" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="devicon-linkedin-plain"></i>
              </a>
              <a 
                href="mailto:sahanhansa.rcg@gmail.com" 
                className="w-12 h-12 bg-dark-secondary rounded-full flex items-center justify-center text-2xl text-text-secondary hover:text-primary hover:bg-primary hover:bg-opacity-20 transition-all duration-300" 
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary border-opacity-30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/profile-photo.jpg" 
                  alt="Sahan Siriwardhana" 
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
