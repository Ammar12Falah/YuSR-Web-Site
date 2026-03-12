import Link from "next/link";

/* ─── Hero ─── */
export function Hero({
  tag,
  title,
  subtitle,
  cta,
  ctaHref = "/contact",
  secondaryCta,
  secondaryHref,
}: {
  tag?: string;
  title: string;
  subtitle: string;
  cta?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden noise-bg">
      <div className="section-container pt-20 pb-24 md:pt-28 md:pb-32 relative z-10">
        {tag && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5 opacity-0 animate-fade-in">
            {tag}
          </span>
        )}
        <h1 className="heading-xl max-w-3xl opacity-0 animate-slide-up">
          {title}
        </h1>
        <p className="body-lg max-w-2xl mt-6 opacity-0 animate-slide-up stagger-2">
          {subtitle}
        </p>
        {(cta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-slide-up stagger-3">
            {cta && (
              <Link
                href={ctaHref}
                className="inline-flex items-center px-7 py-3 bg-ink text-sand text-sm font-medium rounded-sm hover:bg-ink-light transition-colors"
              >
                {cta}
              </Link>
            )}
            {secondaryCta && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center px-7 py-3 border border-yusr-300 text-ink text-sm font-medium rounded-sm hover:bg-yusr-100 transition-colors"
              >
                {secondaryCta}
              </Link>
            )}
          </div>
        )}
      </div>
      {/* Decorative line */}
      <div className="absolute bottom-0 left-6 lg:left-8 right-6 lg:right-8 h-px bg-yusr-200 animate-draw-line" />
    </section>
  );
}

/* ─── Feature Grid ─── */
export function FeatureGrid({
  features,
}: {
  features: { title: string; description: string; icon?: string }[];
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={f.title} className={`card opacity-0 animate-slide-up stagger-${(i % 6) + 1}`}>
          {f.icon && (
            <span className="text-2xl mb-3 block">{f.icon}</span>
          )}
          <h3 className="font-display text-lg mb-2 text-ink">{f.title}</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── Section Heading ─── */
export function SectionHeading({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      {tag && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-3">
          {tag}
        </span>
      )}
      <h2 className="heading-lg">{title}</h2>
      {subtitle && <p className="body-md mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

/* ─── Product Card (for homepage) ─── */
export function ProductCard({
  title,
  tagline,
  description,
  href,
  index,
}: {
  title: string;
  tagline: string;
  description: string;
  href: string;
  index: number;
}) {
  return (
    <Link href={href} className="group block">
      <article className={`card hover:border-yusr-400 transition-all duration-300 opacity-0 animate-slide-up stagger-${index + 1}`}>
        <span className="text-xs font-mono text-accent tracking-wide">
          0{index + 1}
        </span>
        <h3 className="heading-md mt-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-ink-muted mt-1 italic">{tagline}</p>
        <p className="body-md mt-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-ink mt-6 group-hover:text-accent transition-colors">
          Learn more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </article>
    </Link>
  );
}

/* ─── Checklist ─── */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
          <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8.5l3.5 3.5L13 5" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── API Endpoint Block ─── */
export function ApiEndpoint({
  method,
  path,
  description,
}: {
  method: string;
  path: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-yusr-200 last:border-0">
      <span className="font-mono text-xs font-bold bg-ink text-sand px-2.5 py-1 rounded-sm flex-shrink-0 mt-0.5">
        {method}
      </span>
      <div>
        <code className="font-mono text-sm text-ink">{path}</code>
        <p className="text-sm text-ink-muted mt-1">{description}</p>
      </div>
    </div>
  );
}
