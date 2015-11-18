var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', function ($scope) {
  $scope.user = {};
  $scope.user.details = {
    username: "Todd Motto",
    id: Math.floor(Math.random() * 1000000)
  };
  $scope.greeting = "Hello How are You?"
}]);

myApp.directive('customButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    template: '<a href="" class="myawesomebutton" ng-transclude>' +
                '<i class="icon-ok-sign"></i>' +
              '</a>',
    link: function (scope, element, attrs) {
    }
  };
});

myApp.directive('customButtwo', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    templateUrl: 'js/templates/customButton.html',
    link: function (scope, element, attrs) {
    }
  };
});

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        var out = '';
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});
