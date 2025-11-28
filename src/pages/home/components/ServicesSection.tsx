import { useState, useRef, useEffect } from 'react';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-sparkling-line',
      title: 'Microneedling',
      description:
        'Intensive Behandlung für feinere Poren, glattere Struktur und Anti-Aging-Effekte – inkl. LED-Lichttherapie zur Unterstützung der Regeneration.',
      image: '/images/services/microneedling.jpg'
    },
    {
      icon: 'ri-sparkling-2-line',
      title: 'Microdermabrasion',
      description:
        'Kristallsand-Peeling zur sanften Abtragung der Hornschicht – ideal bei verstopften Poren, Pigmentflecken und feinen Linien.',
      image: '/images/services/microdermabrasion.jpg'
    },
    {
      icon: 'ri-fire-line',
      title: 'Carbon Peeling',
      description:
        'Hollywood-Carbon-Peeling für ebenmäßigeren Teint, reduzierte Poren und sichtbaren Glow – auch für Hände geeignet.',
      image: '/images/services/carbon-peeling.jpg'
    },
    {
      icon: 'ri-hearts-line',
      title: 'Lymphdrainage Body Press',
      description:
        'Kompressionsanzug zur Unterstützung von Lymphfluss und Stoffwechsel – bei schweren Beinen, Wassereinlagerungen und Cellulite.',
      image: '/images/services/lymphdrainage.jpg'
    },
    {
      icon: 'ri-wave-line',
      title: 'G5-Massage',
      description:
        'Mechanische Tiefenmassage zur Gewebestraffung, Durchblutungsförderung und Unterstützung bei Cellulite.',
      image: '/images/services/g5-massage.jpg'
    },
    {
      icon: 'ri-scissors-cut-line',
      title: 'Dauerhafte Haarentfernung (Diodenlaser)',
      description:
        'Effektive Haarentfernung für Gesicht und Körper mit moderner Diodenlaser-Technologie – schonend, schnell und auf empfindliche Haut abgestimmt.',
      image: '/images/services/diodenlaser.jpg'
    }
  ];

  const scrollToIndex = (index: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const child = el.children[index] as HTMLElement | undefined;
    if (child) {
      const offset = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
      el.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % services.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + services.length) % services.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    scrollToIndex(index);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Wheel handler for trackpad support
  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;
    
    // Check if it's a horizontal scroll (trackpad gesture)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      
      if (e.deltaX > 30) {
        nextSlide();
      } else if (e.deltaX < -30) {
        prevSlide();
      }
    }
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section id="services" className="py-14 lg:py-20" style={{ backgroundColor: '#FDF8F5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Haut, Körper &amp; Laser
          </h2>
          <p
            className="text-sm md:text-base tracking-[0.22em] uppercase mb-4 text-[#7E6E61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            JB BEAUTY · Pfullendorf
          </p>
          <p
            className="text-lg lg:text-xl opacity-85 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A3129' }}
          >
            Hautbehandlungen, Body-Treatments und dauerhafte Haarentfernung – moderne Anwendungen
            mit klarer Aufklärung, sichtbaren Resultaten und Fokus auf deine individuellen Ziele.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container with proper spacing - jetzt für alle Viewports */}
          <div className="w-full px-4 lg:px-20">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] md:w-[45%] lg:w-[320px] xl:w-[360px] snap-center">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_55px_rgba(0,0,0,0.08)] transition-all duration-300 h-[520px] md:h-[500px] lg:h-[520px] flex flex-col border border-[#F0E3D9]">
                    <div className="relative h-[55%] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pt-6 pb-6 md:pb-5 flex flex-col justify-start h-[38%]">
                       <div className="mb-0 flex items-start mt-0">
                         <h3
                           className="text-xl md:text-2xl font-bold mb-1 leading-snug"
                           style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                         >
                           {svc.title}
                         </h3>
                       </div>
                       <p
                         className="opacity-80 leading-relaxed text-base"
                         style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
                       >
                         {svc.description}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9B8B0] bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-left-s-line text-lg" style={{ color: '#2A1F1F' }}></i>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => goToSlide(0)}
                disabled={isTransitioning}
                className={`h-3 w-8 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === 0 ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ backgroundColor: '#2A1F1F' }}
              />
              <button
                onClick={() => goToSlide(services.length - 1)}
                disabled={isTransitioning}
                className={`h-3 w-8 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === services.length - 1 ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ backgroundColor: '#2A1F1F' }}
              />
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9B8B0] bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-right-s-line text-lg" style={{ color: '#2A1F1F' }}></i>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="text-lg lg:text-xl font-semibold px-8 lg:px-12 py-3.5 lg:py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
            style={{ backgroundColor: '#F3D9D0', color: '#281C1C', fontFamily: 'Inter, sans-serif' }}
          >
            Termin &amp; Fragen per Kontaktformular
          </a>
        </div>
      </div>
    </section>
  );
}
