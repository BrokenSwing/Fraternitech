import * as moment from 'moment';

export function isBabiesTime() {
  const start = moment('10:00:00 09/03/2020', 'h:mm:ss DD:MM:YYYY', 'fr');
  return start.isBefore(moment());
}
