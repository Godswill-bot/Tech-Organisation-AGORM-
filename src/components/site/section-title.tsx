type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  eyebrowClassName = "text-cyan-300",
  titleClassName = "text-white",
  descriptionClassName = "text-slate-300",
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-xs uppercase tracking-[0.32em] ${eyebrowClassName}`}>{eyebrow}</p>
      <h2 className={`text-hover-accent text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${titleClassName}`}>{title}</h2>
      <p className={`text-hover-soft mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 sm:text-base ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}
