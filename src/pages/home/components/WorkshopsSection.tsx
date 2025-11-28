import React, { useRef } from 'react';

const WorkshopsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'next' | 'prev') => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : container.clientWidth;

    container.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section id="workshops" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#7E6E61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hautthemen &amp; Schwerpunkte
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Wobei dir JB BEAUTY konkret hilft
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[#3A3129]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Statt „einfach nur ein bisschen Glow“ geht es hier um konkrete Themen: von unreiner Haut
            über Pigmentflecken und Narben bis zu eingewachsenen Haaren und Rasurbrand. Die
            Behandlungen werden immer auf dein Hautbild und dein Ziel abgestimmt.
          </p>
        </div>

        {/* Themen-Carousel */}
        <div className="-mx-6">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 pb-2"
          >
            {/* Unreine Haut */}
            <article className="snap-start min-w-[85%] sm:min-w-[75%] md:min-w-[65%] lg:min-w-[55%] xl:min-w-[45%] bg-white rounded-[32px] border border-[#E4D8CF] shadow-[0_18px_50px_rgba(0,0,0,0.04)] px-6 py-7 md:px-8 md:py-9 flex flex-col">
              <div className="mb-4">
                <span
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.68rem] tracking-[0.18em] uppercase bg-[#D7B8A3]/90 text-[#15110F]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Unreine Haut &amp; Entzündungen
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
              >
                Wenn die Haut ständig „unruhig“ ist
              </h3>

              <div className="grid gap-6 md:gap-8 lg:grid-cols-2 mb-6 md:mb-8 lg:divide-x lg:divide-[#F0E3D9]">
                <div className="lg:pr-5">
                  <h4
                    className="text-[0.7rem] tracking-[0.16em] uppercase mb-2 text-[#7E6E61]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Typische Themen
                  </h4>
                  <ul
                    className="space-y-1.5 text-sm text-[#3A3129] break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <li>Unterlagerungen &amp; entzündliche Stellen</li>
                    <li>Vergrößerte/verstopfte Poren</li>
                    <li>Immer wiederkehrende Pickel</li>
                    <li>Empfindliche, schnell gestresste Haut</li>
                  </ul>
                </div>
                <div className="lg:pl-6">
                  <h4
                    className="text-[0.7rem] tracking-[0.16em] uppercase mb-2 text-[#7E6E61]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Mögliche Ansätze
                  </h4>
                  <ul
                    className="space-y-1.5 text-sm text-[#3A3129] break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <li>Microneedling für feinere Struktur</li>
                    <li>Microdermabrasion/Kristallsand bei verstopften Poren</li>
                    <li>Sanfte Heimpflege, passend zu deinem Hautbild</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-[#F0E3D9]">
                <p
                  className="text-xs tracking-[0.22em] uppercase text-[#7E6E61] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Ziel
                </p>
                <p
                  className="text-sm md:text-base text-[#3A3129]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Ruhigeres Hautbild, weniger Entzündungen und ein Teint, der nicht mehr jeden Tag
                  „überrascht“.
                </p>
              </div>
            </article>

            {/* Pigmentflecken & Narben */}
            <article className="snap-start min-w-[85%] sm:min-w-[75%] md:min-w-[65%] lg:min-w-[55%] xl:min-w-[45%] bg-white rounded-[32px] border border-[#E4D8CF] shadow-[0_18px_50px_rgba(0,0,0,0.04)] px-6 py-7 md:px-8 md:py-9 flex flex-col">
              <div className="mb-4">
                <span
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.68rem] tracking-[0.18em] uppercase bg-[#D7B8A3]/90 text-[#15110F]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Pigmentflecken &amp; Narben
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
              >
                Wenn alte Spuren nicht von allein verschwinden
              </h3>

              <div className="grid gap-6 md:gap-8 lg:grid-cols-2 mb-6 md:mb-8 lg:divide-x lg:divide-[#F0E3D9]">
                <div className="lg:pr-5">
                  <h4
                    className="text-[0.7rem] tracking-[0.16em] uppercase mb-2 text-[#7E6E61]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Typische Themen
                  </h4>
                  <ul
                    className="space-y-1.5 text-sm text-[#3A3129] break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <li>Pickelmale &amp; postinflammatorische Flecken</li>
                    <li>Leichte Aknenarben</li>
                    <li>Unruhiger, fleckiger Teint</li>
                    <li>Sonnenschäden &amp; Hyperpigmentierung</li>
                  </ul>
                </div>
                <div className="lg:pl-6">
                  <h4
                    className="text-[0.7rem] tracking-[0.16em] uppercase mb-2 text-[#7E6E61]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Mögliche Ansätze
                  </h4>
                  <ul
                    className="space-y-1.5 text-sm text-[#3A3129] break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <li>Microneedling zur Unterstützung der Regeneration</li>
                    <li>Carbon Peeling für gleichmäßigeren Teint</li>
                    <li>Kurbehandlungen für stabile Ergebnisse</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-[#F0E3D9]">
                <p
                  className="text-xs tracking-[0.22em] uppercase text-[#7E6E61] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Ziel
                </p>
                <p
                  className="text-sm md:text-base text-[#3A3129]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Ein ruhigeres Hautbild, bei dem alte Spuren immer weniger sichtbar sind und der
                  Teint gleichmäßiger wirkt.
                </p>
              </div>
            </article>

            {/* Eingewachsene Haare & Laser */}
            <article className="snap-start min-w-[85%] sm:min-w-[75%] md:min-w-[65%] lg:min-w-[55%] xl:min-w-[45%] bg-white rounded-[32px] border border-[#E4D8CF] shadow-[0_18px_50px_rgba(0,0,0,0.04)] px-6 py-7 md:px-8 md:py-9 flex flex-col">
              <div className="mb-4">
                <span
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.68rem] tracking-[0.18em] uppercase bg-[#D7B8A3]/90 text-[#15110F]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Eingewachsene Haare &amp; Rasurbrand
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
              >
                Wenn Rasieren &amp; Waxing nur noch nerven
              </h3>

              <div className="grid gap-6 md:gap-8 lg:grid-cols-2 mb-6 md:mb-8 lg:divide-x lg:divide-[#F0E3D9]">
                <div className="lg:pr-5">
                  <h4
                    className="text-[0.7rem] tracking-[0.16em] uppercase mb-2 text-[#7E6E61]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Typische Themen
                  </h4>
                  <ul
                    className="space-y-1.5 text-sm text-[#3A3129] break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <li>Rasurbrand in Achseln oder Bikinizone</li>
                    <li>Eingewachsene Haare &amp; kleine Entzündungen</li>
                    <li>Stärkere Behaarung an einzelnen Zonen</li>
                    <li>Wunsch nach langfristig glatter Haut</li>
                  </ul>
                </div>
                <div className="lg:pl-6">
                  <h4
                    className="text-[0.7rem] tracking-[0.16em] uppercase mb-2 text-[#7E6E61]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Mögliche Ansätze
                  </h4>
                  <ul
                    className="space-y-1.5 text-sm text-[#3A3129] break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <li>Diodenlaser für Gesicht &amp; Körperzonen</li>
                    <li>Sanfte Vorbereitung der Haut</li>
                    <li>Pflegeempfehlungen zwischen den Sitzungen</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-[#F0E3D9]">
                <p
                  className="text-xs tracking-[0.22em] uppercase text-[#7E6E61] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Ziel
                </p>
                <p
                  className="text-sm md:text-base text-[#3A3129]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Glattere, entspanntere Haut an den Zonen, die dich im Alltag stören – mit weniger
                  Reizung und deutlich weniger Aufwand.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard('prev')}
              className="h-10 w-10 rounded-full border border-[#C6A063] flex items-center justify-center text-sm"
              style={{ color: '#2A2420' }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCard('next')}
              className="h-10 w-10 rounded-full border border-[#C6A063] flex items-center justify-center text-sm"
              style={{ color: '#2A2420' }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;