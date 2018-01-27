import { Meteor } from 'meteor/meteor';
import { Locations } from '../locations';

const getLocationDetails = ({ locationId }) =>
  Locations.find({ _id: locationId });

Meteor.publish('Locations.pub.details', getLocationDetails.bind(this));
