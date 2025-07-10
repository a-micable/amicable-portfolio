export function EducationSection() {
  return (
    <section id="education" className="py-16 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Addis Ababa University</h3>
                <p className="text-xl text-slate-300 font-medium mb-2">BSc in Electrical and Computer Engineering</p>
                <p className="text-slate-400">May 2022 – July 2026 (Expected)</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">
                  Top 10 University in Africa
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-100 mb-4">Relevant Coursework</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Python Programming",
                    "Java Programming",
                    "Statistics",
                    "Data Structures",
                    "Algorithms",
                    "Digital Systems",
                    "Control Systems",
                    "Embedded Systems",
                    "Digital Logic",
                    "Signal Processing",
                  ].map((course, index) => (
                    <span key={index} className="text-slate-300 text-sm">
                      • {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-100 mb-4">Academic Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">
                      Ranked top 1% in 2021 Ethiopian University Entrance Exam (EUEE)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">Out of 550,000+ candidates nationwide</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">
                      Strong foundation in theoretical and practical engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
