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
        var newTask = {
            text: $scope.newTaskText,
            status: false 
        };
        //console.log(newTask);
        $scope.tasks.$add(newTask);
    };

    $scope.getAllTasks = function() {
        return $firebaseArray(taskData);
    }
    
    $scope.complete = function() {
        if ($scope.taskChecked === true) {
            $scope.tasks.$add({
                status: $scope.taskChecked 
            });
        };
    };


    console.log("home.controller.js finished");
}]);