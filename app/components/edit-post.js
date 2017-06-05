import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    editPostFormShow() {
      this.set('editPost', true)
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        role: this.get('role'),
      };
      this.set('editPost', false);
      this.sendAction('updatePost', params);
    },
    // deletePost(post) {
    //   if (confirm('Are you sure you want to delete this post?')) {
    //     this.sendAction('deletePost', post);
    //   }
    // }
  }
});
