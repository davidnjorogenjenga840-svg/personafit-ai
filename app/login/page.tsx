export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>

        <p className="text-slate-400 mb-6">
          Login to your PersonaFit AI account.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-800 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}