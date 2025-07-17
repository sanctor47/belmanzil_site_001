import OurStory from "@/components/our-story"

export default function OurStoryPage() {
    return (
        <main className="pt-16">
            <OurStory />
        </main>
    )
}


const Section = () => {
    return (
        <section className="py-16 bg-[#eedac2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1">
                        <img
                            src="/placeholder.svg?height=500&width=600"
                            alt="Dr. Mohamed El Shawadfy"
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#003b31] mb-8">
                            A Clinic Reimagined for Your Home
                        </h1>

                        <div className="space-y-6 text-[#0f0f0f]">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#003b31] mb-4">Our Story</h2>
                                <p className="leading-relaxed">
                                    BelManzil is Egypt's first home dental service, founded in 2020 by Dr. Mohamed El Shawadfy. Born
                                    during the COVID-19 pandemic, we were created for a time when no one felt safe leaving home.
                                </p>
                                <p className="leading-relaxed mt-4">
                                    For many, visiting a dental clinic isn't easy, whether due to age, limited mobility, or the
                                    demands of daily life. That's where we come in. From seniors and post-op patients to anyone
                                    seeking a more convenient alternative, we deliver expert, high-quality dental care right to your
                                    doorstep.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-[#003b31] mb-4">Our Model</h2>
                                <p className="leading-relaxed">
                                    Our model blends compassion, innovation, and clinical excellence to offer care that's not only
                                    effective but personal and stress-free.
                                </p>
                                <p className="leading-relaxed mt-4">
                                    Equipped with advanced portable technology and a team of specialists, we provide customized
                                    treatment with zero hassle, all in the comfort of your own space. Beyond convenience, we have a
                                    deep commitment to safety, comfort, and precision. We are a clinic reimagined for those who can't
                                    (or won't) go.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}