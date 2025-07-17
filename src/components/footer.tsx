import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#eedac2] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-2xl font-bold mb-4">BelManzil</h3> */}
            <Image
              src="/logo_full_2.png"
              alt="BelManzil Logo"
              width={150}
              height={50}
              className="h-8 w-auto mb-4"
            />
            <p className="text-[#eedac2]/80 mb-4">
              Egypt's first home dental service, bringing professional dental care directly to your doorstep since 2020.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-[#e58754]" />
              <span>Greater Cairo, Egypt</span>
            </div>
          </div>

          {/* Powered by */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Powered by</h4>
            <div className="space-y-3 text-sm">
              <div className="text-[#eedac2]/80">Shawadfy Dental Clinic</div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#e58754] mt-0.5" />
                <span className="text-[#eedac2]/80">1, road 258, Maadi, Cairo</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#e58754]" />
                <span>0120 444 7957</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#e58754]" />
                <span>info@belmanzil.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#e58754] mt-0.5" />
                <div>
                  <div>6 Days a week: 10 AM - 6 PM</div>
                  <div className="text-[#eedac2]/60">Friday: Emergency only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-[#eedac2]/80">
              <li>Sahel (Seasonal)</li>
              <li>New Cairo</li>
              <li>Maadi</li>
              <li>Zamalek</li>
              <li>El-Alamein (Summer)</li>
              <li>Sidi Heneish (Summer)</li>
              <li>Matrouh (Summer)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#eedac2]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#eedac2]/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} BelManzil. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-[#eedac2]/60 hover:text-[#e58754] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#eedac2]/60 hover:text-[#e58754] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
