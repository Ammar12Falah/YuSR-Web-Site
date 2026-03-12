import {
  Hero,
  FeatureGrid,
  SectionHeading,
  Checklist,
  ApiEndpoint,
} from "@/components/Shared";
import { GenниDemo } from "@/components/GenniDemo";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genni — Agent Operating System | YuSR",
  description:
    "A mobile-first AI assistant platform with multi-agent architecture, modular app ecosystem, and flexible compute deployment.",
};

const FEATURES = [
  {
    title: "Multi-Agent Architecture",
    description:
      "Four specialized agents — Brain (reasoning), Memory (persistence), Soul (emotional intelligence), and Hand (tool execution) — coordinate through a ReAct loop for complex task completion.",
    icon: "◆",
  },
  {
    title: "ComputeBridge Abstraction",
    description:
      "A unified bridge.send() interface supporting Direct and Cloud compute modes, enabling seamless switching between on-device and remote inference.",
    icon: "◆",
  },
  {
    title: "Modular App Ecosystem",
    description:
      "A decorator-based plugin system (@register_app) with a GenniApp abstract base class, enabling third-party developers to extend platform capabilities.",
    icon: "◆",
  },
  {
    title: "Template Gallery",
    description:
      "Pre-built agent personality templates for cold-start onboarding, allowing users to deploy specialized assistants immediately.",
    icon: "◆",
  },
  {
    title: "Multi-Model Cascade",
    description:
      "Intelligent routing across multiple LLM providers with automatic fallback, optimizing for quality and cost per interaction.",
    icon: "◆",
  },
  {
    title: "SQLite Persistence",
    description:
      "Conversation history, user preferences, and agent state are persisted locally with SQLite for offline-capable operation.",
    icon: "◆",
  },
  {
    title: "Mobile-First Design",
    description:
      "Built with React Native and Expo for cross-platform deployment on iOS and Android, with a web frontend via Expo Snack.",
    icon: "◆",
  },
  {
    title: "FastAPI Backend",
    description:
      "Server infrastructure built on FastAPI with WebSocket streaming for real-time agent responses, deployable on Hugging Face Spaces.",
    icon: "◆",
  },
  {
    title: "Emotional Intelligence",
    description:
      "The Soul agent evaluates user sentiment and adjusts response tone, providing contextually appropriate engagement.",
    icon: "◆",
  },
  {
    title: "Honest-by-Default",
    description:
      "Designed to challenge users rather than flatter them — providing honest feedback, learning from failures, and maintaining intellectual integrity.",
    icon: "◆",
  },
];

const CHECKLIST = [
  "Set up a FastAPI server instance (Hugging Face Spaces or self-hosted)",
  "Configure LLM provider API keys in environment variables",
  "Select compute mode: Direct (on-device) or Cloud (remote inference)",
  "Deploy the React Native frontend via Expo for mobile or web access",
  "Register custom apps using the @register_app decorator pattern",
  "Configure Template Gallery with domain-specific agent personalities",
  "Set up SQLite database path for conversation persistence",
  "Enable WebSocket streaming for real-time response delivery",
  "Test multi-agent handoff workflow (Brain → Hand → Memory cycle)",
  "Monitor agent activity through the built-in dashboard",
];

export default function GenniPage() {
  return (
    <>
      <Hero
        tag="Genni — Agent OS"
        title="Your AI, your way."
        subtitle="A mobile-first agent operating system with a multi-agent architecture, modular app ecosystem, and flexible compute — designed for people who want an AI that challenges them, not flatters them."
        cta="Request Early Access"
        ctaHref="/contact"
        secondaryCta="View on Hugging Face"
        secondaryHref="https://huggingface.co/spaces/Ammar12Falah/DGenni-AOS"
      />

      {/* Genni Image Placeholder */}
      <section className="section-container py-12">
        <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] bg-yusr-100 border border-yusr-200 rounded-sm overflow-hidden flex items-center justify-center">
          {/*
            GENNI IMAGE PLACEHOLDER
            ========================
            To replace this placeholder:
            1. Add your Genni image to: public/images/genni-hero.png
            2. Uncomment the <Image> tag below and remove the placeholder div.

            The image will automatically be used once the file exists at the path.
          */}
          {/* <Image
            src="/images/genni-hero.png"
            alt="Genni — Agent Operating System interface"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="text-center p-8">
            <span className="text-xs font-mono text-accent block mb-2">
              genni-hero.png
            </span>
            <p className="text-sm text-ink-muted">
              Upload your Genni image to{" "}
              <code className="font-mono text-xs bg-sand-warm px-1.5 py-0.5 rounded">
                public/images/genni-hero.png
              </code>{" "}
              to replace this placeholder.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Technical Overview"
          title="Multi-agent architecture for intelligent orchestration."
        />
        <div className="max-w-3xl space-y-5">
          <p className="body-md">
            Genni is a mobile-first AI assistant platform built on a multi-agent
            architecture where four specialized components — Brain (reasoning and
            planning via ReAct loop), Memory (SQLite-backed context persistence),
            Soul (emotional intelligence and tone calibration), and Hand (tool
            execution and API integration) — collaborate to handle complex,
            multi-step tasks. The system uses a ComputeBridge abstraction that
            provides a unified <code className="font-mono text-sm">bridge.send()</code> interface
            across Direct (on-device) and Cloud (remote) compute modes, enabling
            flexible deployment without code changes.
          </p>
          <p className="body-md">
            The frontend is built with React Native and Expo for cross-platform
            mobile deployment, while the backend runs on FastAPI with WebSocket
            streaming for real-time agent responses. A modular app ecosystem
            powered by the <code className="font-mono text-sm">@register_app</code> decorator
            pattern and GenniApp abstract base class allows third-party
            developers to extend the platform. The system is deployable on
            Hugging Face Spaces and supports a multi-model cascade with
            automatic provider fallback.
          </p>
        </div>
      </section>

      <div className="section-container"><div className="divider" /></div>

      {/* Marketing Summary */}
      <section className="section-container py-20">
        <SectionHeading
          tag="Why Genni"
          title="An assistant that grows with you."
        />
        <p className="body-lg max-w-3xl">
          Most AI assistants are designed to be agreeable. Genni is designed to
          be useful. Built from the ground up as an agent operating system,
          Genni doesn&apos;t just answer questions — it plans, remembers, executes,
          and adapts. Its modular app ecosystem means your assistant becomes
          more capable over time as new integrations are added. Whether
          you&apos;re managing appointments, reviewing documents, or orchestrating
          complex workflows, Genni treats every interaction as an opportunity
          to deliver genuine value.
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
          title="Agent orchestration dashboard."
          subtitle="Explore Genni's multi-agent architecture and app ecosystem. This is a static demo — not connected to live agents."
        />
        <GenниDemo />
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
                path="/v1/agent/send"
                description="Send a message to the Genni agent pipeline. Returns streamed response via WebSocket."
              />
              <ApiEndpoint
                method="GET"
                path="/v1/agent/status"
                description="Retrieve current status of all active agents (Brain, Memory, Soul, Hand)."
              />
              <ApiEndpoint
                method="POST"
                path="/v1/apps/register"
                description="Register a new app module with the Genni ecosystem."
              />
              <ApiEndpoint
                method="GET"
                path="/v1/templates"
                description="List available agent personality templates from the Template Gallery."
              />
              <ApiEndpoint
                method="POST"
                path="/v1/bridge/configure"
                description="Switch between Direct and Cloud compute modes at runtime."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
