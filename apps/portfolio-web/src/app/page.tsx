import HomeTitle from "~/features/home/components/home-title";
import AboutMeContent from "../features/home/components/about-me";

export default function HomePage() {
  return (
    <main className="min-h-[90dvh] flex-1">
      <HomeTitle />
      <AboutMeContent />
    </main>
  );
}
