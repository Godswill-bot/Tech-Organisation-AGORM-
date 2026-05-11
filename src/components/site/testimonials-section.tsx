"use client";

import { Quote, Star } from "lucide-react";

import { testimonials } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-stone-50
        to-neutral-100
        px-5
        py-24
        sm:px-8
        sm:py-32
      "
    >
      {/* SOFT BACKGROUND FADES */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-white
          opacity-90
          blur-3xl
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          right-[-10rem]
          top-1/3
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-stone-200/50
          blur-3xl
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-[-10rem]
          left-1/2
          h-[24rem]
          w-[42rem]
          -translate-x-1/2
          rounded-full
          bg-neutral-200/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-black/10
                bg-white/80
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.24em]
                text-black/70
                backdrop-blur-xl
              "
            >
              Client Voices
            </div>

            <h2
              className="
                mt-7
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                text-black
                sm:text-6xl
                lg:text-7xl
              "
            >
              What Partners Say
              <br />
              <span className="font-serif italic font-medium text-black/75">
                About Working With AGOM
              </span>
            </h2>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-5 lg:self-end">
            <p className="text-5xl font-bold text-black">4.9</p>

            <div>
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="
                      h-4
                      w-4
                      fill-amber-500
                      text-amber-500
                    "
                  />
                ))}
              </div>

              <p
                className="
                  mt-1
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-black/50
                "
              >
                Average Rating · 24 reviews
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="
                group
                relative
                flex
                flex-col
                rounded-[1.75rem]
                border
                border-black/5
                bg-white/80
                p-7
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-black/10
                hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]
              "
            >
              {/* TOP LIGHT */}
              <div
                aria-hidden
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-24
                  bg-gradient-to-b
                  from-white/80
                  to-transparent
                  opacity-70
                "
              />

              {/* QUOTE ICON */}
              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                "
              >
                <Quote className="h-4 w-4 rotate-180" />
              </div>

              {/* TEXT */}
              <p
                className="
                  relative
                  mt-6
                  flex-1
                  text-sm
                  leading-7
                  text-black/75
                "
              >
                {item.quote}
              </p>

              {/* FOOTER */}
              <div
                className="
                  relative
                  mt-8
                  border-t
                  border-black/8
                  pt-5
                "
              >
                <p
                  className="
                    text-base
                    font-bold
                    text-black
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                >
                  {item.author}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-black/45
                  "
                >
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`
                h-2
                rounded-full
                transition-all
                ${
                  i === 0
                    ? "w-6 bg-black"
                    : "w-2 bg-black/15"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}