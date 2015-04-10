app = angular.module('blocitoffApp');

app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', function($scope, $http, $firebaseArray) {
    
    console.log("home.controller.js start");
    
    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
  
    // //database for archived tasks (tasks History)
    // var taskHistoryData = new Firebase("https://dazzling-torch-1941.firebaseio.com/taskshistory");
    // // create a synchronized array
    // $scope.taskshistory = $firebaseArray(taskHistoryData);
    

    //test for tasks array
    //$scope.tasks.$add({"text": "first task added"});
    
    // add new items to the array
    // the task is automatically added to Firebase!
    $scope.addTask = function() {
        $scope.tasks.$add({
            text: $scope.newTaskText
        });
    };

    // $scope.getAllTasks = function() {
    //     return $firebaseArray(taskData);
    // }


    //if task is checked off (completed), move to taskshistory array/db
    //taskhistory view will be shown when clicking Task History link
    $scope.completeTask = function() {
        if (taskComplete.value === true) {
            //$scope.taskshistory.$add({

        };
    };

    console.log("home.controller.js finished");
}]);