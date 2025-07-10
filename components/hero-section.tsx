"use client"

import { Button } from "@/components/ui/button"
import { Mail, ArrowDown } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          {/* Headshot Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AA</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Amicable Alemayehu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">Electrical & Computer Engineering Student</p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Innovating with AI, Engineering with Purpose. Passionate about AGI research, signal processing, and building
            the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
