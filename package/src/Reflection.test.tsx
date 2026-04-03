import React from 'react';
import { render } from '@mantine-tests/core';
import { Reflection } from './Reflection';

describe('Reflection', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Reflection>
        <div>Test</div>
      </Reflection>
    );
    expect(container).toBeTruthy();
  });

  it('renders children content', () => {
    const { container } = render(
      <Reflection>
        <div>Hello World</div>
      </Reflection>
    );
    expect(container.textContent).toContain('Hello World');
  });

  it('throws when no children provided', () => {
    expect(() => render(<Reflection />)).toThrow('must have exactly one child');
  });

  it('throws when multiple children provided', () => {
    expect(() =>
      render(
        <Reflection>
          <div>One</div>
          <div>Two</div>
        </Reflection>
      )
    ).toThrow('must have exactly one child');
  });

  it('renders shadow data-attribute when shadow is true (default)', () => {
    const { container } = render(
      <Reflection>
        <div>Test</div>
      </Reflection>
    );
    expect(container.querySelector('[data-shadow]')).toBeTruthy();
  });

  it('does not render shadow data-attribute when shadow is false', () => {
    const { container } = render(
      <Reflection shadow={false}>
        <div>Test</div>
      </Reflection>
    );
    expect(container.querySelector('[data-shadow]')).toBeNull();
  });

  it('reflection div has aria-hidden="true"', () => {
    const { container } = render(
      <Reflection>
        <div>Test</div>
      </Reflection>
    );
    const reflection = container.querySelector('[aria-hidden="true"]');
    expect(reflection).toBeTruthy();
  });

  it('reflection div has role="presentation"', () => {
    const { container } = render(
      <Reflection>
        <div>Test</div>
      </Reflection>
    );
    const reflection = container.querySelector('[role="presentation"]');
    expect(reflection).toBeTruthy();
  });

  it('disableChildren sets disabled and tabIndex on nested elements', () => {
    const { container } = render(
      <Reflection disableChildren>
        <div>
          <button type="button">Click me</button>
        </div>
      </Reflection>
    );
    // The reflection copy should have disabled buttons
    const reflection = container.querySelector('[aria-hidden="true"]');
    const button = reflection?.querySelector('button');
    expect(button?.disabled).toBe(true);
    expect(button?.tabIndex).toBe(-1);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Reflection ref={ref}>
        <div>Test</div>
      </Reflection>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // Ripple tests
  it('renders SVG filter when ripple is true', () => {
    const { container } = render(
      <Reflection ripple>
        <div>Test</div>
      </Reflection>
    );
    expect(container.querySelector('filter')).toBeTruthy();
  });

  it('does not render SVG filter when ripple is false', () => {
    const { container } = render(
      <Reflection>
        <div>Test</div>
      </Reflection>
    );
    expect(container.querySelector('filter')).toBeNull();
  });

  it('renders with custom rippleStrength without crashing', () => {
    const { container } = render(
      <Reflection ripple rippleStrength={25}>
        <div>Test</div>
      </Reflection>
    );
    expect(container.firstChild).toBeTruthy();
  });

  // Responsive reflectionDistance
  it('accepts responsive reflectionDistance object', () => {
    const { container } = render(
      <Reflection reflectionDistance={{ base: 0, md: 20 }}>
        <div>Test</div>
      </Reflection>
    );
    expect(container.firstChild).toBeTruthy();
  });

  // Responsive reflectionOpacity
  it('accepts responsive reflectionOpacity object', () => {
    const { container } = render(
      <Reflection reflectionOpacity={{ base: 0.3, md: 0.5 }}>
        <div>Test</div>
      </Reflection>
    );
    expect(container.firstChild).toBeTruthy();
  });

  // Responsive reflectionBlur
  it('accepts responsive reflectionBlur object', () => {
    const { container } = render(
      <Reflection reflectionBlur={{ base: 0, md: 4 }}>
        <div>Test</div>
      </Reflection>
    );
    expect(container.firstChild).toBeTruthy();
  });

  // Responsive shadowSize
  it('accepts responsive shadowSize object', () => {
    const { container } = render(
      <Reflection shadowSize={{ base: 'sm', md: 'lg' }}>
        <div>Test</div>
      </Reflection>
    );
    expect(container.firstChild).toBeTruthy();
  });

  // Multiple responsive props at once
  it('accepts multiple responsive props simultaneously', () => {
    const { container } = render(
      <Reflection
        reflectionDistance={{ base: 0, md: 20 }}
        reflectionOpacity={{ base: 0.2, md: 0.5 }}
        reflectionBlur={{ base: 0, lg: 6 }}
        shadowSize={{ base: 5, md: 15 }}
      >
        <div>Test</div>
      </Reflection>
    );
    expect(container.firstChild).toBeTruthy();
  });

  // Shadow auto color test
  it('renders with data-shadow-auto when shadowColor="auto"', () => {
    const { container } = render(
      <Reflection shadowColor="auto">
        <div>Test</div>
      </Reflection>
    );
    expect(container.querySelector('[data-shadow-auto]')).toBeTruthy();
  });
});
