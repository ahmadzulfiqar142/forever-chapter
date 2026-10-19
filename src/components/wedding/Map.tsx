import { fraunces } from "@/lib/font";

// Replace the src URL with your actual venue's Google Maps embed URL
// Maps → Share → Embed a map → copy the src value
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2s!4v1234567890";

export default function Map() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-[#2A1418] py-24">
      <div className="w-full max-w-5xl px-6">
        <p className="mb-2 text-center text-sm tracking-[0.2em] text-[#E4CD84]/70">
          FIND US
        </p>
        <h2
          className={`${fraunces.className} mb-4 text-center text-3xl font-medium text-[#F8F1E4] sm:text-4xl`}
        >
          Venue Location
        </h2>
        <div className="mx-auto mb-10 h-px w-16 bg-[#C9A227]/60" />

        <div className="overflow-hidden rounded-xl border border-[#C9A227]/30 shadow-2xl">
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue location"
          />
        </div>

        <p className="mt-6 text-center text-sm text-[#F8F1E4]/50">
          Replace the map URL with your actual venue — Google Maps → Share → Embed a map
        </p>
      </div>
    </section>
  );
}
