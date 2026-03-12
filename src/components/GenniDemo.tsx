"use client";

import { useState } from "react";

const AGENTS = [
  {
    id: "brain",
    name: "Brain",
    role: "Reasoning & Planning",
    status: "active",
    description: "Orchestrates task decomposition and coordinates agent handoffs via ReAct loop.",
    messages: 12,
  },
  {
    id: "memory",
    name: "Memory",
    role: "Context Persistence",
    status: "active",
    description: "Manages SQLite-backed conversation history and semantic retrieval across sessions.",
    messages: 8,
  },
  {
    id: "soul",
    name: "Soul",
    role: "Emotional Intelligence",
    status: "idle",
    description: "Evaluates user sentiment and adjusts response tone for appropriate engagement.",
    messages: 3,
  },
  {
    id: "hand",
    name: "Hand",
    role: "Tool Execution",
    status: "active",
    description: "Executes registered app actions, API calls, and external integrations.",
    messages: 15,
  },
];

const APPS = [
  { name: "Calendar", status: "connected", icon: "📅" },
  { name: "Document AI", status: "connected", icon: "📄" },
  { name: "Code Review", status: "available", icon: "🔍" },
  { name: "Email", status: "available", icon: "✉️" },
  { name: "Analytics", status: "coming", icon: "📊" },
];

const STATUS_DOT: Record<string, string> = {
  active: "bg-green-500",
  idle: "bg-yusr-400",
  error: "bg-red-500",
};

const APP_STATUS: Record<string, string> = {
  connected: "text-green-700 bg-green-50 border-green-200",
  available: "text-ink-muted bg-yusr-50 border-yusr-200",
  coming: "text-yusr-400 bg-yusr-50 border-yusr-100",
};

export function GenниDemo() {
  const [selected, setSelected] = useState<string | null>("brain");
  const sel = AGENTS.find((a) => a.id === selected);

  return (
    <div className="card">
      <h3 className="font-display text-lg mb-2">Agent Orchestration Dashboard</h3>
      <p className="text-sm text-ink-muted mb-6">
        Interactive stub showing Genni&apos;s multi-agent architecture. Static demo data.
      </p>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
        {/* Agent list */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Active Agents
          </span>
          {AGENTS.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelected(a.id)}
              className={`w-full text-left px-4 py-3 rounded-sm border text-sm transition-all ${
                selected === a.id
                  ? "border-accent bg-accent/5"
                  : "border-yusr-200 hover:border-yusr-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${STATUS_DOT[a.status]}`} />
                  <span className="font-medium text-ink">{a.name}</span>
                </div>
                <span className="text-xs font-mono text-ink-muted">
                  {a.messages} msgs
                </span>
              </div>
              <span className="text-xs text-ink-muted ml-4">{a.role}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div>
          {sel ? (
            <div className="bg-ink rounded-sm p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${STATUS_DOT[sel.status]}`} />
                <span className="font-mono text-sm text-yusr-200">
                  {sel.name} — {sel.role}
                </span>
              </div>
              <p className="text-sm text-yusr-300 leading-relaxed mb-6">
                {sel.description}
              </p>
              <div className="border-t border-yusr-800 pt-4">
                <span className="text-xs font-mono text-yusr-500">
                  Lifecycle: init → ready → {sel.status}
                </span>
                <div className="mt-3 flex gap-2">
                  <span className="text-xs font-mono px-2 py-1 rounded-sm bg-yusr-900 text-yusr-400">
                    compute: direct
                  </span>
                  <span className="text-xs font-mono px-2 py-1 rounded-sm bg-yusr-900 text-yusr-400">
                    model: cascade
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-yusr-100 rounded-sm p-5 h-full flex items-center justify-center text-sm text-ink-muted">
              Select an agent to view details
            </div>
          )}
        </div>
      </div>

      {/* App ecosystem */}
      <div className="mt-8 pt-6 border-t border-yusr-200">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted block mb-4">
          App Ecosystem
        </span>
        <div className="flex flex-wrap gap-3">
          {APPS.map((app) => (
            <div
              key={app.name}
              className={`flex items-center gap-2 px-3 py-2 border rounded-sm text-sm ${APP_STATUS[app.status]}`}
            >
              <span>{app.icon}</span>
              <span>{app.name}</span>
              <span className="text-xs opacity-60">
                {app.status === "connected"
                  ? "●"
                  : app.status === "available"
                  ? "○"
                  : "◌"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
