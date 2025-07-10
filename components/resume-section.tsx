"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white mb-4">Download My Resume</CardTitle>
              <p className="text-gray-400">Get a comprehensive overview of my experience, skills, and achievements</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Resume Preview */}
                <div className="relative group">
                  <div className="bg-white rounded-lg shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                    <div className="aspect-[8.5/11] bg-gradient-to-b from-gray-100 to-white rounded-lg p-6 flex flex-col">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-2"></div>
                        <h3 className="font-bold text-gray-800 text-lg">Amicable Alemayehu</h3>
                        <p className="text-gray-600 text-sm">ECE Student & AI Researcher</p>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                        <div className="mt-4 space-y-2">
                          <div className="h-1.5 bg-gray-400 rounded w-1/2"></div>
                          <div className="h-1.5 bg-gray-400 rounded w-3/4"></div>
                          <div className="h-1.5 bg-gray-400 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Download Actions */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">What's Inside:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Professional Experience & Internships
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Technical Skills & Certifications
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Academic Achievements & Projects
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Research Publications & Contributions
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/Amicable-Alemayehu-Mikael-CV.pdf" download>
  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white flex-1 transition-all duration-300 transform hover:scale-105">
    <Download className="mr-2 h-4 w-4" />
    Download PDF
  </Button>
</a>

                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex-1 transition-all duration-300 transform hover:scale-105 bg-transparent"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
