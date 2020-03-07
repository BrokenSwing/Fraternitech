import {User} from '../models';

function getOrderedUsers() {
  return User.findAll({
    where: {
      isAdmin: false,
    },
    order: [ 'score', 'lastScoreUpdate', 'firstname', 'lastname' ],
  });
}

export default { getOrderedUsers };
