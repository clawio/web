import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('objects-breadcrumbs', 'Integration | Component | objects breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{objects-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#objects-breadcrumbs}}
      template block text
    {{/objects-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
