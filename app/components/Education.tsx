import Image from 'next/image'

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
          <p className="text-lg text-gray-300">My academic journey and continuous learning</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>
          
          <div className="space-y-12">
            <div className="relative flex items-start">
              {/* Timeline marker */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 shadow-sm"></div>
              
              {/* Content */}
              <div className="ml-20 bg-gray-800 rounded-lg shadow-lg p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">GCE Ordinary Level</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">2017</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Image 
                    src="/images/richmond-college-crest.jpg" 
                    alt="Richmond College Crest" 
                    className="w-12 h-12 mr-3 rounded-full"
                    width={50}
                    height={50}
                  />
                  <p className="text-gray-300 font-medium">Richmond College, Galle, Sri Lanka</p>
                </div>
                
                <p className="text-gray-400 mb-4">Completed GCE Ordinary Level examination with exceptional academic performance across all subjects. Specialized in technology and literature through carefully chosen electives.</p>
                
                <div className="bg-green-900 border-l-4 border-green-400 p-4 rounded">
                  <p className="text-green-300 font-semibold">Outstanding Results: 9 As for all subjects</p>
                  <p className="text-green-400 text-sm mt-1">Elective Subjects: Information Technology, Appreciation of English Literary Texts, and Geography</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-start">
              {/* Timeline marker */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 shadow-sm"></div>
              
              {/* Content */}
              <div className="ml-20 bg-gray-800 rounded-lg shadow-lg p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">GCE Advanced Level</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">2018 - 2021</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Image 
                    src="/images/richmond-college-crest.jpg" 
                    alt="Richmond College Crest" 
                    className="w-12 h-12 mr-3 rounded-full"
                    width={50}
                    height={50}
                  />
                  <p className="text-gray-300 font-medium">Richmond College, Galle, Sri Lanka</p>
                </div>
                
                <p className="text-gray-400 mb-4">Physical Science Stream with Combined Mathematics, Physics, and Chemistry. Demonstrated persistence and commitment to academic excellence through dedicated preparation.</p>
                
                <div className="bg-blue-900 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-blue-300 font-semibold">Results: First attempt - 3Bs | Second attempt - 2As and 1B</p>
                  <p className="text-blue-400 text-sm mt-1">Shows determination and continuous improvement in challenging subjects.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-start">
              {/* Timeline marker */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 shadow-sm"></div>
              
              {/* Content */}
              <div className="ml-20 bg-gray-800 rounded-lg shadow-lg p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">BSc. (Hons) Information Technology</h3>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">2022 - 2026 (Expected)</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Image 
                    src="/images/university-moratuwa-logo.png" 
                    alt="University of Moratuwa Logo" 
                    className="w-12 h-12 mr-3 rounded-full"
                    width={50}
                    height={50}
                  />
                  <p className="text-gray-300 font-medium">University of Moratuwa, Sri Lanka</p>
                </div>
                
                <p className="text-gray-400 mb-4">Currently in 3rd year pursuing Bachelor of Science (Honours) in Information Technology. Specializing in software development, systems analysis, and modern computing technologies.</p>
                
                <div className="bg-purple-900 border-l-4 border-purple-400 p-4 rounded">
                  <p className="text-purple-300 font-semibold">Current CGPA: 3.2</p>
                  <p className="text-purple-400 text-sm mt-1">Maintaining strong academic performance while developing expertise in full-stack development, business analysis, and project management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
