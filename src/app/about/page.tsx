"use client";
import React, { useEffect, useState } from "react";
import { color, motion } from "framer-motion";
import { DiVisualstudio } from "react-icons/di";
import { 
  SiReact, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiSqlite,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiLinux
} from "react-icons/si";
import { FaServer, FaRocket, FaTools } from "react-icons/fa";

const frontendSkills = [
  { name: "React.js", icon: SiReact, color: "text-blue-600 dark:text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-blue-700 dark:text-blue-500" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600 dark:text-orange-400" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500 dark:text-blue-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400 dark:text-cyan-300" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500 dark:text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 dark:text-blue-400" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600 dark:text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700 dark:text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600 dark:text-blue-400" },
  { name: "REST APIs", icon: FaServer, color: "text-purple-600 dark:text-purple-400" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-green-600 dark:text-green-400" },
  { name: "SQLite", icon: SiSqlite, color: "text-blue-600 dark:text-blue-400" },
  { name: "Python", icon: SiPython, color: "text-blue-600 dark:text-blue-400" },
];

const fullStackSkills = [
  { name: "Full Stack Apps", icon: FaRocket, color: "text-indigo-600 dark:text-indigo-400" },
  { name: "Authentication", icon: FaServer, color: "text-purple-600 dark:text-purple-400" },
  { name: "API Integration", icon: FaServer, color: "text-purple-600 dark:text-purple-400" },
  { name: "Deployment", icon: FaRocket, color: "text-indigo-600 dark:text-indigo-400" },
];

const tools = [
  { name: "VS Code", icon: DiVisualstudio, color: "text-blue-600 dark:text-blue-400" },
  { name: "Git & GitHub", icon: SiGithub, color: "text-gray-700 dark:text-gray-300" },
  { name: "Figma", icon: SiFigma, color: "text-purple-600 dark:text-purple-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600 dark:text-orange-400" },
  { name: "Linux", icon: SiLinux, color: "text-green-600 dark:text-green-400" },
];

type SkillsProgressSectionProps = {
  title: string;
  skills: {
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
};

export default function AboutPage() {
  return (
    <main className={`min-h-screen py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl space-y-8"
      >
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">About Me</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">My Journey</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Passionate about creating innovative solutions and delivering exceptional user experiences
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3 sm:mb-4">Abdelrahman Moharram</h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                Hi! I'm a passionate Full Stack Developer with expertise in web development, Minecraft plugin creation, and Discord bot development. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                With a strong foundation in modern web technologies and a keen eye for detail, I create engaging digital experiences that make a difference. My journey in development has equipped me with the skills to build robust applications that users love.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">Full Stack Developer</span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium">Minecraft Plugin Expert</span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs sm:text-sm font-medium">Discord Bot Developer</span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs sm:text-sm font-medium">Minecarft Server Developer </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress Sections */}
        <SkillsProgressSection title="Front-end Skills" skills={frontendSkills} />
        <SkillsProgressSection title="Back-end Skills" skills={backendSkills} />
        <SkillsProgressSection title="Full Stack Skills" skills={fullStackSkills} />
        <SkillsProgressSection title="Tools" skills={tools} />
      </motion.div>
    </main>
  );
}

function SkillsProgressSection({ title, skills }: SkillsProgressSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-12"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <Icon className={`h-8 w-8 mb-2 ${color} transition-colors duration-300`} />
            <span className="text-sm text-center text-gray-800 dark:text-gray-100 font-medium">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
