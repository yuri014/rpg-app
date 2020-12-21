import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';
import findByTestAttribute from '../../tests/utils';

describe('renders the page correctly', () => {
  test('renders without error', () => {
    const wrapper = shallow(<Home />);
    const homePage = findByTestAttribute(wrapper, 'home-page');
    expect(homePage.length).toBe(1);
  });

  test('renders four cards', () => {
    const wrapper = shallow(<Home />);
    const homeCardPage = findByTestAttribute(wrapper, 'home-card-component');
    expect(homeCardPage.length).toBe(4);
  });
});
