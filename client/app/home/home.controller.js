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
        expiresAt: null // This is set in $scope.addTask
    };

    //function reset input form
    $scope.reset = function() {
      $scope.newTask = {};
    };
    
    // addTask function called when new task is entered
    $scope.addTask = function() {
      console.log("$scope.newTask:", $scope.newTask);

        //add new task to Firebase
        var newTask = $scope.newTask;
        
        //Set task expiration with current time 
        //Timer is set with (Date.now()) + milliseconds or days
        var days = 24 * 60 * 60 * 1000 //hours mins secs millisecs
        $scope.newTask.expiresAt = Date.now() + days;
        console.log("expiresAt stamp:", newTask.expiresAt);

        //add newTask object to Firebase array using Firebase $add method
        $scope.tasks.$add($scope.newTask);

        //call the reset function to clear newTask object, which clears entry form
        $scope.reset();
    };


     //console log a recall of array data
    taskData.on("child_added", function(snapshot) {
      var consoleTask = snapshot.val();
      // console.log("Text: " + consoleTask.text);
      // console.log("Status: " + consoleTask.status);
      // console.log("priority: " + consoleTask.priority);
      // console.log("createdAt: " + consoleTask.createdAt);
      // console.log("expiresAt: " + consoleTask.expiresAt);
      // console.log("-----------")
      console.dir(consoleTask);
    });

    // using ng init
    // call ng-init in list items; every time items listed, call checkTaskExpired
    // checkTaskExpired uses getRecord and id and checks each list items
      //make task expire after certain time
    $scope.checkTaskExpiration = function(taskId) {
      console.log("START checkTaskExpiration");
      var taskRecord = $scope.tasks.$getRecord(taskId);
      var now = Date.now();

      if (taskRecord.expiresAt - now < 0) {
        taskRecord.status = true;
        $scope.tasks.$save(taskRecord);
      };
      console.log('finished checkTaskExpiration');

      // var task = tasks.$getRecord(taskId);
      // var today = new Date();
      // var now = today.getTime();
      // var days = 24 * 60 * 60 * 1000 //hours mins secs millisecs

      // if(task.state == "active" && (now - task.dateAdded) >= (7 * days)) {
      //   task.state = "expired";
      //   tasks.$save(task);
    };


    console.log("home.controller.js finished");
}]);



    // $scope.checkTaskExpired = function(task) {
    //     $scope.updateExpiredStatus();
    //     return task.status == true && task.expiresAt - Date.now() > 0 && false
    // };

   //  $scope.updateExpiredStatus = function() {
   //      console.log("running updateExpiredStatus function");
   //      //var isExpired = $scope.task.expiresAt - Date.now() < 0;
   //      // console.log("var isExpired:", isExpired );

   //      // if (isExpired) {
   //      //     $scope.task.isExpired = true;
   //      // }
   //  };

   // $scope.updateExpiredStatus();

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
