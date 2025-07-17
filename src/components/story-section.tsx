import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#eedac2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Image
              src="/HeroSection.png"
              alt="Dr. Mohamed El Shawadfy providing dental care at home"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003b31] mb-8">A Clinic Reimagined for Your Home</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#003b31] mb-3">Our Story</h3>
                <p className="text-[#0f0f0f] leading-relaxed">
                  BelManil is Egypt's first home dental service, founded in 2020 by Dr. Mohamed El Shawadfy. Born during
                  the COVID-19 pandemic, we were created for a time when no one felt safe leaving home.
                </p>
                <p className="text-[#0f0f0f] leading-relaxed mt-4">
                  For many, visiting a dental clinic isn't easy, whether due to age, limited mobility, or the demands of
                  daily life. That's where we come in. From seniors and post-op patients to anyone seeking a more
                  convenient alternative, we deliver expert, high-quality dental care right to your doorstep.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003b31] mb-3">Our Model</h3>
                <p className="text-[#0f0f0f] leading-relaxed">
                  Our model blends compassion, innovation, and clinical excellence to offer care that's not only
                  effective but personal and stress-free.
                </p>
                <p className="text-[#0f0f0f] leading-relaxed mt-4">
                  Equipped with advanced portable technology and a team of specialists, we provide customized treatment
                  with zero hassle, all in the comfort of your own space. Beyond convenience, we have a deep commitment
                  to safety, comfort, and precision. We are a clinic reimagined for those who can't (or won't) go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
