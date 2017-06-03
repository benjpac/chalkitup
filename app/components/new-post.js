import Ember from 'ember';

export default Ember.Component.extend({
addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
