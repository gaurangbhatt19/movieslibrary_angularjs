var premium = angular.module("app.premium",['ngRoute'])

premium.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/premium",{
        templateUrl:"./views/premium/premium.html",
        controller:"premiumCtrl"
    })
}])

premium.controller("premiumCtrl",["$scope","$location",function($scope,$location){
    $scope.premium=function(details){
        console.log(details)
        $location.path("/library")
    }
}])