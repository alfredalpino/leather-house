import { Hero } from "@/components/home/Hero";
import { TheHouse } from "@/components/home/TheHouse";
import { MaterialStory } from "@/components/home/MaterialStory";
import { SignatureCollection } from "@/components/home/SignatureCollection";
import { BeyondLeather } from "@/components/home/BeyondLeather";
import { Aminabad } from "@/components/home/Aminabad";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheHouse />
      <MaterialStory />
      <SignatureCollection />
      <BeyondLeather />
      <Aminabad />
      <JournalTeaser />
      <FinalCta />
    </>
  );
}
