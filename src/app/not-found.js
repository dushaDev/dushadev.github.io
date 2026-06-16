import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center pt-24 pb-12">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-9xl font-black text-primary/20 select-none tracking-tighter">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-foreground">
            Oops! Page not found
          </h2>
          <p className="text-secondary max-w-sm mx-auto text-sm leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-2xl shadow-md transition-all duration-300 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
