"use client";

import Image from "next/image";
import { ArrowRight, Share2 } from "lucide-react";
import { useState } from "react";

import {
  insightUpdates,
  productSuites,
  workflowSteps,
} from "@/data/site-content";

/* ============================================================
   INLINE SOCIAL ICONS
============================================================ */

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.78H5.76v7.78h2.58Zm-1.29-8.84a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11.29 8.84v-4.26c0-2.28-1.22-3.34-2.85-3.34a2.46 2.46 0 0 0-2.23 1.23v-1.05h-2.58v7.42h2.58v-4.12c0-1.09.21-2.14 1.56-2.14s1.34 1.24 1.34 2.21v4.05h2.18Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function SystemsContextSections() {
  return (
    <>
      <WorkflowSection />
      <ProductSuitesSection />
      <InsightsSection />
    </>
  );
}

/* ============================================================
   WORKFLOW SECTION
============================================================ */

function WorkflowSection() {
  return (
    <section
    data-cursor-theme="light"
      id="workflow"
      className="
        relative
        w-full
        overflow-hidden
        bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1)_0%,_rgba(248,248,248,1)_35%,_rgba(241,241,241,1)_65%,_rgba(255,255,255,1)_100%)]
        px-5
        py-24
        text-zinc-950
        sm:px-8
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
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-black
          blur-3xl
        "
      />
<div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-60
          bottom-32
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-black
          blur-3xl
        "
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          {/* Brand emblem */}
          <div className="relative h-48 w-72 sm:h-60 sm:w-80">
            <div
              className="
                absolute
                left-0
                top-1/2
                h-48
                w-24
                -translate-y-1/2
                rounded-l-full
                bg-gradient-to-br
                from-white
                via-zinc-50
                to-zinc-100
                sm:h-60
                sm:w-32
              "
            />

            <div
              className="
                absolute
                left-16
                top-1/2
                flex
                h-48
                w-48
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black
                sm:left-20
                sm:h-60
                sm:w-60
              "
            >
              <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line
                    key={i}
                    x1="32"
                    y1="32"
                    x2="32"
                    y2="6"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    transform={`rotate(${i * 30} 32 32)`}
                  />
                ))}
                <circle cx="32" cy="32" r="8" fill="white" />
                <polygon points="29,28 36,32 29,36" fill="black" />
              </svg>
            </div>
          </div>

          <div>
            <div
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
                text-zinc-800
                backdrop-blur-xl
              "
            >
              How We Build
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-zinc-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Adaptive Delivery,
              <br />
              <span className="font-serif italic font-medium">
                Designed Around You.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              We don&apos;t arrive with a fixed playbook. Every engagement
              starts with how your team already operates — then we layer in
              the systems that make it sharper.
            </p>
          </div>
        </div>

        {/* Workflow cards */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step) => (
            <article
              key={step.id}
              className="
                group
                rounded-[1.5rem]
                border
                border-zinc-200
                bg-white/80
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-400
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]
              "
            >
              <p
                className="
                  text-center
                  text-xs
                  font-mono
                  font-semibold
                  tracking-[0.2em]
                  text-zinc-400
                "
              >
                {`{ ${step.id} }`}
              </p>

              <h3 className="mt-12 text-center text-2xl font-bold leading-tight text-zinc-950">
                {step.title}
              </h3>

              <p className="mt-5 text-center text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-zinc-300
              bg-white/80
              px-6
              py-3
              text-sm
              text-zinc-600
              backdrop-blur-xl
            "
          >
            Ready to start a conversation?

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-950
                transition-colors
                hover:text-zinc-700
              "
            >
              <ArrowRight className="h-4 w-4" />
              Reach Out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCT SUITES
============================================================ */

