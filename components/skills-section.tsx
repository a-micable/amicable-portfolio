"use client"

import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Golang", level: 75 },
        { name: "Ruby", level: 70 },
        { name: "SQL", level: 85 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "NLP", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "Computer Vision", level: 75 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "R", level: 75 },
        { name: "Statistics", level: 85 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Engineering & DevOps",
      skills: [
        { name: "MATLAB", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 85 },
        { name: "Git", level: 90 },
        { name: "Proteus", level: 80 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, engineering, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-105`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
