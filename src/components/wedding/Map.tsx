import { fraunces } from "@/lib/font";
import { MapPin } from "lucide-react";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=30.0215179,71.8240079&z=15&output=embed";

const MAP_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=QASR%20AL%20HAMRA%2C%20Main%20Super%20Highway%2C%20Bahawalpur%20Rd%2C%20Jahanian%2C%2058200%2C%20Pakistan&destination_place_id=0x393b5dd8c2abe715%3A0x11546f510477bb46";

export default function Map() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#2A1418] px-6 py-16 sm:py-20 md:min-h-svh !p-4">
      <div className="w-full max-w-5xl">
        <p className="mb-2 text-center text-sm tracking-[0.2em] text-[#E4CD84]/70">
          CELEBRATE WITH US
        </p>
        <h2
          className={`${fraunces.className} mb-3 text-center text-3xl font-medium text-[#F8F1E4] sm:text-4xl`}
        >
          Find the Venue
        </h2>
        <p className="mx-auto mb-8 max-w-md text-center text-sm leading-relaxed text-[#F8F1E4]/65 sm:mb-10 sm:text-base">
          We look forward to celebrating with you at QASR AL HAMRA in Jahanian.
        </p>

        <div className="relative h-[320px] overflow-hidden rounded-2xl border border-[#E4CD84]/45 bg-[#F1E6CF] sm:h-[400px] md:h-[460px]">
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue location"
          />
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E4CD84]/15 bg-[#F8F1E4] px-5 py-5 text-center sm:flex-row sm:px-7 sm:text-left !p-4 !mt-4">
          <div>
            <p
              className={`${fraunces.className} text-xl font-medium text-[#3E0F1F] sm:text-2xl`}
            >
              QASR AL HAMRA
            </p>
            <p className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm text-[#2A1418]/65 sm:justify-start">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#8E3346]"
              />
              Main Super Highway, Jahanian, Pakistan
            </p>
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3E0F1F] px-6 text-sm font-medium tracking-wide text-[#F8F1E4] transition-colors hover:bg-[#5C1A2E] sm:w-auto"
          >
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
