import { TestimonialsSection } from "@/components/testimonials"
import { HeroSection } from "@/components/hero"
import ProcessSection from "@/components/process-section"
import ServicesSlider from "@/components/services-slider-section"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection/>
        <ServicesSlider />
        <ProcessSection />
        <TestimonialsSection />
      </main>
    </>
  )
}
