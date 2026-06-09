export default function FashionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Fashion Analysis</h1>

      <div className="max-w-xl rounded-2xl bg-slate-900 p-6">
        <input
          type="file"
          accept="image/*"
          className="mb-4 w-full"
        />

        <button className="w-full rounded-xl bg-cyan-600 py-3">
          Analyze Outfit
        </button>
      </div>
    </main>
  );
}