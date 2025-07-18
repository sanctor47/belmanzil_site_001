import Image from "next/image";

export default function OurTeamPage() {
  return (
    <main className="pt-14 bg-[#eedac2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-20">

          {/* Text Content Container */}
          <div className="w-full lg:w-7/12 lg:text-left lg:order-2">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003b31] mb-8 leading-tight">
              Meet Our Specialists
            </h1>

            {/* Mobile‐only Image (under the title) */}
            <div className="block lg:hidden mb-8">
              <div className="relative aspect-[1/1] max-h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-medical)]">
                <Image
                  src="/Step-3.png"
                  alt="Our dental team"
                  fill
                  sizes="100vw"
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <p className="text-[#0f0f0f] text-lg sm:text-xl max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-6">
              We believe that exceptional care is delivered by exceptional people. Our team is composed of highly skilled and recognized specialists, each a leader in their respective field. Together, we bring a collaborative, multi-disciplinary approach to every home visit, ensuring you receive comprehensive and precise dental treatment.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#003b31] pl-6 py-2 bg-white/20 rounded-r-lg inline-block">
              <p className="italic text-[#003b31] font-medium text-lg">
                "The future of dentistry lies not just in technology, but in re-imagining how and where care is delivered with people's health at the heart of every decision."
              </p>
            </blockquote>
          </div>

          {/* Desktop‐only Image (left column on lg+) */}
          <div className="hidden lg:block w-full lg:w-5/12 lg:order-1">
            <div className="relative aspect-[1/1] max-h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-medical)]">
              <Image
                src="/Step-3.png"
                alt="Our dental team"
                fill
                sizes="100vw"
                className="object-cover transition-all duration-500"
                priority
              />
            </div>
          </div>

        </div>
        {/* Dr. Mohamed El Shawadfy */}
        <div className="mb-12">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border-l-4 border-state-green pl-6">
            <div className="max-w-4xl">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003b31] mb-3 leading-tight">
                Dr. Mohamed El Shawadfy
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003b31] mb-6 opacity-80">
                Founder/CEO | Oral Surgeon & Implantologist
              </h3>

              {/* Image */}
              {/* <img
                src="/images/dr-mohamed-elshawadfy.jpg"
                alt="Dr. Mohamed El Shawadfy"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              /> */}

              {/* Content */}
              <div className="space-y-6 text-[#0f0f0f] leading-relaxed text-base sm:text-lg">
                <p>
                  Dr. El Shawadfy is the founder and CEO, and a graduate of Cairo University, and holds a Master's Degree in Oral Surgery and Dental Implantology from Goethe University, Germany.
                </p>
                <p>
                  After establishing his private practice and operating for over 20 years in addition to teaching at Misr International University (MIU) for 7 years in the Oral Surgery department - Dr. El Shawadfy is redefining dentistry in Egypt and the Middle East.
                </p>
                <p>
                  Transforming how care is delivered by bringing it directly to patients' homes for the very first time. Driven by deep dedication and a passion for service, he envisions a model where access is no longer a barrier. His mission is clear: to extend high-quality dental care to those who may struggle to reach it—empowering comfort, dignity, and health at every doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Cherif Mansour */}
        <div className="mb-12">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border-l-4 border-state-green pl-6">
            <div className="max-w-4xl">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003b31] mb-3 leading-tight">
                Dr. Cherif Mansour
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003b31] mb-6 opacity-80">
                BDS, MSc, PhD Fixed Prosthodontics
              </h3>

              {/* Image */}
              {/* <img
                src="/images/dr-cherif-mansour.jpg"
                alt="Dr. Cherif Mansour"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              /> */}

              {/* Content */}
              <div className="space-y-6 text-[#0f0f0f] leading-relaxed text-base sm:text-lg">
                <p>
                  Dr. Cherif H. Mansour, a crown and bridge specialist with over a decade of clinical and academic experience, combines advanced digital dentistry with patient-centered care to restore confident, functional smiles.
                </p>
                <p>
                  As a faculty member at Misr International University, he brings precision and expertise to every treatment—from single restorations to complex rehabilitation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Ahmed Wafaa */}
        <div className="mb-12">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border-l-4 border-state-green pl-6">
            <div className="max-w-4xl">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003b31] mb-3 leading-tight">
                Dr. Ahmed Wafaa
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003b31] mb-6 opacity-80">
                Head of Home Dental Specialists
              </h3>

              {/* Image */}
              {/* <img
                src="/images/dr-ahmed-wafaa.jpg"
                alt="Dr. Ahmed Wafaa"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              /> */}

              {/* Content */}
              <div className="space-y-6 text-[#0f0f0f] leading-relaxed text-base sm:text-lg">
                <p>
                  A graduate of Misr International University (MIU), with BDS in Dentistry, Dr. Ahmed has been an integral part of our team for the past 5 years.
                </p>
                <p>
                  He currently serves as Head of Dental Specialists at Belmanzil, and leads with clinical expertise, trusted patient care, and a commitment to excellence in home dental service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Amira Tarkhan */}
        <div>
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border-l-4 border-state-green pl-6">
            <div className="max-w-4xl">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003b31] mb-3 leading-tight">
                Amira Tarkhan
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003b31] mb-6 opacity-80">
                Co-Founder/Chief Operating Officer (COO)
              </h3>

              {/* Image */}
              {/* <img
                src="/images/amira-tarkhan.jpg"
                alt="Amira Tarkhan"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              /> */}

              {/* Content */}
              <div className="space-y-6 text-[#0f0f0f] leading-relaxed text-base sm:text-lg">
                <p>
                  With over 15 years of experience in luxury service and business operations, Amira brings a rare blend of precision, empathy, and strategic insight to her role at Belmanzil.
                </p>
                <p>
                  As Co-Founder and Chief Operating Officer, she is a driving force behind Egypt's first in-home dental care service—an innovative model designed to bring clinical excellence directly to those who need it most. Her belief in accessible, patient-centered care stems from a deep understanding of premium service delivery.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#003b31] pl-6 py-2 bg-white/20 rounded-r-lg mt-6">
                <p className="italic text-[#003b31] font-medium text-lg">
                  "The future of dentistry lies not just in technology, but in re-imagining how and where care is delivered with people's health at the heart of every decision."
                </p>
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

// ---- in the page herader component can you fix the ordering on mobile where on Mobile the order should be 1. title 2. Image 3. Text 4. Qoute, keeping the current layout on desktop