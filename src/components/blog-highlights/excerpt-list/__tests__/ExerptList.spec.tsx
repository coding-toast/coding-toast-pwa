import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExcerptList from '../ExcerptList';
import { query } from '../__mocks__/card-data';

it('renders correctly', () => {
  const component = shallow(<ExcerptList blogs={query} />);
  expect(toJson(component)).toMatchSnapshot();
});
