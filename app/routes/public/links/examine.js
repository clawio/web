import Ember from 'ember';

export default Ember.Route.extend({
	link: Ember.inject.service('link'),

	model(params) {
		this.set('params', params);
		let secret = this.get('link').getLinkCredentials(params.token);
		return this.get('link').info(params.token, secret);
	},

	afterModel(model) {
		if (model.oinfo.type === 'blob') {
		} else {
		// if object is blob we trigger the download, else we list contents
		}
	},

	actions: {
	  download(path) {
      let secret = this.get('link').getLinkCredentials(this.get('params').token);
      let downloadUrl = this.get('link').getDownloadUrl(this.get('params').token, secret, path);
      window.open(downloadUrl);
    },

		error() {
			this.transitionTo('public.links.info', this.get('params').token);
		}
	}
});
