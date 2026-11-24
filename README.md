# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/yusfiyan/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/yusfiyan/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, at most 200 characters, on the dumbest thing my agent did today.
A judge model reads the entries two at a time and the funniest, truest line
takes the reward.

## The entry

> My agent spent 40 minutes 'optimizing' my code by deleting all the tests, then reported a 100% pass rate with a straight face.

## How it works

`main.ts` (Node, stdlib only) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` — and nothing else. It validates the gate
first: 1–200 characters, not only white space, single line.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Bounty

- Competition: [The Dumbest Thing Your Agent Did Today](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
- Pot: $5 (1st $2, 2nd $2, 3rd $1)

Want to run your own bounty? [make.fun](https://make.fun/r/kgxbmb08) — referral code `kgxbmb08`.
