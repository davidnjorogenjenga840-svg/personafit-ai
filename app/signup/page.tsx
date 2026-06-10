"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

   alert("Account created successfully!");

window.location.href = "/login";

  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
        <h1 className="text-4xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 mb-6">
          Join PersonaFit AI today.
        </p>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-800 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-600 font-semibold"
          >
            Create Account
          </button>

        </form>
      </div>
    </main>
  );
}