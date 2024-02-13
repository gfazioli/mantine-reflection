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
      '--reflection-distance': 'Controls the reflection `distance`',
      '--reflection-opacity': 'Controls the reflection `opacity`',
      '--reflection-start': 'Controls the reflection `start`',
      '--reflection-end': 'Controls the reflection `end`',
      '--reflection-stretch': 'Controls the reflection `stretch`',
      '--reflection-blur': 'Controls the reflection `blur`',
    },
  },

  modifiers: [{ modifier: 'data-shadow', selector: 'root', condition: '`true` prop is set' }],
};
