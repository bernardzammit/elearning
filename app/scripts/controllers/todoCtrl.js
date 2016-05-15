/**
 * Created by USER on 12/05/2016.
 */
angular.module('yapp').controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {task: 'Finish mathematics homework', done: false},
    {task: 'Go swimming', done: false},
    {task: 'Visit grandma', done: false}
  ];
  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };
  $scope.removeTask = function(i) {
    $scope.todos.remove(i);
  }
  $scope.addTodo = function() {
    $scope.todos.push({task: $scope.newTaskText, done: false});
    $scope.newTaskText = "";
  };
});

// Array Remove
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

