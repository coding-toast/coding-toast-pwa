import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialMediaGroup from '../SocialMediaGroup';
import { SocialIconScale } from '../../types';

describe('<SocialMediaGroup />', () => {
  it('renders correctly scale=small', () => {
    const component = shallow(<SocialMediaGroup iconScale={SocialIconScale.SMALL} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly scale=medium', () => {
    const component = shallow(<SocialMediaGroup iconScale={SocialIconScale.MEDIUM} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly scale=large', () => {
    const component = shallow(<SocialMediaGroup iconScale={SocialIconScale.LARGE} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with invalid scale', () => {
    const invalidScale = 9;
    const component = shallow(<SocialMediaGroup iconScale={SocialIconScale[invalidScale]} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with no scale modifier', () => {
    const component = shallow(<SocialMediaGroup />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('defaults size when scale does not map to a value', () => {
    const converter = jest.fn().mockReturnValue(undefined);
    const component = shallow(<SocialMediaGroup converter={converter} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
