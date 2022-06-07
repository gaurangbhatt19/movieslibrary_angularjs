var registerPage=angular.module("app.registerPage",['ngRoute','ngMaterial',"ngMessages","app.userDetails"])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .backgroundPalette('grey')
  });

registerPage.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/register",{
        templateUrl:"./views/register_page/registerPage.html",
        controller: "registerPageCtrl"
    })
}])

registerPage.controller("registerPageCtrl",["$scope","$location","details",function($scope,$location,details){
    $scope.submitForm=function(){
        console.log($scope.register_form.confirmpassword.$error)
        var form_values=$scope.resigterdetails
        
        if(form_values.password!==form_values.confirmpassword){
            $scope.register_form.$setPristine();
            $scope.register_form.$setValidity();
            $scope.register_form.$setUntouched();
            $location.path("/register")
        }else{
            console.log("No error")
            details.setValues(form_values)
            $location.path("/premium")
        }
        
    }

    $scope.validateConfirmPassword=function(){
        console.log( $scope.register_form.confirmpassword.$error)

        if($scope.resigterdetails.password!==$scope.resigterdetails.confirmpassword){
            $scope.register_form.confirmpassword.$error.validate=true
        }else{
            $scope.register_form.confirmpassword.$error={}
        }
        console.log($scope.register_form.confirmpassword.$error)
    }
}])