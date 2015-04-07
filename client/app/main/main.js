'use strict';

angular.module('blocitoffApp').config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
console.log("mainjs finished");

// Note on stateprovider:
// $stateProvider configures state definitions using ui-router. We declare a state by calling the aptly named 
// .state() method on the provider. The method takes two arguments: the first is the name of the state 
// (a string), and the second is an object that defines specific properties of the state. Because the
//  landing state is our root URL, the path will simply be /. The controller property injects the controller
//   directly into the view; we no longer need to attach ng-controller to the container HTML element. 
//   templateUrl defines the path where we can find the template with the landing page HTML. 
//   The template will be injected within the element with the ui-view attribute.