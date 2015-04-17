//'use strict';

app = angular.module('blocitoffApp');

//tasks controller
app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', function($scope, $http, $firebaseArray) {
    
    console.log("home.controller.js start");
    
    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
  
    
    //function reset input form
    $scope.reset = function(addForm) {
      if (addForm) {
        addForm.$setPristine();
        addForm.$setUntouched();
      }
      $scope.newTaskText = {};
    };
    
    // I have my data setup as an object; may want to refactor?
    $scope.addTask = function() {
      console.log("$scope.newTaskText:", $scope.newTaskText);
        var newTask = {
            text: $scope.newTaskText.entry,
            status: false 
        };
        //add new task to Firebase
        $scope.tasks.$add(newTask);
        //call the reset function to clear entry form
        $scope.reset();
    };

    // $scope.complete = function() {
    //     var completeTask = {
    //       status:
    //     }
    // }



     //console log a recall of array data
    taskData.on("child_added", function(snapshot) {
      var consoleTask = snapshot.val();
      console.log("Text: " + consoleTask.text);
      console.log("Status: " + consoleTask.status);
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