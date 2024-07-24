import { render } from '@testing-library/react';

import Pagecomponent from './pagecomponent';

describe('Pagecomponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pagecomponent />);
    expect(baseElement).toBeTruthy();
  });
});
