import { Reflection } from '@gfazioli/mantine-reflection';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Reflection {...props}>
      <img
        width={150}
        style={{ display: 'block', borderRadius: '50%' }}
        alt="test"
        src="https://picsum.photos/150/150"
      />
    </Reflection>
  );
}

const code = `
import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection{{props}}>
      <img width={150} style={{ display: 'block', borderRadius: '50%' }} alt="test" src="https://picsum.photos/150/150"
      />
    </Reflection>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'disableChildren',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: 'shadow',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'reflectionDistance',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      step: 1,
      min: -100,
      max: 100,
    },
    {
      prop: 'reflectionOpacity',
      type: 'number',
      initialValue: 0.3,
      libraryValue: 0.3,
      step: 0.01,
      min: 0,
      max: 1,
    },
    {
      prop: 'reflectionBlur',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      step: 0.01,
      min: 0,
      max: 32,
    },
    {
      prop: 'reflectionStart',
      type: 'number',
      initialValue: 25,
      libraryValue: 25,
      step: 1,
      min: 0,
      max: 100,
    },
    {
      prop: 'reflectionEnd',
      type: 'number',
      initialValue: 75,
      libraryValue: 75,
      step: 1,
      min: 0,
      max: 100,
    },
    {
      prop: 'reflectionStretch',
      type: 'number',
      initialValue: 1,
      libraryValue: 1,
      step: 0.01,
      min: -10,
      max: 10,
    },
    {
      prop: 'shadowOffset',
      type: 'number',
      initialValue: -4,
      libraryValue: -4,
      step: 1,
      min: -100,
      max: 100,
    },
    {
      prop: 'shadowOpacity',
      type: 'number',
      initialValue: 0.5,
      libraryValue: 0.5,
      step: 0.01,
      min: 0,
      max: 1,
    },
    {
      prop: 'shadowBlur',
      type: 'number',
      initialValue: 0,
      libraryValue: 0,
      step: 0.01,
      min: 0,
      max: 32,
    },

    {
      prop: 'shadowSize',
      type: 'number',
      initialValue: 10,
      libraryValue: 10,
      step: 1,
      min: 0,
      max: 64,
    },
    {
      prop: 'shadowScaleX',
      type: 'number',
      initialValue: 1.5,
      libraryValue: 1.5,
      step: 0.01,
      min: 0,
      max: 10,
    },
    {
      prop: 'shadowScaleY',
      type: 'number',
      initialValue: 1,
      libraryValue: 1,
      step: 0.01,
      min: 0,
      max: 10,
    },
    {
      prop: 'shadowColor',
      type: 'color',
      initialValue: 'black',
      libraryValue: 'black',
    },
  ],
};
