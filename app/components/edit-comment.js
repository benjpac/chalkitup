import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCommentFormShow() {
      this.set('editComment', true)
    },
    updateComment(comment) {
      debugger;
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        role: this.get('role'),
      };
      this.set('editComment', false);
      this.sendAction('updateComment', comment, params);
    },
    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('deleteComment', comment);
      }
    }
  }
});
