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
      console.log("$scope.newTask:", $scope.newTask);

        //add new task to Firebase
        var newTask = $scope.newTask;
        
        //Set task timer as expiration date
        // newTask.createdAt = ;
        $scope.newTask.expiresAt = Date.now() + 3000;
        console.log("expiresAt stamp:", newTask.expiresAt);
        //console.log("true or false", 8 - 9 < 0);

        //add newTask object to Firebase array using Firebase $add method
        $scope.tasks.$add($scope.newTask);

        //call the reset function to clear entry form
        $scope.reset();

        console.log("$scope.tasks.expiresAt:", $scope.tasks.expiresAt);

    };

    // $scope.checkTaskExpired = function(task) {
    //     $scope.updateExpiredStatus();
    //     return task.status == true && task.expiresAt - Date.now() > 0 && false
    // };

    $scope.updateExpiredStatus = function() {
        console.log("running updateExpiredStatus function");
        //var isExpired = $scope.task.expiresAt - Date.now() < 0;
        // console.log("var isExpired:", isExpired );

        // if (isExpired) {
        //     $scope.task.isExpired = true;
        // }
    };

   $scope.updateExpiredStatus();

	// // Given a DataSnapshot containing a child "fred" and a child "wilma", this callback
	// // function will be called twice
	// taskData.forEach(function(childSnapshot) {
	//   // key will be "fred" the first time and "wilma" the second time
	//   var key = childSnapshot.key();
	//   console.log("key:");
	//   // childData will be the actual contents of the child
	//   var childData = childSnapshot.val();
	//   console.log("childData:");
	// });


     //console log a recall of array data
    taskData.on("child_added", function(snapshot) {
      var consoleTask = snapshot.val();
      console.log("Text: " + consoleTask.text);
      console.log("Status: " + consoleTask.status);
      console.log("priority: " + consoleTask.priority);
      console.log("createdAt: " + consoleTask.createdAt);
      console.log("expiresAt: " + consoleTask.expiresAt);
      console.log("-----------")
      console.dir(consoleTask);
    });

    //setup variables to extract data from Firebase
    var taskObjects;
    taskData.once('value', function(dataSnapshot) {
  		// store dataSnapshot for use in below examples.
  		taskObjects = dataSnapshot;
	});

	//var savedData = taskObjects.val();
	//console.dir(savedData);






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
