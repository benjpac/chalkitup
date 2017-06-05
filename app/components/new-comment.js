import Ember from 'ember';

export default Ember.Component.extend({
addNewComment: false,
  actions: {
    postFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        role: this.get('role'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
