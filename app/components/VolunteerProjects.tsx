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
      image: "/images/Nena Aruna.jpg",
      description: "Award-winning educational support initiative that reached 50+ schools across 10 districts in Sri Lanka. Conducted 30+ tutoring sessions and implemented 'Hari Para' career guidance series, earning the Gold Award for Most Outstanding Project in Basic Education and Literacy at the Rotary District of Sri Lanka and Maldives.",
      tags: ["Project Management", "Educational Leadership", "Community Outreach", "Award Winner"],
      subProjects: []
    },
    {
      id: 2,
      title: "Grama Prabodhaya 2025 - Project Director",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2025",
      image: "/images/Grama Prabodhaya.jpg",
      description: "Comprehensive rural development initiative addressing maternal health, water access, and education across Kirimatiyawa and Ambanpola villages. Implemented 7 integrated sub-projects including Senehe Yathra, Aqua Safe, and educational programs, impacting 200+ beneficiaries with RO water systems, 2000 donated books, and maternal health support.",
      tags: ["Rural Development", "Community Health", "Educational Support", "Project Management"],
      subProjects: ["Senehe Yathra", "Aqua Safe", "Intellect", "Heta", "Star Seekers", "Akuru", "Sihina"]
    },
    {
      id: 3,
      title: "Woof Roof 2025 - Co-Chairperson",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2025",
      image: "/images/Woof Roof.jpg",
      description: "Environmental services initiative focused on Sri Lankan street dog welfare through rescue, vaccination, and re-homing programs. Partnered with 'Baw Baw' animal shelter in Kurunegala district, organizing successful fundraising campaigns, providing shelter support, and creating 'Woofy's Gallery' photo competition to raise awareness.",
      tags: ["Animal Welfare", "Environmental Services", "Fundraising", "Community Outreach"],
      subProjects: ["Fundraising Campaign", "Sticker Sales", "Shelter Support", "Animal Care", "Woofy's Gallery"]
    },
    {
      id: 4,
      title: "Hand in Hand - Project Director",
      organization: "Rotaract Club of University of Moratuwa",
      period: "2024 - 2025",
      image: "/images/Hand in Hand.jpg",
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

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Volunteer Projects</h2>
          <p className="section-subtitle">Impactful community service initiatives and projects</p>
        </div>
        
        <div className="projects-carousel">
          <div className="carousel-container">
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
              &#8249;
            </button>
            
            <div className="cards-container">
              {projects
                .slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide)
                .map((project) => (
                  <div key={project.id} className="card volunteer-card volunteer-project-card">
                    <div className="volunteer-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="volunteer-header">
                      <h3>{project.title}</h3>
                      <div className="organization-info">
                        <span className="organization">{project.organization}</span>
                        <span className="period">{project.period}</span>
                      </div>
                    </div>
                    <div className="volunteer-details">
                      <div className="topic-section">
                        <h4 className="topic-title">Project Overview</h4>
                        <p className="topic-content">{project.description}</p>
                      </div>
                      
                      {project.subProjects.length > 0 && (
                        <div className="topic-section">
                          <h4 className="topic-title">Key Components</h4>
                          <ul className="impact-list">
                            {project.subProjects.map((subProject, index) => (
                              <li key={index}>{subProject}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="skills-gained">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="skill-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
          
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
