import HeroSvg from "~/features/assets/components/hero-svg";
import AboutMeContent from "../features/home/components/about-me";
import HomeTitle from "~/features/home/components/home-title";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HomeTitle />
      <AboutMeContent />
    </main>
  );
}
