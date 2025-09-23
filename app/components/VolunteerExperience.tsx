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
      image: "/images/Director rotaract.jpg",
      description: "After several years as an OC member and chairperson for various projects, I was appointed as Co-Director for the Community Service Avenue during the Rotaract year 2023-24.",
      impact: [
        "Directed \"Grama Prabodhaya\" - Rural community development initiative",
        "Led \"Nena Aruna\" and \"Hand in Hand\" - Community support programs",
        "Organized \"Manusath Handa\" - Human development project",
        "Coordinated \"Connecting the Dots\" - Educational outreach program",
        "Managed \"Adurata Athwalak\" and \"Punchi Rasata Rasa Padamata\" projects",
        "Provided aid and support to people in need across Sri Lanka"
      ],
      tags: ["Leadership", "Project Management", "Community Service", "Team Coordination", "Social Impact"]
    },
    {
      id: 2,
      title: "Committee Member - Corporate Development Pillar",
      organization: "Moraspirit",
      period: "2024",
      image: "/images/Moraspirit coop.jpg",
      description: "Successfully interviewed and selected as a Committee Member for the Corporate Development Pillar at Moraspirit for the year 2024. Actively contributed to business development initiatives and corporate partnerships.",
      impact: [
        "Pitched to companies for sponsorships and partnerships",
        "Participated in various business ventures and strategic initiatives",
        "Conducted design work for corporate materials and presentations",
        "Collaborated with team members on corporate development strategies",
        "Contributed to expanding Moraspirit's corporate network and relationships"
      ],
      tags: ["Business Development", "Corporate Partnerships", "Design", "Pitching", "Strategic Planning"]
    },
    {
      id: 3,
      title: "Logistics Committee Member",
      organization: "IEEE Industry Applications Society - University of Moratuwa",
      period: "2023 - 2024",
      image: "/images/IEEE IAS.jpg",
      description: "Served as a Logistics Committee Member for the Industry Applications Society chapter of IEEE Student Branch at University of Moratuwa during the year 2023-24.",
      impact: [
        "Coordinated logistics for IEEE IAS chapter events and workshops",
        "Participated in planning and execution of IEEE technical projects",
        "Managed event logistics including venue coordination and resource allocation",
        "Collaborated with IEEE members on industry-related initiatives",
        "Supported professional development programs and technical seminars"
      ],
      tags: ["Event Logistics", "Project Coordination", "Team Collaboration", "IEEE Standards", "Technical Events"]
    },
    {
      id: 4,
      title: "Volunteer Teacher",
      organization: "Sasnaka Sansada",
      period: "2022 - 2023",
      image: "/images/Sasnaka Sansada.jpg",
      description: "Served as a volunteer teacher with Sasnaka Sansada, a dedicated volunteer organization focused on providing educational support to school students across Sri Lanka.",
      impact: [
        "Conducted educational seminars in Galle district schools",
        "Provided tutoring and academic support to underprivileged students",
        "Developed educational materials and teaching resources",
        "Organized workshops on study skills and exam preparation",
        "Mentored students in mathematics and science subjects",
        "Participated in community outreach programs for education"
      ],
      tags: ["Education", "Teaching", "Mentoring", "Community Outreach", "Curriculum Development"]
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

  return (
    <section id="volunteering" className="volunteering">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Volunteer Experience</h2>
          <p className="section-subtitle">Making a difference in communities</p>
        </div>
        
        <div className="projects-carousel">
          <div className="carousel-container">
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
              &#8249;
            </button>
            
            <div className="cards-container">
              {experiences
                .slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide)
                .map((experience) => (
                  <div key={experience.id} className="card volunteer-card volunteer-experience-card">
                    <div className="volunteer-image">
                      <img src={experience.image} alt={experience.title} />
                    </div>
                    <div className="volunteer-header">
                      <h3>{experience.title}</h3>
                      <div className="organization-info">
                        <span className="organization">{experience.organization}</span>
                        <span className="period">{experience.period}</span>
                      </div>
                    </div>
                    <div className="volunteer-details">
                      <div className="topic-section">
                        <h4 className="topic-title">Leadership Role</h4>
                        <p className="topic-content">{experience.description}</p>
                      </div>
                      
                      <div className="topic-section">
                        <h4 className="topic-title">Key Activities</h4>
                        <ul className="impact-list">
                          {experience.impact.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="skills-gained">
                        {experience.tags.map((tag, index) => (
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
