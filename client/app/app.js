'use strict';

console.log("appjs before module declared");

var myApp = angular.module('blocitoffApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'firebase'
  ]);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

console.log("appjs after module delclared");

myApp.directive('hideTasks', function() {
    console.log("start of hideTasks directive");

    //do logic to determine hide state
    //If task is checked, it should be hidden
    //If task is more than 7 days old, it should be hidden

    //return a status and pass to link function

    return {
       // templateUrl: '/templates/directives/slider.html', //the path to an HTML template
       // replace: true, //replace the <slider> element with the directive's HTML rather than insert it
       // restrict: 'E', //instructs to treat as an element, <slider>; e.g. wont run on <div slider>
       // scope: {
       //    onChange: '&'
       //},  
       //link is ng function for DOM manip & logic
        link: function(scope, element, attributes) { 
          console.log("start of link function");
          // These values
        }
    }
});



