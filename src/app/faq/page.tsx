"use client";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What technologies do you use for web development?",
    answer: "I use modern frameworks like Next.js, React, Node.js, and Tailwind CSS for building scalable and performant web applications.",
    category: "Development"
  },
  {
    question: "Can you develop custom Minecraft plugins?",
    answer: "Yes! I specialize in creating custom Minecraft plugins tailored to your server's needs.",
    category: "Minecraft"
  },
  {
    question: "What features can your Discord bots provide?",
    answer: "My Discord bots can handle moderation, entertainment, automation, and much more, customized for your community.",
    category: "Discord"
  },
  {
    question: "How can I contact you for a project?",
    answer: "You can use the contact form on the Contact page to reach out to me directly.",
    category: "General"
  },
  {
    question: "Is it legit",
    answer: "yes it is I will provide you all you needed.",
    category: "General"
  },
  {
    question: "How can I pay for your services?",
    answer: "You can pay for my services using PayPal or bank transfer.",
    category: "Payment"
  },
    {
      question: "How can I contact the developer?",
      answer: "You can contact me on discord or use the contact form on the contact page.",
      category: "General"
    },
    {
      question: "What's your discord username?",
      answer: "My discord username is 3bdoabk.",
      category: "General"
    },
];

export default function FAQPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const [visibleFaqs, setVisibleFaqs] = useState<number[]>([]);

  useEffect(() => {
    setFadeIn(true);
    // Staggered animation for FAQs
    faqs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleFaqs(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <main className={`min-h-screen py-12 px-4 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about my services and expertise
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className="border border-gray-100 dark:border-slate-700/50 rounded-2xl shadow-lg bg-white dark:bg-slate-800/50 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                    <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                      <ChevronUpIcon 
                        className={`h-5 w-5 transition-transform duration-300 ${
                          open ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                        }`} 
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4 text-gray-600 dark:text-gray-300 transition-all duration-300">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 