'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  insuranceType?: string;
  message?: string;
}

const INSURANCE_TYPES = [
  'Auto Insurance',
  'Home Insurance',
  'Life Insurance',
  'Business Insurance',
  'Travel Insurance',
  'Disability Insurance',
  'Other',
];

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.insuranceType) {
      newErrors.insuranceType = 'Please select an insurance type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: '',
      });

      if (onSuccess) {
        onSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        ...errors,
        message: 'Failed to submit form. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {isSubmitted ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-bold text-green-800 mb-2">
            Thank You!
          </h3>
          <p className="text-green-700">
            Your message has been sent successfully. We will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />

            <div className="w-full">
              <label
                htmlFor="insuranceType"
                className="block text-sm font-medium text-[#1a365d] mb-2"
              >
                Insurance Type <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="insuranceType"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleChange}
                className={cn(
                  'w-full px-4 py-2.5 border rounded-lg text-gray-900 transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2',
                  errors.insuranceType
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-[#0d9488]',
                  'disabled:bg-gray-100 disabled:cursor-not-allowed',
                  'appearance-none'
                )}
              >
                <option value="">Select an insurance type...</option>
                {INSURANCE_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.insuranceType && (
                <p className="text-red-500 text-sm mt-1.5 font-medium">
                  {errors.insuranceType}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#1a365d] mb-2"
            >
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Please tell us how we can help you..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={cn(
                'w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-[#0d9488]',
                'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500',
                'resize-none'
              )}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1.5 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="w-full md:w-auto"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      )}
    </div>
  );
}
