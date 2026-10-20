import { fraunces } from "@/lib/font";

export default function Footer() {
  return (
    <footer className="bg-[#2A1418] px-6 py-12 text-center text-[#E4CD84]/70 !p-4">
      <p className={`${fraunces.className} text-lg italic`}>
        13&ndash;14 November
      </p>
    </footer>
  );
}
