import React, { ReactNode, useId, useMemo } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  Factory,
  factory,
  getBaseValue,
  getSize,
  getSortedBreakpoints,
  InlineStyles,
  keys,
  MantineSize,
  rem,
  StyleProp,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useRandomClassName,
  useStyles,
  type MantineBreakpoint,
} from '@mantine/core';
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
  /** Disable the children in the reflection copy to prevent interaction */
  disableChildren?: boolean;

  /** The distance of the reflection from the original element, supports responsive values */
  reflectionDistance?: StyleProp<MantineSize | number | (string & {})>;

  /** The opacity of the reflection */
  reflectionOpacity?: number;

  /** The start of the reflection (gradient) */
  reflectionStart?: number;

  /** The end of the reflection (gradient) */
  reflectionEnd?: number;

  /** The stretch of the reflection. You may want to adjust `reflectionDistance` accordingly */
  reflectionStretch?: number;

  /** The blur of the reflection in pixels. The reflection is padded to prevent blur clipping. @default 0 */
  reflectionBlur?: number;

  /** Enable water ripple distortion effect on the reflection @default false */
  ripple?: boolean;

  /** Ripple distortion strength (1-50) @default 4 */
  rippleStrength?: number;

  /** Ripple wave frequency — higher values produce more waves @default 0.01 */
  rippleFrequency?: number;

  /** Ripple animation speed (0.1-10), higher = faster. 0 for static. @default 3 */
  rippleSpeed?: number;

  /** Number of noise octaves (1-4). Higher = more detail but heavier. @default 1 */
  rippleOctaves?: number;

  /** Noise seed for reproducible patterns @default 1 */
  rippleSeed?: number;

  /** Enable/disable shadow effect @default true */
  shadow?: boolean;

  /** The offset of the shadow */
  shadowOffset?: number;

  /** The opacity of the shadow */
  shadowOpacity?: number;

  /** The blur of the shadow */
  shadowBlur?: number;

  /** The color of the shadow. Set to 'auto' for automatic light/dark mode switching @default 'black' */
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
  extends BoxProps, ReflectionBaseProps, StylesApiProps<ReflectionFactory> {}

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
  ripple: false,
  rippleStrength: 4,
  rippleFrequency: 0.01,
  rippleSpeed: 3,
  rippleOctaves: 1,
  rippleSeed: 1,
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
    // 'auto' shadowColor resolves via CSS light-dark() in the stylesheet
    const resolvedShadowColor = shadowColor === 'auto' ? undefined : shadowColor;
    const blurPx = reflectionBlur ?? 0;

    return {
      root: {
        '--shadow-offset': getSize(shadowOffset, 'shadow-offset'),
        '--shadow-opacity': shadowOpacity?.toString(),
        '--shadow-blur': rem(shadowBlur),
        '--shadow-color': resolvedShadowColor,
        '--shadow-scale-x': shadowScaleX,
        '--shadow-scale-y': shadowScaleY,
        '--shadow-size': getSize(shadowSize, 'shadow-size'),
      },
      reflection: {
        '--reflection-distance':
          typeof reflectionDistance !== 'object'
            ? getSize(reflectionDistance, 'reflection-distance')
            : undefined,
        '--reflection-opacity': reflectionOpacity?.toString(),
        '--reflection-start': `${reflectionStart?.toString() || '25'}%` as string,
        '--reflection-end': `${reflectionEnd?.toString() || '75'}%` as string,
        '--reflection-stretch': reflectionStretch?.toString() || '1',
        '--reflection-blur': rem(blurPx),
        // Padding to prevent blur clipping: blur radius + 2px safety margin
        '--reflection-blur-padding': blurPx > 0 ? rem(blurPx + 2) : undefined,
      },
    };
  }
);

/** Recursively disables and removes tabIndex from all child elements */
function setDisabledRecursive(children: ReactNode): ReactNode {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const updatedProps = {
        ...(child as React.ReactElement<{ disabled?: boolean; tabIndex?: number }>).props,
        disabled: true,
        tabIndex: -1,
      };
      const updatedChildren = setDisabledRecursive(
        (child as React.ReactElement<{ children?: ReactNode }>).props.children
      );
      return React.cloneElement(child, updatedProps, updatedChildren);
    }
    return child;
  });
}

