import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header';

describe('<Header />', () => {
  it('renders correctly', () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
