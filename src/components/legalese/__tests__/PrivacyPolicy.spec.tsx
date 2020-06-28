import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PrivacyPolicy from '../PrivacyPolicy';

describe('<PrivacyPolicy />', () => {
  it('renders correctly as link', () => {
    const component = shallow(<PrivacyPolicy />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly as muted link', () => {
    const component = shallow(<PrivacyPolicy muted />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
