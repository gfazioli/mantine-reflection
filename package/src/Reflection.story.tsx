import { Button, Center, Input, Paper, Stack } from '@mantine/core';
import React from 'react';
import { Reflection, ReflectionProps, defaultProps } from './Reflection';

export default {
  title: 'Reflection',
  args: defaultProps,
  argTypes: {
    disableChildren: { control: { type: 'boolean' } },
    reflectionDistance: { control: { type: 'range', min: -100, max: 32, step: 1 } },
    reflectionOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    reflectionStart: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    reflectionEnd: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    reflectionStretch: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    reflectionBlur: { control: { type: 'range', min: 0, max: 20, step: 1 } },

    shadow: { control: { type: 'boolean' } },
    shadowOffset: { control: { type: 'range', min: -20, max: 20, step: 1 } },
    shadowOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    shadowBlur: { control: { type: 'range', min: 0, max: 20, step: 1 } },
    shadowColor: { control: { type: 'color' } },

    shadowScaleX: { control: { type: 'range', min: 0, max: 10, step: 0.1 } },
    shadowScaleY: { control: { type: 'range', min: 0, max: 10, step: 0.1 } },
    shadowSize: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
};

export function Usage(props: ReflectionProps) {
  return (
    <Center mt="10%">
      <Reflection {...props}>
        <img
          width={150}
          style={{ display: 'block' }}
          alt="test"
          src="https://source.unsplash.com/o50naWbTCd0/150x150"
        />
      </Reflection>
    </Center>
  );
}

export function Image(props: ReflectionProps) {
  return (
    <Center mt="10%">
      <Reflection {...props}>
        <img
          width={150}
          style={{ display: 'block', borderRadius: '50%' }}
          alt="test"
          src="https://source.unsplash.com/9QmbsTDAI4g/150x150"
        />
      </Reflection>
    </Center>
  );
}

export function SimpleComponent(props: ReflectionProps) {
  return (
    <Center mt="10%">
      <Reflection {...props}>
        <Button>Cancel</Button>
      </Reflection>
    </Center>
  );
}

export function ComplexComponent(props: ReflectionProps) {
  return (
    <Center mt="10%">
      <Reflection {...props}>
        <Paper withBorder w={300} p={16}>
          <Stack>
            <img
              style={{
                borderRadius: '8px',
              }}
              alt="test"
              src="https://source.unsplash.com/k5brbv8T3yE/150x150"
            />
            <Input placeholder="Your name" />
            <Button>Cancel</Button>
          </Stack>
        </Paper>
      </Reflection>
    </Center>
  );
}
