var app=angular.module("app",["ngRoute","app.registerPage","app.premium","app.login","app.library"])

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("!")
    $routeProvider.otherwise({redirectTo:"/register"})
}])

