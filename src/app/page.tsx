import { LikeCard } from "@/components/like-card";

export default function Home() {
  const cards = [
    {
      title: "Mountain Majesty",
      description: "A breathtaking view of the serene mountains at dawn.",
    },
    {
      title: "Ocean Breeze",
      description: "Feel the cool breeze and listen to the waves.",
    },
    {
      title: "Forest Trail",
      description: "A peaceful walk through a sun-dappled forest.",
    },
    {
      title: "City Lights",
      description: "The vibrant and dazzling lights of the city at night.",
    },
    {
      title: "Desert Sands",
      description: "The vast and timeless beauty of the desert.",
    },
    {
      title: "Winter Wonderland",
      description: "A snowy landscape under a crisp winter sky.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">LikeCard Showcase</h1>
        <p className="text-lg text-muted-foreground">Browse through the gallery and like your favorite cards.</p>
      </header>
      <main className="flex-grow p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <LikeCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>Created for React Mini Project.</p>
      </footer>
    </div>
  );
}
