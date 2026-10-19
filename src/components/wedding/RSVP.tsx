"use client";

import { useState } from "react";
import { fraunces } from "@/lib/font";

export default function RSVP() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send this to your API route / Supabase table instead of just logging it.
    console.log({ name, guests, attending });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="flex min-h-svh flex-col items-center justify-center bg-[#3E0F1F] px-6 py-24 text-center text-[#F8F1E4]">
        <h2 className={`${fraunces.className} mb-3 text-3xl font-medium`}>
          Thank you, {name || "friend"}!
        </h2>
        <p className="text-lg text-[#E4CD84]">
          Your response has been noted. We can&apos;t wait to celebrate with
          you.
        </p>
      </section>
    );
  }

  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-[#3E0F1F] py-24 text-[#F8F1E4]">
      <div className="w-full max-w-5xl px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2
            className={`${fraunces.className} mb-3 text-3xl font-medium sm:text-4xl`}
          >
            Will You Join Us?
          </h2>
          <p className="mb-10 text-lg text-[#E4CD84]/85">
            Kindly respond by 1 November
          </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="mb-1 block text-sm tracking-wide text-[#E4CD84]">
              Full name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-[#E4CD84]/40 bg-transparent px-4 py-2 text-lg text-[#F8F1E4] placeholder:text-[#F8F1E4]/40 focus:border-[#C9A227] focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm tracking-wide text-[#E4CD84]">
              Will you be attending?
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setAttending("yes")}
                className={`flex-1 rounded-md border px-4 py-3 text-lg font-medium transition-all duration-200 ${
                  attending === "yes"
                    ? "border-[#C9A227] bg-[#C9A227] text-[#3E0F1F] shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/30"
                    : "border-[#E4CD84]/40 text-[#F8F1E4] hover:border-[#E4CD84]/70 hover:bg-[#E4CD84]/10"
                }`}
              >
                Joyfully accept
              </button>
              <button
                type="button"
                onClick={() => setAttending("no")}
                className={`flex-1 rounded-md border px-4 py-3 text-lg font-medium transition-all duration-200 ${
                  attending === "no"
                    ? "border-[#C9A227] bg-[#C9A227] text-[#3E0F1F] shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/30"
                    : "border-[#E4CD84]/40 text-[#F8F1E4] hover:border-[#E4CD84]/70 hover:bg-[#E4CD84]/10"
                }`}
              >
                Regretfully decline
              </button>
            </div>
          </div>

          {attending === "yes" && (
            <div>
              <label className="mb-1 block text-sm tracking-wide text-[#E4CD84]">
                Number of guests (including yourself)
              </label>
              <input
                type="number"
                min={1}
                max={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-md border border-[#E4CD84]/40 bg-transparent px-4 py-2 text-lg text-[#F8F1E4] focus:border-[#C9A227] focus:outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!attending}
            className="w-full rounded-md bg-[#C9A227] px-4 py-3 text-lg font-medium text-[#3E0F1F] shadow-md shadow-[#C9A227]/30 transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A227]/40 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-md"
          >
            Send RSVP
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
