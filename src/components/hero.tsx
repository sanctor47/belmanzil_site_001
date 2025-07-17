import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" // 1. Import the Image component

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003b31] via-[#00352b] to-[#0f0f0f]"></div>

        {/* 2. Use the Next.js Image component */}
        <Image
          src="/HeroSection.png"
          alt="A background image showing a serene dental care environment"
          fill // This makes the image cover the parent div
          priority // Prioritizes loading for this LCP element
          className="object-cover opacity-20" // Ensures the image covers the area without distortion
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#eedac2] mb-6 leading-tight">
          Redefining dental care by bringing the clinic experience straight to your home.
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#eedac2]/90 mb-8 font-light">
          You deserve care that meets you where you are
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-[#e58754] hover:bg-[#d67643] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/booking">Book My Visit</Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#eedac2] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#eedac2] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}