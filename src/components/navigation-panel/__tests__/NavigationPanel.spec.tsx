import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavigationPanel from '../NavigationPanel';

describe('<NavigationPanel />', () => {
  it('renders correctly', () => {
    const component = shallow(<NavigationPanel />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
