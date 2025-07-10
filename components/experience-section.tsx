export function ExperienceSection() {
  const experiences = [
    {
      title: "AI Research Intern",
      company: "iCog Labs",
      period: "2024 – Present",
      description: "Contributing to Hyperon and Metta projects on AGI, reasoning, and machine learning.",
      responsibilities: [
        "Designed NLP pipelines, translation systems, and backward chaining methods",
        "Integrated symbolic and neural algorithms",
        "Published Mindplex articles with conceptual clarity",
      ],
    },
    {
      title: "Intern - AI Layer Development",
      company: "IoT-Based Radio Spectrum Monitoring System",
      period: "April 2025 – February 2026",
      description: "Working on the AI layer of real-time spectrum monitoring.",
      responsibilities: [
        "Developing AI algorithms for spectrum analysis",
        "Real-time data processing and monitoring",
        "IoT system integration",
      ],
    },
    {
      title: "Coding & Drivers Team Member",
      company: "VEX Robotics",
      period: "2023 – 2024",
      description: "Developed and iterated autonomous robot tasks.",
      responsibilities: [
        "Developed autonomous robot control systems",
        "Conducted 60-minute driver-controlled tests",
        "Iterative design and testing processes",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                  <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-400 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-slate-300 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-300">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
