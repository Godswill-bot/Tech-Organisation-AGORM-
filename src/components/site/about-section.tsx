"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import {
  ShieldCheck,
  Sparkles,
  Globe2,
  Zap,
} from "lucide-react";

const valuePills = [
  { label: "Clarity", top: "8%", left: "62%" },
  { label: "Reliability", top: "18%", left: "78%" },
  { label: "Efficiency", top: "44%", left: "-6%" },
  { label: "Adaptability", top: "82%", left: "12%" },
  { label: "Partnership", top: "84%", left: "60%" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Zero Disruption",
    body: "Your existing systems keep running. We add layers, not replacements.",
  },
  {
    icon: Sparkles,
    title: "Built to be Used",
    body: "Interfaces your team adopts on day one — no week-long onboarding required.",
  },
  {
    icon: Globe2,
    title: "Local Reality",
    body: "Engineered around the constraints, infrastructure, and pace of African business.",
  },
  {
    icon: Zap,
    title: "Weeks, Not Quarters",
    body: "Discovery to deployment in a timeline that matches how fast you actually move.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const aboutTitleRef = useRef<HTMLDivElement | null>(null);
  const subTitleRef = useRef<HTMLHeadingElement | null>(null);
  const numeralRef = useRef<HTMLSpanElement | null>(null);
  const pillRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (aboutTitleRef.current) {
        const letters =
          aboutTitleRef.current.querySelectorAll<HTMLElement>(
            ".about-hero-letter"
          );

        const accent =
          aboutTitleRef.current.querySelector<HTMLElement>(
            ".about-hero-accent"
          );

        const eyebrow =
          aboutTitleRef.current.querySelector<HTMLElement>(
            ".about-hero-eyebrow"
          );

        gsap.set(letters, {
          willChange: "transform, opacity",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutTitleRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        if (eyebrow) {
          tl.from(eyebrow, {
            y: 16,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        }

        tl.from(
          letters,
          {
            y: 100,
            opacity: 0,
            rotate: 6,
            duration: 0.9,
            stagger: 0.07,
            ease: "power4.out",
            force3D: true,
            onComplete: () =>
              gsap.set(letters, {
                willChange: "auto",
              }),
          },
          "-=0.2"
        );

        if (accent) {
          tl.from(
            accent,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
      }

      if (subTitleRef.current) {
        const words =
          subTitleRef.current.querySelectorAll<HTMLElement>(
            ".about-word"
          );

        gsap.from(words, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (numeralRef.current) {
        gsap.from(numeralRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: numeralRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      pillRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.6,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.4 + i * 0.1,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: numeralRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(el, {
          y: i % 2 === 0 ? -8 : 8,
          duration: 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    data-cursor-theme="light"
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1)_0%,_rgba(248,248,248,1)_35%,_rgba(241,241,241,1)_65%,_rgba(255,255,255,1)_100%)]
        px-5
        py-24
        text-black
        sm:px-8
        sm:py-32
        lg:px-14
      "
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-black
          
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-60
          bottom-10
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-black
          
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div ref={aboutTitleRef} className="relative">
          <span
            className="
              about-hero-eyebrow
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-zinc-300
              bg-white/70
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.32em]
              text-zinc-900
              backdrop-blur-xl
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Who We Are
          </span>

          <div
            className="
              relative
              mt-6
              flex
              items-baseline
              overflow-hidden
              pb-3
            "
          >
            {["A", "G", "O", "M",].map((ch) => (
              <span
                key={ch}
                className="
                  about-hero-letter
                  inline-block
                  font-black
                  leading-[0.85]
                  tracking-[-0.06em]
                  text-zinc-950
                  text-[clamp(5rem,18vw,16rem)]
                "
              >
                {ch}
              </span>
            ))}

            <span
              className="
                about-hero-letter
                ml-3
                mt-[1.5rem]
                inline-block
                h-4
                w-4
                self-start
                rounded-full
                bg-black
                sm:h-6
                sm:w-6
              "
            />
          </div>

          <div
            className="
              about-hero-accent
              mt-2
              h-[3px]
              w-48
              rounded-full
              bg-gradient-to-r
              from-zinc-300
              via-zinc-500
              to-transparent
            "
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* LEFT */}
          <div className="relative h-[26rem] lg:h-[32rem]">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-zinc-300
                bg-white/70
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.24em]
                text-zinc-900
                backdrop-blur-xl
              "
            >
              What We Stand By
            </span>

            <div className="relative mt-8 h-full">
              <span
                ref={numeralRef}
                style={{ willChange: "transform" }}
                className="
                  block
                  font-black
                  leading-none
                  tracking-tight
                  text-zinc-900/90
                  text-[14rem]
                  sm:text-[18rem]
                  lg:text-[22rem]
                "
              >
                05
              </span>

              {valuePills.map((p, i) => (
                <span
                  key={p.label}
                  ref={(el) => {
                    pillRefs.current[i] = el;
                  }}
                  style={{
                    top: p.top,
                    left: p.left,
                    willChange: "transform",
                  }}
                  className="
                    absolute
                    rounded-full
                    border
                    border-zinc-200
                    bg-gradient-to-br
                    from-white
                    via-zinc-50
                    to-zinc-100
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-zinc-900
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    sm:text-sm
                  "
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2
              ref={subTitleRef}
              className="
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                text-zinc-950
                sm:text-6xl
                lg:text-7xl
              "
            >
              <span className="about-word inline-block">
                Engineering
              </span>{" "}
              <span className="about-word inline-block">
                With
              </span>
              <br />
              <span className="about-word inline-block font-serif italic font-medium">
                Intent
              </span>{" "}
              <span className="about-word inline-block font-serif italic font-medium">
                & Restraint
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-5">
              <p className="text-5xl font-bold text-zinc-950">
                4.9
              </p>

              <div>
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Client Confidence Score
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-5 text-base leading-8 text-zinc-700">
              <p>
                AGOM was built around a simple idea:
                digitization should be additive,
                not destructive. Most teams don&apos;t
                need a clean-slate rebuild — they
                need clarity, leverage, and tools
                that respect how they already work.
              </p>

              <p>
                We sit beside operations, learn
                what already functions, and engineer
                the parts that genuinely move the
                needle. Software that earns its
                place. Systems that stay used after
                launch.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-xl font-semibold text-zinc-950">
                Tools shaped to your team — not the inverse.
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-500">
                That&apos;s the AGOM way
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-28 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((f) => {
            const Icon = f.icon;

            return (
              <div key={f.title} className="group">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-white
                    via-zinc-50
                    to-zinc-100
                    text-zinc-900
                    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                    transition-transform
                    duration-500
                    group-hover:-translate-y-1
                  "
                >
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-zinc-950">
                  {f.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-zinc-600">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}