import * as React from 'react';
import { shallow } from 'enzyme';
import DateDisplay from '../DateDisplay';
import { format, formatDistance, subDays } from 'date-fns';

describe('<DateDisplay />', () => {
  it('renders correctly', () => {
    const currentDate = new Date();
    const component = shallow(<DateDisplay date={currentDate} />);

    expect(component.find('time').props().dateTime).toBe(format(currentDate, 'LLL d, y'));
    expect(component.find('time').text()).toBe(`${formatDistance(currentDate, new Date())} ago`);
  });

  it('should have new badge and relative date when created 1 day ago', () => {
    const currentDate = subDays(new Date(), 1);
    const component = shallow(<DateDisplay date={currentDate} />);

    expect(component.find('time').props().dateTime).toBe(format(currentDate, 'LLL d, y'));
    expect(component.find('time').text()).toBe(`${formatDistance(currentDate, new Date())} ago`);
  });

  it('should have new badge and relative date when created 7 days ago', () => {
    const RelativeDateCutoff = 7;
    const currentDate = subDays(new Date(), RelativeDateCutoff);
    const component = shallow(<DateDisplay date={currentDate} />);

    expect(component.find('time').props().dateTime).toBe(format(currentDate, 'LLL d, y'));
    expect(component.find('time').text()).toBe(`${formatDistance(currentDate, new Date())} ago`);
  });

  it('should have new badge and relative date when created 8 days ago', () => {
    const RelativeDateCutoff = 7;
    const currentDate = subDays(new Date(), RelativeDateCutoff + 1);
    const component = shallow(<DateDisplay date={currentDate} />);

    expect(component.find('time').props().dateTime).toBe(format(currentDate, 'LLL d, y'));
    expect(component.find('time').text()).toBe(format(currentDate, 'LLL d, y'));
  });
});
