"use client";

import { useRef } from "react";
import { fraunces } from "@/lib/font";

type EventCard = {
  dayLabel: string;
  glyph: string;
  title: string; // supports \n line breaks
  date: string;
  backLabel: string;
  backTitle: string;
  backDetail: string; // supports \n line breaks
};

const events: EventCard[] = [
  {
    dayLabel: "FRIDAY · 13 NOVEMBER",
    glyph: "۞",
    title: "Nikah\n& Mehndi",
    date: "13 November",
    backLabel: "DAY ONE",
    backTitle: "Nikah & Mehndi",
    backDetail:
      "The marriage ceremony in the afternoon,\nfollowed by an evening of music, colour\nand dance to celebrate together.",
  },
  {
    dayLabel: "SATURDAY · 14 NOVEMBER",
    glyph: "✦",
    title: "Baraat",
    date: "14 November",
    backLabel: "DAY TWO",
    backTitle: "Baraat",
    backDetail:
      "The groom's procession arrives,\nfollowed by dinner and celebration\nlate into the evening.",
  },
  {
    dayLabel: "SUNDAY · 15 NOVEMBER",
    glyph: "❋",
    title: "Reception",
    date: "15 November",
    backLabel: "DAY THREE",
    backTitle: "Reception",
    backDetail:
      "A formal evening hosted by the\ncouple to close the celebrations,\nwith dinner and photographs.",
  },
];

function EventTiltCard({ event }: { event: EventCard }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const flippedRef = useRef(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }

  function handleClick() {
    flippedRef.current = !flippedRef.current;
    const inner = innerRef.current;
    if (inner) {
      inner.style.transform = flippedRef.current
        ? "rotateY(180deg)"
        : "rotateY(0deg)";
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative w-full cursor-pointer [aspect-ratio:3/4] [perspective:1400px] [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform sm:[aspect-ratio:2/3] md:[aspect-ratio:3/4]"
    >
      <div
        ref={innerRef}
        className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700"
        style={{ transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md border border-[#E4CD84]/35 bg-gradient-to-br from-[#5C1A2E] to-[#3E0F1F] px-8 text-center text-[#F8F1E4] shadow-[0_25px_50px_-12px_rgba(62,15,31,0.35)] [backface-visibility:hidden]">
          <div className="mb-2 text-sm tracking-[0.2em] text-[#E4CD84]/85 [transform:translateZ(30px)]">
            {event.dayLabel}
          </div>
          <div className="mb-5 text-4xl text-[#E4CD84] [transform:translateZ(40px)]">
            {event.glyph}
          </div>
          <div
            className={`${fraunces.className} whitespace-pre-line text-3xl font-semibold leading-tight [transform:translateZ(50px)]`}
          >
            {event.title}
          </div>
          <div className="mt-3 text-lg opacity-80 [transform:translateZ(25px)]">
            {event.date}
          </div>
          <div className="absolute bottom-6 text-xs tracking-[0.15em] text-[#E4CD84]/55">
            tap for details
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col items-center justify-center rounded-md border border-[#C9A227] bg-gradient-to-br from-[#F8F1E4] to-[#F1E6CF] px-8 text-center text-[#3E0F1F] [backface-visibility:hidden]">
          <div className="mb-3 text-sm tracking-[0.18em] text-[#4B6043]">
            {event.backLabel}
          </div>
          <div className={`${fraunces.className} mb-3 text-2xl font-semibold`}>
            {event.backTitle}
          </div>
          <div className="whitespace-pre-line text-lg leading-relaxed text-[#2A1418]/85">
            {event.backDetail}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#5C1A2E] via-[#4A1526] to-[#3E0F1F] py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3E0F1F]/40 via-transparent to-[#3E0F1F]/70" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.22), transparent 60%)" }} />
      <div className="relative z-10 w-full max-w-5xl px-6">
        <h2
          className={`${fraunces.className} mb-3 text-center text-3xl font-medium text-[#F8F1E4] sm:text-4xl`}
        >
          Three Days, Three Nights
        </h2>
        <p className="mb-2 text-center text-lg text-[#E4CD84]/80">
          Tilt each card, then tap to see the details
        </p>
        <p className="mb-12 text-center text-sm tracking-wide text-[#E4CD84]/50">
          — hover or drag on desktop, tap on mobile —
        </p>

        <div className="grid grid-cols-1 gap-8 [perspective:1400px] md:grid-cols-3">
          {events.map((event) => (
            <EventTiltCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
