var navbar=angular.module('app.navbar',['ngMaterial','ngMessages'])

navbar.controller('AppCtrl',["$scope","$location",'$rootScope',function($scope,$location,$rootScope){
     

     $rootScope.$on('$routeChangeSuccess', function () {
         let value=$location.path().substring(1,)
         $scope.currentNavItem=value
    });
}])