"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

const specialists = [
  {
    name: "Dr. Mohamed El Shawadfy",
    specialty: "Oral Surgeon, Founder & CEO",
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Khaled Khalifa",
    specialty: "Root Canal Specialist (Endodontics)",
    image:
      "https://images.pexels.com/photos/6812465/pexels-photo-6812465.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Tamer Aboul-Naga",
    specialty: "Root Canal Specialist",
    image:
      "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Cherif Mansour",
    specialty: "Crowns & Bridges (Prosthodontics)",
    image:
      "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Abdul Rahman Maged",
    specialty: "Dentures & Removables",
    image:
      "https://images.pexels.com/photos/5215000/pexels-photo-5215000.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Assem Cherif",
    specialty: "Oral Surgery, Head of Dental at 57357",
    image:
      "https://images.pexels.com/photos/6812466/pexels-photo-6812466.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Seif Hegab",
    specialty: "Orthodontist & Pioneer of Digital Dentistry in Egypt",
    image:
      "https://images.pexels.com/photos/5215001/pexels-photo-5215001.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
  },
]

export default function MeetSpecialists() {
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
    <section id="team" className="py-20 md:py-28 bg-gradient-to-br from-[#f5f1eb] to-[#eedac2]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003b31] mb-6 relative">
              Meet Our Specialists
            </h2>
          </div>
          <p className="text-lg md:text-xl text-[#0f0f0f]/80 max-w-3xl mx-auto leading-relaxed">
            We work with a team of highly skilled dental specialists to deliver precision care with years of experience
            and expertise.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {specialists.map((specialist, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"> */}
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={specialist.image || "/placeholder.svg"}
                        alt={specialist.name}
                        // className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        className="w-full h-72 object-cover"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                    </div>
                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#003b31] mb-3 group-hover:text-[#e58754] transition-colors duration-300">
                        {specialist.name}
                      </h3>
                      <p className="text-[#0f0f0f]/70 leading-relaxed font-medium">{specialist.specialty}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom styled navigation buttons */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-[#e58754]/20 text-[#e58754] hover:bg-[#e58754] hover:text-white transition-all duration-300" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-[#e58754]/20 text-[#e58754] hover:bg-[#e58754] hover:text-white transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
