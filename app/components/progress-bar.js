import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		this.addObserver('value',this,'increment');
		this.updateUI();
	},
	increment() {
		this.$('.progress').progress('increment');
       	},
	updateUI() {
		this.$('.progress').progress({
			label: 'ratio',
			text: {
				ratio: '',
				active: 'Uploading {value} out of {total} objects ({percent}%)',
				success: '{total} objects uploaded',
			},
			total: this.get('total'),
			value: this.get('value'),
		});
	}
});
