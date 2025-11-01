"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, BookOpen } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-black via-gray-900 to-red-900 text-white px-6 relative overflow-hidden">
      {/* Main content */}
              <div className="absolute top-0 left-0 bottom-0 min-h-screen w-screen">
                <DarkVeil hueShift={242} />
              </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg z-10"
      >
        <h1 className="text-7xl font-extrabold text-white mb-4 tracking-tight">
          404
        </h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-white/70 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl hover:bg-transparent hover:text-white border border-white transition-all duration-300"
          >
            <Home size={18} /> Go Home
          </Link>

          <Link
            href="/insights"
            className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
          >
            <BookOpen size={18} /> Visit Blogs
          </Link>
        </div>
      </motion.div>

      {/* ✅ Fixed background (non-interactive) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.4 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none"
      />
    </section>
  );
}
