'use strict';

var myApp = angular.module('blocitoffApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
    ]);

// myApp.config(['$stateProvider','$locationProvider', function ($stateProvider, $locationProvider) {
//       $locationProvider.html5Mode(true); //configure plain routes, not Hashbang mode

//       $stateProvider.state('home', {     //state name is 'home'
//          url: '/',
//          controller: 'Home.controller',  //injects controller directly into view
//          templateUrl: '/home/home.html'
//       });
// }]);

// myApp.controller('Home.controller', ['$scope', function($scope) { 

// }]);



