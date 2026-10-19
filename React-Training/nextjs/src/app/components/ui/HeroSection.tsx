import Link from "next/link";
import { Spotlight } from "./Spotlight";

const learningPaths = [
  { number: "01", label: "Find your instrument", detail: "Guitar, piano, and more" },
  { number: "02", label: "Learn at your pace", detail: "Short, focused lessons" },
  { number: "03", label: "Make real progress", detail: "Practice with purpose" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 pb-16 pt-36 text-white sm:px-10 lg:px-12">
      <Spotlight fill="#ffffff" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-200">
            <span className="h-2 w-2 rounded-full bg-white" />
            Your next chapter starts with a note
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Make room for
            <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text pb-2 text-transparent">
              the music.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Build confidence one lesson at a time. Learn an instrument, develop
            your technique, and enjoy making music at your own pace.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Explore courses
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
            <span className="text-sm text-neutral-400">
              Learn on your schedule
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-white/10 via-neutral-500/5 to-white/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-400">
                  A practice worth keeping
                </p>
                <p className="mt-1 text-xl font-semibold text-white">
                  Your musical journey
                </p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-neutral-200">
                START HERE
              </span>
            </div>

            <div
              aria-hidden="true"
              className="my-8 flex h-36 items-end justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 px-8 pt-8"
            >
              {[35, 58, 43, 78, 52, 92, 63, 46, 72, 54, 84, 40, 67].map(
                (height, index) => (
                  <span
                    key={index}
                    className="w-2 rounded-t-full bg-gradient-to-t from-neutral-500 to-white opacity-80 sm:w-3"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>

            <div className="space-y-5">
              {learningPaths.map((path) => (
                <div key={path.number} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-neutral-300">
                    {path.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {path.label}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-400">
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