import { fraunces } from "@/lib/font";

export default function OurStory() {
  return (
    <section className="flex min-h-[60svh] w-full flex-col items-center justify-center !p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center">
          <p className="mb-2 text-sm tracking-[0.2em] text-[#4B6043]">
            OUR STORY
          </p>
          <h2
            className={`${fraunces.className} mb-6 text-3xl font-medium leading-tight text-[#3E0F1F] sm:text-4xl`}
          >
            A Beautiful Beginning, Brought Together by Family
          </h2>
          <div className="mx-auto max-w-2xl space-y-5 text-left text-base leading-relaxed text-[#2A1418]/80 sm:text-lg">
            <p>
              Our story began with family. We were relatives, and both our
              families had always shared a close bond, but we had never really
              gotten to know each other personally.
            </p>
            <p>
              With the support and blessings of our families, we were brought
              together for a new chapter in life. That&apos;s when we started
              getting to know each other, slowly building a connection based on
              understanding, trust, and companionship.
            </p>
            <p>
              What began as an arranged marriage became the start of a beautiful
              journey together. Now, we look forward to building a life filled
              with love, happiness, and countless memories.
            </p>
            <p
              className={`${fraunces.className} pt-2 text-center text-lg italic text-[#3E0F1F] sm:text-xl`}
            >
              Sometimes, the most beautiful stories begin with a little help
              from family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
