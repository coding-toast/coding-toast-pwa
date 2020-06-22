import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialMediaGroup from '../SocialMediaGroup';
import { scale } from '../../types';
import { scaleToEm } from '../../IconScaleToEm';

describe('<SocialMediaGroup />', () => {
  it('renders correctly scale=small', () => {
    const component = shallow(<SocialMediaGroup iconScale={scale.SMALL} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly scale=medium', () => {
    const component = shallow(<SocialMediaGroup iconScale={scale.MEDIUM} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly scale=large', () => {
    const component = shallow(<SocialMediaGroup iconScale={scale.LARGE} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with invalid scale', () => {
    const component = shallow(<SocialMediaGroup iconScale={scale[9]} />);
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
