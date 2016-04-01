/**
 * Created by sean on 3/16/16.
 */
angular.module('starter.controller.login', [])

  .controller('LoginCtrl', function($scope, $state, $rootScope, $firebaseAuth, ionicToast) {
    $scope.user = {
      email: 'test2@test.com',
      password: 'test'
    };

    $scope.login = function(){
        
        //$state.go('picture')

        var ref = new Firebase("https://sendphoto.firebaseio.com");
        var auth = $firebaseAuth(ref);

        auth.$authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
        }).then(function(authData) {
            console.log("Logged in as:", authData);
            $state.go('picture')
        }).catch(function(error) {
            console.error("Authentication failed:", error);
            ionicToast.show('Incorrect Username and Password', 'bottom', false, 1500);
        });
    }
  
    $scope.hideToast = function(){
        ionicToast.hide();
    };
      
  });
