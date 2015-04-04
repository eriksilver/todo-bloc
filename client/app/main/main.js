'use strict';

angular.module('blocitoffApp').config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl'
    });
  });