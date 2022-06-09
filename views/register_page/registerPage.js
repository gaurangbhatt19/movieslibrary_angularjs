var registerPage=angular.module("app.registerPage",['ngRoute','ngMaterial',"ngMessages","app.userDetails",'app.navbar'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .backgroundPalette('grey')
  });

registerPage.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/register",{
        
        templateUrl:"./views/register_page/registerPage copy.html",
        controller: "registerPageCtrl"
    })

    // nav_value.setPath($location.path());


}])

registerPage.controller("registerPageCtrl",["$scope","$location","details",function($scope,$location,details){

    $scope.togglePassword=function(){
        $scope.showPassword=!$scope.showPassword
      }

    $scope.submitForm=function(){
        console.log($scope.register_form.confirmpassword.$error)
        var form_values=$scope.resigterdetails
            console.log("No error")
            details.setValues(form_values)
            console.info(details.getValues())
            $location.path("/premium")
        
        
    }

    $scope.validateConfirmPassword=function(){

        if($scope.resigterdetails.password!==$scope.resigterdetails.confirmpassword){
            $scope.register_form.confirmpassword.$setValidity('validation_err', false);
        }else{
            $scope.register_form.confirmpassword.$setValidity('validation_err', true);
        }
    }

    $scope.navigateLogin=function(){
        $location.path('/login')
    }


}])