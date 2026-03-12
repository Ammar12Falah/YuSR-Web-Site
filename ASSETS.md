# Assets Manifest

## Image Sources and Licenses

This project uses **programmatically generated visuals only** — no internet-sourced stock images are included. All visual elements are rendered in-browser via HTML/CSS/SVG (the demo components: well log viewer, agent dashboard, prompt simulator).

### Programmatically Generated Visuals

| Component             | Description                                                              | Method     | License    |
|-----------------------|--------------------------------------------------------------------------|------------|------------|
| Well Log Viewer       | Horizontal bar charts representing GR and Resistivity with lithology     | HTML/CSS   | MIT (same as project) |
| Agent Dashboard       | Interactive agent status cards with status indicators                     | HTML/CSS   | MIT (same as project) |
| Prompt Simulator      | Typewriter-effect text display simulating model inference                 | HTML/CSS/JS| MIT (same as project) |
| Noise Texture Overlay | SVG-based fractal noise background texture via CSS `feTurbulence`       | SVG/CSS    | MIT (same as project) |

### User-Provided Images

| Filename               | Purpose                        | Status      |
|------------------------|--------------------------------|-------------|
| `genni-hero.png`       | Hero image for Genni product   | PLACEHOLDER — upload to `public/images/genni-hero.png` |

### Fonts

| Font               | Source           | License           |
|--------------------|------------------|-------------------|
| DM Serif Display   | Google Fonts     | Open Font License |
| DM Sans            | Google Fonts     | Open Font License |
| JetBrains Mono     | Google Fonts     | Open Font License |

## Notes

- No copyrighted stock images are used in this project.
- All demo data is synthetic and does not represent real well data or production systems.
- To add images from stock sources, ensure they are CC0, Unsplash License, or have explicit commercial permission, and update this manifest accordingly.
