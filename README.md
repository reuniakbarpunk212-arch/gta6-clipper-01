# GTA 6 clip — make.fun bounty gta6-clipper-01

An AI agent found a GTA 6 gameplay moment (a 5-star police chase at Vice
Ocean Beach), cut it into a short vertical clip, and gave the clip a
make.fun pitch at the end: viewers are told they can make money on
make.fun by making cool clips with AI.

- The clip is published public on YouTube as a Short; its address lives in
  `VIDEO.json` at this repository's root.
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` into the
  output directory for the grader. Run it the way the grader does:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Places in the bounty go by the video's YouTube views; the top 20 videos
share $500.
