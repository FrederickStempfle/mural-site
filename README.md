<br />

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/assets/img/WordmarkDark.png">
    <source media="(prefers-color-scheme: light)" srcset="public/assets/img/WordmarkLight.png">
    <img src="public/assets/img/WordmarkLight.png" alt="Mural" width="340">
  </picture>
</p>

<p align="center">
  <strong>The little site behind the little app.</strong>
  <br />
  A hand-drawn landing page for <a href="https://github.com/FrederickStempfle/Mural">Mural</a>.
  <br />
  Four static pages. No framework, no tracking, no build-time magic.
</p>

<p align="center">
  <img alt="Vite 8" src="https://img.shields.io/badge/built%20with-Vite%208-f2a4c0?style=flat-square&labelColor=241f28" />
  <img alt="Vanilla" src="https://img.shields.io/badge/js-vanilla-a9b6f2?style=flat-square&labelColor=241f28" />
  <img alt="Cloudflare Pages" src="https://img.shields.io/badge/deploys%20to-Cloudflare%20Pages-cfc08d?style=flat-square&labelColor=241f28" />
  <img alt="Free and open source" src="https://img.shields.io/badge/free-%26%20open%20source-f2a4c0?style=flat-square&labelColor=241f28" />
</p>

<p align="center">
  <a href="#what-this-is">What this is</a>
  &nbsp;·&nbsp;
  <a href="#run-it">Run it</a>
  &nbsp;·&nbsp;
  <a href="#ship-it">Ship it</a>
  &nbsp;·&nbsp;
  <a href="#whats-in-the-box">What's in the box</a>
  &nbsp;·&nbsp;
  <a href="#the-look">The look</a>
</p>

<p align="center">
  <a href="https://mural-site-cy1.pages.dev/"><strong>→&nbsp; See it live</strong></a>
</p>

<br />

<p align="center">
  <img src="public/assets/img/app-screenshot.jpg" alt="The Mural app showing a dark gallery of wallpapers with hand-drawn frames and washi tape" width="92%" />
</p>

<p align="center">
  <sub><em>The app this site is here to talk about.</em></sub>
</p>

<br />

---

## What this is

Mural is a free, native macOS wallpaper app. This repo is its landing page — the thing that explains the app to someone who has never heard of it, and hands them a `.dmg`.

It is deliberately small: four hand-written HTML pages, one short script, and a pile of images. Vite is here to bundle and fingerprint assets, not to run a framework. There is no analytics, no cookie banner, and nothing to consent to.

> The app lives at **[FrederickStempfle/Mural](https://github.com/FrederickStempfle/Mural)**. This repo is only the site.

## Run it

```sh
npm install
npm run dev
```

That's it — Vite serves the pages with hot reload.

To check the real production output before shipping:

```sh
npm run build
npm run preview
```

<sub>The project uses <b>npm</b> and a committed <code>package-lock.json</code>. Vite is the only dependency.</sub>

## Ship it

`npm run build` writes the finished site to `dist/`. Deployment is Cloudflare Pages:

| | |
|---|---|
| **Build command** | `npm run build` |
| **Output directory** | `dist` |
| **Live at** | [mural-site-cy1.pages.dev](https://mural-site-cy1.pages.dev/) |

Every page is listed explicitly as a Rollup input in `vite.config.js` — **a new page won't ship until it's added there**, which is the one sharp edge in this repo worth remembering.

## What's in the box

```
index.html                 the landing page — hero, gallery, studio, features, FAQ
roadmap.html               where Mural is headed
privacy.html               the short version: nothing is collected
third-party-notices.html   artwork and font credits
src/main.js                reveal-on-scroll, and nothing else
public/assets/img/         wallpapers, screenshots, wordmarks (.jpg + .webp)
public/assets/stickers/    the doodles and washi tape
public/assets/font/        Virgil, the hand-drawn typeface
vite.config.js             one Rollup input per page
```

Each page carries its own `<style>` block. That's a choice, not an oversight — the pages are few, they share little, and keeping the CSS next to the markup means one file to open per page.

`src/main.js` handles reveal-on-scroll and respects `prefers-reduced-motion`. Without JavaScript, a `<noscript>` block makes everything visible. Nothing on the site depends on it.

## The look

The site is meant to feel like a page torn out of a notebook: paper-grain background, hand-drawn borders, washi tape holding the screenshots down.

- ✓ &nbsp;**Virgil** — the hand-drawn typeface, the same one the app uses.
- ✓ &nbsp;**Wobbly borders** — asymmetric `border-radius` values (`--r-a`, `--r-b`, `--r-c`), rotated a degree or two.
- ✓ &nbsp;**Washi tape** — pure CSS rectangles, no images.
- ✓ &nbsp;**Squiggle underlines** — inline SVG paths drawn on with `stroke-dashoffset`.

<table>
  <tr>
    <td align="center"><img src="https://img.shields.io/badge/%20-18141a?style=flat-square" alt="" /><br /><sub><code>--bg</code><br />#18141a</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%20-241f28?style=flat-square" alt="" /><br /><sub><code>--panel</code><br />#241f28</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%20-ede6dc?style=flat-square" alt="" /><br /><sub><code>--ink</code><br />#ede6dc</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%20-f2a4c0?style=flat-square" alt="" /><br /><sub><code>--pink</code><br />#f2a4c0</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%20-a9b6f2?style=flat-square" alt="" /><br /><sub><code>--peri</code><br />#a9b6f2</sub></td>
    <td align="center"><img src="https://img.shields.io/badge/%20-cfc08d?style=flat-square" alt="" /><br /><sub><code>--khaki</code><br />#cfc08d</sub></td>
  </tr>
</table>

Colours live as custom properties at the top of each page's `:root`. Change them there and the whole page follows.

## Editing the copy

Everything is plain HTML — no CMS, no markdown pipeline. Open the page and edit the words.

Two things worth keeping consistent when you do:

- Images come in `.jpg` and `.webp` pairs. The `.webp` is what the page loads; keep the `.jpg` as the fallback and the social-preview image.
- Every image needs `width`, `height`, and honest `alt` text — that's what keeps the layout from jumping while it loads.

<br />

<p align="center">
  <img src="public/assets/img/LogoMark.png" alt="Mural logo mark" width="72" />
  <br />
  <sub><em>Made for Macs that deserve better backgrounds.</em></sub>
  <br />
  <br />
  <sub>Free &amp; open source, forever.</sub>
</p>
