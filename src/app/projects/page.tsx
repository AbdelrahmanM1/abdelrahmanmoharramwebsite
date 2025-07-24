"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Description } from "@headlessui/react";
import { desc, g, i } from "framer-motion/client";
import { link } from "fs";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio to showcase my work and services.",
    link: "#",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    gradient: "from-blue-500 to-indigo-600",
    icon: "💻"
  },
  {
    title: "Minecraft Server Plugin Suite",
    description: "A collection of custom plugins for Minecraft servers.",
    link: "#",
    skills: ["Java", "Minecraft API", "Spigot"],
    gradient: "from-emerald-500 to-teal-600",
    icon: "🎮"
  },
  {
    title: "Minecraft Mute Plugin",
    description: "A plugin for Minecraft servers that allows admins to mute players for a specified duration.",
    link: "https://github.com/AbdelrahmanM1/Muteplugin",
    skills: ["Java", "Minecraft API", "Spigot", "SQLite"],
    gradient: "from-emerald-500 to-teal-600",
    icon: "🎮"
  },
  {
    title: "School Management System",
    description: "A web application for managing school bookings, schedules, and resources.",
    link: "#",
    skills: ["HTML", "TailwindCSS", "Flask", "Python"],
    gradient: "from-blue-500 to-indigo-600",
    icon: "💻"
  },
    {
    title: "Ai chatbot website",
    description: "A web application intergate with Google api ai I made it for fun.",
    link: "https://github.com/AbdelrahmanM1/chatbot",
    skills: ["Html5", "css", "javascript","Python","Google api"],
    gradient: "from-violet-500 to-purple-600",
    icon: "💻"
  },
  {
    title: "ClearWater - Website",
    description: "ClearWater is a campaign focused on raising awareness and taking action to protect the world's water resources from pollution.",
    link: "https://clearwaterwebsite-production.up.railway.app",
    skills: ["HTML", "CSS", "JavaScript"],
    gradient: "from-blue-500 to-indigo-600",
    icon: "💻"
  },
  {
    title: "CodeBridge - Learning Platform",
    description: "A landing page for a revolutionary AI-powered learning platform that aims to make programming accessible to everyone, including learners who are blind, deaf, or have learning difficulties. Our mission is to ensure no one is left behind in the world of technology.",
    link: "https://abdelrahmanm1.github.io/codebridge/",
    skills: ["HTML", "TailwindCSS", "JavaScript"],
    gradient: "from-green-500 to-lime-600",
    icon: "📚"
  },
  {
    title: "ScoreboardPlugin",
    description: "A Minecraft scoreboard plugin, similar to Hypixel's, that displays player scores and statistics in-game.",
    skills: ["Java", "Minecraft API", "Spigot"],
    gradient: "from-yellow-500 to-orange-600",
    icon: "🏆",
    link: "https://github.com/AbdelrahmanM1/ScoreboardSameHypixel"
  }
  ,
  {
    title: "Report Plugin",
    description: "A Minecraft plugin that allows players to report rule-breakers directly in-game, making server moderation easier and more efficient.",
    skills: ["Java", "Minecraft API", "Spigot", "Discord Webhook"],
    gradient: "from-red-500 to-pink-600",
    icon: "🚨",
    link: "https://github.com/AbdelrahmanM1/report-plugin"
  },
  {
    title: "Birthday Countdown",
    description: "A fun and interactive birthday countdown website that helps users track days until my special day with animations and celebrations.",
    skills: ["HTML", "JavaScript", "Tailwind CSS"],
    gradient: "from-pink-500 to-rose-600",
    icon: "🎂",
    link: "https://abdelrahmanm1.github.io/a-fun-birthday-countdown/"
  },
  {
    title: "Inspirely Website",
    description: "A personal project that showcases my skills and interests, featuring a clean design and interactive elements.",
    skills: ["HTML", "TailwindCSS", "JavaScript"],
    gradient: "from-purple-500 to-violet-600",
    icon: "🌟",
    link: "https://abdelrahmanm1.github.io/inspirary_website/"
  },
  {
    title: "Asteroid Dodger",
    description: "A interactive web game where players control a spaceship to dodge incoming asteroids and destroy it, enhancing their reflexes and hand-eye coordination.",
    skills: ["HTML", "JavaScript", "Tailwind CSS"],
    gradient: "from-pink-500 to-rose-600",
    icon: "🎮",
    link: "https://abdelrahmanm1.github.io/Asteroid-dodger/"
  }
];

export default function ProjectsPage() {
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
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Here are some of the projects I've worked on. Click to learn more!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm"
            >
              <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View Project
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 