function ProductSuitesSection() {
  return (
    <section
    data-cursor-theme="light"
      id="product-suites"
      className="
        relative
        w-full
        overflow-hidden
        bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1)_0%,_rgba(248,248,248,1)_35%,_rgba(241,241,241,1)_65%,_rgba(255,255,255,1)_100%)]
        px-5
        py-24
        text-zinc-950
        sm:px-8
        sm:py-32
      "
    >
      {/* Background text */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-20
          flex
          items-center
          justify-center
        "
      >
        <span
          className="
            select-none
            whitespace-nowrap
            text-[clamp(6rem,18vw,18rem)]
            font-black
            uppercase
            leading-none
            tracking-tighter
            text-zinc-900/[0.035]
          "
        >
          Our Suite
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
            <div
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
                text-zinc-800
                backdrop-blur-xl
              "
            >
              AGOM Product Suites
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-zinc-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Tools Built For
              <br />
              <span className="font-serif italic font-medium">
                Real Operations
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-zinc-600">
              From academic platforms to credit intelligence, every product
              in our suite started as a problem worth solving.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-zinc-200
                bg-gradient-to-br
                from-white
                via-zinc-50
                to-zinc-100
                px-7
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-950
                transition-all
                duration-300
                hover:border-zinc-400
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
              "
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              Explore More
            </a>
          </div>

          {/* RIGHT */}
          <div className="grid gap-5 sm:grid-cols-2">
            {productSuites.slice(0, 2).map((suite) => (
              <SuiteCard key={suite.id} suite={suite} />
            ))}

            {productSuites.length > 2 &&
              productSuites.slice(2).map((suite) => (
                <div key={suite.id} className="sm:col-span-2">
                  <SuiteCard suite={suite} wide />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Suite = {
  id: string;
  name: string;
  focus: string;
  summary: string;
  href?: string;
  accent?: string;
};

function SuiteCard({
  suite,
  wide = false,
}: {
  suite: Suite;
  wide?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        border-zinc-200
        bg-white/90
        p-7
        transition-all
        duration-300
        hover:border-zinc-300
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]
      "
    >
      {/* Wordmark */}
      <div
        className={`relative flex ${
          wide ? "h-28" : "h-32"
        } items-center justify-center`}
      >
        <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="32"
              y1="32"
              x2="32"
              y2="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 32 32)`}
              className="text-black"
            />
          ))}
        </svg>

        <span className="ml-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          {suite.name}
        </span>
      </div>

      {/* Hover overlay */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-zinc-100
          via-zinc-50/70
          to-transparent
          transition-opacity
          duration-500
          ${hovered ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Socials */}
      <div
        className={`
          pointer-events-none
          absolute
          left-7
          top-32
          flex
          flex-col
          gap-2
          transition-all
          duration-500
          ${
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }
        `}
      >
        {[LinkedinIcon, InstagramIcon, XIcon].map((Icon, i) => (
          <span
            key={i}
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded
              bg-black
              text-white
            "
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-auto pt-4">
        <button
          type="button"
          aria-label="Share"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            transition-transform
            duration-300
            hover:scale-110
          "
        >
          <Share2 className="h-4 w-4" />
        </button>

        <h3 className="mt-5 text-2xl font-bold text-zinc-950">
          {suite.name}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {suite.focus}
        </p>
      </div>
    </article>
  );
}

/* ============================================================
   INSIGHTS SECTION
============================================================ */

function InsightsSection() {
  return (
    <section
    data-cursor-theme="light"
      id="insights"
      className="
        relative
        w-full
        bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1)_0%,_rgba(249,249,249,1)_45%,_rgba(242,242,242,1)_75%,_rgba(255,255,255,1)_100%)]
        px-5
        py-24
        text-zinc-950
        sm:px-8
        sm:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div
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
                text-zinc-800
                backdrop-blur-xl
              "
            >
              Field Notes
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-zinc-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Notes From The
              <br />
              <span className="font-serif italic font-medium">
                Workshop Floor
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600">
              Lessons we&apos;ve picked up from active builds —
              written for teams navigating the same questions.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-zinc-200
                bg-gradient-to-br
                from-white
                via-zinc-50
                to-zinc-100
                px-7
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-950
                transition-all
                duration-300
                hover:border-zinc-400
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
              "
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              Browse All Notes
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {insightUpdates.slice(0, 2).map((insight) => (
              <a
                key={insight.id}
                href={insight.href}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-white/80
                  backdrop-blur-xl
                "
              >
                {"image" in insight &&
                (insight as unknown as { image?: string }).image ? (
                  <div className="relative h-56 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={(insight as unknown as { image: string }).image}
                      alt={insight.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />
                  </div>
                ) : (
                  <div
                    className="
                      grid
                      h-56
                      place-items-center
                      rounded-[1.5rem]
                      bg-zinc-100
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-zinc-400
                    "
                  >
                    Article Image
                  </div>
                )}

                <div className="px-2 py-5">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      py-1.5
                      text-xs
                      text-zinc-500
                    "
                  >
                    <span className="font-semibold">
                      {insight.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-zinc-400" />

                    <span>{insight.date}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-zinc-950">
                    {insight.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}