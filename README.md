# Mantine Reflection Component

<div align="center">
  
  ![image](https://github.com/gfazioli/mantine-reflection/assets/432181/74c716a8-6fba-44a2-8f3d-517772e056f7)

</div>

---

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


