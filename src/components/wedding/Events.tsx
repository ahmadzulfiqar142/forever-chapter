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
    title: "Nikah",
    date: "13 November",
    backLabel: "FRIDAY · 13 NOVEMBER",
    backTitle: "Nikah",
    backDetail: "Join us for the Nikah ceremony\nat 2:00 PM.",
  },
  {
    dayLabel: "FRIDAY · 13 NOVEMBER",
    glyph: "✧",
    title: "Mehndi",
    date: "13 November",
    backLabel: "FRIDAY · 13 NOVEMBER",
    backTitle: "Mehndi",
    backDetail:
      "Celebrate with an evening of music,\ncolour and dance, beginning at 8:00 PM.",
  },
  {
    dayLabel: "SATURDAY · 14 NOVEMBER",
    glyph: "✦",
    title: "Baraat",
    date: "14 November",
    backLabel: "DAY TWO",
    backTitle: "Baraat",
    backDetail:
      "The groom's procession arrives,\nfollowed by lunch and celebration\nin the afternoon.",
  },
];

function EventTiltCard({ event }: { event: EventCard }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const flippedRef = useRef(false);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 4;
    const rotateX = -((y - midY) / midY) * 4;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
  }

  function handlePointerLeave() {
    const card = cardRef.current;
    if (card)
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
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
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      className="relative min-h-[280px] w-full cursor-pointer [perspective:1400px] [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform sm:min-h-[340px] md:min-h-0 md:[aspect-ratio:3/4]"
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
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#F8F1E4] px-6 pt-16 pb-24 sm:py-20 md:py-24">
      <div className="relative z-10 w-full max-w-5xl !mt-4">
        <h2
          className={`${fraunces.className} mb-2 text-center text-3xl font-medium text-[#3E0F1F] sm:text-4xl`}
        >
          Wedding Celebrations
        </h2>
        <p className="mb-8 text-center text-base tracking-wide text-[#4B6043] sm:mb-10 sm:text-lg">
          13–14 November · Nikah, Mehndi &amp; Baraat
        </p>
        <div className="grid grid-cols-1 gap-6 [perspective:1400px] md:grid-cols-3 md:gap-8 !p-4">
          {events.map((event) => (
            <EventTiltCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
