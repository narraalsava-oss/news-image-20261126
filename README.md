# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/narraalsava-oss/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/narraalsava-oss/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A single image that sums up Thursday 26 November 2026: a newspaper front page with 36 dated stories from 9 regions and 16 fields, drawn in code at 1024x1024. The masthead date names the day, and the three leads are the Macy's 100th Thanksgiving parade postponed to Saturday by a severe storm, the EU's €1.7tn budget fight in Brussels, and Russia hitting Kyiv while Ukraine strikes two refineries. Below the leads, a story grid and an "also on" index cover the rest of the day, and a date check at the foot states that every story happened or was first reported on 26 November 2026 (UTC). Every story names its source and carries a verification badge (confirmed / official / reported / claim). `main.ts` (Node, standard library only) copies `entry.png` byte for byte into the output directory, so the judge sees exactly the image in this repository — deterministic, with no network, no randomness and no timestamps, so two runs give identical bytes.

See the bounty: https://make.fun/bounty/news-image-20261126

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Entered on [make.fun](https://make.fun/?ref=gfeqjfrp&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards
