import { Reflection } from '@gfazioli/mantine-reflection';
import { MantineDemo } from '@mantinex/demo';

const code = `import { Reflection } from '@gfazioli/mantine-reflection';

function Demo() {
  return (
    <Reflection ripple rippleStrength={8} rippleFrequency={0.015} rippleSpeed={4}>
      <img
        width={200}
        style={{ display: 'block', borderRadius: 8 }}
        alt="ripple"
        src="https://picsum.photos/200/200"
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
        style={{ display: 'block', borderRadius: 8 }}
        alt="ripple"
        src="https://picsum.photos/200/200"
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
