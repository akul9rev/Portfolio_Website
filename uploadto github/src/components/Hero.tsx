import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-cyan-500/25">
              <span className="text-4xl font-bold text-white">A</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">Akul</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Frontend Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              I create stunning, responsive, and interactive web experiences using modern technologies. 
              Passionate about clean code and innovative frontend solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 animate-fade-in-up"
              style={{animationDelay: '0.6s'}}
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{animationDelay: '0.8s'}}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
