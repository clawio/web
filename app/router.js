import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('admin', function() {
    this.route('profile');
    this.route('objects-list-home', {path: '/objects/list/'});
    this.route('objects-list-nohome', {path: '/objects/list/*pathspec'})
    this.route('objects-examine', {path: '/objects/examine/*pathspec'});
    this.route('activity');
  });
  this.route('public', function() {
    this.route('contact');
  });
});

export default Router;
