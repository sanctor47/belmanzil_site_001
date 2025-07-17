import Link from 'next/link';
import BookingForm from '@/components/booking-form/booking-form';
import Image from 'next/image';

export const metadata = {
    title: 'Book Your At-Home Dental Visit | belmanzil',
    description: 'Schedule your professional dental care at home. Fill out our simple form and our team will contact you to confirm your appointment.',
};

export default function BookNowPage() {
    const processSteps = [
        {
            number: 1,
            title: 'Make an Appointment',
            description: 'You reach out to us.'
        },
        {
            number: 2,
            title: 'Get Matched',
            description: 'We connect you with the right specialist.'
        },
        {
            number: 3,
            title: 'Home Consultation',
            description: 'Our expert arrives fully equipped.'
        },
        {
            number: 4,
            title: 'Start Treatment',
            description: 'You receive care in your own space.'
        }
    ];

    return (
        <div className="pt-16 bg-[#eedac2] min-h-screen bg-dutch-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* On mobile, display as a reversed column to show the form first. On desktop, switch to a grid. */}
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12">
                    {/* Process Summary */}
                    <div className="lg:pr-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-state-green mb-6">
                            Your Journey to At-Home Care
                        </h2>
                        <p className="text-lg text-smoky-black/80 mb-8 leading-relaxed">
                            We've made getting professional dental care at home as simple as possible.
                            Here's a quick look at the steps.
                        </p>

                        <div className="space-y-6">
                            {processSteps.map((step) => (
                                <div key={step.number} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-burnt-sienna text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-deep-teal mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-smoky-black/70">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-state-green font-semibold mt-8">
                            It's that simple. Fill out the form to get started.
                        </p>

                        {/* Additional reassurance */}
                        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                            <h4 className="font-semibold text-deep-teal mb-2">Why Choose BelManil?</h4>
                            <ul className="space-y-2 text-sm text-smoky-black/80">
                                <li>• Professional equipment brought to your home</li>
                                <li>• Licensed specialists with years of experience</li>
                                <li>• Strict safety and sterilization protocols</li>
                                <li>• Convenient scheduling that fits your lifestyle</li>
                            </ul>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:pl-8">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}