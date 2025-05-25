import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border border-transparent rounded-md shadow-sm transition-all duration-300 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-slate-900 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 