var login=angular.module('app.login',['ngRoute','app.userDetails'])

login.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/login",{
        templateUrl:"./views/login/login copy.html",
        controller: 'loginCtrl'
    })
}
])

login.controller('loginCtrl',["$scope","details",'$location','$mdDialog', function($scope,details,$location,$mdDialog) {
  $scope.showPassword=false

  $scope.togglePassword=function(){
    $scope.showPassword=!$scope.showPassword
  }
$scope.submitForm=function(ev){
  let values=details.getValues()
  console.log(values)
  if(($scope.loginDetails.username===values.username && $scope.loginDetails.password===values.password) || ($scope.loginDetails.username==="gaurangbhatt" && $scope.loginDetails.password==="gaurangbhatt")){
    values.isLogin=true
    details.setValues(values)
    console.log(details.getValues())
    $location.path('/library')

  }else{
    
    values.isLogin=false
    details.setValues(values)
    console.log(details.getValues())
    $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#main_container')))
          .clickOutsideToClose(true)
          .title('Incorrect Credentials .......')
          .textContent('Please enter correct credentials')
          .ariaLabel('No Login')
          .ok('OK')
          .targetEvent(ev)
      ); 
    $location.path('/login')
  }
}

$scope.navigateRegister=function(){
    $location.path('/register')
}

}])