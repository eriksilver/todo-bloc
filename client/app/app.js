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

  .controller("SampleCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/");
 
    //Firebase has a method called $asArray() that can be used to sync a Firebase database 
    //with an Angular model like an array of tasks. Set the $scope array holding your tasks 
    //to a Firebase object that calls $asArray().


     // create a synchronized array
    $scope.messages = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to Firebase!
    $scope.addMessage = function() {
      $scope.messages.$add({
        text: $scope.newMessageText
      });
    };
  })
});