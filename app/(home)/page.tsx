import Form from "./Form"

export default function HomePage() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl mb-2">
          AI Crosswords
        </h1>
        <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
          Create your own crossword puzzles with the help of artificial
          intelligence.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl mb-4">
          Create a new puzzle
        </h2>
        <Form />
      </section>
    </>
  )
}
