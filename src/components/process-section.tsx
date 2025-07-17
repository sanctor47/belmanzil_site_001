'use client';

import { useState } from 'react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      title: "BOOK YOUR APPOINTMENT",
      description: "Once you fill out the booking form, and submit your details and chief complain, one of our team will be in touch to schedule your visit.",
      image: "Step-1.png"
    },
    {
      number: "02",
      title: "SELECTING A SPECIALIST",
      description: "Based on your chief complaint, we match you with one of our dental specialist. Each doctor brings years of experience in their field to ensure you receive the highest level of care.",
      image: "Step-2.png"
    },
    {
      number: "03",
      title: "CONFIRMING YOUR APPOINTMENT",
      description: "You will receive a confirmation with date, time and assigned doctor details along with the treatment cost to review and approve, and your home visit begins.",
            image: "Step-3.png"
    },
    {
      number: "04",
      title: "Start Your Treatment",
      description: "Your personalized dental treatment starts while following strict safety guidelines and putting patient&#39;s care and comfort as our top priority.",
      image: "Step-4.jpg"
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-state-green mb-6">
            Simplified Effective Processes
          </h2>
          <p className="text-xl text-smoky-black max-w-3xl mx-auto">
            Getting professional dental care at home is easier than you think. 
            Here's how our simple 4-step process works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Display */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={steps[activeStep - 1].image}
                alt={steps[activeStep - 1].title}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover transition-all duration-500"
              />
              {/* <div className="absolute top-4 left-4 bg-burnt-sienna text-dutch-white px-4 py-2 rounded-full font-bold text-lg">
                {steps[activeStep - 1].number}
              </div> */}
            </div>
          </div>

          {/* Interactive Steps */}
          <div className="order-1 lg:order-2 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index + 1 ? 'bg-state-green' : 'bg-white hover:bg-gray-100'
                } rounded-lg shadow-lg`}
                onClick={() => setActiveStep(index + 1)}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      activeStep === index + 1 ? 'bg-burnt-sienna text-dutch-white' : 'bg-burnt-sienna text-dutch-white'
                    }`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${
                        activeStep === index + 1 ? 'text-dutch-white' : 'text-smoky-black'
                      }`}>
                        {step.title}
                      </h3>
                      {activeStep === index + 1 && (
                        <p className="text-dutch-white opacity-90 leading-relaxed animate-fade-in">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
