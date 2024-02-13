import { render, tests } from '@mantine-tests/core';
import React from 'react';
import { Reflection, ReflectionProps, ReflectionStylesNames } from './Reflection';

const defaultProps: ReflectionProps = {};

describe('@mantine/core/Reflection', () => {
  tests.itSupportsSystemProps<ReflectionProps, ReflectionStylesNames>({
    component: Reflection,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Reflection',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<Reflection />);
    expect(container.querySelector('.mantine-Reflection-root')).toHaveStyle({
      perspective: '500px',
    });
  });
});
