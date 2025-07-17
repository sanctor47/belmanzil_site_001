"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("general")

  const tabs = [
    { id: "general", label: "General Care" },
    { id: "specialized", label: "Specialized Treatment" },
    { id: "cosmetic", label: "Cosmetic Dentistry" },
    { id: "orthodontics", label: "Orthodontics" },
  ]

  const services = {
    general: [
      {
        title: "Consultation & Digital X-Ray",
        description: "Comprehensive examination with portable digital X-ray technology",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Cleaning & Scaling",
        description: "Professional dental cleaning and plaque removal",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Fillings",
        description: "Tooth-colored restorations using advanced materials",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    specialized: [
      {
        title: "Root Canal Treatment",
        description: "Expert endodontic treatment by certified specialists",
        image: "/department-1-768x509.jpg",
      },
      {
        title: "Minor Surgeries & Extractions",
        description: "Oral surgery procedures performed safely at home",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Gum Treatment",
        description: "Periodontic care for healthy gums and supporting structures",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    cosmetic: [
      {
        title: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter smile",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Crowns, Bridges & Veneers",
        description: "Cosmetic restorations for perfect smile aesthetics",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    orthodontics: [
      {
        title: "Braces & Aligners",
        description: "Orthodontic treatment including traditional and clear aligners",
        image: "/department-6-768x509.jpg",
      },
      {
        title: "Dentures",
        description: "Complete and partial dentures with perfect fit",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003b31] mb-6">Comprehensive Dental Care, Delivered</h2>
          <p className="text-lg text-[#0f0f0f] max-w-3xl mx-auto">
            We provide a full range of dental services, all in the comfort of your home. Every treatment is
            personalized, delivered using portable technology, and handled by specialists.
          </p>
        </div>

        {/* Tabs Desktop*/}
        <div className="flex-wrap justify-center mb-12 border-b border-gray-200 hidden md:flex">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-none border-b-2 transition-colors duration-200 ${activeTab === tab.id
                  ? "border-[#e58754] text-[#e58754] bg-transparent"
                  : "border-transparent text-[#0f0f0f]/60 hover:text-[#003b31]"
                }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        {/* Tabs Mobile */}
        <div className="md:hidden mb-6">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-[#e58754]"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeTab as keyof typeof services].map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003b31] mb-3">{service.title}</h3>
                  <p className="text-[#0f0f0f]/80 leading-relaxed">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
