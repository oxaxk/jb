import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-[#F6EFE7]/90 backdrop-blur-xl border-b border-[#E4D8CF] shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-3.5 md:py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="cursor-pointer">
              <span
                className="text-base md:text-lg font-semibold tracking-[0.32em] uppercase"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F', letterSpacing: '0.32em' }}
              >
                JB BEAUTY
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Behandlungen
              </a>
              <a
                href="#about"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Studio
              </a>
              <a
                href="#prices"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Preise & Pakete
              </a>
              <a
                href="#contact"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Anfrage
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Schließe Menü' : 'Öffne Menü'}
              aria-expanded={isMenuOpen}
            >
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}
                style={{ color: '#2A1F1F' }}
              ></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#E5D8CC] px-6 pb-4 pt-3 bg-[#F6EFE7]/95">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Behandlungen
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Studio
                </a>
                <a
                  href="#prices"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Preise & Pakete
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Anfrage
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Background – Video mit softem Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile Video */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Desktop Video */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* JB-Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F2EB]/80 via-[#F6EFE7]/70 to-[#FBF7F2]/90" />
      </div>

      <div className="relative z-10 flex-1 w-full px-4 sm:px-6 pb-24 md:pb-20 pt-32">
        <div className="max-w-6xl mx-auto grid gap-10 md:gap-12 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start md:items-center">
          {/* Linke Spalte – Text & CTAs */}
          <div>
            <p
              className="text-[0.7rem] md:text-xs tracking-[0.32em] uppercase mb-5 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SKIN · LASER · BODY
            </p>

            <h1
              className="text-[2.5rem] md:text-[4rem] leading-[0.9] font-bold mb-6 text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              JB BEAUTY
              <span
                className="block mt-3 text-[0.7rem] md:text-xs tracking-[0.4em] uppercase text-[#7E6E61]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                PFULLENDORF
              </span>
            </h1>

            <p
              className="text-base md:text-lg mb-8 md:mb-10 text-[#3A3129] max-w-3xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Professionelles Beauty-Studio in Pfullendorf – spezialisiert auf Hautbehandlungen,
              Lymphdrainage, G5-Massage und dauerhafte Haarentfernung mit Diodenlaser. Fokus auf
              echte Resultate, Aufklärung und individuelle Betreuung.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm md:text-base px-10 py-3.5 rounded-full border border-[#C6A063] bg-[#D7B8A3] text-white tracking-[0.14em] uppercase shadow-[0_14px_40px_rgba(0,0,0,0.16)] hover:bg-[#C6A063] hover:border-[#B58A4E] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-whatsapp-line mr-3 text-xl md:text-2xl"></i>
                Termin vereinbaren
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center text-sm md:text-base px-10 py-3.5 rounded-full border border-[#C6A063] bg-[#FBF7F2]/90 text-[#2A2420] tracking-[0.14em] uppercase hover:bg-[#F0E4D4] hover:border-[#C6A063] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-information-line mr-3 text-xl md:text-2xl"></i>
                Haut &amp; Laser im Überblick
              </a>
            </div>
          </div>

          {/* Rechte Spalte – Info-Karten */}
          <div className="space-y-5 md:space-y-6">
            <div className="bg-[#F7EBE1]/90 backdrop-blur-sm rounded-3xl px-5 py-5 md:px-6 md:py-6 border border-[#E4D8CF] shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <p
                className="text-[0.7rem] md:text-xs tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Hautbehandlungen
              </p>
              <p
                className="text-sm md:text-base leading-relaxed text-[#3A3129]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Microneedling, Microdermabrasion und Carbon Peeling für ebenmäßige, glatte und
                strahlende Haut.
              </p>
            </div>

            <div className="bg-[#F7EBE1]/88 backdrop-blur-sm rounded-3xl px-5 py-5 md:px-6 md:py-6 border border-[#E4D8CF] shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
              <p
                className="text-[0.7rem] md:text-xs tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Körper &amp; Lymphdrainage
              </p>
              <p
                className="text-sm md:text-base leading-relaxed text-[#3A3129]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Lymphdrainage-Body-Press und G5-Massage zur Entlastung, Straffung und Unterstützung
                des Stoffwechsels.
              </p>
            </div>

            <div className="bg-[#F7EBE1]/85 backdrop-blur-sm rounded-3xl px-5 py-5 md:px-6 md:py-6 border border-[#E4D8CF] shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
              <p
                className="text-[0.7rem] md:text-xs tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Dauerhafte Haarentfernung
              </p>
              <p
                className="text-sm md:text-base leading-relaxed text-[#3A3129]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Diodenlaser für Gesicht und Körper – sanft zur Haut, effektiv gegen störende
                Härchen, mit klarer Aufklärung vorab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
