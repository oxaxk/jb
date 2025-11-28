export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#F8F2EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro-Zeile */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-3xl">
            <p
              className="text-[0.7rem] md:text-xs tracking-[0.32em] uppercase mb-3 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ÜBER JB BEAUTY
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Ein Studio für Haut, das sichtbar mehr kann als „nur ein bisschen Glow“.
            </h2>
            <p
              className="text-base md:text-lg text-[#3A3129] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Gegründet von Janet Bilen in Pfullendorf, konzentriert sich JB BEAUTY auf Behandlungen,
              die wirklich etwas verändern – mit moderner Technik, Herz und viel Aufklärungsarbeit.
            </p>
          </div>

          <div
            className="md:text-right text-sm md:text-base text-[#3A3129] md:max-w-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <p className="mb-1 font-medium text-[#2A2420]">Janet Bilen</p>
            <p className="text-[0.8rem] uppercase tracking-[0.22em] text-[#8C7B6A] mb-2">
              JB BEAUTY · Pfullendorf
            </p>
            <p>
              „Ich wollte einen Ort schaffen, an dem man Hautthemen ernst nimmt – und trotzdem gern
              herkommt.“
            </p>
          </div>
        </div>

        {/* Zwei-Spalten-Layout */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-[1.08fr,0.92fr] items-start">
          {/* Linke Spalte – Ablauf & Herangehensweise */}
          <div className="space-y-6">
            <div
              className="rounded-3xl border border-[#E4D8CF] bg-white/90 px-5 py-6 md:px-6 md:py-7 shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <h3
                className="text-xl md:text-2xl font-semibold mb-4 text-[#15110F]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Wie JB BEAUTY arbeitet
              </h3>
              <div className="space-y-4 text-sm md:text-base text-[#3A3129]">
                <div className="flex gap-3">
                  <div className="mt-0.5 h-10 w-10 aspect-square rounded-full border border-[#C6A063] bg-[#FBF7F2] flex items-center justify-center text-xs font-medium text-[#2A2420]">
                    01
                  </div>
                  <div>
                    <p className="font-medium mb-0.5">Ankommen &amp; Analyse</p>
                    <p className="leading-relaxed">
                      Hautbild, Wünsche und mögliche Kontraindikationen werden offen besprochen –
                      ohne Stress und mit genug Zeit für Fragen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-0.5 h-10 w-10 aspect-square rounded-full border border-[#C6A063] bg-[#FBF7F2] flex items-center justify-center text-xs font-medium text-[#2A2420]">
                    02
                  </div>
                  <div>
                    <p className="font-medium mb-0.5">Individueller Behandlungsplan</p>
                    <p className="leading-relaxed">
                      Microneedling, Carbon Peeling, Microdermabrasion oder Lymphdrainage –
                      kombiniert so, wie es zu deinem Hautbild und deinem Ziel passt, nicht zu einem
                      Trend.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-0.5 h-10 w-10 aspect-square rounded-full border border-[#C6A063] bg-[#FBF7F2] flex items-center justify-center text-xs font-medium text-[#2A2420]">
                    03
                  </div>
                  <div>
                    <p className="font-medium mb-0.5">Nachsorge &amp; Verlauf</p>
                    <p className="leading-relaxed">
                      Pflegetipps für Zuhause, klare Hinweise zur Regeneration und dokumentierte
                      Vorher/Nachher-Fotos über mehrere Termine.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div
                className="rounded-2xl border border-[#E4D8CF] bg-[#F6EFE7]/80 px-4 py-5 md:px-5 md:py-5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]">
                  Für wen ist JB BEAUTY?
                </p>
                <p className="text-sm md:text-base text-[#3A3129] leading-relaxed">
                  Für alle, die Hautprobleme, Pigmentflecken, Narben, schwere Beine oder störende
                  Härchen nicht einfach „hinnehmen“ wollen – und bereit sind, in einen Prozess zu
                  investieren.
                </p>
              </div>
              <div
                className="rounded-2xl border border-[#E4D8CF] bg-white/95 px-4 py-5 md:px-5 md:py-5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]">
                  Was du hier nicht findest
                </p>
                <p className="text-sm md:text-base text-[#3A3129] leading-relaxed">
                  Schnellschüsse, Druck oder leere Versprechen. Wenn etwas nicht sinnvoll ist, sagt
                  Janet das klar – und schlägt Alternativen vor, die besser zu dir passen.
                </p>
              </div>
            </div>
          </div>

          {/* Rechte Spalte – kompakte Fakten & USP-Grid */}
          <div className="space-y-6">
            <div
              className="rounded-3xl border border-[#E4D8CF] bg-white/90 px-5 py-6 md:px-6 md:py-7 shadow-[0_16px_36px_rgba(0,0,0,0.04)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <h3
                className="text-lg md:text-xl font-semibold mb-4 text-[#15110F]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Wofür JB BEAUTY steht
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-[#3A3129]">
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C6A063]" />
                  <span>Transparente Beratung ohne Fachchinesisch.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C6A063]" />
                  <span>Moderne Geräte für Haut &amp; dauerhafte Haarentfernung.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C6A063]" />
                  <span>Dokumentierte Vorher/Nachher-Ergebnisse statt Filter.</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C6A063]" />
                  <span>Privates Studio mit ruhiger, geschützter Atmosphäre.</span>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-dashed border-[#D8C8B8] bg-[#FBF7F2] px-5 py-4 md:px-5 md:py-5 text-sm md:text-base text-[#3A3129]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                Wenn du nicht weißt, womit du starten sollst, reicht eine erste Hautberatung. Von
                dort aus entwickelt ihr gemeinsam den nächsten Schritt – präzise, realistisch und
                ohne, dass du alles auf einmal buchen musst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
