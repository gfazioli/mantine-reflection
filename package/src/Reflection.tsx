import {
  Box,
  BoxProps,
  Factory,
  MantineSize,
  StylesApiProps,
  createVarsResolver,
  factory,
  getSize,
  rem,
  useProps,
  useStyles,
} from '@mantine/core';
import React from 'react';
import classes from './Reflection.module.css';

export type ReflectionStylesNames = 'root' | 'reflection';

export type ReflectionCssVariables = {
  root: '--shadow-offset' | '--shadow-opacity' | '--shadow-blur' | '--shadow-color';
  reflection:
    | '--reflection-distance'
    | '--reflection-opacity'
    | '--reflection-start'
    | '--reflection-end'
    | '--reflection-stretch'
    | '--reflection-blur';
};

export interface ReflectionBaseProps {
  /** Disable the children */
  disableChildren?: boolean;

  /** The distance of the reflection from the original element */
  reflectionDistance?: MantineSize | number | (string & {});

  /** The opacity of the reflection */
  reflectionOpacity?: number;

  /** The start of the reflection (gradient) */
  reflectionStart?: number;

  /** The end of the reflection (gradient) */
  reflectionEnd?: number;

  /** The stretch of the reflection. May you should adjust the `reflectionDistance` */
  reflectionStretch?: number;

  /** The blur of the reflection */
  reflectionBlur?: number;

  /** Shadow props */
  shadow?: boolean;

  /** The offset of the shadow */
  shadowOffset?: number;

  /** The opacity of the shadow */
  shadowOpacity?: number;

  /** The blur of the shadow */
  shadowBlur?: number;

  /** The color of the shadow */
  shadowColor?: string;

  /** The scale of the shadow in the x-axis */
  shadowScaleX?: number;

  /** The scale of the shadow in the y-axis */
  shadowScaleY?: number;

  /** The size of the shadow */
  shadowSize?: MantineSize | number | (string & {});

  /** Children to reflect */
  children?: React.ReactNode;
}

export interface ReflectionProps
  extends BoxProps,
    ReflectionBaseProps,
    StylesApiProps<ReflectionFactory> {}

export type ReflectionFactory = Factory<{
  props: ReflectionProps;
  ref: HTMLDivElement;
  stylesNames: ReflectionStylesNames;
  vars: ReflectionCssVariables;
}>;

export const defaultProps: Partial<ReflectionProps> = {
  disableChildren: false,
  reflectionDistance: 0,
  reflectionOpacity: 0.3,
  reflectionStart: 25,
  reflectionEnd: 75,
  reflectionStretch: 1,
  reflectionBlur: 0,
  shadow: true,
  shadowOffset: -4,
  shadowOpacity: 0.5,
  shadowBlur: 0,
  shadowColor: 'black',
  shadowScaleX: 1.5,
  shadowScaleY: 1,
  shadowSize: 10,
};

const varsResolver = createVarsResolver<ReflectionFactory>(
  (
    _,
    {
      reflectionDistance,
      reflectionOpacity,
      reflectionStart,
      reflectionEnd,
      reflectionStretch,
      reflectionBlur,
      shadowOffset,
      shadowOpacity,
      shadowBlur,
      shadowColor,
      shadowScaleX,
      shadowScaleY,
      shadowSize,
    }
  ) => {
    return {
      root: {
        '--shadow-offset': getSize(shadowOffset, 'shadow-offset'),
        '--shadow-opacity': shadowOpacity?.toString(),
        '--shadow-blur': rem(shadowBlur),
        '--shadow-color': shadowColor,
        '--shadow-scale-x': shadowScaleX,
        '--shadow-scale-y': shadowScaleY,
        '--shadow-size': getSize(shadowSize, 'shadow-size'),
      },
      reflection: {
        '--reflection-distance': getSize(reflectionDistance, 'reflection-distance'),
        '--reflection-opacity': reflectionOpacity.toString() as string,
        '--reflection-start': ((reflectionStart?.toString() || '25') + '%') as string,
        '--reflection-end': ((reflectionEnd?.toString() || '75') + '%') as string,
        '--reflection-stretch': reflectionStretch?.toString() || '1',
        '--reflection-blur': rem(reflectionBlur || 0),
      },
    };
  }
);

import { ReactNode } from 'react';

type DisabledRecursiveProps = {
  children: ReactNode;
};

export const Reflection = factory<ReflectionFactory>((_props, ref) => {
  const props = useProps('Reflection', defaultProps, _props);
  const {
    reflectionDistance,
    reflectionOpacity,
    reflectionStart,
    reflectionEnd,
    reflectionStretch,
    reflectionBlur,

    shadow,
    shadowOffset,
    shadowOpacity,
    shadowBlur,
    shadowColor,

    shadowScaleX,
    shadowScaleY,
    shadowSize,

    disableChildren,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,

    ...others
  } = props;

  const getStyles = useStyles<ReflectionFactory>({
    name: 'Reflection',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length !== 1) {
    throw new Error('Reflection component must have a children');
  }

  const DisabledRecursiveComponent = ({ children }: DisabledRecursiveProps) => {
    if (!disableChildren) {
      return <>{children}</>;
    }

    const setDisabledRecursive = (children: ReactNode): ReactNode => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const updatedProps = {
            ...child.props,
            disabled: true,
          };
          const updatedChildren = setDisabledRecursive(child.props.children);
          return React.cloneElement(child, updatedProps, updatedChildren);
        }
        return child;
      });
    };

    const updatedChildren = setDisabledRecursive(children);

    return <>{updatedChildren}</>;
  };

  return (
    <Box ref={ref} {...getStyles('root')} {...others} mod={{ shadow: shadow }}>
      <div>{children}</div>
      <div {...getStyles('reflection')}>
        <DisabledRecursiveComponent>{children}</DisabledRecursiveComponent>
      </div>
    </Box>
  );
});

Reflection.classes = classes;
Reflection.displayName = 'Reflection';
