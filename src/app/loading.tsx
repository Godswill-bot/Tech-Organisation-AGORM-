export default function Loading() {
  const letters = ["A", "G", "O", "M"];

  return (
    <div
      className="
        relative
        flex
        min-h-svh
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-5
        py-10
        text-white
        sm:px-8
      "
    >
      {/* Ambient glow blobs (dark + soft white/blue vibe) */}
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
          bg-white/5
          blur-3xl
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* Subtle grid (white on black) */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]
          [background-size:32px_32px]
          opacity-40
        "
      />

      {/* Center stack */}
      <div className="relative flex flex-col items-center gap-10">

        {/* Burst icon (muted white glow style) */}
        <div className="agom-loader-burst" aria-hidden>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="32"
                y1="32"
                x2="32"
                y2="6"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="2.2"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 32 32)`}
              />
            ))}
            <circle cx="32" cy="32" r="6" fill="rgba(255,255,255,0.9)" />
          </svg>
        </div>

        {/* Letters */}
        <div className="flex gap-4 sm:gap-8">
          {letters.map((letter, index) => (
            <span
              key={letter}
              className="agom-loader-letter"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <span className="agom-loader-bar absolute inset-y-0 left-0 w-1/3 rounded-full bg-white" />
        </div>
      </div>

      {/* Bottom label */}
      <div className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-white/50">
          Loading
        </p>
      </div>

      {/* CSS animations (unchanged, just color-agnostic) */}
      <style>{`
        .agom-loader-letter {
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          color: rgba(255,255,255,0.9);
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          animation: agom-loader-letter-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes agom-loader-letter-in {
          0%   { opacity: 0; transform: translateY(20px) scale(0.9); }
          60%  { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .agom-loader-burst {
          opacity: 0;
          animation:
            agom-loader-burst-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards,
            agom-loader-burst-spin 6s linear 0.7s infinite;
          transform-origin: 50% 50%;
          will-change: transform, opacity;
        }

        @keyframes agom-loader-burst-in {
          from { opacity: 0; transform: scale(0.6) rotate(-90deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes agom-loader-burst-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .agom-loader-bar {
          animation: agom-loader-bar-slide 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          will-change: transform;
        }

        @keyframes agom-loader-bar-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .agom-loader-letter,
          .agom-loader-burst,
          .agom-loader-bar {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}