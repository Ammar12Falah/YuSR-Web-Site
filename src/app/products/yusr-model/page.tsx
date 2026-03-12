import {
  Hero,
  FeatureGrid,
  SectionHeading,
  Checklist,
  ApiEndpoint,
} from "@/components/Shared";
import { ModelDemo } from "@/components/ModelDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YuSR Model — Enterprise Language Models | YuSR",
  description:
    "A family of Mixture-of-Experts language models trained from scratch for high reasoning fidelity on constrained hardware.",
};

const FEATURES = [
  {
    title: "Mixture-of-Experts Architecture",
    description:
      "Sparse activation across multiple expert sub-networks enables scaling total capacity without proportionally increasing inference cost.",
    icon: "◆",
  },
  {
    title: "Multi-Phase Training Pipeline",
    description:
      "Models progress through sequential training phases — from dense pre-training (Phase 1) to MoE upcycling (Phase 2) — for stable convergence.",
    icon: "◆",
  },
  {
    title: "Gated-mHC Stabilization",
    description:
      "Proprietary Gated Manifold-Constrained Hyper-Connections enable stable training of deep hybrid layers at extreme depth (120+).",
    icon: "◆",
  },
  {
    title: "Edge-Optimized Inference",
    description:
      "4-bit NF4 quantization support enables deployment on consumer hardware (T4, RTX 3060) with as little as 5.1 GB VRAM.",
    icon: "◆",
  },
  {
    title: "Self-Consistency Decoding",
    description:
      "Multi-path temperature-ramped decoding with majority-vote consensus improves reasoning stability under quantization noise.",
    icon: "◆",
  },
  {
    title: "Model Family",
    description:
      "Available in multiple configurations: yusr-600m-phase1 (dense), yusr-1.25b (dense), and yusr-1b-moe-phase2 (MoE), all on Hugging Face.",
    icon: "◆",
  },
  {
    title: "Domain Adaptable",
    description:
      "Architecture supports LoRA adapters and full fine-tuning for domain-specific deployment (energy, legal, finance).",
    icon: "◆",
  },
  {
    title: "Open Weights",
    description:
      "Model checkpoints are published on Hugging Face under permissive licensing for research and enterprise evaluation.",
    icon: "◆",
  },
];

const CHECKLIST = [
  "Provision compute environment with CUDA 11.8+ and PyTorch 2.0+",
  "Download model weights from Hugging Face (Ammar12Falah/yusr-1b-moe-phase2)",
  "Install dependencies: transformers, bitsandbytes, accelerate",
  "Configure quantization settings (NF4 recommended for edge deployment)",
  "Integrate via Hugging Face pipeline or custom inference loop",
  "Validate outputs against domain-specific evaluation benchmarks",
  "Set up monitoring for inference latency and memory utilization",
  "Deploy behind API gateway with rate limiting and authentication",
];

export default function YusrModelPage() {
  return (
    <>
      <Hero
        tag="YuSR Model"
        title="Language models built for the real world."
        subtitle="A family of Mixture-of-Experts models trained from scratch — designed for high reasoning fidelity, efficient sparse inference, and deployment on constrained hardware."
        cta="Request Access"
        ctaHref="/contact"
        secondaryCta="View on Hugging Face"
        secondaryHref="https://huggingface.co/Ammar12Falah"
      />

      {/* Technical Summary */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Technical Overview"
          title="Architecture and training methodology."
        />
        <div className="max-w-3xl space-y-5">
          <p className="body-md">
            YuSR Model is a family of decoder-only Transformer language models
            that employ a Mixture-of-Experts (MoE) architecture for efficient
            scaling. The training pipeline follows a multi-phase approach: an
            initial dense pre-training phase (yusr-600m-phase1) followed by MoE
            upcycling (yusr-1b-moe-phase2) where specialized expert
            sub-networks are introduced and trained with sparse gating. The
            architecture incorporates Gated Manifold-Constrained
            Hyper-Connections (Gated-mHC) to stabilize gradient flow across deep
            hybrid layers, enabling convergence at extreme depths where standard
            residual approaches diverge.
          </p>
          <p className="body-md">
            Inference is optimized for edge deployment through 4-bit NF4
            quantization via bitsandbytes, reducing VRAM requirements from
            14.2 GB to 5.1 GB while maintaining reasoning fidelity through an
            inference-time self-consistency pipeline with temperature-ramped
            multi-path decoding and majority-vote consensus.
          </p>
        </div>
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Marketing Summary */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Why YuSR Model"
          title="Enterprise intelligence without enterprise infrastructure."
        />
        <p className="body-lg max-w-3xl">
          YuSR Model delivers frontier-class reasoning on hardware your
          organization already owns. By combining sparse expert routing with
          aggressive quantization, we offer models that are simultaneously
          powerful and deployable — no cluster required. Whether you need
          on-premise inference for data-sensitive industries or cost-efficient
          cloud deployment, the YuSR family scales to your constraints, not the
          other way around.
        </p>
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Features */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Capabilities"
          title="Key features."
        />
        <FeatureGrid features={FEATURES} />
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Demo */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Interactive Demo"
          title="Try it."
          subtitle="A read-only prompt simulator demonstrating YuSR Model response patterns. Static content — not connected to live inference."
        />
        <ModelDemo />
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Integration */}
      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              tag="Deployment"
              title="Integration checklist."
            />
            <Checklist items={CHECKLIST} />
          </div>
          <div>
            <SectionHeading
              tag="API"
              title="Suggested endpoints."
            />
            <div className="card">
              <ApiEndpoint
                method="POST"
                path="/v1/completions"
                description="Generate text completions with configurable temperature, top-k, and max tokens."
              />
              <ApiEndpoint
                method="POST"
                path="/v1/embeddings"
                description="Extract dense vector representations for semantic search and retrieval."
              />
              <ApiEndpoint
                method="GET"
                path="/v1/models"
                description="List available model variants, quantization levels, and metadata."
              />
              <ApiEndpoint
                method="POST"
                path="/v1/evaluate"
                description="Run benchmark evaluation on a provided test set and return metrics."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
