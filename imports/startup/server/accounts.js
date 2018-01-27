/* eslint-disable no-param-reassign */
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  if (!user.username) {
    user.username = user.email.split('@')[0];
  }
  return user;
});
