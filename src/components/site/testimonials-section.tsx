"use client";

import { Quote, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { testimonials } from "@/data/site-content";

// Instagram Icon component
function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

// Twitter Icon component
function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.694-5.867 6.694h-3.306l7.73-8.835L2.601 2.25h6.8l4.612 6.05L18.244 2.25zM17.55 19.5h1.828L6.982 4.07H5.084l12.466 15.43z" />
    </svg>
  );
}

// LinkedIn Icon component
function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.649 1.175-1.574 2.847-1.574 2.081 0 3.641 1.361 3.641 4.285v5.456zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.916-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.771 1.71-1.916 1.71zm1.6 11.597H3.738V9.938h3.199v10.514zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-black
        py-24
        sm:py-32
      "
    >
      <div
    aria-hidden
    className="
      pointer-events-none
      absolute
      -right-32
      top-32
      h-96
      w-96
      -translate-y-1/2
      rounded-full
      bg-white
      blur-3xl
     
    "
  />
  <div
    aria-hidden
    className="
      pointer-events-none
      absolute
      -left-32
      top-32
      h-96
      w-96
      -translate-y-1/2
      rounded-full
      bg-white
      blur-3xl     
    "
  />
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
          bg-zinc-900
          opacity-30
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
          bg-zinc-800/20
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
          bg-zinc-900/15
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.24em]
                text-white/80
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
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              What Partners Say
              <br />
              <span className="font-serif italic font-medium text-white/75">
                About Working With AGOM
              </span>
            </h2>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-5 lg:self-end">
            <p className="text-5xl font-bold text-white">4.9</p>

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
                  text-white/50
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
                border-white/10
                bg-white/5
                p-7
                shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)]
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
                  from-white/5
                  to-transparent
                  opacity-40
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
                  text-white/75
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
                  border-white/10
                  pt-5
                "
              >
                <p
                  className="
                    text-base
                    font-bold
                    text-white
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
                    text-white/45
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
                    ? "w-6 bg-white"
                    : "w-2 bg-white/15"
                }
              `}
            />
          ))}
        </div>

        {/* SOCIAL LINKS - RIGHT SIDE */}
        <div className="mt-16 flex items-center justify-end gap-8 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-end gap-3"
          >
            <p className="text-sm md:text-base font-semibold text-white tracking-[0.08em] uppercase">
              Explore our socials
            </p>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1 text-white/60"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 md:gap-6"
          >
            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon />
            </motion.a>

            {/* Twitter/X */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <TwitterIcon />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}