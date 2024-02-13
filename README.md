# Mantine Reflection Component

<p align="center">

</p>

---

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-reflection">
    <img alt="NPM version" src="https://img.shields.io/npm/v/%40gfazioli%2Fmantine-reflection?style=for-the-badge">
  </a>
  
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-reflection">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-reflection?style=for-the-badge">
  </a>

  <img alt="NPM License" src="https://img.shields.io/npm/l/%40gfazioli%2Fmantine-reflection?style=for-the-badge">

</p>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.
Adds a reflection effect to a component. It simply wraps the content to be reflected.

## Installation

```sh
npm install @gfazioli/mantine-reflection
```
or 

```sh
yarn add @gfazioli/mantine-reflection
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

## Props

| Name              | Type              | Description                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| children          | React.ReactNode  | Children to reflect                           |
| disableChildren   | boolean           | Disable the children                          |
| reflectionBlur    | number            | The blur of the reflection                     |
| reflectionDistance| number \| MantineSize \| (string & {})    | The distance of the reflection from the original element|
| reflectionEnd     | number            | The end of the reflection (gradient)           |
| reflectionOpacity | number            | The opacity of the reflection                  |
| reflectionStart   | number            | The start of the reflection (gradient)         |
| reflectionStretch | number            | The stretch of the reflection. May you should adjust the reflectionDistance|
| shadow            | boolean           | Shadow props                                  |
| shadowBlur        | number            | The blur of the shadow                        |
| shadowColor       | string            | The color of the shadow                       |
| shadowOffset      | number            | The offset of the shadow                      |
| shadowOpacity     | number            | The opacity of the shadow                     |
| shadowScaleX      | number            | The scale of the shadow in the x-axis         |
| shadowScaleY      | number            | The scale of the shadow in the y-axis         |
| shadowSize        | number \| MantineSize \| (string & {})    | The size of the shadow                         |


