import React from 'react';

export default function SpecialsSection() {
  return (
    <section id="prices" className="py-20 md:py-24 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Infos zu Behandlungen &amp; Paketen
          </h2>
          <p
            className="text-sm md:text-base tracking-[0.22em] uppercase mb-4 text-[#7E6E61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            JB BEAUTY · Pfullendorf
          </p>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A3129' }}
          >
            Preise hängen bei JB BEAUTY immer von Zone, Umfang und Behandlungsplan ab. Statt
            pauschaler Tabellen steht hier im Fokus, was zu deiner Haut, deinem Körper und deinem
            Alltag passt. Konkrete Beträge bekommst du transparent in der Beratung oder vorab auf
            Anfrage.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Karte 1 */}
          <div className="rounded-3xl bg-white border border-[#E8DCD2] shadow-[0_18px_40px_rgba(0,0,0,0.04)] px-5 py-6 md:px-6 md:py-7">
            <p
              className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] mb-2 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              HAUTBEHANDLUNGEN
            </p>
            <h3
              className="text-xl md:text-2xl font-semibold mb-3 text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Microneedling, Microdermabrasion &amp; Carbon Peeling
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed text-[#3A3129]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Hier spielen unter anderem Hautzustand, Areal (z.&nbsp;B. nur Gesicht oder Gesicht +
              Hals) und die Anzahl der empfohlenen Sitzungen eine Rolle. Häufig werden
              Kurbehandlungen geplant, damit sich das Ergebnis stabil aufbauen kann.
            </p>
          </div>

          {/* Karte 2 */}
          <div className="rounded-3xl bg-white border border-[#E8DCD2] shadow-[0_18px_40px_rgba(0,0,0,0.04)] px-5 py-6 md:px-6 md:py-7">
            <p
              className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] mb-2 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              KÖRPER &amp; LYMPHDRAINAGE
            </p>
            <h3
              className="text-xl md:text-2xl font-semibold mb-3 text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Lymphdrainage Body Press &amp; G5-Massage
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed text-[#3A3129]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Dauer, Intensität und Häufigkeit werden an dein Ziel angepasst – ob Entlastung bei
              schweren Beinen, Unterstützung bei Cellulite oder begleitend zu einer
              Ernährungsumstellung.
            </p>
          </div>

          {/* Karte 3 */}
          <div className="rounded-3xl bg-white border border-[#E8DCD2] shadow-[0_18px_40px_rgba(0,0,0,0.04)] px-5 py-6 md:px-6 md:py-7">
            <p
              className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] mb-2 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              DAUERHAFTE HAARENTFERNUNG
            </p>
            <h3
              className="text-xl md:text-2xl font-semibold mb-3 text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Diodenlaser für Gesicht &amp; Körper
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed text-[#3A3129]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Die Höhe eines Pakets hängt von den gewählten Zonen, der Haarstruktur und der
              geschätzten Sitzungsanzahl ab. In der Beratung erfährst du, mit welchem Rahmen du
              realistisch rechnen kannst.
            </p>
          </div>

          {/* Karte 4 */}
          <div className="rounded-3xl bg-white border border-[#E8DCD2] shadow-[0_18px_40px_rgba(0,0,0,0.04)] px-5 py-6 md:px-6 md:py-7">
            <p
              className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] mb-2 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              INDIVIDUELLE ANGEBOTE
            </p>
            <h3
              className="text-xl md:text-2xl font-semibold mb-3 text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Pakete, Aktionen &amp; Gutscheine
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed text-[#3A3129]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Saison-Specials, Kombi-Pakete und Gutscheine richten sich danach, was du erreichen
              möchtest – z.&nbsp;B. Glow-Fokus, Körper im Blick oder dauerhaft haarfreie Zonen.
              Aktuelle Aktionen erfährst du direkt bei JB BEAUTY.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p
            className="text-sm md:text-base text-[#3A3129] mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Du möchtest einen genauen Preisrahmen für dein Thema wissen?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#C6A063] text-sm md:text-base font-medium"
            style={{ fontFamily: 'Inter, sans-serif', color: '#2A2420' }}
          >
            Erstberatung &amp; individuelle Preise anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
