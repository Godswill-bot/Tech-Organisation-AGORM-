export default function Loading() {
  const letters = ["A", "G", "O", "M"];

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-5 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#000000_0%,#020617_55%,#111827_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[42px_42px] opacity-40" />

      <div className="relative flex items-center justify-center">
        <div className="flex gap-6 sm:gap-10">
          {letters.map((letter, index) => (
            <style key={`style-${index}`}>
              {`
                @keyframes letterLoad-${index} {
                  0% {
                    opacity: 0;
                    transform: scale(0.8) translateY(12px);
                  }
                  50% {
                    opacity: 1;
                  }
                  100% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                  }
                }
                .letter-${index} {
                  animation: letterLoad-${index} 0.6s ease-out forwards;
                  animation-delay: ${index * 0.12}s;
                }
              `}
            </style>
          ))}
          {letters.map((letter, index) => (
            <div
              key={letter}
              className={`letter-${index} text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white`}
              style={{
                textShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-slate-500">Loading</p>
      </div>
    </div>
  );
}