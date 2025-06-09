import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import FuzzyText from './components/Font';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

  


const OrnithopterShowcase = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [currentVideoSection, setCurrentVideoSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const videoSections = [
    { title: "Wings that breathe", subtitle: "Bio-inspired mechanics" },
    { title: "Flight redefined", subtitle: "Engineering perfection" },
    { title: "The future unfolds", subtitle: "Tomorrow takes flight" }
  ];

  return (

    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
          

      {/* Hero Section - Apple Style */}
      <section ref={heroRef} className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
        
        
        {/* Dynamic background based on scroll */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-all duration-1000"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`,
            opacity: Math.max(0.3, 1 - scrollY * 0.001)
          }}
        >
          {/* Floating particles with mouse interaction */}
          {[...Array(30)].map((_, i) => {
            const x = (mousePosition.x - window.innerWidth / 2) * 0.01;
            const y = (mousePosition.y - window.innerHeight / 2) * 0.01;
            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${10 + (i * 3) % 80}%`,
                  top: `${10 + (i * 7) % 80}%`,
                  transform: `translate(${x * (i % 3 + 1)}px, ${y * (i % 3 + 1)}px)`,
                  transition: 'transform 0.1s ease-out',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            );
          })}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div 
            className="mb-8"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            <h1 className="text-4xl md:text-6xl font-thin bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Ornithopter
            </h1>
            
          </div>
          
                      <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={1} 
              enableHover={true}
            >
              Coming Soon
            </FuzzyText>
          
          <div 
            className="flex flex-col items-center space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.004)
            }}
          >
            
            
            <div className="text-gray-400 text-sm px-5 py-15">Available 2025</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity: Math.max(0, 1 - scrollY * 0.01) }}
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-gray-400" />
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="h-screen sticky top-0 flex items-center justify-center bg-black">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Mock video container with Apple-style presentation */}
          <div 
            className="relative w-full max-w-6xl mx-auto px-4"
            style={{
              transform: `scale(${Math.max(0.8, 1 - scrollY * 0.0002)})`,
            }}
          >
            {/* Video placeholder with dynamic content */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-white rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-light mb-4">
                    {videoSections[currentVideoSection]?.title}
                  </h3>
                  <p className="text-xl text-gray-400">
                    {videoSections[currentVideoSection]?.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Video controls overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                <button 
                  onClick={() => setCurrentVideoSection((prev) => (prev + 1) % videoSections.length)}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors"
                >
                  <Play className="w-6 h-6" />
                </button>
                <div className="flex space-x-2">
                  {videoSections.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentVideoSection ? 'bg-white' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Apple Style Cards */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-thin mb-8 leading-tight">
              Engineered for<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                perfection
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every component designed with precision. Every movement calculated with purpose. 
              This is biomimicry at its finest.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {[
              {
                title: "Adaptive Wings",
                subtitle: "Nature's blueprint, reimagined",
                description: "Our wing system mimics the intricate mechanics of bird flight, delivering unprecedented efficiency and control.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Neural Control",
                subtitle: "Intelligence in motion",
                description: "Advanced AI algorithms process thousands of micro-adjustments per second, ensuring stable, graceful flight.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Quantum Sensors",
                subtitle: "Precision beyond measure",
                description: "Revolutionary sensor array provides real-time environmental analysis and autonomous navigation capabilities.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Infinite Endurance",
                subtitle: "Power redefined",
                description: "Next-generation energy systems enable extended flight times while maintaining peak performance.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-light mb-2">{feature.title}</h3>
                <p className="text-blue-400 mb-4 font-medium">{feature.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-thin mb-16">
            Technical
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: "12", unit: "Wing beats per second", desc: "Precision flapping mechanism" },
              { number: "2.5", unit: "Hour flight time", desc: "Extended endurance capability" },
              { number: "0.8", unit: "Kilogram total weight", desc: "Ultralight carbon fiber construction" }
            ].map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-thin mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {spec.number}
                </div>
                <div className="text-xl font-light mb-2">{spec.unit}</div>
                <div className="text-gray-400 text-sm">{spec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-thin mb-8 leading-tight">
            The future
            <br />
            takes flight
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Be among the first to witness the dawn of a new era in aerospace technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get notified
              <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors">
              Watch the keynote →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-gray-600 text-sm">
            Ornithopter X © 2025. Redefining the boundaries of flight.
          </div>
        </div>
      </footer>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    
  );
};

export default OrnithopterShowcase;