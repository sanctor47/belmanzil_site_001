'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      title: "Book your appointment",
      description: "Once you fill out the booking form, and submit your details and chief complain, one of our team will be in touch to schedule your visit.",
      image: "/Step-1.png"
    },
    {
      number: "02",
      title: "Selecting a specialist",
      description: "Based on your chief complaint, we match you with one of our dental specialist. Each doctor brings years of experience in their field to ensure you receive the highest level of care.",
      image: "/Step-2.png"
    },
    {
      number: "03",
      title: "Confirming your appointment",
      description: "You will receive a confirmation with date, time and assigned doctor details along with the treatment cost to review and approve, and your home visit begins.",
      image: "/Step-3.png"
    },
    {
      number: "04",
      title: "Start your treatment",
      description: "Your personalized dental treatment starts while following strict safety guidelines and putting patient's care and comfort as our top priority.",
      image: "/Step-4.jpg"
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-state-green mb-6">
            Simplified Appointment Journey
          </h2>
          <p className="text-xl text-smoky-black max-w-3xl mx-auto">
            Getting professional dental care at home is easier than you think. 
            Here's how our simple 4-step process works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Display for Desktop */}
          {/* Changed: This block is now hidden on mobile screens (below lg) */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <div className="relative w-full h-[400px]">
              <Image
                key={activeStep}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={steps[activeStep - 1].image}
                alt={steps[activeStep - 1].title}
                priority={activeStep === 1}
                className="rounded-lg shadow-2xl object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Interactive Steps */}
          <div className="order-1 lg:order-2 space-y-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index + 1;
              return (
                <div
                  key={index}
                  // Changed: Added relative and overflow-hidden for the mobile background image
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 ${
                    isActive ? 'bg-state-green' : 'bg-white hover:bg-gray-100'
                  } rounded-lg shadow-lg`}
                  onClick={() => setActiveStep(index + 1)}
                >
                  {/* New: Background image for mobile view, only shown when active */}
                  {isActive && (
                    <div className="lg:hidden absolute inset-0 z-0">
                      <Image
                        src={step.image}
                        alt="" // Decorative, as content provides context
                        fill
                        className="object-cover opacity-15" // Low opacity to act as a background
                      />
                    </div>
                  )}

                  {/* Changed: Content is now relatively positioned with a z-index to appear above the background image */}
                  <div className="relative z-10 p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold bg-burnt-sienna text-dutch-white`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${
                          isActive ? 'text-dutch-white' : 'text-smoky-black'
                        }`}>
                          {step.title}
                        </h3>
                        {isActive && (
                          <p className="text-dutch-white opacity-90 leading-relaxed animate-fade-in">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;