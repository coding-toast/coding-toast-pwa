import * as React from 'react';
import CodeBlock from '../CodeBlock';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<CodeBlock />', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<CodeBlock language='jsx' value='<pre><code>console.log("Hello World!")' />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
