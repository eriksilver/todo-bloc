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

  //controller for firebase messages demo
  .controller("SampleCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/messages");
    // create a synchronized array
    $scope.messages = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to Firebase!
    $scope.addMessage = function() {
      $scope.messages.$add({
        text: $scope.newMessageText
      });
    };
    // click on `index.html` above to see $remove() and $save() in action
  });

