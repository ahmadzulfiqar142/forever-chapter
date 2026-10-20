import { fraunces } from "@/lib/font";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#5C1A2E] via-[#4A1526] to-[#3E0F1F] px-6 py-24 text-center text-[#F8F1E4]">
      {/* Maroon wash + vignette — sits on its own until a photo is added */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3E0F1F]/40 via-transparent to-[#3E0F1F]/70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.22), transparent 60%)",
        }}
      />
      <div className="absolute inset-y-[8%] left-[6%] w-px bg-gradient-to-b from-transparent via-[#E4CD84]/50 to-transparent" />
      <div className="absolute inset-y-[8%] right-[6%] w-px bg-gradient-to-b from-transparent via-[#E4CD84]/50 to-transparent" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-5 h-56 w-52 overflow-hidden [mask-image:linear-gradient(to_bottom,black_82%,transparent)] sm:mb-7 sm:h-72 sm:w-64">
          <Image
            src="/hero-couple.png"
            alt="wedding attire"
            fill
            priority
            sizes="(max-width: 640px) 208px, 256px"
            className="object-cover object-center"
          />
        </div>
        <div className="mb-6 text-4xl tracking-[0.4em] text-[#E4CD84]/85">
          ۞
        </div>
        <p
          className={`${fraunces.className} mb-4 animate-[rise_1s_ease-out_0.2s_forwards] text-base italic tracking-[0.15em] text-[#E4CD84] opacity-0 sm:text-lg`}
        >
          Hosted by Tariq Mehmood
        </p>
        <p className="mt-2 max-w-[34rem] animate-[rise_1s_ease-out_0.5s_forwards] text-base leading-relaxed tracking-[0.04em] opacity-0 sm:text-xl sm:tracking-[0.08em]">
          We invite you to celebrate our daughter&apos;s wedding
          <span className="mt-2 block text-[#E4CD84]">
            13&ndash;14 November
          </span>
        </p>
      </div>

      <div className="absolute bottom-8 z-10 text-xs tracking-[0.3em] text-[#E4CD84]/70">
        ↓ SCROLL
      </div>
    </section>
  );
}
