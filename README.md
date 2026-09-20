# Tester 2.0

A Slidev presentation with live audience reactions.

## Local rehearsal

Install dependencies with `npm install` (Node 24 or newer), then run these in two terminals:

```sh
npm run reactions:dev
```

```sh
npm run dev
```

Open [the deck](http://localhost:3030/1?room=rehearsal), reveal the bottom controls, and click **Reactions off** to enable them. Open [the audience page](http://localhost:3030/live?room=rehearsal) in another browser or tab and tap an emoji. The **Audience ↗** control also opens the reaction page on the current deployment.

Reactions start disabled. The toggle synchronizes between presenter and projected tabs on the same origin and room. Turning them off closes the receiving connection and clears the overlay. It does not disable audience submissions for everyone. Print, PDF export, and overview pages do not connect to the reaction service.

Opening or refreshing `/live` and `/sources` preserves the presentation's slide and reveal step. `setup/vite-plugins.ts` adds a missing navigation-sync guard in Slidev 52.16, covering both the development server and static builds. Review this workaround when upgrading Slidev; the browser regression checks that audience navigation leaves the deck alone and that presenter/viewer sync still works.

Each event can use its own `?room=starwest-2026` parameter. Use the same room on the deck and audience page; names allow lowercase letters, numbers, and hyphens, up to 64 characters. Navigation preserves the room. Room names are public session identifiers, not passwords.

The cover displays a QR code when reactions are enabled. It points to **https://slides.filiphric.com/tester-2/live**, including the current room. Use the local audience link for local testing.

## Agenda columns

Edit the titles and list items in `shared/agenda.ts`. Both the agenda columns and the individual section lists use this shared content.

Use `<AgendaColumns />` on any slide to show the agenda with every item covered. The `revealed` prop selects visible items by their displayed numbers (1–3) in each column: `lies`, `abandon`, and `strengths`. Omitted columns and items stay covered.

```vue
<AgendaColumns :revealed="{ lies: [1, 2, 3] }" />
<AgendaColumns :revealed="{ lies: [1, 3], abandon: [1], strengths: [2] }" />
```

The individual lists are `<ThreeLies />`, `<ThingsToAbandon />`, and `<OurStrengths />`. Each takes `:reveal="1"`, `2`, or `3`: earlier items are visible, the selected item appears on the first click, and later items stay covered. Set `clicks: 1` in the slide frontmatter:

```md
---
layout: default
clicks: 1
---

# Things to abandon

<ThingsToAbandon :reveal="1" />
```

Use `<OurStrengths :reveal="1" />` the same way. Adjust any list's font size with `style="--reveal-list-font-size: 40px;"`; the existing `--three-lies-font-size` override also still works for `<ThreeLies />`.

## Sources

The [sources page](http://localhost:3030/sources) collects the chart references and methodology. Edit `shared/sources.ts` to add more groups or links. Both `/live` and `/sources` have navigation links that preserve the current `room`; the sources page also has a return link at the bottom.

## Publish

The Slidev site deploys to Vercel using the existing `vercel.json`. The WebSocket service deploys separately to Cloudflare Workers using PartyServer. It preserves the PartyKit client protocol and reuses the same validation and rate limits as the local PartyKit server. Direct Cloudflare hosting avoids the shared `partykit.dev` domain limit encountered during deployment.

The deployed reaction hostname is `tester-2-reactions.ester-2-0.workers.dev`. The public site is built by Vercel project `slides-filiphric-com` from the separate `slides.filiphric.com` repository, which contains this deck under `presentations/tester-2`. Set `VITE_REACTIONS_HOST` on that Vercel project's Production environment and rebuild it when the hostname changes. The local `.env.local` uses the same host for presenting from this checkout.

1. Sign in with `npx wrangler login`, then run `npm run reactions:deploy`. Keep the resulting hostname, for example `tester-2-reactions.YOUR-SUBDOMAIN.workers.dev`. The account and SQLite Durable Object binding are configured in `wrangler.jsonc`.
2. Set `VITE_REACTIONS_HOST` in the Vercel project's environment variables to that hostname, **without** `https://` or a path. Set `VITE_REACTIONS_ROOM` to your event's default room if desired.
3. Deploy/redeploy the slides on Vercel. Vite embeds these public settings at build time. If no host is configured in production, the deck works normally and the audience page says reactions are not available yet.
4. Serve the audience page at `https://slides.filiphric.com/tester-2/live` and the sources page at `https://slides.filiphric.com/tester-2/sources`. Any hosting rewrites or redirects must preserve the query string, especially `room`. Configure the public URL variables if these addresses change.
5. Enable reactions on the projected deck and rehearse with a phone using mobile data.

For presenting from your laptop while the audience uses the public site, copy `.env.example` to `.env.local`, set `VITE_REACTIONS_HOST` to the **deployed** Worker hostname, and restart Slidev. Both clients must use the same host and room and have internet access. The public QR link remains `slides.filiphric.com/tester-2/live`.

`VITE_REACTIONS_JOIN_URL` overrides the QR/link destination if needed. No deployment credentials belong in `VITE_*` variables: these values are included in the public JavaScript bundle.

## Reactions

The available reactions are 👍 ❤️ 😂 👏 🔥 🤯 🎉 🎯 🌶️. The server validates messages, permits a burst of four per connection followed by two per second, and caps aggregate room broadcasts at 30 per second with a burst of 30. The overlay displays at most 30 emojis for 2.5 seconds each. Reduced-motion users see a brief fade instead of movement.

Reactions are ephemeral. Disconnected buttons are disabled, offline messages are not queued, and reconnection does not replay old reactions. The audience page shows immediate local feedback for its own taps. Under rate limiting, excess reactions are discarded.

The implementation follows the approach researched in [Daniel Roe's roe.dev repository](https://github.com/danielroe/roe.dev), using our own reaction service. Research and design details are in [the plan](/Users/filiphric/tester-2/docs/live-reactions-plan.md).

## Checks

```sh
npm test
npm run typecheck
npm run build
```

Browser tests run the Cloudflare Worker locally on port 1998, serve a production build on port 3040, and check audience navigation against a development server on port 3041. `npm run reactions:cloudflare:dev` also runs the Worker separately on port 1997:

```sh
npx playwright install chromium
npm run test:e2e
```

If Google Chrome is already installed, use `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` instead of downloading Chromium. The suite covers delivery, room isolation, reconnects, slide navigation, presenter mute, mobile layout, reduced motion, and PDF/overview behavior. It builds into `.reactions-test-dist`, leaving the normal `dist` output alone.

Edit [slides.md](/Users/filiphric/tester-2/slides.md) and the Markdown files under `pages` to change the talk. Learn more in the [Slidev documentation](https://sli.dev/).
