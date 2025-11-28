export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Lea W.',
      rating: 5,
      text: 'Microneedling inkl. LED – meine Haut ist viel ebenmäßiger geworden, die Poren wirken feiner und ich wurde vorab super zu Ablauf und Pflege beraten.',
      image: null
    },
    {
      name: 'Merve A.',
      rating: 5,
      text: 'Ich hatte lange mit Pigmentflecken zu kämpfen. Nach der Kombination aus Carbon Peeling und passender Pflege sind die Flecken deutlich heller geworden.',
      image: null
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Lymphdrainage Body Press: endlich fühlen sich meine Beine nach der Arbeit nicht mehr so schwer an. Die Behandlung ist entspannt und wird immer gut erklärt.',
      image: null
    },
    {
      name: 'Julia S.',
      rating: 5,
      text: 'Diodenlaser in der Bikinizone – ich hatte Angst vor Schmerzen, aber es war viel angenehmer als erwartet. Keine Rasierpickel mehr und glatte Haut.',
      image: null
    },
    {
      name: 'Alina H.',
      rating: 5,
      text: 'Meine Aknenarben auf den Wangen sind nach mehreren Microneedling-Sitzungen deutlich feiner geworden. Janet nimmt sich viel Zeit und arbeitet sehr präzise.',
      image: null
    },
    {
      name: 'Nina F.',
      rating: 5,
      text: 'Ich fühle mich bei JB BEAUTY sicher aufgehoben. Vor jeder Behandlung wird erklärt, was auf mich zukommt, und wir entscheiden gemeinsam, was für meine Haut sinnvoll ist.',
      image: null
    }
  ];

  return (
    <section className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8D6E5D]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Feedback
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Erfahrungen bei JB BEAUTY
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#3A3129]/85"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hautbehandlungen, Laser und Body-Treatments – echte Rückmeldungen von Kundinnen, die
            Wert auf Aufklärung, spürbare Resultate und eine ruhige, vertrauensvolle Atmosphäre
            legen.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex flex-col h-full rounded-3xl bg-white/90 border border-[#F1E2D7] shadow-[0_18px_45px_rgba(72,54,38,0.06)] px-6 py-6 md:px-7 md:py-7 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(72,54,38,0.12)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#F3D9D0]/80 flex items-center justify-center text-sm font-semibold text-[#5A4036]">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{testimonial.name.charAt(0)}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h4
                    className="text-lg md:text-xl font-bold leading-snug"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                  >
                    {testimonial.name}
                  </h4>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-[#D0A97F] text-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill" />
                      ))}
                    </div>
                    <span
                      className="text-xs uppercase tracking-[0.18em] text-[#A48877]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.rating}.0 / 5.0
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="text-sm md:text-[0.95rem] leading-relaxed text-[#3A2A29]/90 italic"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                “{testimonial.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
