import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400/40 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-300/40 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Profile Image */}
        <div className="relative inline-block mb-12 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 via-cyan-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow" />
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
          <div className="relative p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full">
            <div className="bg-[#1a1a2e] p-2 rounded-full">
              <Image
                src="/Sirawit.jpeg"
                alt="Profile"
                width={256}
                height={256}
                className="relative w-64 h-64 rounded-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-300 rounded-full blur-sm animate-ping opacity-75" />
          <div
            className="absolute bottom-10 left-0 w-3 h-3 bg-pink-300 rounded-full blur-sm animate-ping opacity-75"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 bg-gradient-to-r from-purple-200 via-pink-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Sirawit Kaosong
        </h1>

        {/* Subtitle */}
        <div className="mb-4">
          <p className="text-xl md:text-2xl text-gray-200 mb-3 font-light">
            UX/UI Designer & Frontend Developer
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span>Available for Work</span>
            </div>
            <span className="text-gray-500">•</span>
            <span>Nonthaburi, Thailand</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-16">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
