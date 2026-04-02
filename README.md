# Mantine Reflection Component

<img alt="Mantine Reflection" src="https://github.com/gfazioli/mantine-reflection/blob/master/logo.jpeg" />

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-reflection?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://github.com/gfazioli/mantine-flip/blob/master/LICENSE)

---

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.
It requires **Mantine 9.x** and **React 19**.

[Mantine Reflection](https://gfazioli.github.io/mantine-reflection/) adds a mirrored reflection effect to any React component or image.

## Features

- 🪞 **Reflection effect**: Mirror any React children with configurable opacity, blur, stretch, and gradient fade
- 🎨 **Shadow system**: Independent shadow controls (offset, opacity, blur, color, scaleX/Y, size)
- 🌗 **Dark mode shadow**: `shadowColor="auto"` for automatic light/dark theme adaptation
- 📱 **Responsive**: `reflectionDistance` supports Mantine breakpoint objects
- 🌊 **Water ripple effect**: Animated distortion via SVG filters (`ripple`, `rippleStrength`, `rippleFrequency`, `rippleSpeed`)
- 🔒 **Disable children**: Prevent interaction in the reflected copy with `disableChildren`
- ♿ **Accessible**: `aria-hidden`, non-focusable, `prefers-reduced-motion` support
- 🎨 **Styles API**: Full Mantine Styles API support
- 📦 **TypeScript**: Full type safety out of the box

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-reflection/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)

## Installation

## Installation

```sh
npm install @gfazioli/mantine-reflection
```
or 

```sh
yarn add @gfazioli/mantine-reflection
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-reflection/styles.css';
```

## Usage

```tsx
import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection>
      <img
        width={150}
        style={{ display: 'block', borderRadius: '50%' }}
        alt="test"
        src="https://source.unsplash.com/9QmbsTDAI4g/150x150"
      />
    </Reflection>
  );
}
```
## Sponsor

<div align="center">

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

Your support helps me:

- Keep the project actively maintained with timely bug fixes and security updates	
- Add new features, improve performance, and refine the developer experience	
- Expand test coverage and documentation for smoother adoption	
- Ensure long‑term sustainability without relying on ad hoc free time	
- Prioritize community requests and roadmap items that matter most

Open source thrives when those who benefit can give back—even a small monthly contribution makes a real difference. Sponsorships help cover maintenance time, infrastructure, and the countless invisible tasks that keep a project healthy.

Your help truly matters.

💚 [Become a sponsor](https://github.com/sponsors/gfazioli?o=esc) today and help me keep this project reliable, up‑to‑date, and growing for everyone.

---
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-reflection&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-reflection&Timeline)
