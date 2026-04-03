import { Reflection } from '@gfazioli/mantine-reflection';
import { MantineDemo } from '@mantinex/demo';

const code = `import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection
      reflectionDistance={{ base: 0, sm: 8, md: 16 }}
      reflectionOpacity={{ base: 0.15, sm: 0.25, md: 0.4 }}
      reflectionBlur={{ base: 2, sm: 1, md: 0 }}
      shadowSize={{ base: 5, sm: 8, md: 12 }}
    >
      <img
        width={200}
        height={200}
        style={{ display: 'block', borderRadius: 8, objectFit: 'cover' }}
        alt="responsive"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
      />
    </Reflection>
  );
}
`;

function Demo() {
  return (
    <Reflection
      reflectionDistance={{ base: 0, sm: 8, md: 16 }}
      reflectionOpacity={{ base: 0.15, sm: 0.25, md: 0.4 }}
      reflectionBlur={{ base: 2, sm: 1, md: 0 }}
      shadowSize={{ base: 5, sm: 8, md: 12 }}
    >
      <img
        width={200}
        height={200}
        style={{ display: 'block', borderRadius: 8, objectFit: 'cover' }}
        alt="responsive"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
      />
    </Reflection>
  );
}

export const responsive: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  minHeight: 400,
  defaultExpanded: false,
};
