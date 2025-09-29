export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">What People Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
            <div className="mb-4 sm:mb-6">
              <p className="text-gray-300 italic text-sm sm:text-base">"I had the pleasure of mentoring Sahan as part of a second-year undergraduate software project. As the team leader, he did an excellent job managing his team members, keeping the project on track, and ensuring smooth collaboration. Alongside his leadership, Sahan brought solid technical knowledge that helped guide the team in making the right design and implementation decisions. With his combination of technical expertise, leadership, and collaborative mindset, Sahan will be a great addition to any development team or project."</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 sm:w-12 h-10 sm:h-12 mr-3 sm:mr-4">
                <img src="/images/Chamini Lakeesha.jpg" alt="Chamini Lakeesha" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">Chamini Lakeesha</h4>
                <span className="text-xs sm:text-sm text-gray-400">Software Engineer | Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}