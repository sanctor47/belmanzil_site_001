'use client';

import { useState } from 'react';
import { Phone, Mail, User, FileText, Clock, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    complaint: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const getGAClientId = (): Promise<string> => {
    return new Promise((resolve) => {
      // Failsafe timeout in case gtag is blocked or fails to respond.
      const timeoutId = setTimeout(() => {
        console.warn('Google Analytics client ID retrieval timed out.');
        resolve('');
      }, 1500); // 1.5-second timeout

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        try {
          // gtag uses a callback to provide the client_id.
            window.gtag(
            'get',
            'G-5GKDGTR5CC',
            'client_id',
            (clientId: string) => {
              clearTimeout(timeoutId); // Got the ID, so clear the timeout.
              console.log('Google Analytics Client ID:', clientId);
              resolve(clientId);
            }
            );
        } catch (error) {
          clearTimeout(timeoutId);
          console.error('Error getting Google Analytics Client ID:', error);
          resolve(''); // Resolve with empty string on error.
        }
      } else {
        clearTimeout(timeoutId);
        console.warn('gtag function not found on window object.');
        resolve(''); // Resolve with empty string if gtag is not available.
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const clientId = await getGAClientId();

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      complaint: formData.complaint,
      preferredTime: formData.preferredTime,
      gaClientId: clientId // Include Google Analytics Client ID
    };

    // Simulate form submission
    const response = await fetch('/api/new-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    // await new Promise(resolve => setTimeout(resolve, 1500));
    if (!response.ok) {
      console.error('Failed to submit form');
      toast.error('Failed to submit your request. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-state-green mb-4">
          Request Submitted Successfully!
        </h3>
        <p className="text-smoky-black/80 mb-6">
          Someone from our dental team will contact you shortly to schedule your at-home visit.
        </p>
        <p className="text-sm text-deep-teal">
          Expected response time: Within 2-4 hours during business hours
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-state-green mb-4">
        Book Your At-Home Visit
      </h2>
      <p className="text-smoky-black/80 mb-8">
        Fill out the form below and our team will get in touch to confirm your appointment.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-smoky-black mb-2">
            Your Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-state-green focus:border-transparent transition-all-smooth"
              placeholder="Your full name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-smoky-black mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-state-green focus:border-transparent transition-all-smooth"
              placeholder="example@mail.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-smoky-black mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-state-green focus:border-transparent transition-all-smooth"
              placeholder="+20 1XXXXXXXXX"
            />
          </div>
        </div>
        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-smoky-black mb-2">
            Address *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-state-green focus:border-transparent transition-all-smooth"
              placeholder="Your address"
            />
          </div>
        </div>
        {/* Chief Complaint */}
        <div>
          <label htmlFor="complaint" className="block text-sm font-medium text-smoky-black mb-2">
            Chief Complaint *
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-state-green focus:border-transparent transition-all-smooth resize-none"
              placeholder="Tooth pain, check-up, cleaning..."
            />
          </div>
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-smoky-black mb-2">
            Preferred Time to Contact
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              // required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-state-green focus:border-transparent transition-all-smooth appearance-none bg-white"
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-state-green text-dutch-white py-3 px-6 rounded-md font-semibold hover:bg-deep-teal transition-all-smooth transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-dutch-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </div>
          ) : (
            'Submit Your Request'
          )}
        </button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> This is not a confirmed appointment. Our team will review your request
          and contact you to schedule your visit based on availability and your specific needs.
        </p>
      </div>
    </div>
  );
}