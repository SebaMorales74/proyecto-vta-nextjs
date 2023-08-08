import { ExampleCard } from "@/components/Cards"

export default function Home() {
  return (
    <main className="grid">
      <div class="grid justify-self-center grid-cols-3 gap-4">
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </div>
    </main>
  )
}
