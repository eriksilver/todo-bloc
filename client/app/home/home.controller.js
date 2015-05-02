//'use strict';

app = angular.module('blocitoffApp');

//tasks controller
app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', '$timeout', function($scope, $http, $firebaseArray, $timeout) {
    
    console.log("home.controller.js start");
    
    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
    // define task properties
    $scope.newTask = {
        text: null,
        status: false,
        priority: 'medium',
        createdAt: null,
        expiresAt: null // This is set in $scope.addTask
    };

    //function reset input form
    $scope.reset = function() {
      // if (addForm) {
      //   addForm.$setPristine();
      //   addForm.$setUntouched();
      // }
      $scope.newTask = {};
    };
    
    // addTask function called when new task is entered
    $scope.addTask = function() {
      console.log("$scope.newTask.text", $scope.newTask);

        //add new task to Firebase
        var newTask = $scope.newTask;
        
        //Set task timer as expiration date
        // newTask.createdAt = ;
        newTask.expiresAt = Date.now() + 3000;
        console.log("date now stamp", newTask.expiresAt);
        //console.log("true or fales", 8 - 9 < 0);

        $scope.tasks.$add($scope.newTask);

        //call the reset function to clear entry form
        $scope.reset();

    };

    // $scope.checkTaskExpired = function(task) {
    //     $scope.updateExpiredStatus();
    //     return task.status == true && task.expiresAt - Date.now() > 0 && false
    // };

    $scope.updateExpiredStatus = function(task) {
        var isExpired = task.expiresAt - Date.now() < 0;
        console.log("var isExpired", isExpired );

        if (isExpired) {
            $scope.task.isExpired = true;
        }
    };

     //console log a recall of array data
    taskData.on("child_added", function(snapshot) {
      var consoleTask = snapshot.val();
      console.log("Text: " + consoleTask.text);
      console.log("Status: " + consoleTask.status);
      console.log("priority: " + consoleTask.priority);
    });




    // When inputting form, need to clear form when submitted
    // e.g. if form is named "addForm", you can use the setPristine() method on $scope.addForm
    // Also need to clear model inputs with something like: $scope.currentRecord={};

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
