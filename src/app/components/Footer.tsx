"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mb-4">
              Connect With Me
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's collaborate and create something amazing together
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <Link
              href="https://github.com/AbdelrahmanM1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center p-4 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 to-blue-700 border-2 border-purple-500 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600"></span>
              <span className="relative flex items-center">
                <CodeBracketIcon className="h-6 w-6 mr-2 text-white" />
                GitHub
              </span>
            </Link>
          </motion.div>

          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Abdelrahman Moharram. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 