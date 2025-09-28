export default function Projects() {
  const projects = [
    {
      title: "CrowdSafe: Real-Time Crowd Monitoring Dashboard",
      description: "An AI-powered dashboard for real-time crowd detection, counting, and alerting using YOLOv8 and Streamlit. Features live video analysis, IoT sensor simulation, real-time statistics, incident management, SMS alert system, and Firebase integration.",
      technologies: ["Python", "Streamlit", "YOLOv8", "OpenCV", "Firebase", "Twilio", "Pandas", "NumPy"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/akul/crowdsafe",
      live: "https://crowdsafe-demo.vercel.app"
    },
    {
      title: "Embeddable Chatbot",
      description: "A simple chatbot widget that integrates into any website with one script tag. Users click a chat bubble to chat, and Google's AI powers responses. Fully customizable with colors, position, messages, and settings panel for real-time updates.",
      technologies: ["JavaScript", "HTML", "CSS", "Google AI", "Web Integration"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/akul/embeddable-chatbot",
      live: "https://chatbot-demo.vercel.app"
    },
    {
      title: "Twitter Clone",
      description: "Developed a frontend clone of Twitter using HTML and CSS. Recreated the core UI components and layout of the popular social media platform with responsive design.",
      technologies: ["HTML", "CSS", "Frontend Development"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/akul/twitter-clone",
      live: "https://twitter-clone-demo.vercel.app"
    },
    {
      title: "Super.so Clone",
      description: "Built a frontend clone of Super.so using HTML, CSS, and JavaScript. Implemented interactive features and modern web design principles to replicate the original platform's functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Development"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/akul/super-clone",
      live: "https://super-clone-demo.vercel.app"
    }
  ]

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded text-sm hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
