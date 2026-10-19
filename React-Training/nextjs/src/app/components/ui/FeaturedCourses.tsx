import coursesData from "@/data/music_courses.json";

const courseAccents = [
  "from-amber-200/20 via-orange-500/15 to-neutral-950",
  "from-sky-200/20 via-blue-500/15 to-neutral-950",
  "from-violet-200/20 via-indigo-500/15 to-neutral-950",
  "from-emerald-200/20 via-teal-500/15 to-neutral-950",
];

const courseSymbols = ["♫", "♬", "⌘", "⌁"];

export default function FeaturedCourses() {
  return (
    <section
      id="courses"
      className="bg-black px-6 py-24 text-white sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Learn with the best
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the course that moves you.
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-400">
            Expert-led lessons and practical skills to help you make your next
            big step, wherever you are starting from.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coursesData.courses.map((course, index) => (
            <article
              key={course.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-gradient-to-br hover:from-neutral-900 hover:via-indigo-950/40 hover:to-neutral-950"
            >
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${
                  courseAccents[index % courseAccents.length]
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-10 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125 group-hover:border-white/25"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/10 transition duration-500 group-hover:scale-110 group-hover:border-white/20"
                />
                <span
                  aria-hidden="true"
                  className="relative text-7xl font-light text-white/75 transition duration-300 group-hover:scale-110 group-hover:text-white"
                >
                  {courseSymbols[index % courseSymbols.length]}
                </span>
                {course.isFeatured && (
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-6 text-white">
                    {course.title}
                  </h3>
                  <span className="shrink-0 text-sm font-medium text-neutral-200">
                    ${course.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-neutral-400">
                  {course.description}
                </p>
                <div className="mt-5 border-t border-white/10 pt-4 text-xs text-neutral-400">
                  <span className="text-neutral-500">Instructor</span>
                  <span className="ml-2 font-medium text-neutral-200">
                    {course.instructor}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
