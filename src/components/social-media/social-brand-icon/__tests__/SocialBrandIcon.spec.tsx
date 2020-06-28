import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialBrandIcon from '../SocialBrandIcon';

describe('<SocialBrandIcon />', () => {
  it('renders correctly', () => {
    const brand = {
      href: '/',
      logo: '/Twitter.svg',
      name: 'Twitter'
    };
    const component = shallow(<SocialBrandIcon brand={brand} size={2} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
