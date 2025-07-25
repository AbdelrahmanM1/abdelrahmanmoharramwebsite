"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl w-full px-3 sm:px-4 lg:px-8">
            <div className="flex h-16 items-center justify-between rounded-full px-3 sm:px-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-md mt-2 transition-all">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2">
                  <motion.span
                    className="font-bold text-base xs:text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    Abdelrahman Moharram
                  </motion.span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 sm:px-3 py-2 rounded-full text-sm font-medium transition-colors group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ))}
              </div>

              {/* Mobile Button */}
              <div className="flex lg:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  aria-label="Toggle navigation"
                  aria-expanded={open}
                >
                  <span className="sr-only">Toggle navigation</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-2 px-4 pt-4 pb-6 mx-2 sm:mx-4 mt-2 rounded-2xl bg-white dark:bg-slate-900 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium transition-colors text-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
