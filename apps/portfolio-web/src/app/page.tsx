import HeroSvg from "~/features/assets/components/hero-svg";
import AboutMeContent from "./(home-content)/about-me";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSvg className="mb-4">
        <div className="bg-primary/75 py-3 container">
          <h1 className="text-5xl text-primary-foreground">
            Welcome To My Portfolio
          </h1>
        </div>
      </HeroSvg>
      <div className="container">
        <AboutMeContent />
      </div>
    </main>
  );
}
