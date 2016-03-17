/**
 * Created by sean on 3/16/16.
 */
angular.module('starter.controller.picture', [])

  .controller('PictureCtrl', function($scope, $state, $rootScope, $cordovaEmailComposer) {
      $scope.takePicture = function () {
        try{
          navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
            destinationType: Camera.DestinationType.DATA_URL
          });

          function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
          }

          function onFail(message) {
            alert('Failed because: ' + message);
          }
        }catch(e){
          console.log(e);
          console.log(e.stack);
          console.log(e.line);
        }

      }

    $scope.email = function(){
      try{
        $cordovaEmailComposer.isAvailable().then(function() {
          alert('yes')
        }, function () {
          alert('no')
        });

        var email = {
          to: 'baumgs86@uwosh.edu',
          cc: 'sean.baumgartner14@gmail.com',
          bcc: [],
          //attachments: [
          //  'file://img/logo.png',
          //  'res://icon.png',
          //  'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
          //  'file://README.pdf'
          //],
          subject: 'Receipt',
          body: 'Here is the receipt!',
          isHtml: true
        };

        $cordovaEmailComposer.open(email).then(null, function () {
          // user cancelled email
        });
      }catch(e){
        console.log(e);
        console.log(e.stack);
        console.log(e.line);
      }

    }
  });
