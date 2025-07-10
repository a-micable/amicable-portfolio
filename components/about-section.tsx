"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "AI Research Intern",
      company: "iCog Labs",
      description: "Contributing to Hyperon and Metta projects on AGI, reasoning, and machine learning.",
    },
    {
      year: "2025 - 2026",
      title: "AI Layer Development Intern",
      company: "IoT Radio Spectrum Monitoring",
      description: "Working on AI algorithms for real-time spectrum analysis and monitoring.",
    },
    {
      year: "2023 - 2024",
      title: "Coding & Drivers Team Member",
      company: "VEX Robotics",
      description: "Developed autonomous robot control systems and conducted extensive testing.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 delay-200">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a final-year Electrical and Computer Engineering student at Addis Ababa University, expected to
                    graduate in July 2026. My academic excellence is highlighted by ranking in the top 1% of the
                    Ethiopian University Entrance Exam out of 550,000+ candidates.
                  </p>
                  <p>
                    Currently pursuing my degree at one of Africa's top 10 universities, I've developed expertise
                    bridging theoretical foundations with practical engineering applications. My passion lies in AI
                    safety, language models, and decision-making systems.
                  </p>
                  <p>
                    I'm particularly interested in the intersection of artificial intelligence and real-world
                    engineering challenges, from low-frequency radio projects to cutting-edge AGI research.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Languages</h4>
                    <div className="space-y-1 text-sm text-gray-400">
                      <p>English (Fluent)</p>
                      <p>Amharic (Native)</p>
                      <p>French (Basic)</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {["AI Safety", "AGI Research", "Signal Processing", "IoT Systems"].map((interest) => (
                        <span key={interest} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Section */}
          <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-400">
            <h3 className="text-2xl font-semibold text-white mb-8">Professional Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                  <Card className="bg-gray-900/30 border-gray-800 hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300 transform hover:translate-x-2">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <span className="text-sm text-blue-400 font-medium">{item.year}</span>
                      </div>
                      <p className="text-purple-400 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
