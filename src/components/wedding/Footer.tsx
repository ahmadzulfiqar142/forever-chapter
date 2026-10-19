import { fraunces } from "@/lib/font";

export default function Footer() {
  return (
    <footer className="bg-[#2A1418] px-6 py-12 text-center text-[#E4CD84]/70">
      <p className={`${fraunces.className} text-lg italic`}>
        Ayesha &amp; Farhan &middot; 13&ndash;15 November
      </p>
    </footer>
  );
}
