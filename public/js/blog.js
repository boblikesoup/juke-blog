$(function(){
Parse.initialize("rq5GpDSB47u2dGuWuvh8llnGIP5Y11rCmJ7D7hCu", "txY6X0mWiYwXC1D3mCJFr3a9MF8DcLhLcy4buC35");

  var Blog = Parse.Object.extend("Blog");
  var Blogs = Parse.Collection.extend({
    model: Blog
  });

  var blogs = new Blogs()
  blogs.fetch({
    success: function(blogs) {
    var blogsView = new BlogsView({ collection: blogs });
    blogsView.render();
    $('.main-container').html(blogsView.el);
    },
    error: function(blogs, error){
      console.log(error);
    }
  });

  var BlogsView = Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
  });

});