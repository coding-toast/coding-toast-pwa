import * as React from 'react';
import InlineCode from '../InlineCode';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<InlineCode />', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<InlineCode value='<pre><code>console.log("Hello World!")' />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
