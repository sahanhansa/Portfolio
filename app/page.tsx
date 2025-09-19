import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import VolunteerProjects from './components/VolunteerProjects'
import VolunteerExperience from './components/VolunteerExperience'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <VolunteerExperience />
      <VolunteerProjects />
      <Certifications />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  )
}
