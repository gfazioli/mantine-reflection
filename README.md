# Mantine Reflection Component

<img width="2752" height="1536" alt="Gemini_Generated_Image_gnx8sjgnx8sjgnx8" src="https://github.com/user-attachments/assets/0ee9a3d4-5375-4713-8739-861cccebec66" />

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-reflection?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-reflection)
  [![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-reflection?style=for-the-badge)](https://github.com/gfazioli/mantine-flip/blob/master/LICENSE)


</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[![Mantine UI Library](https://img.shields.io/badge/-MANTINE_UI_LIBRARY-blue?style=for-the-badge&labelColor=black&logo=mantine
)](https://mantine.dev/)

Adds a reflection effect to a component. It simply wraps the content to be reflected.

[![Mantine Extensions](https://img.shields.io/badge/-Watch_the_Video-blue?style=for-the-badge&labelColor=black&logo=youtube
)](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4)
[![Demo and Documentation](https://img.shields.io/badge/-Demo_%26_Documentation-blue?style=for-the-badge&labelColor=black&logo=typescript
)](https://gfazioli.github.io/mantine-reflection/)
[![Mantine Extensions HUB](https://img.shields.io/badge/-Mantine_Extensions_Hub-blue?style=for-the-badge&labelColor=blue
)](https://mantine-extensions.vercel.app/)

👉 You can find more components on the [Mantine Extensions Hub](https://mantine-extensions.vercel.app/) library.

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

<div align="center">
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-reflection&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-reflection&Timeline)

</div>
