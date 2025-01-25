import React, { useEffect, useState } from 'react';
import { Download, Mouse, Briefcase, Camera, Award, ArrowRight } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const brands = [
    'Nike', 'Adidas', 'Coca-Cola', 'Apple', 'Samsung', 'Microsoft'
  ];

  const workImages = [
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1400&h=800&fit=crop',
    'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1400&h=800&fit=crop'
  ];

  const teamPhotos = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600'
  ];

  return (
    <div className="relative">
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-50 transition-all duration-100 mix-blend-difference"
        style={{ 
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl font-bold mb-6 tracking-tight">
            Nikhil Lohani
            <span className="block text-2xl mt-4 text-purple-400">Graphic Designer & Art Director</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-300">
            Transforming ideas into visual experiences with 4 years of expertise in advertising and design.
          </p>
          <button className="group flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all">
            Download CV <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all">
              <Briefcase className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-2">Senior Graphic Designer</h3>
              <p className="text-gray-400">Leading creative projects and managing client relationships</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all">
              <Award className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-2">Art Director</h3>
              <p className="text-gray-400">Overseeing visual direction for major advertising campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
          <div className="space-y-8">
            {workImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img 
                  src={img} 
                  alt={`Work sample ${index + 1}`}
                  className="w-full h-[800px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Video Projects</h2>
          <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Add your video content here</p>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Team Adventures</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamPhotos.map((photo, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img 
                  src={photo} 
                  alt={`Team photo ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Brands I've Worked With</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="w-32 h-32 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all"
              >
                <span className="text-gray-400">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;