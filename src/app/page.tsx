"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, CodeBracketIcon, CommandLineIcon, CpuChipIcon, StarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[60vh] px-2 sm:px-4 pt-0 pb-10 sm:pt-4 sm:pb-16 overflow-hidden">
        {/* Removed background gradients behind navbar */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 sm:-top-20 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 sm:-bottom-20 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-full mb-4 shadow-lg">
                <CodeBracketIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 mb-4 sm:mb-6"
            >
              Abdelrahman Moharram
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 sm:mb-8"
            >
              Full Stack Developer | Minecraft Plugin Developer | Discord Bot Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto"
            >
              I build modern web applications, custom Minecraft plugins, and powerful Discord bots. 
              Let's bring your ideas to life with clean code and creative solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/services" 
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold tracking-wide text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400/50 rounded-xl"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:brightness-110 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-xl"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 border-2 border-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 rounded-xl"></span>
                <span className="relative flex items-center text-white font-bold text-lg">
                  View My Services
                  <ArrowRightIcon className="h-5 w-5 ml-2 text-white drop-shadow group-hover:scale-110 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold tracking-wide text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400/50 rounded-xl"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:brightness-110 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-xl"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 border-2 border-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 rounded-xl"></span>
                <span className="relative flex items-center text-white font-bold text-lg">
                  Get Started
                  <RocketLaunchIcon className="h-5 w-5 ml-2 text-white drop-shadow group-hover:scale-110 transition-transform" />
                </span>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1pdHQEHHiIScH_PJu7wn41YCkZ6Y96Neq/view?usp=sharing"
                download
                target="_blank"
                rel="noopener"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold tracking-wide text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-400/50 rounded-xl animate-pulse hover:animate-none"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 group-hover:brightness-110 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-xl"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 border-2 border-purple-500 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-500 group-hover:to-red-500 rounded-xl"></span>
                <span className="relative flex items-center font-bold text-lg">
                  Download CV
                  <SparklesIcon className="h-5 w-5 ml-2 text-white drop-shadow group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-2 sm:px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-2xl sm:max-w-3xl md:max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4"
            >
              <CommandLineIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">What I Do</span>
            <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 mb-3 sm:mb-4">
              Professional Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Comprehensive development solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Full Stack Development",
                description: "Modern web apps, scalable APIs, and robust backend systems.",
                icon: "💻",
                features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
                gradient: "from-blue-500 to-purple-600",
                iconComponent: CodeBracketIcon
              },
              {
                title: "Minecraft Plugin Development",
                description: "Custom plugins for Minecraft servers, gameplay enhancements, and automation.",
                icon: "🎮",
                features: ["Custom Commands", "Game Mechanics", "Server Integration", "Performance Optimization"],
                gradient: "from-purple-500 to-pink-600",
                iconComponent: CpuChipIcon
              },
              {
                title: "Discord Bot Development",
                description: "Feature-rich bots for moderation, entertainment, and automation.",
                icon: "🤖",
                features: ["Moderation Tools", "Custom Commands", "Event Management", "API Integration"],
                gradient: "from-pink-500 to-red-600",
                iconComponent: CommandLineIcon
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
              >
                <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                      <StarIcon className={`h-4 w-4 mr-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-2 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent -z-10" />
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 sm:-top-20 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 sm:-bottom-20 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4"
            >
              <RocketLaunchIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Let's Connect</span>
            <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 mb-4 sm:mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Whether you need a modern web application, custom Minecraft plugin, or powerful Discord bot, 
              I'm here to help bring your vision to life with clean code and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold tracking-wide text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400/50 rounded-xl"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:brightness-110 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-xl"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 border-2 border-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 rounded-xl"></span>
                <span className="relative flex items-center text-white font-bold text-lg">
                  Get Started
                  <RocketLaunchIcon className="h-5 w-5 ml-2 text-white drop-shadow group-hover:scale-110 transition-transform" />
                </span>
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center px-8 py-4 font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full sm:w-auto"
              >
                View My Work
                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
