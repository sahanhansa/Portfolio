export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 sm:mb-0">
              <p>&copy; 2024 Sahan Siriwardhana. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Built using Next.js, React & Tailwind CSS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
