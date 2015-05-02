//'use strict';

app = angular.module('blocitoffApp');

//tasks controller
app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', '$timeout', function($scope, $http, $firebaseArray, $timeout) {
    
    console.log("home.controller.js start");
    



    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
    $scope.newTask = {
        text: null,
        status: false,
        priority: 'medium',
        createdAt: null,
        expiresAt: null // This is set in $scope.addTask
    };

    // $scope.historyTasks = $firebaseArray(taskData).where(checked: true);
  

    //EXAMPLE using the timeout service
    //Notice the function passed to the $timeout service. This function calls the callAtTimeout() function on the $scope object.
    $scope.callAtTimeout = function() {
        console.log("$scope.callAtTimeout - Timeout occurred");
    }

    $timeout( function(){ $scope.callAtTimeout(); }, 3000);
    /////
    
    ///Using $timeout for tasks
    $scope.expireTaskAtTimeout = function() {
        // $scope.newTask.status = true;
        // $scope.task.status = true;
        //$scope.newTask['status'] = true;
        ////How do I update task status to be true?

        console.log("runnning inside expireTaskAtTimeout function");
    };


    //function reset input form
    $scope.reset = function() {
      // if (addForm) {
      //   addForm.$setPristine();
      //   addForm.$setUntouched();
      // }
      $scope.newTask = {};
    };

    // $scope.checkTaskStatus = function(task) {
    //     $scope.updateExipirtationStatus();
    //     return task.status == true && task.expiresAt - now() > 0 && false
    // };

    // $scope.updateExipirtationStatus = function() {
    //     var isExipred = task.expiresAt - now() > 0;

    //     if (isExipred) {
    //         task.isExpired = true;
    //     } else {
    //         // nothing to do here
    //     }

    // };
    
    // I have my data setup as an object; may want to refactor?
    $scope.addTask = function() {
      console.log("$scope.newTask.text", $scope.newTask);

        //add new task to Firebase
        var newTask = $scope.newTask;
        // newTask.createdAt = ;
        // newTask.expiresAt = ;
        $scope.tasks.$add($scope.newTask);

        // $timeout(function() {$scope.newTask.status = true;}, 3000);
        $timeout(function(){ $scope.expireTaskAtTimeout(); }, 3000);


        //call the reset function to clear entry form
        $scope.reset();

        //call timer function
        // $scope.expireTaskAtTimeout();
        // $timeout(console.log("running timer"), 3000);
        // $timeout( function(){ $scope.expireTaskAtTimeout(); }, 3000);
        // $scope.task.status = true;




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
