app = angular.module('blocitoffApp');

app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', '$firebaseObject', function($scope, $http, $firebaseArray, $firebaseObject) {
    
    console.log("home.controller.js start");
    
    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
  
    // create firebase object with taskDatat to use with 3 way data binding
    var taskSync = $firebaseObject(taskData)

    taskSync.$bindTo($scope, "tasks");
    
    //test for tasks array
    //$scope.tasks.$add({"text": "first task added"});
    
    // add new items to the array
    // the task is automatically added to Firebase!
    taskSync.addTask = function() {
        var newTask = {
            text: newTaskText,
            status: false 
        };
        //console.log(newTask);
        taskSync.tasks.$add(newTask);
    };

    // $scope.getAllTasks = function() {
    //     return $firebaseArray(taskData);
    // }
    
    // complete = function() {
    //     if ($scope.taskChecked === true) {
    //         $scope.tasks.$add({
    //             status: $scope.taskChecked 
    //         });
    //     };
    // };


    console.log("home.controller.js finished");
}]);