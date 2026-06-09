"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Apple,
  Scissors,
  Shirt,
  ArrowRight,
  Brain,
  Shield,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="h-7 w-7 text-cyan-400" />
          PersonaFit AI
        </div>

        <button className="rounded-full border border-white/20 px-5 py-2 text-sm backdrop-blur-md transition hover:border-cyan-400">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI-Powered Health & Style Analysis
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
            Transform Your
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Health & Style{" "}
            </span>
            With AI
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300 md:text-xl">
            Upload photos of food, hairstyles, or outfits and receive
            personalized AI-powered insights, recommendations, and improvement
            suggestions in seconds.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition hover:scale-105">
              Start Analysis
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 backdrop-blur-md transition hover:border-cyan-400">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold">
            AI Analysis Categories
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Advanced AI technology to improve your nutrition, appearance, and
            personal style.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Food */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-500/50"
          >
            <Apple className="mb-6 h-12 w-12 text-green-400" />

            <h3 className="mb-4 text-2xl font-bold">Food Analysis</h3>

            <p className="mb-6 text-slate-400">
              Analyze meals, estimate calories, identify nutrients, and get
              healthier alternatives instantly.
            </p>

            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ Calorie Estimation</li>
              <li>✓ Nutrition Scoring</li>
              <li>✓ Healthy Alternatives</li>
              <li>✓ Dietary Suggestions</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-green-500/20 py-3 font-medium text-green-300 transition hover:bg-green-500/30">
              Upload Food Image
            </button>
          </motion.div>

          {/* Hair */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-500/50"
          >
            <Scissors className="mb-6 h-12 w-12 text-purple-400" />

            <h3 className="mb-4 text-2xl font-bold">Hair Style Analysis</h3>

            <p className="mb-6 text-slate-400">
              Discover hairstyles that match your face shape and receive
              personalized grooming recommendations.
            </p>

            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ Face Shape Detection</li>
              <li>✓ Style Recommendations</li>
              <li>✓ Hair Care Advice</li>
              <li>✓ Trend Suggestions</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-purple-500/20 py-3 font-medium text-purple-300 transition hover:bg-purple-500/30">
              Upload Hair Photo
            </button>
          </motion.div>

          {/* Fashion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-500/50"
          >
            <Shirt className="mb-6 h-12 w-12 text-cyan-400" />

            <h3 className="mb-4 text-2xl font-bold">Fashion Analysis</h3>

            <p className="mb-6 text-slate-400">
              Get outfit feedback, color matching suggestions, and fashion tips
              tailored to your appearance.
            </p>

            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ Style Rating</li>
              <li>✓ Color Matching</li>
              <li>✓ Outfit Suggestions</li>
              <li>✓ Fashion Trends</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-cyan-500/20 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/30">
              Upload Outfit Photo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why PersonaFit */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Zap className="mb-4 text-yellow-400" />
            <h3 className="mb-2 text-xl font-bold">Instant Analysis</h3>
            <p className="text-slate-400">
              Receive insights and recommendations within seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Brain className="mb-4 text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold">AI Recommendations</h3>
            <p className="text-slate-400">
              Personalized guidance powered by advanced AI models.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Shield className="mb-4 text-green-400" />
            <h3 className="mb-2 text-xl font-bold">Secure Uploads</h3>
            <p className="text-slate-400">
              Your uploaded images remain private and protected.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-slate-400">
        <p>© 2025 PersonaFit AI • Your AI Health & Style Assistant</p>
      </footer>
    </main>
  );
}