import * as React from 'react';
import { differenceInCalendarDays, format, formatDistance } from 'date-fns';

interface IDateDisplay {
  date: Date;
}

const DateDisplay: React.FC<IDateDisplay> = (props) => {
  const { date } = props;
  const dateNow = new Date();
  const RelativeDateCutoff = 7;

  if (differenceInCalendarDays(dateNow, date) <= RelativeDateCutoff) {
    return <time dateTime={format(date, 'LLL d, y')}>{formatDistance(date, new Date())} ago</time>;
  } else {
    return <time dateTime={format(date, 'LLL d, y')}>{format(date, 'LLL d, y')}</time>;
  }
};

export default DateDisplay;
