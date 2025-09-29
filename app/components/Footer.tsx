export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800 py-4 sm:py-6 text-center">
      <div className="container mx-auto px-2 sm:px-4">
        <hr className="border-gray-700 mb-2 sm:mb-4" />
        <p className="text-gray-400 text-xs sm:text-sm">&copy; {new Date().getFullYear()} Sahan Siriwardhana. All rights reserved.</p>
      </div>
    </footer>
  )
}
