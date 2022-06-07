var library = angular.module("app.library",['ngRoute'])

premium.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/library",{
        templateUrl:"./views/library/library.html",
        controller:"libraryCtrl"
    })
}])

library.controller("libraryCtrl",["$scope",function($scope){
    
   
}])