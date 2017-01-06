(function() {
  'use strict';
  var app = angular.module('app', ['ui.router']);

  app.config(['$urlRouterProvider', '$stateProvider', function( $urlRouterProvider, $stateProvider) {
    // $urlRouterProvider.when('/home');
    $urlRouterProvider.otherwise('/');
  
    var homeState = {
      name: 'home',
      url: '/home',
      templateUrl: './html/home.html',
      controller: 'homeCtrl'
    };
  
    var customersState = {
      name: 'customers',
      url: '/customers',
      templateUrl: './html/customers.html',
      controller: 'customersCtrl'
    }

    $stateProvider.state(homeState)
    $stateProvider.state(customersState)
  }]);
})();


