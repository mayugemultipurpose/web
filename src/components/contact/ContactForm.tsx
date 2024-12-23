import React from 'react';
import { ContactFormProps } from './types';

export default function ContactForm({ formData, handleChange, handleSubmit }: ContactFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5CE1E6] focus:ring-[#5CE1E6]"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5CE1E6] focus:ring-[#5CE1E6]"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5CE1E6] focus:ring-[#5CE1E6]"
          placeholder="Your message"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-[#5CE1E6] text-white py-2 px-4 rounded-md hover:bg-[#4BC8CD] transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}