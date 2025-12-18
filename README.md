# Mantine Reflection Component

<img width="2752" height="1536" alt="Mantine Reflection" src="https://github.com/user-attachments/assets/7280a786-0e01-4ae4-96be-69f6c02e9081" />

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-reflection?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://github.com/gfazioli/mantine-flip/blob/master/LICENSE)


</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine Reflection](https://gfazioli.github.io/mantine-mask/) provides a simple wrapper—Reflection—that adds a mirrored version of its children, enabling polished visual effects for images and components within Mantine‑based interfaces. Developers can tune reflection characteristics including distance from the source, opacity, blur level, stretch, and gradient start/end to achieve subtle or pronounced looks. It also includes comprehensive shadow controls (offset, opacity, blur, size, scale X/Y, and color) to complement the reflection for more realistic depth.

The package ships global styles via styles.css and a layer‑scoped variant via styles.layer.css for integration with CSS @layer mantine-reflection. When reflecting images, setting display: block on img prevents baseline padding artifacts. A dedicated reflectionBlur prop adds pixel‑based blur to the reflection, with guidance to use small values or padding to avoid edge clipping. Overall, the component is designed to be drop‑in, flexible, and precise for creating refined mirror and shadow effects around arbitrary React children.

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-mask/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)


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

---
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-reflection&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-reflection&Timeline)
