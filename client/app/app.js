'use strict';

angular.module('blocitoffApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'firebase'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

  //controller similar to firebase messages demo
  .controller("TaskCtrl", function($scope, $firebaseArray) {
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);

    //test for tasks array
    // $scope.tasks.$add({"text": "the one we just added"});
    
    // add new items to the array
    // the task is automatically added to Firebase!
    $scope.addTask = function() {
      $scope.tasks.$add({
        text: $scope.newTaskText
      });
    };
    // click on `index.html` above to see $remove() and $save() in action
  });

