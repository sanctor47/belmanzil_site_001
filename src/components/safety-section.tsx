
import { Shield, Award, Users, Heart } from 'lucide-react';

const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Class B Autoclave Sterilization",
      description: "Hospital-grade sterilization equipment ensuring complete elimination of all pathogens",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=300"
    },
    {
      icon: Award,
      title: "UK Guidelines (HTM01-05)",
      description: "Strict adherence to international infection control standards and protocols",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300"
    },
    {
      icon: Users,
      title: "Single-Use Materials",
      description: "All instruments and materials are single-use to eliminate any risk of cross-contamination",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&h=300"
    },
    {
      icon: Heart,
      title: "Full PPE Protection",
      description: "N95 masks, face shields, and complete protective equipment for all staff members",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-deep-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dutch-white mb-6">
            Uncompromising Safety, Global Standards
          </h2>
          <p className="text-xl text-dutch-white opacity-90 max-w-3xl mx-auto">
            We follow global standards to keep you safe. Our strict protocols meant we never stopped 
            during COVID-19—we just got even safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-burnt-sienna rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-dutch-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-dutch-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-dutch-white opacity-90 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-dutch-white mb-8">Service Areas</h3>
          <div className="bg-burnt-sienna bg-opacity-20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold text-dutch-white mb-4">Greater Cairo</h4>
                <p className="text-dutch-white opacity-90">All year round service</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-dutch-white mb-4">Summer Locations</h4>
                <p className="text-dutch-white opacity-90">El-Alamein, Sidi Heneish, Matrouh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
