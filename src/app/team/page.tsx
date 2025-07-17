export default function OurTeamPage() {
    return (
          <div className="pt-16 bg-[#eedac2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003b31] mb-6">Meet Our Specialists</h1>
          <p className="text-[#0f0f0f] text-lg max-w-4xl mx-auto leading-relaxed">
            We believe that exceptional care is delivered by exceptional people. Our team is composed of highly skilled
            and recognized specialists, each a leader in their respective field. Together, we bring a collaborative,
            multi-disciplinary approach to every home visit, ensuring you receive comprehensive and precise dental
            treatment.
          </p>
        </div>

        {/* Dr. Mohamed El Shawadfy */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Dr. Mohamed El Shawadfy"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#003b31] mb-2">Dr. Mohamed El Shawadfy</h2>
              <h3 className="text-xl font-semibold text-[#003b31] mb-6">
                Founder & CEO | Oral Surgeon & Implantologist
              </h3>
              <div className="space-y-4 text-[#0f0f0f] leading-relaxed">
                <p>
                  Dr. Mohamed El Shawadfy is the visionary founder and CEO of BelManzil, Egypt's pioneering in-home
                  dental service established in May 2020. A 2005 graduate of Cairo University, he furthered his
                  expertise by earning a Master's Degree in Oral Surgery and Dental Implantology from Goethe University
                  in Germany in 2016.
                </p>
                <p>
                  His extensive background includes over 15 years in private practice and a 7-year tenure teaching in
                  the Oral Surgery department at Misr International University (MIU).
                </p>
                <p>
                  The inspiration for BelManzil came from Dr. El Shawadfy's observation that elderly individuals over
                  60, who were confined to their homes, lacked access to essential dental services. In response, he
                  founded BelManzil to provide "premium full dental services" by assembling a team of highly skilled
                  specialists who utilize state-of-the-art, fully mobile dental equipment.
                </p>
                <p className="italic">
                  "BelManzil does not replace the dental office, but rather is a complete solution for those unable to
                  leave their home."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Sherif Mansour */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-[#003b31] mb-2">Dr. Sherif Mansour</h2>
              <h3 className="text-xl font-semibold text-[#003b31] mb-6">Prosthodontics Specialist</h3>
              <div className="space-y-4 text-[#0f0f0f] leading-relaxed">
                <p>
                  Dr. Sherif H. Mansour is a specialist in Fixed Prosthodontics, holding a BDS, MSc, and PhD in the
                  field. With over a decade of both clinical and academic experience, he is dedicated to restoring
                  healthy and confident smiles through advanced prosthodontic care and cutting-edge digital dentistry.
                </p>
                <p>
                  Currently a faculty member at Misr International University, Dr. Mansour teaches the science that
                  underpins restorative dentistry. He is recognized for his precision and a patient-centered approach
                  that merges deep academic knowledge with clinical expertise.
                </p>
                <p>
                  Dr. Mansour is proficient in addressing issues ranging from missing teeth to complex long-term
                  rehabilitations, helping patients regain comfort, function, and the natural aesthetics of their
                  smiles. His specializations at BelManzil include Crowns, Bridges, and Dentures (Prosthodontics).
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Dr. Sherif Mansour"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
