var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', function ($scope) {
  $scope.user = {};
  $scope.user.details = {
    username: "Todd Motto",
    id: Math.floor(Math.random() * 1000000)
  };
}]);
