"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Rocket,
  Users,
  User,
  UserRound,
} from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { teamMembers } from "@/data/site-content";

export function TeamPage() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<SVGSVGElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const iconGroupRef = useRef<HTMLDivElement | null>(null);

  const [gridVisible, setGridVisible] = useState(false);

  /* HEADER ANIMATION */
  useLayoutEffect(() => {
    if (!headerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const eyebrow =
        headerRef.current!.querySelector<HTMLElement>(".team-eyebrow");
      const letters =
        headerRef.current!.querySelectorAll<HTMLElement>(".team-letter");
      const subtitle =
        headerRef.current!.querySelector<HTMLElement>(".team-subtitle");
      const accent =
        headerRef.current!.querySelector<HTMLElement>(".team-accent");

      gsap.set(letters, { willChange: "transform, opacity" });

      const tl = gsap.timeline();

      if (eyebrow) {
        tl.from(eyebrow, {
          y: 16,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      if (rocketRef.current) {
        tl.fromTo(
          rocketRef.current,
          {
            x: -220,
            y: 220,
            scale: 0.4,
            opacity: 0,
            rotate: -30,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1.4,
            ease: "power4.out",
          },
          "-=0.3"
        ).to(rocketRef.current, {
          y: "-=8",
          repeat: -1,
          yoyo: true,
          duration: 1.8,
          ease: "sine.inOut",
        });
      }

      tl.from(
        letters,
        {
          y: 120,
          opacity: 0,
          rotate: 4,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          force3D: true,
          onComplete: () => gsap.set(letters, { willChange: "auto" }),
        },
        "-=0.8"
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
          "-=0.5"
        );
      }

      if (subtitle) {
        tl.from(
          subtitle,
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      /* ICON ANIMATION */
      if (iconGroupRef.current) {
        const icons =
          iconGroupRef.current.querySelectorAll<HTMLElement>(".team-icon");

        gsap.fromTo(
          icons,
          {
            y: 40,
            opacity: 0,
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
          }
        );

        gsap.to(icons, {
          y: "-=15",
          repeat: -1,
          yoyo: true,
          duration: 2.5,
          ease: "sine.inOut",
          stagger: 0.2,
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* GRID REVEAL */
  useEffect(() => {
    if (!gridRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setGridVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  const headerWords = ["MEET", "THE", "TEAM"];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-32 h-[34rem] w-[34rem] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-[30rem] w-[30rem] rounded-full bg-slate-200/30 blur-3xl" />
      </div>

      <Navbar />

      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-36">

        {/* HEADER */}
        <section ref={headerRef} className="mx-auto max-w-7xl relative">

          {/* Rocket */}
          <div className="absolute -left-10 top-10">
            <Rocket
              ref={rocketRef}
              className="h-10 w-10 text-blue-600 drop-shadow-lg"
            />
          </div>

          {/* Eyebrow */}
          <span className="team-eyebrow inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
            The People Behind AGOM
          </span>

          {/* TITLE + ICON HERO (FIXED SPACING) */}
          <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 overflow-hidden pb-2">

            {/* TITLE */}
            <div className="space-y-1">
              {headerWords.map((word, idx) => (
                <div key={word} className="flex items-baseline gap-2">
                  {word.split("").map((ch, i) => (
                    <span
                      key={`${word}-${i}`}
                      className="team-letter inline-block font-black leading-[0.85] tracking-[-0.06em] text-slate-900 text-[clamp(3.5rem,11vw,11rem)]"
                    >
                      {ch}
                    </span>
                  ))}

                  {idx === headerWords.length - 1 && (
                    <span className="team-letter ml-2 inline-block h-3 w-3 self-end mb-6 rounded-full bg-slate-900 sm:h-5 sm:w-5" />
                  )}
                </div>
              ))}
            </div>

            {/* ICON CLUSTER */}
            <div
              ref={iconGroupRef}
              className="relative w-full lg:w-[42%] flex items-center justify-center -mt-6 lg:-mt-10"
            >
              <div className="relative h-[420px] sm:h-[520px] lg:h-[700px] w-full flex items-center justify-center">

                {/* glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[420px] w-[420px] lg:h-[520px] lg:w-[520px] rounded-full bg-blue-200/30 blur-3xl" />
                </div>

                {/* icons */}
                <div className="relative flex items-center justify-center">

                  <div className="team-icon absolute -top-24 left-10 text-blue-600">
                    <Users size={140} />
                  </div>

                  <div className="team-icon absolute top-10 -right-20 text-slate-700">
                    <User size={120} />
                  </div>

                  <div className="team-icon absolute bottom-10 -left-20 text-blue-500">
                    <UserRound size={150} />
                  </div>

                  <div className="team-icon text-slate-900 opacity-80">
                    <Users size={220} />
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Accent */}
          <div className="team-accent mt-4 h-[3px] w-56 rounded-full bg-gradient-to-r from-blue-900 via-blue-600 to-transparent" />

          {/* Subtitle (tighter spacing) */}
          <p className="team-subtitle mt-5 max-w-2xl text-slate-600 text-base leading-8 sm:text-lg">
            Engineers, designers, and product people working under one roof in Lagos.
            Each person owns the work end-to-end — from architecture decisions to production code.
          </p>
        </section>

        {/* GRID */}
        <section ref={gridRef} className="mx-auto mt-24 max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                style={{
                  transitionDelay: gridVisible
                    ? `${index * 80}ms`
                    : "0ms",
                }}
                className={`
                  group flex flex-col overflow-hidden rounded-[1.75rem]
                  border border-slate-200 bg-white transition-all duration-700
                  hover:-translate-y-2 hover:border-blue-300
                  hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]
                  ${gridVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"}
                `}
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-slate-400 text-xs uppercase tracking-[0.2em]">
                      Photo coming soon
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                    {member.role}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {member.name}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {member.bio}
                  </p>

                  <div className="mt-auto flex gap-3 pt-7">
                    {member.email && (
                      <a className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        <Mail size={12} /> Email
                      </a>
                    )}

                    {member.phone && (
                      <a className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-700">
                        <Phone size={12} /> Call
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}