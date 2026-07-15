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
  <a href="#where-things-live">Where things live</a>
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

Mural is a free, native macOS wallpaper app. This repo is only its landing page — four hand-written HTML pages that explain the app and hand over a `.dmg`. Vite bundles and fingerprints the assets; there is no framework and no analytics.

> The app itself lives at **[FrederickStempfle/Mural](https://github.com/FrederickStempfle/Mural)**.

## Run it

```sh
npm install
npm run dev
```

Vite is the only dependency. To check the real production output before shipping:

```sh
npm run build
npm run preview
```

## Ship it

`npm run build` writes the site to `dist/`, which Cloudflare Pages serves.

| | |
|---|---|
| **Build command** | `npm run build` |
| **Output directory** | `dist` |
| **Live at** | [mural-site-cy1.pages.dev](https://mural-site-cy1.pages.dev/) |

**Adding a page?** List it as a Rollup input in `vite.config.js`. Miss that and the page works in dev, then silently vanishes from the build.

## Where things live

Each page is self-contained — markup and its own `<style>` block in one file. Edit the words directly in the HTML.

| | |
|---|---|
| `index.html` | the landing page |
| `roadmap.html` &nbsp;·&nbsp; `privacy.html` &nbsp;·&nbsp; `third-party-notices.html` | the rest |
| `src/main.js` | reveal-on-scroll, and nothing else |
| `public/assets/` | images, stickers, and Virgil |

Images are `.jpg` + `.webp` pairs: the `.webp` is what loads, the `.jpg` is the fallback and social preview. Keep `width`, `height`, and real `alt` text on every one.

<br />

<p align="center">
  <img src="public/assets/img/LogoMark.png" alt="Mural logo mark" width="72" />
  <br />
  <sub><em>Made for Macs that deserve better backgrounds.</em></sub>
  <br />
  <br />
  <sub>Free &amp; open source, forever.</sub>
</p>
