import AboutMeContent from "~/app/(home-content)/about-me";

export default function HomePage() {
  return (
    <main className="flex-1 container">
      <div className="p-3">
        <h1 className="mb-4 text-3xl">Welcome To My Portfolio</h1>
        <AboutMeContent />
      </div>
    </main>
  );
}
