Todos = new Mongo.Collection('todos');

if(Meteor.isClient){
    // client code goes here

    // Helpers
    Template.todos.helpers({
      'todo': function() {
        return Todos.find();
      },
      'otherHelperFunction': function(){
        return "Some other function"
      }
    });
}

if(Meteor.isServer){
    // server code goes here
}
