type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.32em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </div>
  );
}
