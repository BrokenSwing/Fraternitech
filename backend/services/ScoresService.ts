import {User} from '../models';

function getOrderedUsers() {
  return User.findAll({
    where: {
      isAdmin: false,
    },
    order: [ 'score', ['lastScoreUpdate', 'DESC'] ],
  });
}

export default { getOrderedUsers };
