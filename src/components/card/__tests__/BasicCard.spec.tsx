import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BlogCard from '../BlogCard';
import { Badge } from 'react-bootstrap';
import { subDays } from 'date-fns';

describe('<BlogCard />', () => {
  it('renders correctly', () => {
    const component = shallow(
      <BlogCard key='1' author='Tom Jerry' title='test' banner='test' description='test' createdAt='2020-06-29T05:55:11.643Z' slug='a' />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have new badge and relative date when created now', () => {
    const component = shallow(
      <BlogCard key='1' author='Tom Jerry' title='test' banner='test' description='test' createdAt={new Date().toISOString()} slug='a' />
    );

    expect(component.find(Badge).length).toBe(1);
  });

  it('should have new badge and relative date when created 1 day ago', () => {
    const component = shallow(
      <BlogCard
        key='1'
        author='Tom Jerry'
        title='test'
        banner='test'
        description='test'
        createdAt={subDays(new Date(), 1).toISOString()}
        slug='a'
      />
    );

    expect(component.find(Badge).length).toBe(1);
  });

  it('should have new badge and relative date when created 7 days ago', () => {
    const DaysCutoff = 7;
    const component = shallow(
      <BlogCard
        key='1'
        author='Tom Jerry'
        title='test'
        banner='test'
        description='test'
        createdAt={subDays(new Date(), DaysCutoff).toISOString()}
        slug='a'
      />
    );

    expect(component.find(Badge).length).toBe(1);
  });

  it('should have new badge and relative date when created 8 days ago', () => {
    const DaysCutoff = 7;
    const component = shallow(
      <BlogCard
        key='1'
        author='Tom Jerry'
        title='test'
        banner='test'
        description='test'
        createdAt={subDays(new Date(), DaysCutoff + 1).toISOString()}
        slug='a'
      />
    );

    expect(component.find(Badge).length).toBe(0);
  });
});
