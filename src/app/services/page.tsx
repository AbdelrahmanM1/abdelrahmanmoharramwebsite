"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  {
    title: "Full Stack Development",
    description: "Modern web apps, scalable APIs, and robust backend systems.",
    price: "$340+ per project",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Custom Web Applications",
      "API Development",
      "Database Design",
      "Cloud Integration"
    ]
  },
  {
    title: "Minecraft Plugin Development",
    description: "Custom plugins for Minecraft servers, gameplay enhancements, and automation.",
    price: "$100+ per plugin",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Custom Commands",
      "Game Mechanics",
      "Server Integration",
      "Performance Optimization"
    ]
  },
  {
    title: "Discord Bot Development",
    description: "Feature-rich bots for moderation, entertainment, and automation.",
    price: "$80+ per bot",
    gradient: "from-violet-500 to-purple-600",
    features: [
      "Moderation Tools",
      "Custom Commands",
      "Event Management",
      "API Integration"
    ]
  },
  {
    title: "Web design",
    description: "I will design a beautiful and stunning website",
    price: "$150 per one page",
    gradient: "from-orange-500 to-purple-600",
    features: [
      "Wireframe",
      "design",
      "Full Website using Webflow if needed",
    ]
  },
];

export default function ServicesPage() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className="min-h-screen py-8 sm:py-12 px-2 sm:px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <section className="max-w-2xl sm:max-w-3xl md:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 mb-3 sm:mb-4">
            My Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Explore the range of services I offer to help you achieve your goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
            >
              <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.title === "Full Stack Development" ? "💻" : 
                 service.title === "Minecraft Plugin Development" ? "🎮" : "🤖"}
              </div>
              <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {service.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6 text-left w-full">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                    <SparklesIcon className={`h-4 w-4 mr-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                {service.price}
              </span>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 