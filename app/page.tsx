"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);

  const [result, setResult] = useState<{
    food: string;
    hair: string;
    colors: string;
    score: string;
  } | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  const analyzeImage = () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    alert("AI Analysis Started!");

    setResult({
      food: "Healthy Meal (85/100)",
      hair: "Quiff Hairstyle",
      colors: "Navy, White, Olive",
      score: "88/100",
    });
  };

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center p-10">

      <h1 className="text-5xl font-bold text-blue-600">
        PersonaFit AI
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Upload your photo for AI analysis
      </p>

      {/* Upload Area */}
      <label
        htmlFor="imageUpload"
        className="
          mt-8
          w-full
          max-w-md
          h-56
          border-4
          border-dashed
          border-blue-400
          rounded-2xl
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          bg-white
          hover:bg-blue-50
        "
      >
        <span className="text-5xl">📷</span>

        <p className="mt-3 text-lg font-semibold">
          Click to Upload Image
        </p>

        <p className="text-sm text-gray-500">
          JPG, PNG, JPEG
        </p>
      </label>

      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Image Preview */}
      {image && (
        <div className="mt-8">
          <img
            src={image}
            alt="Preview"
            className="
              w-96
              rounded-2xl
              shadow-xl
              border-4
              border-white
            "
          />

          <p className="text-center mt-3 text-green-600 font-bold">
            ✓ Image Selected
          </p>
        </div>
      )}

      {/* Analyze Button */}
      <button
        onClick={analyzeImage}
        className="
          mt-8
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-xl
          hover:bg-blue-700
          transition
        "
      >
        Analyze
      </button>

      {/* Results */}
      {result && (
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg w-full max-w-md">

          <h2 className="text-2xl font-bold mb-4">
            Analysis Results
          </h2>

          <p>
            <strong>Food Health Score:</strong> {result.food}
          </p>

          <p className="mt-2">
            <strong>Recommended Hair Style:</strong> {result.hair}
          </p>

          <p className="mt-2">
            <strong>Best Colors:</strong> {result.colors}
          </p>

          <p className="mt-2">
            <strong>Lifestyle Score:</strong> {result.score}
          </p>

        </div>
      )}

    </main>
  );
}