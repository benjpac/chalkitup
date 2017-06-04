import Ember from 'ember';

export default Ember.Component.extend({
addNewComment: false,
  actions: {
    postFormShow() {
      this.set('addNewComment', true);
    },

    saveComment1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
      this.transitionTo('post')
    }
  }
});
