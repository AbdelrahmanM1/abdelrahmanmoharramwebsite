"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

const subjectOptions = [
  'Project Inquiry',
  'Job Opportunity',
  'Collaboration',
  'General Question',
  'Other'
];

export default function ContactPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Abdelrahman Moharram Developer',
        subject: formData.subject,
        message: formData.message,
        name: formData.name,
        email: formData.email,
        time: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact me directly at abdelrahmanmoharram.dev@gmail.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-6 sm:py-10 px-2 sm:px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 via-purple-400/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 via-blue-400/20 to-transparent rounded-full blur-3xl -z-10" />
      <section className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h1 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 mb-2 sm:mb-3">
            Contact Me
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a question or want to work together? Fill out the form below or reach out directly.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
          {/* Contact Info */}
          <div className="flex-1 lg:max-w-md space-y-6 mb-6 lg:mb-0 bg-white/70 dark:bg-slate-800/60 rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100 dark:border-slate-700/50 backdrop-blur-md flex flex-col justify-center">
            <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Contact Information
            </h2>
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                  <EnvelopeIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">abdelrhmanmoharram.dev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                  <PhoneIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">+201228832608</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                  <MapPinIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">Damietta, Egypt</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                  <FaDiscord className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Discord</p>
                  <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">3bdoabk</p>
                </div>
              </div>
            </div>
          </div>
          {/* Divider for large screens */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent dark:from-blue-900/30 dark:via-purple-900/30 dark:to-transparent mx-2" />
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full max-w-xl mx-auto bg-white/80 dark:bg-slate-800/70 rounded-2xl shadow-xl p-4 sm:p-8 lg:p-12 border border-gray-100 dark:border-slate-700/50 backdrop-blur-md space-y-8 flex flex-col justify-center">
            <div className="mb-3">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-base sm:text-lg">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base sm:text-lg transition-all duration-200" 
                placeholder="Your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-base sm:text-lg">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base sm:text-lg transition-all duration-200" 
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-base sm:text-lg">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white text-base sm:text-lg transition-all duration-200"
              >
                <option value="">Select a subject</option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-base sm:text-lg">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base sm:text-lg transition-all duration-200" 
                rows={5}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 sm:py-5 px-4 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base sm:text-lg group"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-6 w-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <EnvelopeIcon className="h-6 w-6 ml-2 text-white group-hover:scale-110 transition-transform" />
                </>
              )}
            </button>
            {status.type && (
              <div className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
                status.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                  : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircleIcon className="h-5 w-5" />
                ) : (
                  <XCircleIcon className="h-5 w-5" />
                )}
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}