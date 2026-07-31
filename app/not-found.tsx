import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-8xl font-display font-bold text-gold-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-gray-400 text-sm mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-gold-500 text-navy-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
