'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
        resolve: {
          requireNoAuth: function($state, Auth) {
            return Auth.$requireSignIn().then(function(auth) {
              $state.go('home');
            }, function(error) {
              return;
            });
          };
        }
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
        resolve: {
          requireNoAuth: function($state, Auth) {
            return Auth.$requireSignIn().then(function(auth) {
              $state.go('home');
            }, function(error) {
              return;
            });
          };
        }
      });

    $urlRouterProvider.otherwise('/');

    var config = {
      apiKey: "AIzaSyApmx3uk579cYmMIMfSGkHqwqo3w8pd794",
      authDomain: "fire-slack-c5c15.firebaseapp.com",
      databaseURL: "https://fire-slack-c5c15.firebaseio.com",
      projectId: "fire-slack-c5c15",
      storageBucket: "fire-slack-c5c15.appspot.com",
      messagingSenderId: "395350543265"
    };
    firebase.initializeApp(config);
  })
  .constant('FirebaseUrl', 'https://slack.firebaseio.com/');
