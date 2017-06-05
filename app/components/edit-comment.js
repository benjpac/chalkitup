import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCommentFormShow() {
      this.set('editComment', true)
    },
    updateComment(answerForQuestion) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        role: this.get('role'),
        post: this.get('post')
      };
      this.set('editComment', false);
      this.sendAction('updateComment', post, params);
    },
    // deleteComment(comment) {
    //   if (confirm('Are you sure you want to delete this answer?')) {
    //     this.sendAction('deleteComment', comment);
    //   }
    // }
  }
});
