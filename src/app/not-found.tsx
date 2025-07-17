import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="pt-16 pb-8 bg-[#eedac2] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#003b31] opacity-20">404</h1>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003b31] mb-4">Page Not Found</h2>
          <p className="text-[#0f0f0f] text-lg leading-relaxed mb-6">
            We couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong
            URL.
          </p>
          <p className="text-[#00352b] font-medium">Don't worry, our dental care is still available at your home!</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button asChild className="w-full sm:w-auto bg-[#003b31] hover:bg-[#003b31]/90 text-[#eedac2]">
            <Link href="/" className="flex items-center justify-center space-x-2">
              <Home size={20} />
              <span>Go Home</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-[#003b31] text-[#003b31] hover:bg-[#003b31] hover:text-[#eedac2] bg-transparent"
          >
            <Link href="/booking" className="flex items-center justify-center space-x-2">
              <span>Book Appointment</span>
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        {/* <div className="mt-12 pt-8 border-t border-[#003b31]/20">
          <p className="text-[#0f0f0f] text-sm mb-4">Need help finding what you're looking for?</p>
          <div className="space-y-2">
            <Link href="/our-story" className="block text-[#00352b] hover:text-[#e58754] transition-colors">
              Our Story
            </Link>
            <Link href="/our-team" className="block text-[#00352b] hover:text-[#e58754] transition-colors">
              Our Team
            </Link>
            <Link href="/#services" className="block text-[#00352b] hover:text-[#e58754] transition-colors">
              Our Services
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}