/** Responsive CSS variables for reflection-distance via InlineStyles + media queries */
function ReflectionMediaVariables({
  reflectionDistance,
  selector,
}: {
  reflectionDistance: StyleProp<MantineSize | number | (string & {})>;
  selector: string;
}) {
  const theme = useMantineTheme();
  const baseValue = getBaseValue(reflectionDistance);

  const baseStyles: Record<string, string | undefined> = {};
  if (baseValue !== undefined) {
    baseStyles['--reflection-distance'] = getSize(baseValue, 'reflection-distance');
  }

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, string | number>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (
        typeof reflectionDistance === 'object' &&
        reflectionDistance !== null &&
        (reflectionDistance as Record<string, unknown>)[breakpoint] !== undefined
      ) {
        const val = (reflectionDistance as Record<string, unknown>)[breakpoint];
        const resolved = getSize(val, 'reflection-distance');
        if (resolved !== undefined) {
          acc[breakpoint]['--reflection-distance'] = resolved;
        }
      }

      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme.breakpoints).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}

export const Reflection = factory<ReflectionFactory>((_props) => {
  const props = useProps('Reflection', defaultProps, _props);
  const {
    reflectionDistance,
    reflectionOpacity,
    reflectionStart,
    reflectionEnd,
    reflectionStretch,
    reflectionBlur,
    ripple,
    rippleStrength,
    rippleFrequency,
    rippleSpeed,
    rippleOctaves,
    rippleSeed,

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

  const responsiveClassName = useRandomClassName();

  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length !== 1) {
    throw new Error('Reflection component must have exactly one child');
  }

  // Memoize disabled children to avoid recursive cloning on every render
  const reflectionContent = useMemo(() => {
    if (!disableChildren) {
      return children;
    }
    return setDisabledRecursive(children);
  }, [children, disableChildren]);

  // Check if reflectionDistance is responsive (object with breakpoints)
  const isResponsiveDistance =
    typeof reflectionDistance === 'object' && reflectionDistance !== null;

  // Unique ID for SVG filter to avoid conflicts with multiple instances
  const filterId = useId();
  const rippleFilterId = `ripple-${filterId.replace(/:/g, '')}`;

  // Combined filter as CSS variable: blur + optional ripple SVG filter
  // When ripple is active, add extra padding to prevent displacement clipping
  const ripplePadding = ripple ? Math.ceil((rippleStrength ?? 4) / 2) + 4 : 0;
  const reflectionFilterStyle = ripple
    ? ({
        '--reflection-filter': `blur(var(--reflection-blur)) url(#${rippleFilterId})`,
        '--reflection-ripple-padding': `${ripplePadding}px`,
      } as React.CSSProperties)
    : undefined;

  return (
    <>
      {isResponsiveDistance && (
        <ReflectionMediaVariables
          reflectionDistance={reflectionDistance}
          selector={`.${responsiveClassName}`}
        />
      )}

      {/* SVG filter for water ripple distortion — hidden, zero-size */}
      {ripple &&
        (() => {
          const freq = rippleFrequency ?? 0.01;
          const freqY = freq * 3;
          const speed = rippleSpeed ?? 3;
          const octaves = rippleOctaves ?? 1;
          const seed = rippleSeed ?? 1;
          const dur = Math.max(1, 11 - speed);

          return (
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
              <defs>
                <filter id={rippleFilterId} x="-20%" y="-20%" width="140%" height="140%">
                  {/* Generate static fractal noise */}
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency={`${freq} ${freqY}`}
                    numOctaves={octaves}
                    seed={seed}
                    result="noise"
                  />
                  {/*
                    Rotate the noise hue continuously 0→360° for smooth directional flow.
                    hueRotate wraps at 360 so the loop is seamless — no bounce or reversal.
                    The color spectrum shift creates the illusion of flowing water.
                    Amplitude controls the displacement intensity via feColorMatrix values.
                  */}
                  <feColorMatrix in="noise" type="hueRotate" values="0" result="animatedNoise">
                    {speed > 0 && (
                      <animate
                        attributeName="values"
                        from="0"
                        to="360"
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </feColorMatrix>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="animatedNoise"
                    scale={rippleStrength ?? 4}
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
            </svg>
          );
        })()}

      <Box
        {...getStyles('root', {
          className: isResponsiveDistance ? responsiveClassName : undefined,
        })}
        {...others}
        mod={{
          shadow,
          'shadow-auto': shadowColor === 'auto' || undefined,
        }}
      >
        <div>{children}</div>
        <div
          {...getStyles('reflection', { style: reflectionFilterStyle })}
          aria-hidden="true"
          role="presentation"
        >
          {reflectionContent}
        </div>
      </Box>
    </>
  );
});

Reflection.classes = classes;
Reflection.displayName = 'Reflection';
