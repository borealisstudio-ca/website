export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200/80">
        <div className="mx-auto max-w-2xl px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-600">
              Independent Studio
            </p>
            <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Borealis Studio
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="space-y-12">
          <section className="space-y-6">
            <p className="text-pretty text-[1.05rem] leading-7 text-zinc-700 sm:text-lg sm:leading-8">
              An independent studio based in Québec, exploring digital tools and experimental
              software systems, including data-driven and AI-assisted applications.
            </p>

            <div className="border-t border-zinc-200/80 pt-6">
              <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-600">
                  Status
                </p>
                <p className="text-pretty text-[1.05rem] leading-7 text-zinc-700 sm:text-lg sm:leading-8">
                  Currently in an exploratory phase; projects are developed slowly and selectively.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-zinc-200/80 pt-8">
            <div className="grid gap-6 sm:grid-cols-[140px_1fr] sm:gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-600">
                Founder
              </p>

              <div className="space-y-5">
                <div className="space-y-1">
                  <p className="text-lg font-medium tracking-tight text-zinc-900">
                    Aurora Liu
                  </p>
                  <p className="text-sm leading-6 text-zinc-600">
                    Founder · Montréal, Québec
                  </p>
                </div>

                <p className="text-pretty text-[1.05rem] leading-7 text-zinc-700 sm:text-lg sm:leading-8">
                  Building thoughtful digital tools at the intersection of technology and
                  exploration.
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200/80 pt-5">
                  <a
                    href="https://github.com/borealisstudio-ca"
                    className="text-sm font-medium text-zinc-800 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-400"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <span className="text-sm text-zinc-500">LinkedIn</span>
                  <span className="text-sm text-zinc-500">X</span>
                </div>

                <div className="pt-1">
                  <p className="text-sm leading-6 text-zinc-600">
                    Contact{" "}
                    <a
                      href="mailto:contact@borealisstudio.ca"
                      className="font-medium text-zinc-800 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-400"
                    >
                      contact@borealisstudio.ca
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-200/80">
        <div className="mx-auto max-w-2xl px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-2 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Borealis Studio</p>
            <p className="tracking-wide">borealisstudio.ca</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
