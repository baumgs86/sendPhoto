angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'firebase', 'ngCordova', 'ion-floating-menu', 'ionic-toast'])
  .run(function($ionicPlatform, $rootScope) {

    $ionicPlatform.ready(function() {
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $ionicPlatform.ready(function() {
      try{
        console.log(navigator.camera);
      }catch(e){
        console.log(e);
        console.log(e.stack);
        console.log(e.line);
      }

    })


  })

  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      
      'https://sendphoto.firebaseio.com**'
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
