/**
 * Created by r.vadakkumthanni on 9/11/2015.
 */

var teamControllers = angular.module('teamControllers',['ngAnimate']);

teamControllers.controller('ListController', function MyController($scope,$http) {
    $http.get('js/data.json').success(function(data){
        $scope.members=data;
        $scope.teamOrder='name';
    });

});

teamControllers.controller('DetailsController',['$scope','$http','$routeParams', function MyController($scope,$http,$routeParams) {
    $http.get('js/data.json').success(function(data){
        $scope.members=data;
        $scope.whichItem=$routeParams.itemId;

        if($routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId) -1;

        }
        else
        {
            $scope.prevItem = $scope.members.length -1

        }


        if($routeParams.itemId < $scope.members.length -1){
            $scope.nextItem = Number($routeParams.itemId) +1;

        }
        else
        {
            $scope.nextItem = 0;

        }
    });

}]);
