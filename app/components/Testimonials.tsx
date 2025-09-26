export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What People Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <p className="text-gray-300 italic">"I had the pleasure of mentoring Sahan as part of a second-year undergraduate software project. As the team leader, he did an excellent job managing his team members, keeping the project on track, and ensuring smooth collaboration. Alongside his leadership, Sahan brought solid technical knowledge that helped guide the team in making the right design and implementation decisions. With his combination of technical expertise, leadership, and collaborative mindset, Sahan will be a great addition to any development team or project."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4">
                <img src="/images/Chamini Lakeesha.jpg" alt="Chamini Lakeesha" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Chamini Lakeesha</h4>
                <span className="text-sm text-gray-400">Software Engineer | Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}