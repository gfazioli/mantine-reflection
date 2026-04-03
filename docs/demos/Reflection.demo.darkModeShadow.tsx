import { Reflection } from '@gfazioli/mantine-reflection';
import { MantineDemo } from '@mantinex/demo';

const code = `import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection shadowColor="auto">
      <img
        width={150}
        height={150}
        style={{ display: 'block', borderRadius: '50%', objectFit: 'cover' }}
        alt="auto shadow"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
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
        height={150}
        style={{ display: 'block', borderRadius: '50%', objectFit: 'cover' }}
        alt="auto shadow"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
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
