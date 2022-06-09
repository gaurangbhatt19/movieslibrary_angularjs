var navbar=angular.module('app.navbar',['ngMaterial', 'ngMessages'])

navbar.factory('nav_value',['$location',function($location) {
 var currentPath=""
 console.log(currentPath);
 var navbar={};
 navbar.getPath=function(){
     return currentPath
 }

 navbar.setPath=function(path){
     currentPath=path
 }

 return navbar
}])

navbar.controller('AppCtrl',['nav_value',"$scope","$location",function(nav_value,$scope,$location){
     $scope.currentNavItem=nav_value.getPath().substring(1,)
}])