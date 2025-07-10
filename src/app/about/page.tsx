"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  { name: "React.js", icon: SiReact},
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress},
  { name: "MongoDB", icon: SiMongodb},
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "REST APIs", icon: FaServer },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "SQLite", icon: SiSqlite },
  { name: "Python", icon: SiPython },
];

const fullStackSkills = [
  { name: "Full Stack Apps", icon: FaRocket, color: "from-purple-500 to-blue-700"},
  { name: "Authentication", icon: FaServer, color: "from-blue-500 to-purple-700"},
  { name: "API Integration", icon: FaServer, color: "from-green-400 to-blue-600"},
  { name: "Deployment", icon: FaRocket, color: "from-gray-700 to-black"},
];

const tools = [
  { name: "VS Code", icon: DiVisualstudio },
  { name: "Git & GitHub", icon: SiGithub},
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Linux", icon: SiLinux },
];

type SkillsProgressSectionProps = {
  title: string;
  skills: {
    name: string;
    icon: React.ElementType;
    color: string;
    level: number;
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
      <div className="space-y-5 sm:space-y-6">
        {skills.map(({ name, icon: Icon, color, level }) => (
          <div key={name} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${color} text-white shadow-lg`}>
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <span className="font-semibold text-gray-800 dark:text-gray-100 text-base sm:text-lg">{name}</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">{level}%</span>
              </div>
              <div className="h-2 sm:h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${color} rounded-full shadow-md`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 