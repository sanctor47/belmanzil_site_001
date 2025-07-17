import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
    return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Column */}
                        <div className="order-2 lg:order-1">
                            <div className="aspect-[4/3] max-h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-medical)]">
                                <img
                                    src="/Story&Model.png"
                                    alt="Dr. Mohamed El Shawadfy, Founder of BelManzil"
                                    className="rounded-lg shadow-2xl w-full h-[400px] object-cover transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <h1 className="text-4xl sm:text-5xl font-bold text-primary">
                                A Clinic Reimagined for Your Home
                            </h1>

                            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                                <p>
                                    <strong className="text-primary">BelManzil</strong> is Egypt's first home dental service,
                                    founded in 2020 by Dr. Mohamed El Shawadfy. Born during the COVID-19 pandemic, we were
                                    created for a time when no one felt safe leaving home.
                                </p>

                                <p>
                                    For many, visiting a dental clinic isn't easy, whether due to age, limited mobility,
                                    or the demands of daily life. That's where we come in. From seniors and post-op patients
                                    to anyone seeking a more convenient alternative, we deliver expert, high-quality dental
                                    care right to your doorstep.
                                </p>
                            </div>

                            <div className="border-l-4 border-accent pl-6 bg-muted/30 p-6 rounded-r-xl">
                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    Our Mission
                                </h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    To make professional dental care accessible to everyone, regardless of their circumstances,
                                    by bringing the highest standards of clinical excellence directly to their homes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Model Section */}
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

                            {/* <p className="text-xl font-semibold text-primary text-center">
                                We are a clinic reimagined for those who can't (or won't) go.
                            </p> */}
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