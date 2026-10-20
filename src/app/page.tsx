import Hero from "../components/wedding/Hero";
import Events from "../components/wedding/Events";
import Venue from "../components/wedding/Venue";
import Map from "../components/wedding/Map";
import Footer from "../components/wedding/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F1E4] text-[#2A1418]">
      <Hero />
      <Events />
      <Venue />
      <Map />
      <Footer />
    </main>
  );
}
