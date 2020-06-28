import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Copyright from '../Copyright';

describe('<Copyright />', () => {
  it('renders correctly', () => {
    const component = shallow(<Copyright />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
