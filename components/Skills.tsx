const skills = [
  {
    name: "Figma",
    label: "Design Tool",
    color: "purple",
    icon: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z",
  },
  {
    name: "UX/UI Design",
    label: "User Experience",
    color: "pink",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    name: "HTML5 & CSS3",
    label: "Web Structure",
    color: "orange",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    name: "JavaScript",
    label: "Programming",
    color: "yellow",
    icon: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z",
  },
  {
    name: "Tailwind CSS",
    label: "Framework",
    color: "blue",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
  },
  {
    name: "SQL",
    label: "Database",
    color: "green",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  purple: {
    bg: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20 hover:border-purple-500/40",
    text: "text-purple-400",
    icon: "bg-purple-500/20",
  },
  pink: {
    bg: "bg-gradient-to-br from-pink-500/10 to-pink-500/5",
    border: "border-pink-500/20 hover:border-pink-500/40",
    text: "text-pink-400",
    icon: "bg-pink-500/20",
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/20 hover:border-orange-500/40",
    text: "text-orange-400",
    icon: "bg-orange-500/20",
  },
  yellow: {
    bg: "bg-gradient-to-br from-yellow-500/10 to-yellow-500/5",
    border: "border-yellow-500/20 hover:border-yellow-500/40",
    text: "text-yellow-400",
    icon: "bg-yellow-500/20",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/20 hover:border-blue-500/40",
    text: "text-blue-400",
    icon: "bg-blue-500/20",
  },
  green: {
    bg: "bg-gradient-to-br from-green-500/10 to-green-500/5",
    border: "border-green-500/20 hover:border-green-500/40",
    text: "text-green-400",
    icon: "bg-green-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const c = colorMap[skill.color];
            return (
              <div
                key={skill.name}
                className={`group ${c.bg} backdrop-blur-sm p-8 rounded-2xl border ${c.border} transition-all duration-300 hover:transform hover:scale-105 text-center`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 ${c.icon} rounded-full flex items-center justify-center`}
                >
                  <svg className={`w-8 h-8 ${c.text}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={skill.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-1">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
