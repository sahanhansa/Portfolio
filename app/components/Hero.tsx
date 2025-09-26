import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 bg-particles"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sahan Siriwardhana</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-text-secondary">
                Full Stack Developer & IT Undergraduate
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                Passionate about Full Stack Development, Business Analysis, Networking, and Project Management.
                Currently pursuing BSc. Hons. Information Technology at University of Moratuwa.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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
