# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/narraalsava-oss/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/narraalsava-oss/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One day's world news in one image: a front page for Thursday 26 November 2026 with 35 dated stories across 9 regions and 15 fields, drawn in code as a single 1024x1024 image. It names its day in a large masthead date, leads with the day's three biggest stories — the EU's €1.7tn budget fight in Brussels, Russia striking Kyiv as Ukraine hits two refineries, and Houthi strikes on Saudi ports with tankers reported mined off Oman — lists the rest across a story grid and an "also on" index, and closes with a date check stating that every story happened or was first reported on 26 November 2026 (UTC). Each story carries its source and a verification badge (confirmed / official / reported / claim). `main.ts` (Node, standard library only) copies `entry.png` byte for byte to the output directory, so the judge sees exactly the image this repository holds. The copy is deterministic: no network, no randomness, no timestamps — running it twice produces identical bytes.

See the bounty: https://make.fun/bounty/news-image-20261126

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Entered on [make.fun](https://make.fun/?ref=gfeqjfrp&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards
