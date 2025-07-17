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

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-[#eedac2]/80">
              <li>
                <Link href="#" className="hover:text-[#e58754] transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e58754] transition-colors">
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e58754] transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e58754] transition-colors">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e58754] transition-colors">
                  Oral Surgery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#e58754]" />
                <span>+20 1XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#e58754]" />
                <span>info@belmanzil.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#e58754] mt-0.5" />
                <div>
                  <div>Daily: 9 AM - 8 PM</div>
                  <div className="text-[#eedac2]/60">Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-[#eedac2]/80">
              <li>Greater Cairo (Year-round)</li>
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
