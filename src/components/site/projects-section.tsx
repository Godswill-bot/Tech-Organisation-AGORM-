"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/site-content";

export function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const el = gridRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  const showcase = projects.slice(
    0,
    Math.max(3, projects.length)
  );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-stone-50
        to-neutral-100
        py-24
        sm:py-32
      "
    >
      {/* TOP LEFT GLOW */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-white
          opacity-80
          blur-3xl
        "
      />

      {/* RIGHT FADE */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          right-[-10rem]
          top-1/3
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-stone-200/50
          blur-3xl
        "
      />

      {/* BOTTOM SOFT FADE */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-[-12rem]
          left-1/2
          h-[28rem]
          w-[48rem]
          -translate-x-1/2
          rounded-full
          bg-neutral-200/40
          blur-3xl
        "
      />

      {/* HEADER */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
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
          Selected Work
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2
            className="
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-black
              sm:text-6xl
              lg:text-7xl
            "
          >
            Shipped Products,
            <br />
            <span className="font-serif italic font-medium text-black/80">
              Quietly Working
            </span>
          </h2>

          <p
            className="
              text-base
              leading-8
              text-black/60
              lg:text-right
            "
          >
            Each project below is live somewhere — running for a
            real team, solving a real problem. We measure success
            by what stays in production after the launch glow
            fades.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div
        ref={gridRef}
        className="
          relative
          mt-16
          grid
          grid-cols-1
          gap-0
          sm:grid-cols-2
          lg:grid-cols-3
        "
        onMouseLeave={() => setHovered(null)}
      >
        {showcase.map((project, index) => {
          const isHovered = hovered === index;
          const dimmed =
            hovered !== null && hovered !== index;

          return (
            <a
              key={project.id}
              href={project.websiteUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(index)}
              style={{
                transitionDelay: visible
                  ? `${index * 80}ms`
                  : "0ms",
              }}
              className={`
                group
                relative
                block
                h-[32rem]
                overflow-hidden
                border
                border-black/5
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                lg:h-[38rem]
                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
                ${
                  dimmed
                    ? "scale-[0.98] opacity-50"
                    : "scale-100"
                }
              `}
            >
              {project.previewImage ? (
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className={`
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isHovered
                        ? "scale-110"
                        : "scale-100"
                    }
                  `}
                />
              ) : (
                <div
                  className="
                    grid
                    h-full
                    place-items-center
                    bg-neutral-100
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  Project Preview
                </div>
              )}

              {/* WHITE / BLACK OVERLAY */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/25
                  to-white/10
                  transition-opacity
                  duration-500
                  ${
                    isHovered
                      ? "opacity-95"
                      : "opacity-75"
                  }
                `}
              />

              {/* SOFT LIGHT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                    sm:text-4xl
                  "
                >
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.category
                    .split(",")
                    .map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          px-3
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white
                          backdrop-blur-xl
                        "
                      >
                        {tag.trim()}
                      </span>
                    ))}
                </div>

                {/* BUTTON */}
                <div
                  className={`
                    mt-6
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isHovered
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }
                  `}
                >
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/30
                      bg-gradient-to-br
                      from-white
                      via-stone-50
                      to-neutral-100
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-black
                      shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                    "
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                    Open Case Study
                  </span>
                </div>
              </div>

              {/* INDEX */}
              <span
                className="
                  absolute
                  right-6
                  top-6
                  text-xs
                  font-mono
                  text-white/60
                "
              >
                {`0${index + 1}`}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}