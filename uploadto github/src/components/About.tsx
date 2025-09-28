export default function About() {
  const skills = [
    'C++', 'Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'React',
    'TypeScript', 'Git', 'GitHub', 'Frontend Development', 'Web Development', 'Responsive Design'
  ]

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Frontend Developer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m a passionate frontend developer specializing in creating beautiful, responsive,
                and interactive web applications using modern technologies like React, TypeScript, 
                and advanced CSS techniques.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in programming languages and deep expertise in frontend technologies, 
                I love transforming creative ideas into stunning digital experiences. I&apos;m constantly exploring
                new frameworks and tools to build cutting-edge web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Frontend Specialist
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  React Developer
                </span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Code Enthusiast
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 p-3 rounded-lg text-center font-medium text-gray-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
