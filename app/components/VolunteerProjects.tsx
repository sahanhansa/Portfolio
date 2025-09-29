'use client'
import { useState } from 'react'

export default function VolunteerProjects() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Nena Aruna - Project Director",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2023 - 2024",
      image: "/images/Nena%20Aruna.jpg",
      description: "Award-winning educational support initiative that reached 50+ schools across 10 districts in Sri Lanka. Conducted 30+ tutoring sessions and implemented 'Hari Para' career guidance series, earning the Gold Award for Most Outstanding Project in Basic Education and Literacy at the Rotary District of Sri Lanka and Maldives.",
      tags: ["Project Management", "Educational Leadership", "Community Outreach", "Award Winner"],
      subProjects: []
    },
    {
      id: 2,
      title: "Grama Prabodhaya 2025 - Project Director",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2025",
      image: "/images/Grama%20Prabodhaya.jpg",
      description: "Comprehensive rural development initiative addressing maternal health, water access, and education across Kirimatiyawa and Ambanpola villages. Impacting 200+ beneficiaries through integrated community programs.",
      tags: ["Rural Development", "Community Health", "Educational Support", "Project Management"],
      subProjects: ["Senehe Yathra", "Aqua Safe", "Intellect", "Heta", "Star Seekers", "Akuru", "Sihina"]
    },
    {
      id: 3,
      title: "Woof Roof 2025 - Co-Chairperson",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2025",
      image: "/images/Woof%20Roof.jpg",
      description: "Environmental services initiative focused on Sri Lankan street dog welfare through rescue, vaccination, and re-homing programs. Partnered with 'Baw Baw' animal shelter in Kurunegala district, organizing successful fundraising campaigns, providing shelter support, and creating 'Woofy's Gallery' photo competition to raise awareness.",
      tags: ["Animal Welfare", "Environmental Services", "Fundraising", "Community Outreach"],
      subProjects: ["Fundraising Campaign", "Sticker Sales", "Shelter Support", "Animal Care", "Woofy's Gallery"]
    },
    {
      id: 4,
      title: "Hand in Hand - Project Director",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2024 - 2025",
      image: "/images/Hand%20in%20Hand.jpg",
      description: "Comprehensive cancer support initiative providing financial aid and awareness to cancer patients across Sri Lanka. Successfully raised over Rs. 500,000 through fundraising campaigns, conducted awareness sessions, and provided direct support through medical equipment donations, sago donations to 800 patients, and the Colors Project bringing joy to pediatric cancer patients.",
      tags: ["Healthcare Support", "Cancer Awareness", "Fundraising", "Community Health", "Pediatric Care"],
      subProjects: ["Fundraising Campaigns", "Colors Project", "Cancer Awareness", "Medical Equipment Donation", "Sago Donation", "Breast Cancer Awareness"]
    }
  ]

  const cardsPerSlide = 3
  const totalSlides = Math.ceil(projects.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Get current slide's projects
  const currentProjects = projects.slice(
    currentSlide * cardsPerSlide, 
    (currentSlide + 1) * cardsPerSlide
  )

  // Determine grid class based on number of cards
  const getGridClass = (cardCount: number) => {
    switch (cardCount) {
      case 1:
        return "grid grid-cols-1 justify-items-center max-w-md mx-auto"
      case 2:
        return "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    }
  }

  return (
    <section id="volunteer-projects" className="py-10 sm:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Volunteer Projects</h2>
          <p className="text-base sm:text-lg text-gray-300">Impactful community service initiatives and projects</p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <button 
              className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl hover:bg-blue-700 transition-all duration-300 flex-shrink-0"
              onClick={prevSlide}
            >
              &#8249;
            </button>
            <div className={`flex-1 ${getGridClass(currentProjects.length)}`}>
              {currentProjects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors w-full flex flex-col justify-between">
                  <div className="h-32 sm:h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                      <div className="space-y-1">
                        <span className="block text-sm text-gray-300 font-medium">{project.organization}</span>
                        <span className="block text-xs text-blue-300 font-medium">{project.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Project Overview</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
                      </div>
                      {project.subProjects.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Components</h4>
                          {project.id === 2 ? (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                              {project.subProjects.map((subProject, index) => (
                                <div key={index} className="text-sm text-gray-300">• {subProject}</div>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-1">
                              {project.subProjects.map((subProject, index) => (
                                <li key={index} className="text-sm text-gray-300">• {subProject}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl hover:bg-blue-700 transition-all duration-300 flex-shrink-0"
              onClick={nextSlide}
            >
              &#8250;
            </button>
          </div>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
