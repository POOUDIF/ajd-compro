"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Building2, Leaf, Zap, Pickaxe, Map, Anchor, Volume2, VolumeX } from "lucide-react";

export default function Home() {
  // Slideshow state untuk hero background
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Audio state untuk background music
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2); // Volume default 20%

  // Array gambar untuk slideshow
  const heroImages = [
    {
      src: "/img/pic1.jpg",
      alt: "Corporate Excellence",
      title: "Corporate Excellence"
    },
    {
      src: "/img/pic2.jpg",
      alt: "Infrastructure Development",
      title: "Infrastructure Development"
    },
    {
      src: "/img/pic3.jpg",
      alt: "Financial Engineering",
      title: "Financial Engineering"
    },
    {
      src: "/img/pic4.jpg",
      alt: "Investment Solutions",
      title: "Investment Solutions"
    },
    {
      src: "/img/pic5.jpg",
      alt: "Business Portfolio",
      title: "Business Portfolio"
    }
  ];

  // Auto slideshow effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % heroImages.length
        );
      }, 2000); // Ganti gambar setiap 2 detik

      return () => clearInterval(interval);
    }
  }, [heroImages.length, isPaused]);

  // Background music effect
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = true;

      // Auto play dengan error handling
      const playAudio = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.log("Autoplay prevented by browser policy");
        }
      };

      playAudio();
    }
  }, [volume]);

  // Audio control functions
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        preload="auto"
        className="hidden"
      />

      {/* Music Control Panel */}
      <div className="fixed bottom-4 right-4 z-50 group">
        <div className="bg-gray-700/90 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 group-hover:pr-24">
          <div className="flex items-center gap-3 text-white p-3">
            <button
              onClick={toggleMute}
              className="hover:text-ajd-red transition-colors duration-300"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-14 whitespace-nowrap">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                title="Volume Control"
              />
              <span className="text-xs font-medium">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-40 bg-ajd-blue/95 backdrop-blur-md border-b border-ajd-blue/20 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Image - Ganti dengan logo asli Anda */}
            <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md bg-ajd-blue">
              <Image
                src="/img/logo.png"
                alt="AJD Logo"
                width={48}
                height={48}
                className="object-cover"
                onError={(e) => {
                  // Fallback jika gambar tidak ditemukan
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 w-full h-full bg-linear-to-br from-ajd-blue to-ajd-dark hidden items-center justify-center text-ajd-white font-bold text-lg">
                AJD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-ajd-white tracking-tight leading-tight">Ajisaka Jawa Dwipa</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="text-ajd-white hover:text-ajd-red transition-colors duration-300 px-3 py-2 rounded-md hover:bg-ajd-white/10">About</a>
            <a href="#sectors" className="text-ajd-white hover:text-ajd-red transition-colors duration-300 px-3 py-2 rounded-md hover:bg-ajd-white/10">Sectors</a>
            <a href="#portfolio" className="text-ajd-white hover:text-ajd-red transition-colors duration-300 px-3 py-2 rounded-md hover:bg-ajd-white/10">Portfolio</a>
            <a href="#contact" className="text-ajd-white hover:text-ajd-red transition-colors duration-300 px-3 py-2 rounded-md hover:bg-ajd-white/10">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-ajd-white hover:text-ajd-red transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        className="relative h-[700px] flex items-center justify-center bg-linear-to-br from-ajd-blue via-ajd-dark to-ajd-blue text-ajd-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {/* Overlay gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-ajd-blue/90 to-ajd-dark/90 z-10"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-ajd-red/20 rounded-full blur-3xl z-20"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-ajd-white/10 rounded-full blur-3xl z-20"></div>

          {/* Slideshow Images */}
          <div className="relative w-full h-full overflow-hidden">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-30' : 'opacity-0'
                  }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                  priority={index === 0} // Prioritas untuk gambar pertama
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-ajd-white/20 hover:bg-ajd-white/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-ajd-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-ajd-white/20 hover:bg-ajd-white/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-ajd-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {heroImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}: ${image.title}`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-ajd-red shadow-lg scale-125'
                  : 'bg-ajd-white/50 hover:bg-ajd-white/80'
                  }`} />
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-ajd-white/20 z-30">
            <div
              className="h-full bg-ajd-red transition-all duration-100 ease-linear"
              style={{
                width: isPaused ? `${((currentImageIndex + 1) / heroImages.length) * 100}%` :
                  `${((currentImageIndex + 1) / heroImages.length) * 100}%`
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-ajd-red/20 border border-ajd-red/30 rounded-full text-ajd-white text-sm font-semibold mb-6">
              🚀 Leading Investment & Holding Company
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Toward a Top Global <br />
            <span className="text-ajd-red">
              Finance Engineering Company
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-ajd-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            We are a holding company dedicated to infrastructure financing, management consulting, and sustainable development across Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{
                backgroundColor: '#B22222',
                borderColor: '#B22222',
                border: '2px solid #B22222'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A01F1F';
                e.currentTarget.style.borderColor = '#A01F1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B22222';
                e.currentTarget.style.borderColor = '#B22222';
              }}
            >
              Partner With Us <ArrowRight size={24} />
            </a>
            <a
              href="#about"
              className="text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{
                backgroundColor: '#B22222',
                borderColor: '#B22222',
                border: '2px solid #B22222'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A01F1F';
                e.currentTarget.style.borderColor = '#A01F1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B22222';
                e.currentTarget.style.borderColor = '#B22222';
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT & SERVICES SECTION --- */}
      <section id="about" className="py-24 bg-linear-to-br from-ajd-light to-ajd-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-ajd-red font-bold text-sm tracking-wide uppercase">About Company</span>
              <h2 className="text-4xl font-bold text-ajd-blue mt-2 mb-6">Who We Are</h2>
            </div>
            <p className="text-ajd-blue/80 mb-4 leading-relaxed text-lg">
              <strong className="text-ajd-blue">PT. Ajisaka Jawa Dwipa (AJD)</strong> is a holding company controlling assets of subsidiary groups. We specialize in <strong className="text-ajd-red">infrastructure financing</strong> (direct lending, refinancing, subordinated loans) and providing strategic <strong className="text-ajd-red">management consulting</strong>.
            </p>
            <p className="text-ajd-blue/80 mb-8 leading-relaxed text-lg">
              Our comprehensive services range from strategic organizational planning and financial decision-making to infrastructure investment studies.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="bg-ajd-white p-6 rounded-2xl shadow-lg border border-ajd-blue/10 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-ajd-blue to-ajd-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="text-ajd-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-ajd-blue mb-2">Holding Company</h4>
                    <p className="text-ajd-blue/70">Asset management & subsidiary control with strategic oversight.</p>
                  </div>
                </div>
              </div>
              <div className="bg-ajd-white p-6 rounded-2xl shadow-lg border border-ajd-red/10 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-ajd-red to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Anchor className="text-ajd-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-ajd-blue mb-2">Management Consulting</h4>
                    <p className="text-ajd-blue/70">Mergers, acquisitions, & strategic planning expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/img/kantor.jpg"
              alt="Office Meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- BUSINESS PORTFOLIO (GRID) --- */}
      <section id="sectors" className="py-24 bg-ajd-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-ajd-red font-bold text-sm tracking-wide uppercase">Our Expertise</span>
            <h2 className="text-4xl font-bold text-ajd-blue mt-2 mb-4">Business Portfolio</h2>
            <p className="text-ajd-blue/70 text-xl max-w-2xl mx-auto">Our strategic sectors and development focus across multiple industries.</p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Card 1: Food Security */}
            <div className="group border border-ajd-blue/10 rounded-2xl hover:shadow-2xl transition-all duration-300 p-8 bg-ajd-white hover:bg-linear-to-br hover:from-ajd-white hover:to-ajd-light transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 text-ajd-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ajd-blue">Food Security</h3>
              <ul className="space-y-2 text-ajd-blue/70 text-sm">
                <li>• Soybean & Sorghum Cultivation</li>
                <li>• Tofu & Tempe Factory</li>
                <li>• Beef, Dairy, & Poultry Farm</li>
                <li>• Fishery (Sheep, Fish, Shrimp)</li>
              </ul>
            </div>

            {/* Card 2: Energy Resilience */}
            <div className="group border border-ajd-blue/10 rounded-2xl hover:shadow-2xl transition-all duration-300 p-8 bg-ajd-white hover:bg-linear-to-br hover:from-ajd-white hover:to-ajd-light transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-yellow-600 text-ajd-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ajd-blue">Energy Resilience</h3>
              <ul className="space-y-2 text-ajd-blue/70 text-sm">
                <li>• Renewable Energy</li>
                <li>• NDB Technology</li>
                <li>• Compressed Natural Gas (CNG)</li>
                <li>• Biomass Energy</li>
              </ul>
            </div>

            {/* Card 3: Mining Industry */}
            <div className="group border border-ajd-blue/10 rounded-2xl hover:shadow-2xl transition-all duration-300 p-8 bg-ajd-white hover:bg-linear-to-br hover:from-ajd-white hover:to-ajd-light transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-gray-600 to-gray-700 text-ajd-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Pickaxe size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ajd-blue">Mining Industry</h3>
              <ul className="space-y-2 text-ajd-blue/70 text-sm">
                <li>• Crude Oil, Coal, & Natural Gas</li>
                <li>• Metal Minerals (Gold, Platinum, Iron)</li>
                <li>• Non-Metal (Sulfur, Quartz Sand)</li>
              </ul>
            </div>
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 4: Infrastructure */}
            <div className="group border border-ajd-blue/10 rounded-2xl hover:shadow-2xl transition-all duration-300 p-8 bg-ajd-white hover:bg-linear-to-br hover:from-ajd-white hover:to-ajd-light transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 text-ajd-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ajd-blue">Infrastructure</h3>
              <ul className="space-y-2 text-ajd-blue/70 text-sm">
                <li>• Toll Roads & Highway Sections</li>
                <li>• Concession Projects (Yogyakarta-Solo)</li>
                <li>• Industrial Estates (Batang, Indramayu)</li>
              </ul>
            </div>

            {/* Card 5: Special Economic Zones */}
            <div className="group border border-ajd-blue/10 rounded-2xl hover:shadow-2xl transition-all duration-300 p-8 bg-ajd-white hover:bg-linear-to-br hover:from-ajd-white hover:to-ajd-light transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 text-ajd-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Map size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ajd-blue">Special Economic Zones (SEZ)</h3>
              <p className="text-ajd-blue/70 text-sm mb-4">Development of integrated industrial and economic zones to support national growth.</p>
              <div className="grid grid-cols-2 gap-2">
                <span className="px-3 py-1 bg-ajd-light rounded-full text-xs text-ajd-blue">• Galang Batang</span>
                <span className="px-3 py-1 bg-ajd-light rounded-full text-xs text-ajd-blue">• Subang Industrial Estate</span>
                <span className="px-3 py-1 bg-ajd-light rounded-full text-xs text-ajd-blue">• Patimban Port Estate</span>
                <span className="px-3 py-1 bg-ajd-light rounded-full text-xs text-ajd-blue">• Jorong Borneo City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Unified Section) --- */}
      <footer id="contact" className="text-ajd-white py-16" style={{ backgroundColor: '#111827' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-6 justify-center">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-lg bg-white shrink-0">
                  <Image
                    src="/img/logo.png"
                    alt="AJD Logo"
                    width={48}
                    height={48}
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 w-full h-full bg-linear-to-br from-ajd-blue to-ajd-dark hidden items-center justify-center text-white font-bold text-lg">
                    AJD
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white leading-tight">PT. Ajisaka Jawa Dwipa</h3>
                  <p className="text-sm text-white">An investment and holding company committed to sustainable infrastructure and economic development in Indonesia.</p>

                  {/* Affiliated By Section */}
                  <div className="mt-4">
                    <div className="flex items-center justify-start gap-4">
                      <span className="text-white/80 text-sm font-bold uppercase">affiliated by:</span>
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-md bg-ajd-blue">
                          <Image
                            src="/img/JDP.jpg"
                            alt="JDP Logo"
                            width={40}
                            height={40}
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className="absolute inset-0 w-full h-full bg-linear-to-br from-ajd-blue to-ajd-dark hidden items-center justify-center text-white font-bold text-xs">
                            JDP
                          </div>
                        </div>
                        <span className="text-white text-sm font-semibold">Jawa Dwipa Pakubumi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold mb-2 text-white">Head Office</h4>
                  <p className="text-white leading-relaxed text-sm">
                    <strong>South Quarter Tower</strong><br />
                    Jl. RA Kartini Kav 8, Cilandak Barat<br />
                    Jakarta Selatan, 12340<br />
                    Indonesia 🇮🇩
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-white">Contact</h4>
                  <p className="text-white text-sm">Phone: +62 21 750 8088</p>
                  <p className="text-white text-sm">Email: info@ajisaka.co.id</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white text-sm">© 2025 PT. Ajisaka Jawa Dwipa. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="text-sm text-white hover:text-ajd-red transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-sm text-white hover:text-ajd-red transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="text-sm text-white hover:text-ajd-red transition-colors duration-300">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}