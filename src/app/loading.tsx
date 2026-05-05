export default function Loading() {
  return (
    <div className="relative flex min-h-svh items-center overflow-hidden bg-black px-5 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#000000_0%,#020617_55%,#111827_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[42px_42px] opacity-40" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.36em] text-slate-300 backdrop-blur-sm">
            Loading AGOM
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.96] sm:text-6xl lg:text-[6.5rem]">
            <span className="block text-white">Preparing</span>
            <span className="mt-2 block bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              the next digital experience
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            We are setting up the interface, motion, and content rhythm so the site opens with the same clarity and polish you expect from the final build.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Strategy", "aligning the structure"],
              ["Design", "composing the visual flow"],
              ["Build", "rendering the experience"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{title}</p>
                <p className="mt-2 text-xs leading-6 uppercase tracking-[0.16em] text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-8 rounded-4xl border border-white/10 bg-white/5 blur-2xl" />
          <div className="relative w-full max-w-136 rounded-4xl border border-white/12 bg-white/6 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-400">Status</p>
                <p className="mt-2 text-lg font-semibold text-white">Building the page</p>
              </div>

              <div className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                Please wait
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-black via-slate-950 to-slate-800 px-6 py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%)]" />
              <div className="relative grid place-items-center text-center">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 rounded-full border border-white/12" />
                  <div className="absolute inset-2 rounded-full border border-white/15" />
                  <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-white border-r-white/70" />
                  <div className="absolute inset-6 rounded-full bg-white/10 blur-sm" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.36em] text-slate-400">Smooth loading</p>
                <p className="mt-2 text-2xl font-semibold text-white">AGOM</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                  Editorial layout, controlled motion, and high-contrast branding are being assembled before the page appears.
                </p>

                <div className="mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-linear-to-r from-white via-slate-200 to-slate-400 animate-[loading-bar_1.8s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Experience</span>
                Calm, smooth, and premium.
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Visual</span>
                Placeholder-first and ready for imagery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}