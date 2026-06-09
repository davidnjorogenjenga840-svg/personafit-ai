export default function FoodPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Food Analysis</h1>

      <div className="max-w-xl rounded-2xl bg-slate-900 p-6">
        <input
          type="file"
          accept="image/*"
          className="mb-4 w-full"
        />

        <button className="w-full rounded-xl bg-green-600 py-3">
          Analyze Food
        </button>
      </div>
    </main>
  );
}