import Link from "next/link";
import { Spotlight } from "./Spotlight";

const learningPaths = [
  { number: "01", label: "Find your instrument", detail: "Guitar, piano, and more" },
  { number: "02", label: "Learn at your pace", detail: "Short, focused lessons" },
  { number: "03", label: "Make real progress", detail: "Practice with purpose" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col justify-center overflow-hidden px-6 pb-16 pt-36 sm:px-10 lg:px-12">
      <Spotlight className="-top-48 h-[42rem] w-[64rem] opacity-80 dark:opacity-100" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--color-background)_0%,transparent_75%)] opacity-80" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Your next chapter starts with a note
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl dark:text-white">
            Make room for
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text pb-2 text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-fuchsia-300">
              the music.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Build confidence one lesson at a time. Learn an instrument, develop
            your technique, and enjoy making music at your own pace.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/10 transition hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-white dark:text-neutral-950 dark:hover:bg-indigo-100"
            >
              Explore courses
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Learn on your schedule
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-300/40 via-violet-300/20 to-fuchsia-300/30 blur-2xl dark:from-indigo-500/20 dark:via-violet-500/10 dark:to-fuchsia-500/15"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white/80 p-6 shadow-2xl shadow-neutral-900/10 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-neutral-900/75 dark:shadow-black/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  A practice worth keeping
                </p>
                <p className="mt-1 text-xl font-semibold text-neutral-900 dark:text-white">
                  Your musical journey
                </p>
              </div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-200">
                START HERE
              </span>
            </div>

            <div
              aria-hidden="true"
              className="my-8 flex h-36 items-end justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-100 px-8 pt-8 dark:from-indigo-950/70 dark:to-violet-950/50"
            >
              {[35, 58, 43, 78, 52, 92, 63, 46, 72, 54, 84, 40, 67].map(
                (height, index) => (
                  <span
                    key={index}
                    className="w-2 rounded-t-full bg-gradient-to-t from-indigo-500 to-fuchsia-400 opacity-80 sm:w-3"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>

            <div className="space-y-5">
              {learningPaths.map((path) => (
                <div key={path.number} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
                    {path.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {path.label}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                      {path.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}