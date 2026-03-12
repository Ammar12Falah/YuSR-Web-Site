"use client";

import { useState } from "react";

// Static demo well log data (synthetic, not from actual wells)
const DEMO_WELLS = [
  {
    name: "Well A — North Sea (Synthetic)",
    depths: Array.from({ length: 20 }, (_, i) => 2000 + i * 5),
    gr: [45, 52, 60, 85, 110, 125, 130, 115, 90, 65, 48, 42, 55, 78, 105, 120, 118, 95, 70, 50],
    resistivity: [12, 10, 8, 3, 1.5, 1.2, 1.0, 2.0, 5, 15, 22, 25, 14, 4, 1.8, 1.3, 1.4, 3.5, 9, 18],
    lithology: ["Sand", "Sand", "Silt", "Shale", "Shale", "Shale", "Shale", "Shale", "Silt", "Sand", "Sand", "Sand", "Silt", "Shale", "Shale", "Shale", "Shale", "Silt", "Sand", "Sand"],
  },
  {
    name: "Well B — Permian Basin (Synthetic)",
    depths: Array.from({ length: 20 }, (_, i) => 3200 + i * 5),
    gr: [30, 35, 40, 50, 95, 130, 135, 125, 80, 45, 32, 28, 35, 60, 100, 128, 132, 110, 65, 38],
    resistivity: [50, 45, 30, 12, 2, 0.8, 0.7, 1.5, 8, 40, 55, 60, 35, 8, 1.5, 0.9, 0.8, 2.5, 15, 48],
    lithology: ["Sand", "Sand", "Sand", "Silt", "Shale", "Shale", "Shale", "Shale", "Silt", "Sand", "Sand", "Sand", "Sand", "Silt", "Shale", "Shale", "Shale", "Silt", "Sand", "Sand"],
  },
];

const LITHO_COLORS: Record<string, string> = {
  Sand: "#e2c87d",
  Silt: "#b8a78a",
  Shale: "#6b7a5e",
};

export function LithoDemo() {
  const [well, setWell] = useState(0);
  const data = DEMO_WELLS[well];
  const maxGr = 150;
  const maxRes = 70;

  return (
    <div className="card">
      <h3 className="font-display text-lg mb-2">Lithology Prediction Viewer</h3>
      <p className="text-sm text-ink-muted mb-5">
        Static demo with synthetic well log data. In production, this connects
        to the LithoGPT inference API.
      </p>
      <div className="flex gap-3 mb-6">
        {DEMO_WELLS.map((w, i) => (
          <button
            key={i}
            onClick={() => setWell(i)}
            className={`text-sm px-4 py-2 rounded-sm border transition-all ${
              well === i
                ? "border-accent bg-accent/5 text-ink"
                : "border-yusr-200 text-ink-muted hover:border-yusr-400"
            }`}
          >
            {w.name.split("—")[0].trim()}
          </button>
        ))}
      </div>

      {/* Well log visualization */}
      <div className="bg-white border border-yusr-200 rounded-sm overflow-hidden">
        <div className="grid grid-cols-[80px_1fr_1fr_60px] border-b border-yusr-200 text-xs font-mono text-ink-muted">
          <div className="px-3 py-2 border-r border-yusr-200">Depth (m)</div>
          <div className="px-3 py-2 border-r border-yusr-200">GR (API)</div>
          <div className="px-3 py-2 border-r border-yusr-200">Res (Ωm)</div>
          <div className="px-3 py-2">Litho</div>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {data.depths.map((d, i) => (
            <div
              key={d}
              className="grid grid-cols-[80px_1fr_1fr_60px] border-b border-yusr-100 last:border-0 text-xs"
            >
              <div className="px-3 py-1.5 font-mono text-ink-muted border-r border-yusr-100">
                {d}
              </div>
              <div className="px-3 py-1.5 border-r border-yusr-100 relative">
                <div
                  className="h-4 rounded-sm bg-accent/30"
                  style={{ width: `${(data.gr[i] / maxGr) * 100}%` }}
                />
                <span className="absolute right-2 top-1.5 font-mono text-ink-muted">
                  {data.gr[i]}
                </span>
              </div>
              <div className="px-3 py-1.5 border-r border-yusr-100 relative">
                <div
                  className="h-4 rounded-sm bg-ink/20"
                  style={{ width: `${Math.min((data.resistivity[i] / maxRes) * 100, 100)}%` }}
                />
                <span className="absolute right-2 top-1.5 font-mono text-ink-muted">
                  {data.resistivity[i]}
                </span>
              </div>
              <div className="px-2 py-1.5 flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: LITHO_COLORS[data.lithology[i]] }}
                />
                <span className="font-mono text-ink-muted truncate">
                  {data.lithology[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-4">
        {Object.entries(LITHO_COLORS).map(([name, color]) => (
          <div key={name} className="flex items-center gap-2 text-xs text-ink-muted">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
