import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LegaleseDialog from '../LegaleseDialog';
import { Button, Modal } from 'react-bootstrap';

describe('<LegaleseDialog />', () => {
  it('renders correctly as link', () => {
    const component = shallow(<LegaleseDialog title='test title' />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with children', () => {
    const component = shallow(
      <LegaleseDialog title='test title'>
        <p>Hello test world!</p>
      </LegaleseDialog>
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly as muted link', () => {
    const component = shallow(<LegaleseDialog title='test title' muted />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('open button shows the modal', () => {
    const component = shallow(<LegaleseDialog title='test title' />);

    const button = component.find(Button).at(0);
    button.simulate('click');

    const modal = component.find(Modal);

    expect(modal.props().show).toBeTruthy();
  });

  it('close button will hide the modal', () => {
    const component = shallow(<LegaleseDialog title='test title' />);

    const openButton = component.find(Button).at(0);
    openButton.simulate('click');

    const closeButton = component.find(Button).at(1);
    closeButton.simulate('click');

    const modal = component.find(Modal);

    expect(modal.props().show).toBeFalsy();
  });
});
