angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

  .run(function($ionicPlatform, $rootScope) {

    $ionicPlatform.ready(function() {
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });


  })

  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self'
    ]);

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('picture', {
        url: '/picture',
        templateUrl: 'templates/picture.html',
        controller: 'PictureCtrl'
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
