import { Hero, ProductCard, SectionHeading } from "@/components/Shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YuSR — Applied AI for the Physical World",
};

const PRODUCTS = [
  {
    title: "YuSR Model",
    tagline: "Enterprise language models built for efficiency.",
    description:
      "A family of Mixture-of-Experts language models trained from scratch, designed for high reasoning fidelity on constrained hardware. From 600M to 1.25B parameters with sparse activation for cost-efficient inference.",
    href: "/products/yusr-model",
  },
  {
    title: "LithoGPT",
    tagline: "Subsurface physics, learned as language.",
    description:
      "A decoder-only Transformer that converts continuous geophysical sensor data into discrete token sequences, enabling autoregressive modeling of stratigraphic structure and implicit physical laws.",
    href: "/products/lithogpt",
  },
  {
    title: "Genni",
    tagline: "Your agent operating system.",
    description:
      "A mobile-first AI assistant platform with a multi-agent architecture (Brain, Memory, Soul, Hand), modular app ecosystem, and a ComputeBridge abstraction for flexible deployment.",
    href: "/products/genni",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        tag="Applied AI"
        title="Intelligence grounded in the physical world."
        subtitle="YuSR builds enterprise language models, domain-specific AI systems, and autonomous agent platforms. We combine foundational model research with deep vertical expertise to solve problems that matter."
        cta="Explore Products"
        ctaHref="/products/yusr-model"
        secondaryCta="Contact Sales"
        secondaryHref="/contact"
      />

      {/* Mission */}
      <section className="section-container py-20">
        <div className="max-w-3xl">
          <SectionHeading
            tag="Our Mission"
            title="From first principles to production."
          />
          <p className="body-lg">
            YuSR is an applied AI company that designs and trains language models,
            builds domain-specific intelligence systems for industries like
            energy and geoscience, and ships agent platforms that turn AI into
            autonomous capability. Every product we build is rooted in
            architectural research and optimized for real-world deployment
            constraints.
          </p>
        </div>
      </section>

      <div className="section-container">
        <div className="divider" />
      </div>

      {/* Products */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Products"
          title="Three systems. One coherent stack."
          subtitle="From foundational models to vertical AI to intelligent agents — each product stands alone but compounds when combined."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </section>

      <div className="section-container">
        <div className="divider" />
      </div>

      {/* Research */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Research"
          title="Built on published work."
          subtitle="Our products are grounded in peer-reviewed methods and open research."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <span className="text-xs font-mono text-accent">Architecture</span>
            <h3 className="font-display text-lg mt-2">
              Gated Manifold-Constrained Hyper-Connections
            </h3>
            <p className="text-sm text-ink-muted mt-3 leading-relaxed">
              A mixing mechanism that stabilizes training of ultra-deep hybrid
              networks (120+ layers) by projecting mixing weights onto the
              Birkhoff Polytope with learned per-layer gain recovery. Published
              as an arXiv preprint (Falah & Abdullah, 2025).
            </p>
          </div>
          <div className="card">
            <span className="text-xs font-mono text-accent">Geoscience</span>
            <h3 className="font-display text-lg mt-2">
              Discrete Representation Learning of Subsurface Physics
            </h3>
            <p className="text-sm text-ink-muted mt-3 leading-relaxed">
              A study demonstrating that decoder-only Transformers can learn the
              grammar of physical systems when continuous sensor data is
              quantized into a discrete vocabulary. Trained on the FORCE 2020
              dataset with a 5.2M parameter model achieving 0.91 R² on
              held-out wells.
            </p>
          </div>
        </div>
      </section>

      <div className="section-container">
        <div className="divider" />
      </div>

      {/* Numbers */}
      <section className="section-container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3", label: "Product lines" },
            { value: "1.25B", label: "Max parameters (MoE)" },
            { value: "5.1 GB", label: "Min VRAM for inference" },
            { value: "0.91", label: "R² on held-out wells" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-display text-3xl md:text-4xl text-ink">
                {s.value}
              </span>
              <p className="text-sm text-ink-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
