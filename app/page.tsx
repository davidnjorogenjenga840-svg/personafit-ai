"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Apple,
  Scissors,
  Shirt,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="h-6 w-6 text-cyan-400" />
          PersonaFit AI
        </div>

        <Link
          href="/signup"
          className="rounded-full border border-white/20 px-5 py-2 hover:border-cyan-400"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Transform Your
            <span className="text-cyan-400"> Health & Style </span>
            With AI
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-300 text-lg">
            Upload photos of food, hairstyles, and outfits to receive
            personalized AI-powered recommendations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-8 py-4 font-semibold"
            >
              Start Analysis
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="rounded-full border border-white/20 px-8 py-4"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-center text-4xl font-bold mb-12">
          AI Analysis Categories
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Food */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Apple className="h-12 w-12 text-green-400 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Food Analysis
            </h3>

            <p className="text-slate-400 mb-6">
              Analyze meals, calories, nutrients and receive healthier alternatives.
            </p>

            <Link
              href="/food"
              className="block text-center rounded-xl bg-green-500/20 py-3"
            >
              Upload Food Image
            </Link>
          </div>

          {/* Hair */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Scissors className="h-12 w-12 text-purple-400 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Hair Analysis
            </h3>

            <p className="text-slate-400 mb-6">
              Discover hairstyles that suit your face shape.
            </p>

            <Link
              href="/hair"
              className="block text-center rounded-xl bg-purple-500/20 py-3"
            >
              Upload Hair Photo
            </Link>
          </div>

          {/* Fashion */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <Shirt className="h-12 w-12 text-cyan-400 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Fashion Analysis
            </h3>

            <p className="text-slate-400 mb-6">
              Get outfit recommendations and color matching advice.
            </p>

            <Link
              href="/fashion"
              className="block text-center rounded-xl bg-cyan-500/20 py-3"
            >
              Upload Outfit Photo
            </Link>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold mb-4">1. Upload</h3>
            <p className="text-slate-400">
              Upload your image securely.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold mb-4">2. Analyze</h3>
            <p className="text-slate-400">
              AI processes your image instantly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold mb-4">3. Improve</h3>
            <p className="text-slate-400">
              Receive recommendations and suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        © 2025 PersonaFit AI • Your AI Health & Style Assistant
      </footer>

    </main>
  );
}