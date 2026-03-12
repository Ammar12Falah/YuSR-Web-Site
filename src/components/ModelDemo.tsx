"use client";

import { useState } from "react";

const EXAMPLES = [
  {
    prompt: "Explain the concept of Mixture-of-Experts routing in one paragraph.",
    response:
      "Mixture-of-Experts (MoE) is an architecture paradigm where a model maintains multiple specialized sub-networks (\"experts\"), each trained to handle distinct patterns in the input space. A gating network dynamically routes each input token to the top-k most relevant experts, enabling the model to scale total parameter count without proportionally increasing inference cost. This sparse activation pattern means that for any given forward pass, only a fraction of the model's weights are active — achieving capacity comparable to much larger dense models while keeping FLOPs manageable.",
  },
  {
    prompt: "What is Gated Manifold-Constrained Hyper-Connection?",
    response:
      "Gated-mHC is a stabilization mechanism for ultra-deep hybrid networks that combines convolutional and attention layers. It projects mixing weights onto the Birkhoff Polytope using Sinkhorn iterations to enforce doubly stochastic constraints, then applies a learned per-layer scalar gain (γ) to recover signal energy lost during convex mixing. This prevents gradient anisotropy and enables convergence at extreme depths (120+ layers) where standard residual hybrids typically diverge.",
  },
  {
    prompt: "How does vector quantization convert sensor data to tokens?",
    response:
      "Vector quantization maps continuous multi-dimensional sensor readings onto a discrete codebook learned via K-Means clustering on the training manifold. Each sensor measurement x_t is assigned to its nearest centroid, producing a token ID z_t that represents a learned lithofacies category. This converts physics into a vocabulary that autoregressive language models can operate on — enabling sequence-level reasoning over geological structure.",
  },
];

export function ModelDemo() {
  const [selected, setSelected] = useState(0);
  const [typing, setTyping] = useState(false);
  const [display, setDisplay] = useState("");

  function handleRun(idx: number) {
    setSelected(idx);
    setTyping(true);
    setDisplay("");
    const text = EXAMPLES[idx].response;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 12);
  }

  return (
    <div className="card">
      <h3 className="font-display text-lg mb-4">Prompt Simulator</h3>
      <p className="text-sm text-ink-muted mb-5">
        Select an example prompt to see a simulated YuSR Model response.
        This is a read-only demo with static content.
      </p>
      <div className="space-y-2 mb-6">
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            onClick={() => handleRun(i)}
            disabled={typing}
            className={`w-full text-left px-4 py-3 rounded-sm border text-sm transition-all ${
              selected === i
                ? "border-accent bg-accent/5 text-ink"
                : "border-yusr-200 text-ink-muted hover:border-yusr-400"
            } ${typing ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            <span className="font-mono text-xs text-accent mr-2">▸</span>
            {ex.prompt}
          </button>
        ))}
      </div>
      <div className="bg-ink rounded-sm p-5 min-h-[120px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-mono text-yusr-400">
            yusr-1b-moe — response
          </span>
        </div>
        <p className="font-mono text-sm text-yusr-200 leading-relaxed whitespace-pre-wrap">
          {display || "Select a prompt above to run."}
          {typing && <span className="inline-block w-1.5 h-4 bg-accent ml-0.5 animate-pulse" />}
        </p>
      </div>
    </div>
  );
}
