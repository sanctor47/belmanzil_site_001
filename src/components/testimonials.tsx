"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"




  const testimonials = [
    {
      name: "Dr. Nadia Philip Henein",
      // location: "Zamalek",
      rating: 5,
      text: `It gives me great pleasure to express how satisfied I was throughout my
dental treatment executed by the talented and experienced specialists. All of
them expressed extreme concern and high professionalism in treating me
that commanded both my admiration and gratitude. I highly recommend
them as an exquisite homogenous team-work group.`,
      // treatment: "Routine cleaning & check-up",
    },
    {
      name: "Professor, Doctor Amr Montasser",
      // location: "Maadi",
      rating: 5,
      text: "Perfect Service. They came to my house in Marassi, fixed my denture and saved my vacation.",
      // treatment: "Denture fitting",
    },
    {
      name: "Mr. Karim Shehab",
      // location: "New Cairo",
      rating: 5,
      text: `For a son of a loving father who, due to illness and age, is now unfortunately
unable to venture out of his home, Belmanzil is a godsend. This professional
company has introduced a much needed service to any dental patient that
requires medical attention at home. They didn’t compromise when it came to
hygiene, were punctual, and made the patient feel completely at ease during
the whole procedure. I would highly recommend their services to anyone
requiring dental care at home.`,
      // treatment: "Post-surgery dental care",
    },
  ]


export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)


  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-16 lg:py-24 bg-[#eedac2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003b31] mb-4">
            Voices From Home: What Our Patients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white shadow-xl border-0">
                    <CardContent className="p-8 lg:p-12">
                      <div className="text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-[#e58754] fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl lg:text-2xl text-[#0f0f0f] mb-8 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <div className="font-bold text-[#003b31] text-lg">{testimonial.name}</div>
                          {/* <div className="text-[#0f0f0f]/60 mb-2">{testimonial.location}</div> */}
                          {/* <div className="text-[#e58754] text-sm font-medium">{testimonial.treatment}</div> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="left-4 bg-white border-[#003b31] text-[#003b31] hover:bg-[#003b31] hover:text-white" />
            <CarouselNext className="right-4 bg-white border-[#003b31] text-[#003b31] hover:bg-[#003b31] hover:text-white" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === current ? "bg-[#e58754]" : "bg-[#003b31]/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
