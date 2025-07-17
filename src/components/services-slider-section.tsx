"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import Image from "next/image" // 1. Import the Image component

const services = [
    // ... your services array remains the same
    {
        name: "Examination & Digital X-Ray",
        specialty: "Detailed assessment using digital imaging to accurately diagnose dental issues.",
        image: "/Examination.png",
    },
    {
        name: "Fillings",
        specialty: "Restores cavities and cracks with safe, durable materials to protect your tooth.",
        image: "/Filling.png",
    },
    {
        name: "Cleaning",
        specialty: "Gentle scaling and polishing to remove plaque and keep your smile fresh.",
        image: "/Cleaning.png",
    },
    {
        name: "Root Canal",
        specialty: "Treats deep infections by removing damaged pulp and preserving the natural tooth.",
        image: "/Root Canal.jpg",
    },
    {
        name: "Crown & Bridge",
        specialty: "Custom restorations to rebuild and replace teeth for strength and aesthetics.",
        image: "/Crown & Bridge.jpg",
    },
    {
        name: "Dentures",
        specialty: "Comfortable and functional solutions for partial or full tooth replacement.",
        image: "/Denture.jpg",
    },
    {
        name: "Veneers",
        specialty: "Thin, custom shells that enhance the shape and brightness of your natural teeth.",
        image: "/Veneers.png",
    },
    {
        name: "Children",
        specialty: "Specialized, gentle care tailored to kids’ dental needs at every stage.",
        image: "/Children.png",
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
                                    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-[442px]">
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden h-72"> {/* Set height on the container */}
                                            {/* 2. Replace <img> with <Image> */}
                                            <Image
                                                src={service.image}
                                                alt={service.name}
                                                fill // Use fill to make the image cover its container
                                                priority={index < 3} // Prioritize loading the first few visible images
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover" // Use object-cover for cropping
                                            />
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