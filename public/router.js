Blogger.Router.map(function () {

  this.resource('posts', {path: "/"});

  this.resource('about');

  this.resource('contact', function () {
    this.resource('phone');
    this.resource('email');
  });

  this.resource('recent-comments');
  
  this.resource('post', {path:'post/:post_id'}, function () {
    this.resource('new-comment');
  });

  this.resource('new-post');
});
