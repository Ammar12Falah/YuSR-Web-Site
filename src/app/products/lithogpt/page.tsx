import {
  Hero,
  FeatureGrid,
  SectionHeading,
  Checklist,
  ApiEndpoint,
} from "@/components/Shared";
import { LithoDemo } from "@/components/LithoDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LithoGPT — AI for Subsurface Physics | YuSR",
  description:
    "A decoder-only Transformer that learns the grammar of geological systems from discretized sensor data. Trained on the FORCE 2020 dataset.",
};

const FEATURES = [
  {
    title: "Physics-as-Language",
    description:
      "Continuous sensor data (GR, Resistivity, Neutron, Density) is discretized into a vocabulary of 1,000 tokens via K-Means vector quantization, enabling autoregressive modeling.",
    icon: "◆",
  },
  {
    title: "5.2M Parameter Transformer",
    description:
      "A compact decoder-only architecture trained to model non-Markovian stratigraphy — capturing long-range depositional dependencies that exceed RNN memory.",
    icon: "◆",
  },
  {
    title: "Emergent Physical Laws",
    description:
      "The model implicitly learns relationships like Archie's Law (Sw = f(φ, Rt)), generating high-resistivity spikes in clean sands to simulate hydrocarbon saturation.",
    icon: "◆",
  },
  {
    title: "FORCE 2020 Training Data",
    description:
      "Trained on the FORCE 2020 machine learning benchmark dataset with quad-combo completeness filtering and physics-informed Gaussian noise augmentation.",
    icon: "◆",
  },
  {
    title: "Strong Baselines",
    description:
      "Achieves 0.91 R² and 4.1 RMSE on resistivity prediction across held-out wells, outperforming linear interpolation (0.62 R²) and Random Forest (0.74 R²) baselines.",
    icon: "◆",
  },
  {
    title: "Hierarchical Structure Modeling",
    description:
      "Self-attention captures the fractal hierarchy of sedimentary sequences — from individual beds to members to formations.",
    icon: "◆",
  },
  {
    title: "Stochastic Generation",
    description:
      "Generates multiple plausible stratigraphic realizations from the same initial conditions, supporting uncertainty quantification workflows.",
    icon: "◆",
  },
  {
    title: "Known Limitations",
    description:
      "Documented failure modes include carbonate/sandstone confusion at overlapping density signatures, thin bed averaging (<0.5m), and out-of-distribution volcanic lithologies.",
    icon: "◆",
  },
  {
    title: "Open Research Artifact",
    description:
      "Full model code, baselines, and research figures published under MIT license on GitHub for reproducibility and extension.",
    icon: "◆",
  },
];

const CHECKLIST = [
  "Prepare well log data in LAS or CSV format (GR, Resistivity, Neutron, Density channels required)",
  "Install Python 3.8+ with PyTorch and scikit-learn dependencies",
  "Clone the LithoGPT repository and install requirements",
  "Run the tokenizer to discretize sensor data using the pre-trained codebook (k=1000)",
  "Execute inference using the pre-trained checkpoint or fine-tune on customer data",
  "Validate predictions against known lithology columns from core data",
  "Export results to standard petrophysical interpretation formats",
  "Integrate prediction pipeline into existing geomodeling workflows",
];

export default function LithoGPTPage() {
  return (
    <>
      <Hero
        tag="LithoGPT"
        title="Subsurface physics, learned as language."
        subtitle="A decoder-only Transformer that converts continuous geophysical sensor data into discrete sequences, enabling autoregressive modeling of stratigraphic structure and implicit physical laws."
        cta="Request Demo"
        ctaHref="/contact"
        secondaryCta="View on GitHub"
        secondaryHref="https://github.com/Ammar12Falah/LithoGPT"
      />

      {/* Technical Summary */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Technical Overview"
          title="Discrete representation learning for geoscience."
        />
        <div className="max-w-3xl space-y-5">
          <p className="body-md">
            LithoGPT is a 5.2M parameter decoder-only Transformer designed to
            learn the structural grammar of subsurface geology. The model
            operates on a discrete representation of continuous well log data:
            multi-dimensional sensor measurements (Gamma Ray, Resistivity,
            Neutron Porosity, Bulk Density) are quantized into a codebook of
            1,000 tokens via K-Means vector quantization. This converts the
            physics of rock formations into a sequential vocabulary that
            autoregressive language modeling can operate on directly.
          </p>
          <p className="body-md">
            Trained on the FORCE 2020 machine learning benchmark dataset with a
            strict physics pipeline — including quad-combo completeness filtering
            (rejecting ~40% of incomplete data) and physics-informed Gaussian
            noise augmentation (10× oversampling) — LithoGPT captures
            non-Markovian depositional sequences, hierarchical sedimentary
            structure, and implicit physical laws such as Archie&apos;s equation,
            without any domain-specific hard-coding.
          </p>
        </div>
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Marketing Summary */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Why LithoGPT"
          title="AI that speaks the language of rocks."
        />
        <p className="body-lg max-w-3xl">
          Subsurface characterization is one of the most data-rich and
          interpretation-heavy workflows in energy exploration. LithoGPT
          transforms this process by bringing the pattern-recognition power of
          modern language models to geophysical data — generating lithology
          predictions, stratigraphic models, and uncertainty estimates that
          would traditionally require weeks of specialist interpretation. For
          exploration teams, reservoir engineers, and geoscience consultancies,
          this means faster well-to-model cycles and more consistent
          interpretation quality across assets.
        </p>
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Features */}
      <section className="section-container py-20">
        <SectionHeading tag="Capabilities" title="Key features." />
        <FeatureGrid features={FEATURES} />
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Demo */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Interactive Demo"
          title="Lithology prediction viewer."
          subtitle="Explore synthetic well log data with predicted lithology classifications. In production, this connects to the LithoGPT inference API."
        />
        <LithoDemo />
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Integration */}
      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading tag="Deployment" title="Integration checklist." />
            <Checklist items={CHECKLIST} />
          </div>
          <div>
            <SectionHeading tag="API" title="Suggested endpoints." />
            <div className="card">
              <ApiEndpoint
                method="POST"
                path="/v1/tokenize"
                description="Convert raw well log data (LAS/CSV) into discrete token sequences using the pre-trained codebook."
              />
              <ApiEndpoint
                method="POST"
                path="/v1/predict"
                description="Generate lithology predictions and log reconstructions from tokenized input sequences."
              />
              <ApiEndpoint
                method="POST"
                path="/v1/generate"
                description="Produce multiple stochastic stratigraphic realizations for uncertainty quantification."
              />
              <ApiEndpoint
                method="GET"
                path="/v1/codebook"
                description="Retrieve the discrete codebook centroids and associated lithofacies labels."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
