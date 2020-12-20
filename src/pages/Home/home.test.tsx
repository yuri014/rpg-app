import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';
import findByTestAttribute from '../../tests/utils';

test('renders without error', () => {
  const wrapper = shallow(<Home />);
  const homePage = findByTestAttribute(wrapper, 'home-page');
  expect(homePage.length).toBe(1);
});
