import { Meteor } from 'meteor/meteor';
import { Activity } from '../activity';

const getLocationActivity = ({ locationId }) =>
  Activity.find({ locationId }, { limit: 5, sort: { createdAt: -1 } });

Meteor.publish('Activity.pub.list', getLocationActivity.bind(this));
