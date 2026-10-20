import { fraunces } from "@/lib/font";

const venues = [
  {
    day: "Friday",
    date: "13 November",
    event: "Nikah",
    glyph: "۞",
    place: "Birki",
    address: "142 10R",
    time: ["2:00 PM"],
  },
  {
    day: "Friday",
    date: "13 November",
    event: "Mehndi",
    glyph: "✧",
    place: "Birki",
    address: "142 10R",
    time: ["8:00 PM"],
  },
  {
    day: "Saturday",
    date: "14 November",
    event: "Baraat",
    glyph: "✦",
    place: "Qasr Ul Hamra",
    address: "Jahanian, Pakistan",
    time: ["Afternoon onwards"],
  },
];

const MAP_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=QASR%20AL%20HAMRA%2C%20Main%20Super%20Highway%2C%20Bahawalpur%20Rd%2C%20Jahanian%2C%2058200%2C%20Pakistan&destination_place_id=0x393b5dd8c2abe715%3A0x11546f510477bb46";

export default function Venue() {
  return (
    <section className="flex w-full flex-col items-center justify-center !p-4 md:min-h-svh">
      <div className="w-full max-w-5xl">
        <p className="mb-3 text-center text-sm tracking-[0.2em] text-[#4B6043]">
          THE CELEBRATIONS
        </p>
        <h2
          className={`${fraunces.className} mb-4 text-center text-3xl font-medium text-[#3E0F1F] sm:text-4xl`}
        >
          Getting There
        </h2>
        <div className="mx-auto mb-8 h-px w-16 bg-[#C9A227]/60 sm:mb-12 mt-4" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 ">
          {venues.map((v) => (
            <div
              key={v.event}
              className="relative min-h-[340px] rounded-xl bg-gradient-to-br from-[#5C1A2E] to-[#3E0F1F] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A227]/20 will-change-transform md:min-h-0 md:[aspect-ratio:3/4]"
            >
              {/* gold border shimmer */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C9A227]/60 via-transparent to-[#C9A227]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col items-center rounded-xl bg-gradient-to-br from-[#5C1A2E] to-[#3E0F1F] px-6 py-6 text-center text-[#F8F1E4] transition-transform duration-300 group-hover:scale-[1.02]">
                {/* TOP — day label */}
                <div className="!mt-4 !mb-4 text-xs tracking-[0.25em] text-[#E4CD84]/70">
                  {v.day.toUpperCase()}
                </div>

                {/* MIDDLE — main content */}
                <div className="flex flex-1 flex-col items-center justify-center gap-3">
                  <div className="text-3xl text-[#C9A227]">{v.glyph}</div>
                  <h3
                    className={`${fraunces.className} text-2xl font-semibold leading-tight`}
                  >
                    {v.event}
                  </h3>
                  <p className="text-sm text-[#E4CD84]">{v.date}</p>
                  <div className="h-px w-10 bg-[#C9A227]/40" />
                  <p className="text-base font-medium text-[#F8F1E4]">
                    {v.place}
                  </p>
                  <p className="text-sm text-[#F8F1E4]/60">{v.address}</p>
                  <div className="space-y-1">
                    {v.time.map((t) => (
                      <p key={t} className="text-sm text-[#E4CD84]/80">
                        {t}
                      </p>
                    ))}
                  </div>
                </div>

                {/* BOTTOM — map link */}
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto !mb-4 !p-3 inline-flex w-[160px] items-center justify-center gap-1.5 rounded-full bg-[#F8F1E4] text-xs tracking-[0.12em] text-[#3E0F1F] transition-all duration-200 hover:bg-[#F1E6CF] hover:shadow-md hover:scale-105"
                >
                  <span>View on map</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
