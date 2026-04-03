import { Reflection } from '@gfazioli/mantine-reflection';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Group mt="5%" gap={100} justify="center">
      <Reflection {...props}>
        <img
          width={150}
          height={150}
          style={{ display: 'block', objectFit: 'cover' }}
          alt="test"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
        />
      </Reflection>

      <Reflection {...props}>
        <img
          width={150}
          height={150}
          style={{ objectFit: 'cover' }}
          alt="test"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
        />
      </Reflection>
    </Group>
  );
}

const code = `
import { Reflection } from '@gfazioli/mantine-reflection';
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group mt="5%" gap={100} justify="center">
      <Reflection>
        <img
          width={150}
          height={150}
          style={{ display: 'block', objectFit: 'cover' }}
          alt="test"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
        />
      </Reflection>

      <Reflection>
        <img width={150} height={150} style={{ objectFit: 'cover' }} alt="test" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png" />
      </Reflection>
    </Group>
  );
}
`;

export const simpleImage: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 300,
  code,
  defaultExpanded: false,
};
