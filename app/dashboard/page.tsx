"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import {
  Apple,
  Scissors,
  Shirt,
  User,
  LogOut,
  Brain,
  Activity,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/login";
};
  return (
    <main
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/dashboard-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 p-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">

          <div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PersonaFit AI
            </h1>

            <p className="text-slate-300 mt-3 text-lg">
              Your Personal AI Health, Fashion & Lifestyle Assistant
            </p>
          </div>

 <button
  onClick={handleLogout}
  className="mt-4 md:mt-0 flex items-center gap-2 rounded-xl bg-red-500/20 px-5 py-3 hover:bg-red-500/30 transition"
>
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">

            <div className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-5">
              <User size={40} />
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Welcome Back 👋
              </h2>

              <p className="text-slate-300 mt-2">
                Ready for your next AI-powered transformation?
              </p>
            </div>

          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-10">

          <div className="rounded-3xl bg-cyan-500/20 p-6 backdrop-blur-xl">
            <Activity className="mb-3" />
            <h3 className="text-lg font-semibold">Health Score</h3>
            <p className="text-4xl font-bold">92%</p>
          </div>

          <div className="rounded-3xl bg-purple-500/20 p-6 backdrop-blur-xl">
            <Sparkles className="mb-3" />
            <h3 className="text-lg font-semibold">Style Score</h3>
            <p className="text-4xl font-bold">88%</p>
          </div>

          <div className="rounded-3xl bg-green-500/20 p-6 backdrop-blur-xl">
            <Apple className="mb-3" />
            <h3 className="text-lg font-semibold">Food Analyses</h3>
            <p className="text-4xl font-bold">12</p>
          </div>

          <div className="rounded-3xl bg-pink-500/20 p-6 backdrop-blur-xl">
            <Brain className="mb-3" />
            <h3 className="text-lg font-semibold">AI Reports</h3>
            <p className="text-4xl font-bold">24</p>
          </div>

        </div>

        {/* Analysis Center */}
        <h2 className="text-3xl font-bold mb-6">
          Analysis Center
        </h2>

        <div className="grid gap-8 md:grid-cols-3 mb-10">

          <Link href="/food">
            <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8 hover:scale-105 transition cursor-pointer">
              <Apple size={50} className="text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Food Analysis
              </h3>
              <p className="text-slate-300">
                Upload meals and receive AI nutrition insights.
              </p>
            </div>
          </Link>

          <Link href="/hair">
            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8 hover:scale-105 transition cursor-pointer">
              <Scissors size={50} className="text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Hair Analysis
              </h3>
              <p className="text-slate-300">
                Discover styles that fit your face shape.
              </p>
            </div>
          </Link>

          <Link href="/fashion">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8 hover:scale-105 transition cursor-pointer">
              <Shirt size={50} className="text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Fashion Analysis
              </h3>
              <p className="text-slate-300">
                Improve your outfits with AI recommendations.
              </p>
            </div>
          </Link>

        </div>

        {/* Quick Upload Center */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl mb-8">
          <h2 className="text-3xl font-bold mb-6">
            🚀 Quick Upload Center
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Link href="/food">
              <div className="rounded-2xl bg-green-500/20 p-6 text-center hover:scale-105 transition">
                🍎
                <h3 className="text-xl font-bold mt-2">
                  Upload Food
                </h3>
              </div>
            </Link>

            <Link href="/hair">
              <div className="rounded-2xl bg-purple-500/20 p-6 text-center hover:scale-105 transition">
                ✂️
                <h3 className="text-xl font-bold mt-2">
                  Upload Hair
                </h3>
              </div>
            </Link>

            <Link href="/fashion">
              <div className="rounded-2xl bg-cyan-500/20 p-6 text-center hover:scale-105 transition">
                👕
                <h3 className="text-xl font-bold mt-2">
                  Upload Fashion
                </h3>
              </div>
            </Link>

          </div>
        </div>

        {/* AI Coach */}
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">
            🤖 AI Coach
          </h2>

          <div className="space-y-3">
            <p>🥗 Increase protein intake today.</p>
            <p>💧 Drink more water daily.</p>
            <p>👔 Dark blue outfits match your appearance.</p>
            <p>✂️ Layered hairstyles fit your face shape.</p>
          </div>
        </div>

        {/* Progress */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="rounded-3xl bg-green-500/20 p-6">
            <h3 className="font-bold">Health Progress</h3>
            <p className="text-5xl font-black">+12%</p>
          </div>

          <div className="rounded-3xl bg-purple-500/20 p-6">
            <h3 className="font-bold">Style Progress</h3>
            <p className="text-5xl font-black">+18%</p>
          </div>

          <div className="rounded-3xl bg-orange-500/20 p-6">
            <h3 className="font-bold">Daily Streak</h3>
            <p className="text-5xl font-black">🔥14</p>
          </div>

        </div>

        {/* Achievements */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            🏆 Achievements
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <div className="rounded-xl bg-yellow-500/20 p-4 text-center">
              🥇 First Analysis
            </div>

            <div className="rounded-xl bg-orange-500/20 p-4 text-center">
              🔥 7 Day Streak
            </div>

            <div className="rounded-xl bg-green-500/20 p-4 text-center">
              🥗 Healthy Eater
            </div>

            <div className="rounded-xl bg-cyan-500/20 p-4 text-center">
              👔 Style Explorer
            </div>

          </div>
        </div>

        {/* AI Recommendations */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl mb-8">
          <h2 className="text-3xl font-bold mb-4">
            AI Recommendations
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>🥗 Increase vegetables in your diet.</li>
            <li>✂️ Try layered hairstyles for your face shape.</li>
            <li>👕 Use complementary colors in your outfits.</li>
            <li>💧 Drink more water daily.</li>
          </ul>
        </div>

        {/* Recent Activity */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4 text-slate-300">
            <p>📸 Food image analyzed</p>
            <p>💇 Hair recommendation generated</p>
            <p>👔 Outfit score calculated</p>
          </div>
        </div>

      </div>
    </main>
  );
}