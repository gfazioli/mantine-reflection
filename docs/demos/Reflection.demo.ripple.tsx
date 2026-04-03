import { Reflection } from '@gfazioli/mantine-reflection';
import { MantineDemo } from '@mantinex/demo';

const code = `import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection ripple rippleStrength={8} rippleFrequency={0.015} rippleSpeed={4}>
      <img
        width={200}
        height={200}
        style={{ display: 'block', borderRadius: 8, objectFit: 'cover' }}
        alt="ripple"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
      />
    </Reflection>
  );
}
`;

function Demo() {
  return (
    <Reflection ripple rippleStrength={8} rippleFrequency={0.015} rippleSpeed={4}>
      <img
        width={200}
        height={200}
        style={{ display: 'block', borderRadius: 8, objectFit: 'cover' }}
        alt="ripple"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
      />
    </Reflection>
  );
}

export const ripple: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  minHeight: 400,
  defaultExpanded: false,
};
