  //'use strict';

//app = angular.module('blocitoffApp', []); //this throws injector error
app = angular.module('blocitoffApp');

app.config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(false);
}]);

//tasks controller
app.controller('HomeCtrl', [
  '$scope',
  '$http',
  '$firebaseArray',
  '$timeout',
  '$log',
  function($scope, $http, $firebaseArray, $timeout, $log) {
        
    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");

    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);

    // define task properties
    $scope.newTaskDefaults = {
        text: null,
        status: false,
        priority: 'medium',
        expiresAt: null // This is set in $scope.addTask
    };
    $scope.newTask = angular.copy($scope.newTaskDefaults);
    //console.log("newTask completed");

    //function reset input form
    $scope.reset = function() {
      $scope.newTask = angular.copy($scope.newTaskDefaults);
    };
    
    // addTask function called when new task is entered
    $scope.addTask = function() {
      $log.debug("addTask Called - result - $scope.newTask:", $scope.newTask);
        
        //Set task expiration with current time 
        //Timer is set with (Date.now()) + milliseconds or days
        var days = 24 * 60 * 60 * 1000 //hours mins secs millisecs
        $scope.newTask.expiresAt = Date.now() + days;
        $log.debug("expiresAt stamp:", $scope.newTask.expiresAt);

        //add newTask object to Firebase array using Firebase $add method
        $scope.tasks.$add($scope.newTask);

        //call the reset function to clear newTask object, which clears entry form
        $scope.reset();
    };

    // using ng init
    // call ng-init in list items; every time items listed, call checkTaskExpired
    // checkTaskExpired uses getRecord and id and checks each list items
    //make task expire after certain time
    $scope.checkTaskExpiration = function(taskId) {
      $log.debug("START checkTaskExpiration");
      var taskRecord = $scope.tasks.$getRecord(taskId);
      var now = Date.now();

      if (taskRecord.expiresAt - now < 0) {
        taskRecord.status = true;
        $scope.tasks.$save(taskRecord);
      };
      //console.log('finished checkTaskExpiration');
    };
}]);


