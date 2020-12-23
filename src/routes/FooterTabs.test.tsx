import React from 'react';
import { shallow } from 'enzyme';

import FooterTabs from './FooterTabs';
import findByTestAttribute from '../tests/utils';

describe('renders without error', () => {
  test('renders component without error', () => {
    const wrapper = shallow(<FooterTabs />);
    const footerTabsComponents = findByTestAttribute(wrapper, 'footer-tabs');
    expect(footerTabsComponents.length).toBe(1);
  });
  test('renders three screens without error', () => {
    const wrapper = shallow(<FooterTabs />);
    const screens = findByTestAttribute(wrapper, 'icon-image');
    expect(screens.length).toBe(2);
  });
});
