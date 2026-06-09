export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Food Analysis
          </h2>

          <p className="text-slate-400 mb-4">
            Upload meal photos for nutrition insights.
          </p>

          <a
            href="/food"
            className="inline-block rounded-xl bg-green-600 px-4 py-2"
          >
            Open
          </a>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Hair Analysis
          </h2>

          <p className="text-slate-400 mb-4">
            Get hairstyle recommendations.
          </p>

          <a
            href="/hair"
            className="inline-block rounded-xl bg-purple-600 px-4 py-2"
          >
            Open
          </a>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Fashion Analysis
          </h2>

          <p className="text-slate-400 mb-4">
            Analyze outfits and improve your style.
          </p>

          <a
            href="/fashion"
            className="inline-block rounded-xl bg-cyan-600 px-4 py-2"
          >
            Open
          </a>
        </div>
      </div>
    </main>
  );
}