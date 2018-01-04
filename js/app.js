/**
 * Created by r.vadakkumthanni on 9/11/2015.
 */
var myApp = angular.module('myApp', [
'ngRoute',
'teamControllers'
]);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider)
{
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
        when('/details/:itemId',{
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo:'/list'
    });
    $locationProvider.html5Mode(true);
}]);