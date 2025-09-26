'use client'
import { useState } from 'react'

export default function VolunteerExperience() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const experiences = [
    {
      id: 1,
      title: "Co-Director - Community Service Avenue",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2023 - 2024",
      image: "/images/director-rotaract.jpg",
      description: "After several years as an OC member and chairperson for various projects, I was appointed as Co-Director for the Community Service Avenue during the Rotaract year 2023-24.",
      impact: [
        "Directed Grama Prabodhaya - Rural community development initiative",
        "Led Nena Aruna and Hand in Hand - Community support programs",
        "Organized Manusath Handa - Human development project",
        "Coordinated Connecting the Dots - Educational outreach program"
      ],
      tags: ["Leadership", "Project Management", "Community Service", "Team Coordination"]
    },
    {
      id: 2,
      title: "Committee Member - Corporate Development Pillar",
      organization: "Moraspirit",
      period: "2024",
      image: "/images/moraspirit-coop.jpg",
      description: "Successfully interviewed and selected as a Committee Member for the Corporate Development Pillar at Moraspirit for the year 2024.",
      impact: [
        "Pitched to companies for sponsorships and partnerships",
        "Participated in various business ventures and strategic initiatives",
        "Conducted design work for corporate materials and presentations",
        "Collaborated with team members on corporate development strategies"
      ],
      tags: ["Business Development", "Corporate Partnerships", "Design", "Pitching"]
    },
    {
      id: 3,
      title: "Logistics Committee Member",
      organization: "IEEE Industry Applications Society - University of Moratuwa",
      period: "2023 - 2024",
      image: "/images/ieee-ias.jpg",
      description: "Served as a Logistics Committee Member for the Industry Applications Society chapter of IEEE Student Branch at University of Moratuwa.",
      impact: [
        "Coordinated logistics for IEEE IAS chapter events and workshops",
        "Participated in planning and execution of IEEE technical projects",
        "Managed event logistics including venue coordination",
        "Collaborated with IEEE members on industry-related initiatives"
      ],
      tags: ["Event Logistics", "Technical Events", "IEEE", "Team Collaboration"]
    },
    {
      id: 4,
      title: "Volunteer Teacher - Ganitha Saviya Program",
      organization: "Sasnaka Sansada",
      period: "2022 - 2023",
      image: "/images/sasnaka-sansada.jpg",
      description: "Served as a volunteer teacher in the Ganitha Saviya program, conducting mathematics seminars for underserved schools in Galle district to improve educational opportunities for rural students.",
      impact: [
        "Conducted mathematics seminars for underserved schools in Galle district",
        "Participated in multiple educational outreach sessions across rural areas",
        "Organized king coconut drink donation event at Karapitiya Cancer Hospital",
        "Contributed to improving mathematics education accessibility in rural communities"
      ],
      tags: ["Education", "Mathematics", "Community Outreach", "Healthcare Support", "Rural Development"]
    }
  ]

  const cardsPerSlide = 3
  const totalSlides = Math.ceil(experiences.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Get current slide's experiences
  const currentExperiences = experiences.slice(
    currentSlide * cardsPerSlide, 
    (currentSlide + 1) * cardsPerSlide
  )

  // Determine grid class based on number of cards
  const getGridClass = (cardCount: number) => {
    switch (cardCount) {
      case 1:
        return "grid grid-cols-1 justify-items-center max-w-md mx-auto"
      case 2:
        return "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    }
  }

  return (
    <section id="volunteering" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Volunteer Experience</h2>
          <p className="text-lg text-gray-300">Making a difference in communities</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <button 
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-blue-700 transition-all duration-300 flex-shrink-0"
              onClick={prevSlide}
            >
              &#8249;
            </button>
            
            <div className={`flex-1 ${getGridClass(currentExperiences.length)}`}>
              {currentExperiences.map((experience) => (
                <div key={experience.id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-750 transition-colors w-full">
                  <div className="h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">{experience.title}</h3>
                      <div className="space-y-1">
                        <span className="block text-sm text-gray-300 font-medium">{experience.organization}</span>
                        <span className="block text-xs text-blue-300 font-medium">{experience.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Leadership Role</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">{experience.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Activities</h4>
                        <ul className="space-y-1">
                          {experience.impact.map((item, index) => (
                            <li key={index} className="text-sm text-gray-300">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 text-xs rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-blue-700 transition-all duration-300 flex-shrink-0"
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