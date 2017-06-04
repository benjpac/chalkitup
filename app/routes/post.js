import Ember from 'ember';

export default Ember.Route.extend({
model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    // update(post, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       post.set(key,params[key]);
    //     }
    //   });
    //   post.save();
    //   this.transitionTo('index');
    // },
    // destroyPost(post) {
    //   var review_deletions = post.get('comments').map(function(review) {
    //     return review.destroyRecord();
    //   });
    //   Ember.RSVP.all(review_deletions).then(function() {
    //     return post.destroyRecord();
    //   });
    //   this.transitionTo('index');
    // },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        post.save();
      });
    //   this.transitionTo('post', post);
    },
    // destroyComment(review) {
    //   review.destroyRecord();
    //   this.transitionTo('index');
    // }
  }    
});
