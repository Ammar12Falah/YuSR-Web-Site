import Link from "next/link";

const LINKS = {
  Products: [
    { label: "YuSR Model", href: "/products/yusr-model" },
    { label: "LithoGPT", href: "/products/lithogpt" },
    { label: "Genni (Agent OS)", href: "/products/genni" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Research: [
    { label: "GitHub", href: "https://github.com/Ammar12Falah" },
    { label: "Hugging Face", href: "https://huggingface.co/Ammar12Falah" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-yusr-200 mt-24">
      <div className="section-container py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-xl tracking-tight text-ink">
            Yu<span className="text-accent">SR</span>
          </span>
          <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-xs">
            Applied AI for the physical world. Enterprise models, domain
            intelligence, and autonomous agents.
          </p>
        </div>
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {items.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-container pb-8">
        <div className="divider mb-6" />
        <p className="text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} YuSR AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
