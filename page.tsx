// @ts-ignore - Resolved when dependencies are installed.
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-900 sm:px-10">
      <div className="mx-auto flex max-w-xl flex-col justify-center gap-8">
        <header className="space-y-3">
          <h1 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            Borealis Studio
          </h1>
          <p className="text-pretty text-base leading-relaxed text-zinc-700 sm:text-[1.05rem]">
            An independent studio based in Québec, exploring digital tools and experimental
            software systems, including data-driven and AI-assisted applications.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-sm font-medium tracking-wide text-zinc-900">Status</h2>
          <p className="text-pretty text-base leading-relaxed text-zinc-700">
            Currently in an exploratory phase, projects developed slowly and selectively.
          </p>
        </section>

        <footer className="pt-2">
          <p className="text-base leading-relaxed text-zinc-700">
            Contact:{" "}
            <a
              href="mailto:contact@borealisstudio.ca"
              className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-400"
            >
              contact@borealisstudio.ca
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}