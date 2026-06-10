"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    nickname: "",
    fullName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    style: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
const handleSave = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("Please login first");
    return;
  }

  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      nickname: profile.nickname,
      full_name: profile.fullName,
      age: profile.age,
      gender: profile.gender,
      height: profile.height,
      weight: profile.weight,
      goal: profile.goal,
      style: profile.style,
    });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Profile saved successfully!");
};
      
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Profile Header */}
        <div className="rounded-3xl bg-slate-900 p-8 mb-10 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-5xl">
              👤
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold">
                @{profile.nickname || "nickname"}
              </h1>

              <p className="text-slate-400 mt-2">
                PersonaFit AI Member
              </p>

              <p className="text-slate-500 text-sm">
                Personal Health & Style Profile
              </p>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2">Nickname</label>

            <input
              name="nickname"
              value={profile.nickname}
              onChange={handleChange}
              placeholder="Enter nickname"
              className="w-full p-4 rounded-xl bg-slate-800"
            />
          </div>

          <div>
            <label className="block mb-2">Full Name</label>

            <input
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            />
          </div>

          <div>
            <label className="block mb-2">Age</label>

            <input
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            />
          </div>

          <div>
            <label className="block mb-2">Gender</label>

            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Height (cm)</label>

            <input
              name="height"
              value={profile.height}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            />
          </div>

          <div>
            <label className="block mb-2">Weight (kg)</label>

            <input
              name="weight"
              value={profile.weight}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            />
          </div>

          <div>
            <label className="block mb-2">Fitness Goal</label>

            <select
              name="goal"
              value={profile.goal}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            >
              <option value="">Select Goal</option>
              <option>Lose Weight</option>
              <option>Gain Muscle</option>
              <option>Stay Fit</option>
              <option>Improve Health</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Fashion Style</label>

            <select
              name="style"
              value={profile.style}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800"
            >
              <option value="">Select Style</option>
              <option>Streetwear</option>
              <option>Casual</option>
              <option>Business</option>
              <option>Luxury</option>
              <option>Sporty</option>
            </select>
          </div>

        </div>

        <button
          onClick={handleSave}
          className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold flex items-center justify-center gap-2"
        >
          <Save size={20} />
          Save Profile
        </button>

      </div>
    </main>
  );
}