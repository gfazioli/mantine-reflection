import type { ReflectionFactory } from '@gfazioli/mantine-reflection';
import type { StylesApiData } from '../components/styles-api.types';

export const ReflectionStylesApi: StylesApiData<ReflectionFactory> = {
  selectors: {
    root: 'Root element',
    reflection: 'Reflection element',
  },

  vars: {
    root: {
      '--shadow-offset': 'Controls the shadow `offset`',
      '--shadow-opacity': 'Controls the shadow `opacity`',
      '--shadow-blur': 'Controls the shadow `blur`',
      '--shadow-color': 'Controls the shadow `color`',
    },
    reflection: {
      '--reflection-distance': 'Controls the reflection `distance` (supports responsive values)',
      '--reflection-opacity': 'Controls the reflection `opacity`',
      '--reflection-start': 'Controls the reflection gradient `start`',
      '--reflection-end': 'Controls the reflection gradient `end`',
      '--reflection-stretch': 'Controls the reflection `stretch`',
      '--reflection-blur': 'Controls the reflection `blur`',
    },
  },

  modifiers: [
    { modifier: 'data-shadow', selector: 'root', condition: '`shadow` prop is `true`' },
    { modifier: 'data-shadow-auto', selector: 'root', condition: '`shadowColor` is `auto`' },
  ],
};
