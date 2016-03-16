/**
 * Created by sean on 3/16/16.
 */
angular.module('starter.controllers', [
    'starter.controller.login',
    'starter.controller.picture'
  ])

  .controller('RootCtrl', function($scope, $ionicModal, $ionicPopup, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


    $state.go('login');
  });
