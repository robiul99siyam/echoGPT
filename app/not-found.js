import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center relative bg-gray-50 px-4 mt-24">
      {/* Background 404 Text */}
      <h1 className="text-[200px] md:text-[300px] lg:text-[400px] font-extrabold text-gray-300 absolute top-1/2 -translate-y-1/2">
        404
      </h1>

      {/* Foreground Content */}
      <div className="relative z-10 leading-10">
        <h2 className=" text-4xl lg:text-7xl font-bold text-gray-800 ">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 text-xl">
          Oops! The page you are looking for is missing.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-8 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 hover:rounded-full transition-all duration-100"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
