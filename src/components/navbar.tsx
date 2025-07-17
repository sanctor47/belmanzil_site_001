"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getDictionary } from "@/lib/get-dict"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname();
  const isArabic = pathname.includes('/ar');
  const dict = getDictionary(isArabic ? 'ar' : 'en');

  const isNotHomePage = pathname !== (isArabic ? "/ar" : "/");
  const homePath = isArabic ? "/ar" : "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: dict.servicesNavItem, href: "#services", homeOnly: true },
    { label: dict.processNavItem, href: "#process", homeOnly: true },
    { label: dict.storyNavItem, href: "/story", homeOnly: false },
    { label: dict.teamNavItem, href: "/team", homeOnly: false },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isNotHomePage ? "bg-[#003b31] shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={homePath} className="flex items-center space-x-2">
            <Image
              src="/logo_icon_2.png"
              alt="BelManzil Icon"
              width={40}
              height={40}
              className="h-8 w-auto md:hidden"
            />
            <Image
              src="/logo_full_2.png"
              alt="BelManzil Logo"
              width={150}
              height={50}
              className="h-8 w-auto hidden md:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // MODIFICATION 1: Create the correct href based on the current page
              const targetHref = (isNotHomePage && item.homeOnly)
                ? `${homePath}${item.href}` // e.g., "/#services"
                : item.href;               // e.g., "#services" or "/story"

              return (
                <Link
                  key={item.label}
                  href={targetHref}
                  className={`text-[#eedac2] hover:text-[#e58754] transition-colors duration-200 ${pathname === item.href ? "font-semibold" : ""}`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Book Now Button */}
            <Button
              asChild
              className="bg-[#e58754] hover:bg-[#d67643] text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              <Link href="/booking">{dict.CTA}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#eedac2]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#003b31] border-t border-[#00352b]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                // MODIFICATION 2: Apply the same logic for the mobile menu
                const targetHref = (isNotHomePage && item.homeOnly)
                  ? `${homePath}${item.href}` // e.g., "/#services"
                  : item.href;               // e.g., "#services" or "/story"

                return (
                  <Link
                    key={item.label}
                    href={targetHref}
                    className={`block px-3 py-2 text-[#eedac2] hover:text-[#e58754] transition-colors duration-200 ${pathname === item.href ? "font-semibold" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-[#e58754] hover:bg-[#d67643] text-white">
                  <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                    {dict.CTA}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}