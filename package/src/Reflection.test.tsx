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
});
