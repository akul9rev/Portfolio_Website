export default function Achievements() {
  const achievements = [
    {
      title: "NCO Cyber Olympiad - Rank 17",
      year: "2024",
      description: "Achieved 17th rank in National Cyber Olympiad, showcasing strong programming and problem-solving skills",
      icon: "🏆"
    },
    {
      title: "Hacksagon Hackathon Finalist",
      year: "2024",
      description: "Reached final round in Hacksagon hackathon organized by IIIT Gwalior, competing with top developers",
      icon: "🥇"
    },
    {
      title: "Aarush Yuddhame Coding Club - PEC",
      year: "2024",
      description: "Program Execution Committee member, helping organize events and contributing technical ideas for competitions",
      icon: "⭐"
    }
  ]

  return (
    <section id="achievements" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">
                      {achievement.year}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
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
