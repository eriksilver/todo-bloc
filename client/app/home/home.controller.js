app = angular.module('blocitoffApp', ["firebase"]);

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http, $firebasearray) {
  var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/");
 
  //Firebase has a method called $asArray() that can be used to sync a Firebase database 
  //with an Angular model like an array of tasks. Set the $scope array holding your tasks 
  //to a Firebase object that calls $asArray().



  // create a synchronized array
  $scope.tasks = $firebaseArray(ref); //need to bind 'tasks' in HTML

  // add new items to the array
  // the task is automatically added to Firebase!
  $scope.addTask = function() {
    $scope.tasks.$add({
      text: $scope.newTaskText
    });
  };


  // download the data into a local object
  $scope.data = $firebaseObject(ref);
}]);