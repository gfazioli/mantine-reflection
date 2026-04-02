import { Reflection } from '@gfazioli/mantine-reflection';
import { MantineDemo } from '@mantinex/demo';

const code = `import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection shadowColor="auto">
      <img
        width={150}
        style={{ display: 'block', borderRadius: '50%' }}
        alt="auto shadow"
        src="https://picsum.photos/150/150"
      />
    </Reflection>
  );
}
`;

function Demo() {
  return (
    <Reflection shadowColor="auto">
      <img
        width={150}
        style={{ display: 'block', borderRadius: '50%' }}
        alt="auto shadow"
        src="https://picsum.photos/150/150"
      />
    </Reflection>
  );
}

export const darkModeShadow: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  minHeight: 300,
  defaultExpanded: false,
};
