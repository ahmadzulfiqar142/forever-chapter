import Image from "next/image";
import { fraunces } from "@/lib/font";

// Replace these with real photos in /public/images/gallery/
const photos = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-[#F1E6CF] px-6 py-24">
      <div className="w-full max-w-6xl">
        <h2
          className={`${fraunces.className} mb-2 text-center text-3xl font-medium text-[#3E0F1F] sm:text-4xl`}
        >
          A Few Favourites
        </h2>
        <p className="mb-16 text-center text-lg text-[#6b5a5f]">
          Moments along the way
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A227]/20 ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E0F1F]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
