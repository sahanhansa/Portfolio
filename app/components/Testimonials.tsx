export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <p className="text-gray-600 italic">"Sahan's leadership as Co-Director of Community Service Avenue was exemplary. His dedication to community development and ability to coordinate multiple impactful projects like Grama Prabodhaya and Manusath Handa showcased his exceptional organizational skills and commitment to social change."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4">
                <img src="/images/director-rotaract.jpg" alt="Rotaract Leadership" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Rotaract Club Leadership</h4>
                <span className="text-sm text-gray-500">University of Moratuwa</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <p className="text-gray-600 italic">"Working with Sahan was a great experience. He has a keen eye for detail and always ensures that the final product meets the highest standards. His problem-solving skills are remarkable."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">SJ</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                <span className="text-sm text-gray-500">Senior Developer, Freelance Client</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <p className="text-gray-600 italic">"Sahan's mentorship helped me understand complex programming concepts and build confidence in my coding abilities. He has a talent for explaining technical topics in an accessible way."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">MC</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <span className="text-sm text-gray-500">Computer Science Student</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <p className="text-gray-600 italic">"The quality of work and attention to user experience that Sahan brings to every project is outstanding. He consistently delivers beyond expectations."</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">ED</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Emily Davis</h4>
                <span className="text-sm text-gray-500">UI/UX Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
