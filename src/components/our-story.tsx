import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // 1. Import the Image component

const OurStory = () => {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-dutch-white">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="order-2 lg:order-1">
                        {/* 2. Add `relative` to the parent container for the `fill` prop to work */}
                        <div className="relative aspect-[4/3] max-h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-medical)]">
                            {/* 3. Replace <img> with <Image> and use the `fill` prop */}
                            <Image
                                src="/Story&Model.png"
                                alt="Dr. Mohamed El Shawadfy, Founder of BelManzil"
                                fill
                                className="object-cover transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#003b31]">
                            A Clinic Reimagined for Your Home
                        </h1>

                        <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                            <p>
                                <strong className="text-primary">BelManzil</strong> is Egypt’s first home dental service, founded in May 2020 with one goal: making
                                expert dental care accessible where it’s needed most—at home.
                            </p>
                            <p>
                                Whether you are facing mobility limitations, balancing family responsibilities, or simply
                                seeking a stress-free alternative to traditional clinics, our service is designed to offer you
                                safety, convenience and stress free dental experience. For us, accessibility isn’t a
                                catchphrase—it’s the foundation of how we care.
                            </p>
                            <p>
                                With advanced portable technology and a team of highly skilled specialists, you now have
                                access to a full clinic-grade dental experience in the comfort and security of your own space.
                                From diagnosis to treatment, every step is designed to be precise, professional, and
                                effortlessly convenient.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* The rest of your component remains the same... */}

                <div className="border-l-4 border-state-green pl-6 bg-dutch-white/30 p-6 rounded-r-xl ">
                    <h3 className="text-xl font-semibold text-primary mb-3">
                        Our Mission
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                        At BelManzil, our service promise is centered on putting your comfort, safety, and convenience
                        first. We bring the full clinic experience to your home—without compromise. From diagnosis to
                        treatment, every detail is handled with precision, empathy, and professionalism.

                        Because we believe dental treatment shouldn’t be something you work around—it should be
                        built around you.
                    </p>
                </div>

                <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 shadow-[var(--shadow-soft)]">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Our Model
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
                        <p>
                            Our model blends <strong className="">compassion</strong>,
                            <strong className=""> innovation</strong>, and
                            <strong className=""> clinical excellence</strong> to offer care that's
                            not only effective but personal and stress-free.
                        </p>
                        <p>
                            Equipped with advanced portable technology and a team of specialists, we provide
                            customized treatment with zero hassle, all in the comfort of your own space.
                            Beyond convenience, we have a deep commitment to safety, comfort, and precision.
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <Button asChild size="lg"
                            className="bg-[#e58754] hover:bg-[#d67643] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            <Link href="/booking">Experience the Difference</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;