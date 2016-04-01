/**
 * Created by sean on 3/16/16.
 */
angular.module('starter.controller.picture', [])

  .controller('PictureCtrl', function($scope, $state, $rootScope, $cordovaEmailComposer, $cordovaCamera, $ionicPlatform, ionicToast) {

      $scope.hideToast = function(){
          ionicToast.hide();
      };

      $scope.logOut = function(){
          $state.go('login');
      }

      $scope.takePicture = function () {

        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = "data:image/jpeg;base64," + imageData;
            $scope.email(imageData);
        }, function(err) {
            ionicToast.show('There was an error accessing your camera, please try again later.', 'bottom', false, 2500);
        });

      }


    $scope.email = function(image){
      try{
        $cordovaEmailComposer.isAvailable().then(function() {

        }, function () {
           ionicToast.show('Email Composer Unavailable, Please try again later.', 'bottom', false, 2500);
        });

        var email = {
          to: 'baumgs86@uwosh.edu',
          cc: 'sean.baumgartner14@gmail.com',
          bcc: [],
          attachments: [
              'base64:recept.png//' + image
          ],
          subject: 'Receipt',
          body: 'Here is the receipt',
          isHtml: true
        };

        $cordovaEmailComposer.open(email).then(function(){
           ionicToast.show('Reciept Sent Successfully', 'bottom', false, 2500);
        }, function () {
          // user cancelled email
          ionicToast.show('Message Canceled', 'bottom', false, 2500);
        });
      }catch(e){
        console.log(e);
        console.log(e.stack);
        console.log(e.line);
      }

    }
  });
