"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Apple,
  Scissors,
  Shirt,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/login-bg.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/70 backdrop-blur-sm">
        <div className="grid min-h-screen lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden lg:flex flex-col justify-center px-16 text-white">

            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-10 w-10 text-cyan-400" />
              <h1 className="text-5xl font-extrabold">
                PersonaFit AI
              </h1>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Your Personal AI Health & Style Coach
            </h2>

            <p className="text-slate-300 text-lg mb-10 max-w-xl">
              Analyze food, hairstyles, and outfits with powerful AI.
              Get personalized recommendations, health insights,
              and style improvements instantly.
            </p>

            <div className="space-y-5">

              <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <Apple className="text-green-400" />
                  <h3 className="font-bold text-xl">
                    Food Analysis
                  </h3>
                </div>

                <p className="text-slate-300 mt-2">
                  Discover calories, nutrients, and healthier alternatives.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <Scissors className="text-purple-400" />
                  <h3 className="font-bold text-xl">
                    Hair Analysis
                  </h3>
                </div>

                <p className="text-slate-300 mt-2">
                  Find hairstyles that suit your face shape.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <Shirt className="text-cyan-400" />
                  <h3 className="font-bold text-xl">
                    Fashion Analysis
                  </h3>
                </div>

                <p className="text-slate-300 mt-2">
                  Improve your outfit choices with AI recommendations.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white">
                  Welcome Back
                </h2>

                <p className="text-slate-300 mt-2">
                  Login to continue your PersonaFit journey.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-white outline-none"
                />

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-white outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>

                </div>

                <div className="flex items-center justify-between text-sm text-slate-300">

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember Me
                  </label>

                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    Forgot Password?
                  </a>

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 py-4 font-bold text-white transition hover:scale-105"
                >
                  {loading ? "Logging In..." : "Login"}
                </button>

              </form>

              <div className="mt-8 border-t border-white/10 pt-6">

                <p className="text-center text-slate-300">
                  Don't have an account?
                </p>

                <a
                  href="/signup"
                  className="mt-3 block text-center font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Create Account
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}