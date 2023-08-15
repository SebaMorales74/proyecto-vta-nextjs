import { ExampleCard } from "@/components/Cards"
import { SimpleHero, Gallery } from "@/components/Hero"

export default function Home() {
  return (
    <main className="grid dark:bg-gray-900">
      <SimpleHero />
      <div class="grid justify-self-center grid-cols-3 gap-4">
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </div>
      <Gallery />
    </main>
  )
}
