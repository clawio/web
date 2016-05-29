import Ember from 'ember';
import ENV from 'webui/config/environment';

const internalError = "An unexpeted problem ocurred. Please contact the admin of the service."

export default Ember.Service.extend({
	session: Ember.inject.service('session'),
	
	examine(pathspec) {
		if (!pathspec) {
			pathspec = "";
		}
		// clean path. Remove first and last slashes.
		pathspec = pathspec.replace(/^\/|\/$/g, '');

		let self = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			  self.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
			  const headers = {};
			  headers[headerName] = headerValue;
				Ember.$.ajax({
				    headers: headers,
				    url: ENV.apis.metaDataBaseUrl+"examine/"+pathspec,
				    type: "GET",
				    dataType: "json"
				}).done(function(response) {
					resolve(response);
				}).fail((error) => {
					reject(error);	
				});
			});
               });
	},

	list(pathspec) {
		if (!pathspec) {
			pathspec = "";
		}
		// clean path. Remove first and last slashes.
		pathspec = pathspec.replace(/^\/|\/$/g, '');

		let self = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			  self.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
			  const headers = {};
			  headers[headerName] = headerValue;
				Ember.$.ajax({
				    headers: headers,
				    url: ENV.apis.metaDataBaseUrl+"list/"+pathspec,
				    type: "GET",
				    dataType: "json"
				}).done(function(response) {
					resolve(response);
				}).fail((error) => {
					reject(error);	
				});
			});
               });
	},

	delete(pathspec) {
		let self = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			Ember.run.later(() => {
			  self.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
			  const headers = {};
			  headers[headerName] = headerValue;
				Ember.$.ajax({
				    headers: headers,
				    url: ENV.apis.metaDataBaseUrl+"delete/"+pathspec,
				    type: "DELETE",
				}).done(function() {
					resolve();
				}).fail((error) => {
					reject(error);	
				});
			});
			}, 3000);
	       });
	}
});
