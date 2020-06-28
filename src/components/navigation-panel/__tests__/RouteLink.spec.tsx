import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RouteLink from '../RouteLink';

describe('<RouteLink />', () => {
  it('renders correctly', () => {
    const component = shallow(<RouteLink href='/hello_world' label='Hello World!' />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
