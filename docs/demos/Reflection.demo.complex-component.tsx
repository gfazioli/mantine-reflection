import { Reflection } from '@gfazioli/mantine-reflection';
import { Button, Group, Input, Paper, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  return (
    <Group mt="5%" gap={120} justify="center">
      <Reflection>
        <Paper withBorder w={230} p={16}>
          <Stack>
            <img
              style={{
                borderRadius: '8px',
                width: '100%',
                height: 200,
                objectFit: 'cover',
              }}
              alt="test"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
            />
            <Input placeholder="Click and press TAB 2 times" />
            <Button>Cancel</Button>
          </Stack>
        </Paper>
      </Reflection>
      <Reflection disableChildren>
        <Paper withBorder w={230} p={16}>
          <Stack>
            <img
              style={{
                borderRadius: '8px',
                width: '100%',
                height: 200,
                objectFit: 'cover',
              }}
              alt="test"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
            />
            <Input placeholder="Your name" />
            <Button>Cancel</Button>
          </Stack>
        </Paper>
      </Reflection>
    </Group>
  );
}

const code = `
import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  <Group mt="5%" gap={120} justify="center">
    <Reflection>
      <Paper withBorder w={230} p={16}>
        <Stack>
          <img
            style={{
              borderRadius: '8px',
              width: '100%',
              height: 150,
              objectFit: 'cover',
            }}
            alt="test"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
          />
          <Input placeholder="Click and press TAB 2 times" />
          <Button>Cancel</Button>
        </Stack>
      </Paper>
    </Reflection>
    <Reflection disableChildren>
      <Paper withBorder w={230} p={16}>
        <Stack>
          <img
            style={{
              borderRadius: '8px',
              width: '100%',
              height: 150,
              objectFit: 'cover',
            }}
            alt="test"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
          />
          <Input placeholder="Your name" />
          <Button>Cancel</Button>
        </Stack>
      </Paper>
    </Reflection>
  </Group>
  );
}
`;

export const complexComponent: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 550,
  code,
  defaultExpanded: false,
};
