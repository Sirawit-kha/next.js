import Image from "next/image";

const projects = [
  {
    title: "Rody Application",
    description: "UX/UI Design & Mobile Development",
    image: "/Project1.png",
    tags: [
      { label: "Figma", color: "bg-purple-500/20 text-purple-300" },
      { label: "UI Design", color: "bg-pink-500/20 text-pink-300" },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Application",
    description: "Frontend Development & Design",
    image: "/Project2.jpg",
    tags: [
      { label: "HTML/CSS", color: "bg-blue-500/20 text-blue-300" },
      { label: "JavaScript", color: "bg-green-500/20 text-green-300" },
    ],
    gradient: "from-blue-500 to-green-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3 py-1 ${tag.color} rounded-full text-xs`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
