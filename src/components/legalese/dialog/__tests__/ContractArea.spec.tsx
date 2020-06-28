import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContractArea from '../ContractArea';

describe('<ContractArea />', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ContractArea>
        <p>Hello test world!</p>
      </ContractArea>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
