import { Reflection } from '@gfazioli/mantine-reflection';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Group mt="5%" gap={100} justify="center">
      <Reflection {...props}>
        <img
          width={150}
          style={{ display: 'block' }}
          alt="test"
          src="https://picsum.photos/150/150"
        />
      </Reflection>

      <Reflection {...props}>
        <img width={150} alt="test" src="https://picsum.photos/150/150" />
      </Reflection>
    </Group>
  );
}

const code = `
import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Group mt="5%" gap={100} justify="center">
      <Reflection>
        <img
          width={150}
          style={{ display: 'block' }}
          alt="test"
          src="https://picsum.photos/150/150"
        />
      </Reflection>

      <Reflection {...props}>
        <img width={150} alt="test" src="https://picsum.photos/150/150" />
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
