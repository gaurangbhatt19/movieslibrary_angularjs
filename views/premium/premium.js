var premium = angular.module("app.premium",['ngRoute','app.userDetails'])

premium.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/premium",{
        templateUrl:"./views/premium/premium.html",
        controller:"premiumCtrl"
    })
}])

premium.controller("premiumCtrl",["$scope","$location",'details',function($scope,$location,details){
    $scope.premium=function(premium_details){
        console.log(premium_details)
        let values=details.getValues()
        premium_details.cb1===true?values.isPremium=true:values.isPremium=false
        details.setValues(values)
        console.log(details.getValues())
        $location.path("/login")
    }
}])