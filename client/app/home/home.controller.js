app = angular.module('blocitoffApp');

app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', function($scope, $http, $firebaseArray) {
    
    console.log("home.controller.js start");
    
    //controller similar to firebase messages demo
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
  
    //test for tasks array
    //$scope.tasks.$add({"text": "first task added"});
    
    // add new items to the array
    // the task is automatically added to Firebase!
    $scope.addTask = function() {
      $scope.tasks.$add({
        text: $scope.newTaskText
      });
    };
    console.log("home.controller.js finished");
}]);