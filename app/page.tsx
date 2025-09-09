import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Volunteering from './components/Volunteering'
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
      <WorkExperience />
      <Volunteering />
      <Certifications />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  )
}
