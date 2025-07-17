import { TestimonialsSection } from "@/components/testimonials"
import { HeroSection } from "@/components/hero"
import ProcessSection from "@/components/process-section"
import ServicesSlider from "@/components/services-slider-section"

export default function HomePage() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isArabic = pathname.includes('/ar');
  return (
    <>
      <main className="min-h-screen">
        <HeroSection locale={isArabic ? 'ar' : 'en'} />
        {/* <StorySection /> */}
        <ServicesSlider />
        {/* <MeetSpecialists /> */}
        <ProcessSection />
        {/* <SafetySection /> */}
        <TestimonialsSection />
      </main>
    </>
  )
}
