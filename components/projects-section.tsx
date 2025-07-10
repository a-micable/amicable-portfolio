"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Amharic Language Model",
      description: "Built from scratch using Transformer architecture in PyTorch for Amharic text generation.",
      technologies: ["PyTorch", "Transformers", "NLP", "Deep Learning"],
      featured: true,
    },
    {
      title: "MOSES (Metta Project)",
      description: "Developed evolutionary algorithms for semantic representation and inference in AGI systems.",
      technologies: ["AGI", "Evolutionary Algorithms", "Semantic AI"],
      featured: true,
    },
    {
      title: "Low-Frequency IR System",
      description: "Designed and simulated IR remote system to enhance speech recognition accuracy.",
      technologies: ["Signal Processing", "IR Systems", "Speech Recognition"],
      featured: false,
    },
    {
      title: "Robot Route Finder",
      description: "Energy-efficient pathfinder using Bellman-Ford algorithm for robotic IoT networks.",
      technologies: ["Algorithms", "IoT", "Robotics"],
      featured: false,
    },
    {
      title: "Neo4j Graph Engine",
      description: "Converted raw data into Cypher queries for intelligent knowledge graph visualizations.",
      technologies: ["Neo4j", "Graph Databases", "Data Visualization"],
      featured: false,
    },
    {
      title: "ECAN Attention Allocation",
      description: "Improved resource allocation in AGI systems using decision-making mechanisms.",
      technologies: ["AGI", "Attention Mechanisms", "Resource Allocation"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, machine learning, and engineering
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-gray-600 transition-all duration-300 transform hover:translate-y-[-4px] animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-900/20 text-blue-400 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
