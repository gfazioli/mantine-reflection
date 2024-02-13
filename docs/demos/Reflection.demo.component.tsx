import { Reflection } from '@gfazioli/mantine-reflection';
import { Button, Center } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Center mt="5%">
      <Reflection {...props}>
        <Button>Hello World!</Button>
      </Reflection>
    </Center>
  );
}

const code = `
import { Reflection } from '@gfazioli/mantine-reflection'';

function Demo() {
  return (
    <Reflection>
      <Button>Hello World!</Button>
  </Reflection>
  );
}
`;

export const component: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
};
