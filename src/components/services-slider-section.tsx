"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

const services = [
    {
        name: "Consultation & Digital X-Ray",
        specialty: "Comprehensive examination with portable digital X-ray technology",
        image: "/Examination.png",
    },
    {
        name: "Cleaning & Scaling",
        specialty: "Professional dental cleaning and plaque removal",
        image: "/Cleaning.png",
    },
    {
        name: "Fillings",
        specialty: "Tooth-colored restorations using advanced materials",
        image: "/Filling.png",
    },

    {
        name: "Root Canal Treatment",
        specialty: "Expert endodontic treatment by certified specialists",
        image: "/department-1-768x509.jpg",
    },
    {
        name: "Minor Surgeries & Extractions",
        specialty: "Oral surgery procedures performed safely at home",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Gum Treatment",
        specialty: "Periodontic care for healthy gums and supporting structures",
        image: "/placeholder.svg?height=200&width=300",
    },

    {
        name: "Teeth Whitening",
        specialty: "Professional whitening treatments for a brighter smile",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Crowns, Bridges & Veneers",
        specialty: "Cosmetic restorations for perfect smile aesthetics",
        image: "/placeholder.svg?height=200&width=300",
    },

    {
        name: "Braces & Aligners",
        specialty: "Orthodontic treatment including traditional and clear aligners",
        image: "/department-6-768x509.jpg",
    },
    {
        name: "Dentures",
        specialty: "Complete and partial dentures with perfect fit",
        image: "/Denture.jpg",
    },
]

export default function ServicesSlider() {
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
        <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-[#f5f1eb] to-[#eedac2]">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003b31] mb-6">Comprehensive Dental Care, Delivered</h2>
                    <p className="text-lg text-[#0f0f0f] max-w-3xl mx-auto">
                        We provide a full range of dental services, all in the comfort of your home. Every treatment is
                        personalized, delivered using portable technology, and handled by specialists.
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
                            {services.map((service, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                        {/* <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"> */}
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={service.image || "/placeholder.svg"}
                                                alt={service.name}
                                                // className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                                className="w-full h-72 object-cover"
                                            />
                                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-bold text-[#003b31] mb-3 group-hover:text-[#e58754] transition-colors duration-300">
                                                {service.name}
                                            </h3>
                                            <p className="text-[#0f0f0f]/70 leading-relaxed font-medium">{service.specialty}</p>
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