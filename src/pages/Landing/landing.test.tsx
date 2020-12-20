import React from 'react';
import { shallow } from 'enzyme';

import Landing from './index';
import findByTestAttribute from '../../tests/utils';

test('renders without error', () => {
  const wrapper = shallow(<Landing />);
  const landingPage = findByTestAttribute(wrapper, 'landing-page');
  expect(landingPage.length).toBe(1);
});
