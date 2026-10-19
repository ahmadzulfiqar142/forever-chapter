import { fraunces } from "@/lib/font";

export default function OurStory() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center py-24">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative order-2 flex h-80 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-[#F1E6CF] to-[#E4CD84]/40 shadow-lg md:order-1">
          <span className="text-5xl text-[#C9A227]/70">۞</span>
        </div>

        <div className="order-1 text-center md:order-2 md:text-left">
          <p className="mb-2 text-sm tracking-[0.2em] text-[#4B6043]">
            OUR STORY
          </p>
          <h2
            className={`${fraunces.className} mb-5 text-3xl font-medium text-[#3E0F1F] sm:text-4xl`}
          >
            How it began
          </h2>
          <p className="text-lg leading-relaxed text-[#2A1418]/80">
            Replace this paragraph with your own story — how you met, a
            favourite memory, or a line from your families. Two or three short
            sentences work best here.
          </p>
        </div>
      </div>
    </section>
  );
}
