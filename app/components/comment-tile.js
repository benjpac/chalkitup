import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
    },
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
