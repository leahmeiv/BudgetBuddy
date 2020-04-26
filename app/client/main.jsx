import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import App from '../imports/ui/pages/App';

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('react-target'));
});
