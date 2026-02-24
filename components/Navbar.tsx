export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-white font-semibold text-lg tracking-tight">
          Sirawit K.
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-sm text-gray-300 hover:text-white transition">Home</a>
          <a href="#about" className="text-sm text-gray-300 hover:text-white transition">About</a>
          <a href="#projects" className="text-sm text-gray-300 hover:text-white transition">Projects</a>
          <a href="#skills" className="text-sm text-gray-300 hover:text-white transition">Skills</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
