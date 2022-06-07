var login=angular.module('app.login',['ngRoute','app.userDetails'])

login.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/login",{
        templateUrl:"./views/login/login.html",
        controller: 'loginCtrl'
    })
}
])

login.controller('loginCtrl',["$scope","details", function($scope,details) {
$scope.submitForm=function(){
  let values=details.getValues()
  console.log(values)
  if($scope.loginDetails.username===values.username && $scope.loginDetails.password===values.password){
      $location.path('/library')
  }else{
      $location.path('/login')
  }
}
}])