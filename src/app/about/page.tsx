import { Hero, SectionHeading } from "@/components/Shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — YuSR AI",
  description:
    "YuSR is an applied AI company building enterprise language models, domain-specific AI systems, and autonomous agent platforms.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        tag="About YuSR"
        title="We build intelligence that works."
        subtitle="YuSR is an applied AI company focused on bridging the gap between foundational model research and real-world deployment in industries that matter."
      />

      <section className="section-container py-20">
        <div className="max-w-3xl space-y-8">
          <div>
            <SectionHeading tag="Philosophy" title="First principles, not hype." />
            <p className="body-md">
              We believe the most impactful AI systems are built by people who
              understand both the mathematics of modern architectures and the
              operational reality of the industries they serve. Our work spans
              from Transformer architecture research — publishing novel
              stabilization mechanisms for ultra-deep hybrid networks — to
              shipping production agent platforms that handle real user workflows.
            </p>
          </div>

          <div className="divider" />

          <div>
            <SectionHeading tag="Approach" title="Vertical depth over horizontal breadth." />
            <p className="body-md">
              Rather than building general-purpose AI for every possible
              application, we focus on a coherent product stack: foundational
              models (YuSR Model), domain-specific intelligence (LithoGPT for
              geoscience), and agent orchestration (Genni). Each product is
              designed to stand alone but compounds when combined — a model
              family that powers a domain system that runs inside an agent
              platform.
            </p>
          </div>

          <div className="divider" />

          <div>
            <SectionHeading tag="Research" title="Open by default." />
            <p className="body-md">
              Our research is published on GitHub and arXiv. Model weights are
              available on Hugging Face. We believe that transparency builds
              trust and that open research accelerates the entire field. Our
              published work includes Gated Manifold-Constrained
              Hyper-Connections for ultra-deep hybrid network training, and
              discrete representation learning for subsurface physics.
            </p>
          </div>

          <div className="divider" />

          <div>
            <SectionHeading tag="Team" title="Built by practitioners." />
            <p className="body-md">
              YuSR was founded by researchers and engineers with backgrounds in
              geoscience, machine learning, and systems engineering. We combine
              deep domain expertise in subsurface physics and petrophysics with
              hands-on experience in training and deploying language models at
              scale.
            </p>
          </div>
        </div>
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Timeline */}
      <section className="section-container py-20">
        <SectionHeading tag="Milestones" title="Our journey." />
        <div className="max-w-2xl space-y-8">
          {[
            {
              date: "2025 Q1",
              title: "YuSR Model — Phase 1 Training",
              desc: "Published yusr-600m-phase1 dense model and yusr-1.25b on Hugging Face.",
            },
            {
              date: "2025 Q1",
              title: "Gated-mHC Paper",
              desc: "Released preprint on stable training of ultra-deep hybrid networks via Gated Manifold-Constrained Mixing.",
            },
            {
              date: "2025 Q1",
              title: "LithoGPT Research",
              desc: "Published LithoGPT: discrete representation learning of subsurface physics on GitHub.",
            },
            {
              date: "2025 Q1",
              title: "Edge-Math-7B",
              desc: "Deployed optimized math reasoning engine achieving 66.7% accuracy on GSM8K with 5.1GB VRAM.",
            },
            {
              date: "2025 Q1",
              title: "YuSR Model — MoE Phase 2",
              desc: "Published yusr-1b-moe-phase2 with Mixture-of-Experts upcycling.",
            },
            {
              date: "2025 Q1",
              title: "Genni — Agent OS",
              desc: "Launched DGenni-AOS on Hugging Face Spaces with multi-agent architecture and ComputeBridge.",
            },
          ].map((m, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1" />
                {i < 5 && <span className="w-px flex-1 bg-yusr-200 mt-2" />}
              </div>
              <div className="pb-2">
                <span className="text-xs font-mono text-accent">{m.date}</span>
                <h3 className="font-display text-lg mt-1">{m.title}</h3>
                <p className="text-sm text-ink-muted mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
